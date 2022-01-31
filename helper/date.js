const moment = require('moment')
moment.locale('id');
module.exports = {
    toFullDate: (date) => {
        return moment(date).local('id').format('dddd LL');
    },
    toFullDateWithTime: (date) => {
        return moment(date + ' 09:00:00').local('id').format('dddd LL');
    }
}