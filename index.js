const whatsapp = require("./whatsapp");
const reply = require("./reply");
// const cron = require("./schedule.js");

function start() {
  return new Promise((resolve, reject) => {
    if (whatsapp.initialize()) {
      resolve("WANOTIF STARTED");
    } else {
      reject("WANOTIF FAILED");
    }
  });
}

whatsapp.on("message", (msg) => {
  reply.init(msg);
});

start().then((log) => {
  console.log(log);
  // cron.start()
});
