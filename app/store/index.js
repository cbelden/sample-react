var index_1 = require('../actions/index');
var index_2 = require('../reducers/index');
var DEFAULT_STATE = {
    redClicks: 0,
    blueClicks: 0
};
exports.stores = index_1.actions.scan(index_2.reduce, DEFAULT_STATE);
