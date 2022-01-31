const client = require("../whatsapp.js");
const { readFileSync } = require("fs");
const { resolve } = require("path");
const moment = require("moment");
const { numberFormatter } = require("../helper/basic");
module.exports = {
  start: async () => {
    const logFile = readFileSync(
      resolve(`./logs/balasan_logs_${moment().format("D_M_yyyy")}.json`)
    );

    logs = JSON.parse(logFile.toString());

    await client
      .sendMessage(
        "6289636811489@c.us",
        "Sebanyak " + logs.length + " pesan berhasil di balas"
      )
      .then((res) => res)
      .catch((err) => console.log(err));
    await client
      .sendMessage(
        "6282233292597@c.us",
        "Sebanyak " + logs.length + " pesan berhasil di balas"
      )
      .then((res) => res)
      .catch((err) => console.log(err));
    await client
      .sendMessage(
        "6281717181177@c.us",
        "Sebanyak " + logs.length + " pesan berhasil di balas"
      )
      .then((res) => res)
      .catch((err) => console.log(err));
  },
};
