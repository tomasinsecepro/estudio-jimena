const { Client } = require('C:/Users/Marketing/Desktop/aplicacion averias insece/scratch/node_modules/ssh2');

function runAsRoot(cmd) {
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

        // 1. Switch to root via su -
        stream.write('su -\n');
        setTimeout(() => {
          stream.write('1ns3c32ooE\n');
          setTimeout(() => {
            stream.write(cmd + '\n');
            setTimeout(() => {
              stream.write('exit\nexit\n');
            }, 4000);
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
  console.log('--- EXECUTING ON HOST ---');
  const res = await runAsRoot('virsh list --all; ip a; nc -zv 192.168.1.105 3002 4000 3050; curl -I http://192.168.1.105:3002');
  console.log(res);
}

main().catch(console.error);
