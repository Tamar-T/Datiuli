import { Country } from './../interfaces/Country.interface';
import * as actionTypes from "./ActionTypes";
import { CountryAction, DispatchType, UserAction } from './types';


export function updateUser(user: any) {
    const action: UserAction = {
        type: actionTypes.UPDATE_USER,
        user,
    }
    return action;
    // return simulateHttpRequest(action)
}



export function addCountry(country: Country) {
    const action: CountryAction = {
        type: actionTypes.ADD_MY_COUNTRIE,
        country,
    }
    return action;
    // return simulateHttpRequest(action)
}

export function removeCountry(country: Country) {
    const action: CountryAction = {
        type: actionTypes.REMOVE_MY_COUNTRIE,
        country,
    }
    return action;
    // return simulateHttpRequest(action)
}

export function simulateHttpRequest(action: CountryAction) {
    return (dispatch: DispatchType) => {
        setTimeout(() => {
            dispatch(action)
        }, 500)
    }
}