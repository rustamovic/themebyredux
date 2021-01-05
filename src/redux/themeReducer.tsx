import * as Actions from './themeActions';
import {dark} from '../themes';

const initialState = {
    theme:dark
}

export const themeReducer = (state: any = initialState, action: any)=>{
    switch(action.type){
        case Actions.APPLY_THEME:
            return Object.assign({}, {theme: action.payload});
        default:
            return state;
    }
}