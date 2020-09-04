import * as ActionTypes from './ActionTypes';

export const tip = (state = {tips:[]},action) => {
    switch(action.type){
        case ActionTypes.ADD_TIP:
            const newTips = [...state.tips,{...action.payload}];
            return{...state,tips:newTips};
        case ActionTypes.LIST_TIPS:
                return{...state,tips:action.payload};
        default:
            return state;
    }
};