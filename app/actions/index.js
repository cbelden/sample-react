var constants_1 = require('../actions/constants');
var Rx = require('rx');
exports.actions = new Rx.Subject();
function redButtonClick() {
    var action = { type: constants_1.constants.RED_BUTTON_CLICK };
    exports.actions.onNext(action);
}
exports.redButtonClick = redButtonClick;
function blueButtonClick() {
    var action = { type: constants_1.constants.BLUE_BUTTON_CLICK };
    exports.actions.onNext(action);
}
exports.blueButtonClick = blueButtonClick;
function clearClick() {
    var action = { type: constants_1.constants.CLEAR_CLICK };
    exports.actions.onNext(action);
}
exports.clearClick = clearClick;
