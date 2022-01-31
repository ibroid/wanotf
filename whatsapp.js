const { Client } = require('whatsapp-web.js');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

const SESSION_FILE = './session.json'
let SESSION_CONFIG = null;
if (fs.existsSync(SESSION_FILE)) {
  SESSION_CONFIG = require(SESSION_FILE)
}
const option = {
  restartOnAuthFail: true,
  puppeteer: {
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-accelerated-2d-canvas',
      '--no-first-run',
      '--no-zygote',
      // '--single-process', // <- this one doesn't works in Windows
      '--disable-gpu'
    ],
  },
  
}
const client = (SESSION_CONFIG != null) ? new Client({session: SESSION_CONFIG, ...option}) : new Client(option)

client.on('authenticated', (session) => {
  SESSION_CONFIG = session;
  fs.writeFile(SESSION_FILE, JSON.stringify(session), function (err) {
      if (err) {
        console.error(err);
      }
  });
});

client.on('qr', qr => {
  qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
  console.log('Whatsapp is ready!');
});

module.exports = client