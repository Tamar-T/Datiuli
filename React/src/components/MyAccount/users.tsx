import React, { useState, useEffect } from 'react'
import { HotelInterface } from '../../interfaces/Hotel.interface';
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from '../DataTables/Table';
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


export default function Users() {

    var rows: HotelInterface[] = [];
    const { serviceId, country, id } = useParams();
    const [users, setUsers] = useState<any[]>([])
    const [filteredUsers, setFilteredUsers] = useState<any[]>([])
    const permission = localStorage.getItem('permission');
    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`users/getUsers`).then(res => {
            console.log("useEffect", res);
            setUsers(res);
            console.log("hotel", users);
            setFilteredUsers(res);
        }
        ).catch(e => console.log(e))
    }, []);

    document.title = `Datiuli - ${country} ${id}`

    // const editRow = (row: HotelInterface) => {
    //     console.log("rows :", row)
    //     BaseRequestPut(`hotels/editHotel/${row.id}`, { ...row }).then(res => {
    //         console.log(res)
    //     })
    // }
    const headCells: HeadCell[] = [
        { id: 'userName', label: ' User Name', },
        { id: 'country', label: 'Country', },
        { id: 'language', label: 'Language', },
        { id: 'email', label: 'Email', },
        // { id: 'password', label: 'Password', },
        { id: 'permission', label: 'Permission', },

    ];
    const getOptions = () => {
        console.log("hotel2.", users)
        return ldsh.union(filteredUsers.map((users) => users.userName),
        filteredUsers.map((users) => users.email),
        filteredUsers.map((users) => users.country),
          )
    }
    const h = (newValue: any) => {
        const modifiedUsers = filteredUsers.filter(h => {
            return h.userName.includes(newValue) || h.email.includes(newValue)
                || h.country.includes(newValue);
        });
        setFilteredUsers(modifiedUsers);
    }

    return (
        <div 
        // style={{
        //     backgroundImage: `url(${newspaper})`,
        //     backgroundRepeat: 'repeat',
        //     backgroundPosition: 'center',
        //     backgroundSize: 'cover',
        //     textAlign: "right",
        //     //direction: "rtl",
        //     padding: '10%',
        // }}
        >
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                disableClearable
                className="auto"
                options={getOptions()}
                onKeyUp={(e: any) => {
                    const newValue = e.target.value;
                    if (newValue === "")
                        setFilteredUsers(users);
                    else
                        h(newValue);
                }}
                onChange={(e: any, newValue: any) => {
                    if (newValue === "") {
                        setFilteredUsers(users);
                    }
                    else
                        h(newValue);
                }}
                style={{ width: 348, marginRight: '35%', marginTop: '-10%' }}
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
                marginTop: '5%',
                textAlign: 'center',
            }}>
                USERS
            </h2>
            <div style={{ marginTop: '-10%' }}></div>
            {/* permission={1} managerCells={managerCells} */}
            {<CustomTable headCells={headCells} rows={filteredUsers} />}

            {/* {
                permission === '1' && <AddHotel></AddHotel>
            } */}
        </div>
    )
}