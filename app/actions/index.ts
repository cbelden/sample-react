import { constants } from '../actions/constants';
import * as Rx from 'rx';

export interface IAction<T> {
    type : string;
    payload?: T;
}

export const actions = new Rx.Subject();

export function redButtonClick() {
    var action : IAction<any> = { type: constants.RED_BUTTON_CLICK };
    actions.onNext(action);
}

export function blueButtonClick() {
    var action : IAction<any> = { type: constants.BLUE_BUTTON_CLICK };
    actions.onNext(action);
}

export function clearClick() {
    var action : IAction<any> = { type: constants.CLEAR_CLICK };
    actions.onNext(action);
}
