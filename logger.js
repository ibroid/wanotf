const fileSystem = require("fs");
const moment = require("moment");
class Logger {
  path = "./logs/";
  fileName = `_logs_${moment().format("D_M_yyyy")}.json`;
  container = "[]";
  stack = "";

  constructor(pengirim, isiPesan, jenisLog) {
    this.jenisLog = jenisLog;
    this.pengirim = pengirim;
    this.isiPesan = isiPesan;
    this.container;
  }

  check = () => {
    try {
      this.container = fileSystem
        .readFileSync(this.path + this.jenisLog + this.fileName)
        .toString();
    } catch (error) {
      this.container = "[]";
    }
  };

  write = () => {
    fileSystem.writeFile(
      this.path + this.jenisLog + this.fileName,
      this.container,
      (err) => {
        if (err) {
          console.log("haduh :" + err);
        }
      }
    );
  };

  stacking = () => {
    this.stack = {
      pengirim: this.pengirim,
      isiPesan: this.isiPesan,
      waktu: moment().locale("id").format("LLLL"),
    };
  };

  push = () => {
    const container = JSON.parse(this.container);
    container.push(this.stack);
    this.container = JSON.stringify(container);
  };

  start = () => {
    this.check();
    this.stacking();
    this.push();
    this.write();
  };
}

module.exports = Logger;
