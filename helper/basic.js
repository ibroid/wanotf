module.exports = {
  numberFormatter: (number) => {
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
    return formatted;
  },
  timeNow: () => {
    const today = new Date();
    return `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  },
};
