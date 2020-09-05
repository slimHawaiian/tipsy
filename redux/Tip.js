import * as ActionTypes from './ActionTypes';
import storage from 'redux-persist/es/storage';

export const tip = (state = {tips:[]},action) => {
    switch(action.type){
        case ActionTypes.ADD_TIP:
            const newTips = [...state.tips,{...action.payload}];
            return{...state,tips:newTips};
        case ActionTypes.LIST_TIPS:
            return{...state,tips:action.payload};
        case ActionTypes.CLEAR_TIPS:
            storage.removeItem('persist:root');
            return {...state,tips:action.payload}
        default:
            return state;
    }
};