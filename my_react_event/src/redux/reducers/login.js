import { SET_LOGIN,OUT_LOGIN } from "../constants";

const defaultState={
    user:{
        token:"",
        nick:""
    }
}

export default function login(state = defaultState,action){
    switch(action.type){
        case SET_LOGIN:
            return ;
        case OUT_LOGIN:
            return ;
        default:
            return state;
    }
}