import { IAction } from '../actions/index';
import { constants } from '../actions/constants';
import * as _ from 'lodash';

export function reduce(state = {}, action : IAction<any>) : any {
    switch (action.type) {
        case constants.BLUE_BUTTON_CLICK:
            return addBlueClick(state);
        case constants.RED_BUTTON_CLICK:
            return addRedClick(state);
        case constants.CLEAR_CLICK:
            return clearClicks(state);
        default:
            return state;
    }
}

function addBlueClick(state) {
    var n = state.blueClicks;
    if (!n) n = 0;

    return _.assign(state, { blueClicks: n + 1 });
}

function addRedClick(state) {
    var n = state.redClicks;
    if (!n) n = 0;
    return _.assign(state, { redClicks: n + 1 });
}

function clearClicks(state) {
    return _.assign(state, {
        blueClicks: 0,
        redClicks: 0,
    });
}
