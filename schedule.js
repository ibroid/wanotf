const cron = require("node-cron");
const tasks = require("./tasks");

const jobs = cron.schedule('16 23 * * *', () => {
    tasks.forEach(job => job.start());
}, {
    timezone: 'Asia/Jakarta'
});

module.exports = jobs
