import React, { useState, useEffect } from 'react'
import { RestaurantInterface } from '../../interfaces/Restaurant.interface';
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField } from '@material-ui/core';
import BaseRequest from '../../helpers/BaseRequest';
import ldsh from 'lodash';
import BaseRequestPut from '../../helpers/put';
import AddRestaurant from '../Admin/AddRestaurant';
import newspaper from '../../assets/newspaper.jpg';

export default function Restaurant() {
    var rows: RestaurantInterface[] = [];
    const { serviceId, country, id } = useParams();
    const [restaurant, setRestaurant] = useState<any[]>([])
    const permission = localStorage.getItem('permission');
    const [filteredRestaurant, setFilteredRestaurant] = useState<any[]>([])
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setRestaurant(res);
            setFilteredRestaurant(res);

        }
        ).catch(e => console.log(e))
    }, []);

    document.title= `Datiuli - Restaurants in ${country}`

    const editRow = (row: RestaurantInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`restaurants/editRestauran/${row.id}`, { ...row }).then(res => {
            console.log(res)
        })
    }

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'cosher', label: 'Cosher', },
    ];

    const getOptions = () => {
        return ldsh.union(filteredRestaurant.map((restaurant) => restaurant.name),
            filteredRestaurant.map((restaurant) => restaurant.address),
            filteredRestaurant.map((restaurant) => restaurant.phone),
            filteredRestaurant.map((restaurant) => restaurant.city),
            filteredRestaurant.map((restaurant) => restaurant.cosher))
    }
    const r = (newValue: any) => {
        const modifiedRestaurant = filteredRestaurant.filter(h => {
            return h.name.includes(newValue)
                || h.address.includes(newValue)
                || h.phone.includes(newValue) || h.city.includes(newValue)
                || h.cosher.includes(newValue);
        });
        setFilteredRestaurant(modifiedRestaurant);
    }
    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "right",
            //direction: "rtl",
            padding: '10%',
        }}>
            <div className="serach-services-div">
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                options={getOptions()}
                onKeyUp={(e: any) => {
                    const newValue = e.target.value;
                    if (newValue === "")
                        setFilteredRestaurant(restaurant);
                    else
                        r(newValue);


                }}
                onChange={(e: any, newValue: any) => {
                    if (newValue === "") {
                        setFilteredRestaurant(restaurant);
                    }
                    else
                        r(newValue);

                }}
                style={{ width: 348, marginRight: '9%'}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Restaurant"
                        margin="normal"
                        variant="outlined"
                        InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                )}

            />
            <h2 style={{
                fontSize: '350%',
                fontStyle: 'oblique',
                fontFamily: 'serif',
                color: '#F50057',
                fontWeight: 'bold',
                //marginRight: '40%',
                textAlign: 'center',
            }}>
                RESTAURANTS
            </h2>
        </div>
            <CustomTable headCells={headCells} rows={filteredRestaurant} editRow={(data: any) => editRow(data)} />


            {
                permission === '1' && <AddRestaurant></AddRestaurant>
            }
        </div>
    )
}