import {  UPDATE_USER } from '../ActionTypes';
import { UserAction, UserState } from "../types";

const initialState: UserState = {   
    user: JSON.parse(localStorage.getItem("user")||"{}"),
}

const userReducer = (
    state: UserState = initialState,
    action: UserAction
): UserState => {
    switch (action.type) {
        case UPDATE_USER:
                return {
                ...state,
                user: action.user,
            }        
        default:
       { return state;}
    }
    
}

export default userReducer