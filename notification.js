import cron from "node-cron";
import NotifikasiAkta from "./tasks/NotifikasiAkta.js";
import NotifikasiSidang from "./tasks/NotifikasiSidang.js";
import moment from "moment";

const dev = process.argv.includes('--dev')
const noTaskRequest = process.argv.includes('--no-tasks')

const now = moment().locale('id').format('YYYY-MM-DD HH:mm:ss');
const cronTime = dev ? '*/10 * * * *' : '0 20 * * *';

export default cron.schedule(cronTime, async () => {
    if (noTaskRequest) {
        return;
    }
    console.log("Job notification started at : " + now)
    await NotifikasiAkta()
    await NotifikasiSidang();
}, {
    timezone: 'Asia/Jakarta',
    scheduled: false
});
