var constants_1 = require('../actions/constants');
var _ = require('lodash');
function reduce(state, action) {
    if (state === void 0) { state = {}; }
    switch (action.type) {
        case constants_1.constants.BLUE_BUTTON_CLICK:
            return addBlueClick(state);
        case constants_1.constants.RED_BUTTON_CLICK:
            return addRedClick(state);
        case constants_1.constants.CLEAR_CLICK:
            return clearClicks(state);
        default:
            return state;
    }
}
exports.reduce = reduce;
function addBlueClick(state) {
    var n = state.blueClicks;
    if (!n)
        n = 0;
    return _.assign(state, { blueClicks: n + 1 });
}
function addRedClick(state) {
    var n = state.redClicks;
    if (!n)
        n = 0;
    return _.assign(state, { redClicks: n + 1 });
}
function clearClicks(state) {
    return _.assign(state, {
        blueClicks: 0,
        redClicks: 0,
    });
}
