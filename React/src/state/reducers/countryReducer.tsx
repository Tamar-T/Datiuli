import { REMOVE_MY_COUNTRIE, ADD_MY_COUNTRIE } from '../ActionTypes';
import { Country } from '../../interfaces/Country.interface';
import { CountryAction, CountryState } from "../types";

const initialState: CountryState = {
    countries: [
        // { name: '', flag: undefined, isFavorite: false, id: '' },
    ],
}

const countryReducer = (
    state: CountryState = initialState,
    action: CountryAction
): CountryState => {
    switch (action.type) {
        case ADD_MY_COUNTRIE:
            const newCountry: Country = {
                name: action.country.name,
                id: action.country.id,
                flag: action.country.flag,
                isFavorite: action.country.isFavorite
            }
            return {
                ...state,
                countries: state.countries.concat(newCountry),
            }
        case REMOVE_MY_COUNTRIE:
            const updatedCountries: Country[] = state.countries.filter(
                country => country.id !== action.country.id
            )
            return {
                ...state,
                countries: updatedCountries,
            }
        default:
       { return state;}
    }
    
}

export default countryReducer