
const { Client, NoAuth, LocalAuth } = require('whatsapp-web.js');
const fs = require('fs');
const qrcode = require('qrcode-terminal');

const SESSION_FILE = './session.json'
let SESSION_CONFIG = null;
if (fs.existsSync(SESSION_FILE)) {
  SESSION_CONFIG = require(SESSION_FILE)
}
const option = {
  authStrategy: new LocalAuth({ dataPath: './auth' }),
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

function initialization() {
  client.initialize();

  client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
  });

  client.on('authenticated', () => {
    console.log('Whatsapp is authenticated');
  });

  return new Promise((resolve, reject) => {
    client.on('ready', () => {
      console.log('Whatsapp is ready!');
      resolve()
    });
  });
}

module.exports = { client, initialization }