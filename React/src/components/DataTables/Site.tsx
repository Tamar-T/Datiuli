import React, { useState, useEffect } from 'react'
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { SiteInterface } from '../../interfaces/Site.interface';
import { useParams } from 'react-router-dom';
import BaseRequest from '../../helpers/BaseRequest';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ldsh from 'lodash';
import newspaper from '../../assets/newspaper.jpg';
import AddSite from '../Admin/AddSite';
import BaseRequestPut from '../../helpers/put';

export default function Site() {

    var rows: SiteInterface[] = [];
    const { serviceId, country } = useParams();
    const [site, setSite] = useState<any[]>([])
    const [filteredSite, setFilteredSite] = useState<any[]>([])
    const permission = localStorage.getItem('permission');

    useEffect(() => {
        console.log("params: ", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setSite(res);
            setFilteredSite(res);
        }
        ).catch(e => console.log(e))
    }, []);

    document.title= `Datiuli - Attractions in ${country}`

    const editRow = (row: SiteInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`synagogues/editSynagogue/${row.id}`, { ...row }).then(res => {
            console.log(res)
        })
    }

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'city', label: 'City', },
        { id: 'typeOfActivity', label: 'Type Of Activity', },
        { id: 'age', label: 'Age', },
    ];

    const getOptions = () => {
        return ldsh.union(filteredSite.map((site) => site.name),
            filteredSite.map((site) => site.address),
            filteredSite.map((site) => site.phone),
            filteredSite.map((site) => site.city),
            filteredSite.map((site) => site.typeOfActivity))
        // filteredSite.map((site) => site.age))
    }
    const s = (newValue: any) => {
        const modifiedSite = filteredSite.filter(h => {
            return h.address.includes(newValue) || h.phone.includes(newValue)
                || h.city.includes(newValue) || h.name.includes(newValue)
                || h.typeOfActivity.includes(newValue);
            //  || h.age.includes(newValue);
        });
        setFilteredSite(modifiedSite);
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
                //className="auto"
                options={getOptions()}
                onKeyUp={(e: any) => {
                    const newValue = e.target.value;
                    if (newValue === "")
                        setFilteredSite(site);
                    else
                        s(newValue);
                }}
                onChange={(e: any, newValue: any) => {
                    if (newValue === "") {
                        setFilteredSite(site);
                    }
                    else
                        s(newValue);

                }}
                style={{ width: 348, marginRight: '9%'}}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Site"
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
                ATTRACTIONS
            </h2>
            </div>
            {
                <CustomTable headCells={headCells} rows={filteredSite} editRow={(data: any) => editRow(data)} />
            }

            {
                permission === '1' && <AddSite></AddSite>
            }
        </div>
    )
}

