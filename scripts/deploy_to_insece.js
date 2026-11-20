const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PLINK = '"C:\\Program Files\\PuTTY\\plink.exe"';
const PSCP = '"C:\\Program Files\\PuTTY\\pscp.exe"';

function runOnHypervisor(cmdString) {
  const b64 = Buffer.from(cmdString).toString('base64');
  const cmd = `${PLINK} -batch -P 9022 -pw 1ns3c32ooE inseceadmin@vpninsece.ddns.net "echo '${b64}' | base64 -d | bash"`;
  return execSync(cmd, { encoding: 'utf8', maxBuffer: 15 * 1024 * 1024 });
}

function runOnVM(cmdString, asRoot = true) {
  let innerScript = cmdString;
  if (asRoot) {
    const rootB64 = Buffer.from(cmdString).toString('base64');
    innerScript = `echo 1ns3c32ooE | su - root -c "echo '${rootB64}' | base64 -d | bash"`;
  }
  const b64 = Buffer.from(innerScript).toString('base64');
  const cmd = `${PLINK} -batch -P 9022 -pw 1ns3c32ooE inseceadmin@vpninsece.ddns.net "sshpass -p 1ns3c32ooE ssh -o StrictHostKeyChecking=no inseceadmin@192.168.1.105 'echo ${b64} | base64 -d | bash'"`;
  return execSync(cmd, { encoding: 'utf8', maxBuffer: 15 * 1024 * 1024 });
}

async function deploy() {
  const projectDir = path.resolve(__dirname, '..');
  const scratchDir = path.resolve(__dirname, '../scratch');
  if (!fs.existsSync(scratchDir)) fs.mkdirSync(scratchDir, { recursive: true });

  const tarPath = path.resolve(scratchDir, 'estudio_deploy.tar.gz');

  console.log('=== Paso 1: Empaquetando aplicación de estudio ===');
  // Files to package
  const filesToPackage = [
    'index.html',
    'style.css',
    'app.js',
    'curriculum.js',
    'server.js',
    'package.json',
    'package-lock.json',
    'Dockerfile',
    'docker-compose.yml',
    'libs',
    'models'
  ];

  execSync(`tar -czf "${tarPath}" ${filesToPackage.join(' ')}`, { cwd: projectDir, stdio: 'inherit' });
  const tarSizeMB = (fs.statSync(tarPath).size / 1024 / 1024).toFixed(2);
  console.log(`✓ Archivo creado: ${tarPath} (${tarSizeMB} MB)`);

  console.log('=== Paso 2: Subiendo paquete al servidor de Insece ===');
  execSync(`${PSCP} -batch -P 9022 -pw 1ns3c32ooE "${tarPath}" inseceadmin@vpninsece.ddns.net:/tmp/estudio_deploy.tar.gz`, { stdio: 'inherit' });
  console.log('✓ Paquete subido al hipervisor');

  console.log('=== Paso 3: Transfiriendo a la VM (192.168.1.105) ===');
  runOnHypervisor(`
    sshpass -p 1ns3c32ooE scp -o StrictHostKeyChecking=no /tmp/estudio_deploy.tar.gz inseceadmin@192.168.1.105:/tmp/estudio_deploy.tar.gz
  `);
  console.log('✓ Paquete transferido a la VM');

  console.log('=== Paso 4: Desplegando en la VM (/var/www/estudio-jimena) ===');
  const vmDeployScript = `
    set -e
    mkdir -p /var/www/estudio-jimena
    cd /var/www/estudio-jimena

    echo ">>> Desempaquetando archivos..."
    tar -xzf /tmp/estudio_deploy.tar.gz -C /var/www/estudio-jimena

    echo ">>> Instalando dependencias..."
    npm install --omit=dev

    echo ">>> Iniciando servicio PM2 en puerto 3085..."
    pm2 delete estudio-jimena 2>/dev/null || true
    PORT=3085 pm2 start server.js --name "estudio-jimena"
    pm2 save

    echo ">>> Verificando PM2..."
    sleep 3
    pm2 status estudio-jimena

    echo ">>> Probando petición HTTP local en puerto 3085..."
    curl -I -s http://127.0.0.1:3085 | head -n 6
  `;
  const vmOutput = runOnVM(vmDeployScript, true);
  console.log(vmOutput);

  console.log('=== Paso 5: Verificando Nginx en el hipervisor ===');
  const hypNginxScript = `
su - << 'EOSU'
1ns3c32ooE
nginx -t && systemctl reload nginx
echo "NGINX_RELOADED_OK"
EOSU
  `;
  const hypOutput = runOnHypervisor(hypNginxScript);
  console.log(hypOutput);

  console.log('=== Paso 6: Verificación de acceso público ===');
  const checkScript = `
    curl -I -s https://estudio.insece.app | head -n 6
  `;
  const checkOutput = runOnHypervisor(checkScript);
  console.log(checkOutput);

  console.log('\n🎉 ¡DESPLIEGUE FINALIZADO CON ÉXITO ABSOLUTO!');
  console.log('👉 Disponible en: https://estudio.insece.app');
}

deploy().catch(err => {
  console.error('Error durante el despliegue:', err);
  process.exit(1);
});
