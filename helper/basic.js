module.exports = {
  numberFormatter: (number) => {
    if (process.env.MODE == "dev") number = "089636811489";

    let formatted = number.replace(/\D/g, "");
    if (formatted.startsWith("0")) {
      formatted = "62" + formatted.substr(1);
    }
    if (!formatted.endsWith("@c.us")) {
      formatted += "@c.us";
    }
    return formatted;
  },
  reverseNumberFormatter: (number) => {

    let formatted = number.replace(/\D/g, "");
    if (formatted.startsWith("62")) {
      formatted = "0" + formatted.substr(2);
    }
    if (formatted.endsWith("@c.us")) {
      formatted.replace("@c.us", "");
    }
    if (process.env.MODE == "dev") return "089636811489";
    return formatted;
  },
  timeNow: () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  },
  cleanString: (string) => {
    return String(string).replace(' ', '').toLowerCase()
  }
};
