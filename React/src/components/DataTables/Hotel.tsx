import React, { useState, useEffect } from 'react'
import { HotelInterface } from '../../interfaces/Hotel.interface';
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from './Table';
import BaseRequest from '../../helpers/BaseRequest';
import { useParams } from 'react-router-dom';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { TextField, createGenerateClassName } from '@material-ui/core';
import ldsh from 'lodash';
import BaseRequestPut from '../../helpers/put';
import newspaper from '../../assets/newspaper.jpg';
import AddHotel from '../Admin/AddHotel';
//import axios from 'axios';
//import CustomTable from './Table';


export default function Hotel() {

    var rows: HotelInterface[] = [];
    const { serviceId, country, id } = useParams();
    const [hotel, setHotel] = useState<any[]>([])
    const [filteredHotels, setFilteredHotels] = useState<any[]>([])
    const permission = localStorage.getItem('permission');
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setHotel(res);
            console.log("hotel", hotel);
            setFilteredHotels(res);
        }
        ).catch(e => console.log(e))
    }, []);

    document.title = `Datiuli - Hotels in ${country}`

    const editRow = (row: HotelInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`hotels/editHotel/${row.id}`, { ...row }).then(res => {
            console.log(res)
        })
    }
    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'manager', label: 'Manager', },
        { id: 'stars', label: 'Stars', },

    ];
    const getOptions = () => {
        console.log("hotel2.", hotel)
        return ldsh.union(filteredHotels.map((hotel) => hotel.name),
            filteredHotels.map((hotel) => hotel.address),
            filteredHotels.map((hotel) => hotel.city),
            filteredHotels.map((hotel) => hotel.manager))
    }
    const h = (newValue: any) => {
        const modifiedHotels = filteredHotels.filter(h => {
            return h.name.includes(newValue) || h.city.includes(newValue)
                || h.address.includes(newValue) || h.manager.includes(newValue);
        });
        setFilteredHotels(modifiedHotels);
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
                    className="auto"
                    options={getOptions()}
                    onKeyUp={(e: any) => {
                        const newValue = e.target.value;
                        if (newValue === "")
                            setFilteredHotels(hotel);
                        else
                            h(newValue);
                    }}
                    onChange={(e: any, newValue: any) => {
                        if (newValue === "") {
                            setFilteredHotels(hotel);
                        }
                        else
                            h(newValue);
                    }}
                    style={{ width: 348, marginRight: '15%' }}
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search Hotel"
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
                    //textShadow: 'unset',
                    //strokeWidth: '1',
                    //stroke: 'yellow',
                    //letterSpacing: 'textShadow',
                    //borderInlineStyle: 'solid',
                    //textShadowOffset:{width: 5, height: 5},m 
                    //textShadowRadius:10,                
                    //borderStyle: 'solid',
                    //borderColor: '#5dc6b3',
                    //marginRight: '40%',
                    //padding: '5%',
                    textAlign: 'center',
                }}>
                    HOTELS
            </h2>
            </div>

            {/* permission={1} managerCells={managerCells} */}
            {<CustomTable headCells={headCells} rows={filteredHotels} editRow={(data: any) => editRow(data)} />}

            {
                permission === '1' && <AddHotel></AddHotel>
            }
        </div>
    )
}