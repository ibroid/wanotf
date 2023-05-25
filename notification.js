import cron from "node-cron";
import NotifikasiAkta from "./tasks/NotifikasiAkta.js";

const dev = process.argv.includes('--dev')

const cronTime = dev ? '3 * * * *' : '0 18 * * *';

const jobs = cron.schedule(cronTime, async () => {
    await NotifikasiAkta()
}, {
    timezone: 'Asia/Jakarta'
});