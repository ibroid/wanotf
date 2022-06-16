const cron = require("node-cron");
const tasks = require("./tasks");

const jobs = cron.schedule('40 17 * * *', () => {
    tasks.forEach(job => job.start());
}, {
    timezone: 'Asia/Jakarta'
});

module.exports = jobs
