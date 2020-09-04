import * as ActionTypes from './ActionTypes';

export const addTip = tip => ({
    type:ActionTypes.ADD_TIP,
    payload:tip
});

export const listTips = (tips) => ({
    type: ActionTypes.LIST_TIPS,
    payload: tips
});