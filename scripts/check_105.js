const { Client } = require('C:/Users/Marketing/Desktop/aplicacion averias insece/scratch/node_modules/ssh2');

function runViaHostTo105(cmd) {
  return new Promise((resolve, reject) => {
    const conn = new Client();
    conn.on('ready', () => {
      conn.shell((err, stream) => {
        if (err) return reject(err);
        let output = '';
        stream.on('data', d => {
          output += d.toString();
        });
        stream.on('close', () => {
          conn.end();
          resolve(output);
        });

        // Connect from host to 192.168.1.105
        stream.write('ssh -o StrictHostKeyChecking=no inseceadmin@192.168.1.105\n');
        setTimeout(() => {
          stream.write('1ns3c32ooE\n');
          setTimeout(() => {
            stream.write(cmd + '\n');
            setTimeout(() => {
              stream.write('exit\nexit\n');
            }, 3000);
          }, 1000);
        }, 1000);
      });
    }).on('error', reject).connect({
      host: 'vpninsece.ddns.net',
      port: 9022,
      username: 'inseceadmin',
      password: '1ns3c32ooE',
      readyTimeout: 10000
    });
  });
}

async function main() {
  console.log('--- CHECKING 192.168.1.105 ---');
  const res = await runViaHostTo105('pm2 list; which docker; docker ps -a; ls -la /var/www');
  console.log(res);
}

main().catch(console.error);
