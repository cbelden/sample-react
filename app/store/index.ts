import * as Rx from 'rx';
import { actions } from '../actions/index';
import { reduce } from '../reducers/index';


const DEFAULT_STATE = {
    redClicks: 0,
    blueClicks: 0
};


export const stores = actions.scan(reduce, DEFAULT_STATE);
