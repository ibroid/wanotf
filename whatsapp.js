const { Client, NoAuth } = require('whatsapp-web.js');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

const SESSION_FILE = './session.json'
let SESSION_CONFIG = null;
if (fs.existsSync(SESSION_FILE)) {
  SESSION_CONFIG = require(SESSION_FILE)
}
const option = {
  authStrategy: new NoAuth(),
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

const client = new Client(option);

client.on('authenticated', () => {
  console.log("Whatsapp is authenticated")
});

client.on('qr', qr => {
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Whatsapp is ready!');
});

module.exports = client