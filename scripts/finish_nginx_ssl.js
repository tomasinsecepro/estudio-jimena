const { execSync } = require('child_process');

const PLINK = '"C:\\Program Files\\PuTTY\\plink.exe"';

function runOnHypervisor(cmdString) {
  const b64 = Buffer.from(cmdString).toString('base64');
  const cmd = `${PLINK} -batch -P 9022 -pw 1ns3c32ooE inseceadmin@vpninsece.ddns.net "echo '${b64}' | base64 -d | bash"`;
  return execSync(cmd, { encoding: 'utf8', maxBuffer: 15 * 1024 * 1024 });
}

async function configureNginxAndSSL() {
  console.log('=== Configurando Nginx y Certbot en el Hypervisor ===');

  const script = `
su - << 'EOSU'
1ns3c32ooE

cat << "EOF" > /etc/nginx/sites-available/estudio.insece.app
server {
    server_name estudio.insece.app;

    location / {
        proxy_pass http://192.168.1.105:3085;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    listen 80;
}
EOF

ln -sf /etc/nginx/sites-available/estudio.insece.app /etc/nginx/sites-enabled/estudio.insece.app
nginx -t
systemctl reload nginx
echo "NGINX_RELOADED_OK"

echo "SOLICITANDO CERTIFICADO SSL..."
certbot --nginx -d estudio.insece.app --non-interactive --agree-tos --redirect

nginx -t
systemctl reload nginx
echo "SSL_CONFIGURED_OK"

EOSU
`;

  const output = runOnHypervisor(script);
  console.log(output);

  console.log('=== Comprobando peticion HTTPS publica ===');
  const verifyScript = `
    curl -I -s https://estudio.insece.app | head -n 10
  `;
  const verifyOut = runOnHypervisor(verifyScript);
  console.log(verifyOut);
}

configureNginxAndSSL().catch(console.error);
