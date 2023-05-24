import moment from "moment"

moment.locale('id');
const toFullDate = (date) => {
    return moment(date).local('id').format('dddd LL');
}
const toFullDateWithTime = (date) => {
    return moment(date + ' 09:00:00').local('id').format('dddd LL');
}

export { toFullDate, toFullDateWithTime }
