const moment = require.requireActual('moment');
export default (timestemp = 0) => {
    return moment(timestemp);
}