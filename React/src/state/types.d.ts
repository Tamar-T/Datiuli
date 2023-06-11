import { Country } from "../interfaces/Country.interface"
import { UserInterface } from "../interfaces/User.intarface"


type CountryState = {
    countries: Country[],
}

type UserState = {
    user: any
}

type UserAction = {
    type: string,
    user: any
}

type CountryAction = {
    type: string
    country: Country
}

type CountryGetAction = {
    type: string
}

type DispatchType = (args: CountryAction) => CountryAction