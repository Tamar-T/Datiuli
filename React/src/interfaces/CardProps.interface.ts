import { Country } from './Country.interface';
export interface CardProps {
    country: Country;
    setCountry: Function;
    handleClick: Function;
}