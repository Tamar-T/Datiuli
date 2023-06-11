import React, { useState, useEffect } from 'react'
import { SynagogueInterface } from '../../interfaces/Synagogue.interface';
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import BaseRequest from '../../helpers/BaseRequest';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ldsh from 'lodash';
import BaseRequestPut from '../../helpers/put';
import AddSynagogue from '../Admin/AddSynagogue';
import newspaper from '../../assets/newspaper.jpg';

export default function Synagogue() {

    var rows: SynagogueInterface[] = [];
    const { serviceId, country, id } = useParams();
    const [synagogue, setSynagogue] = useState<any[]>([])
    const [filteredSynagogue, setFilteredSynagogue] = useState<any[]>([])
    const permission = localStorage.getItem('permission');

    useEffect(() => {
        console.log("params:", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setSynagogue(res);
            setFilteredSynagogue(res);

        }
        ).catch(e => console.log(e))
    }, []);

    document.title= `Datiuli - Synagogues in ${country}`

    const editRow = (row: SynagogueInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`synagogues/editSynagogue/${row.id}`, { ...row }).then(res => {
            console.log(res)
        })
    }

    const headCells: HeadCell[] = [
        { id: 'name', label: ' Name', },
        { id: 'city', label: 'City', },
        { id: 'address', label: 'Address', },
        { id: 'phone', label: 'Phone', },
        { id: 'rabbi', label: 'Rabbi', },
        { id: 'nusach', label: 'Nusach', },
        { id: 'community', label: 'Community', }


    ];



    const getOptions = () => {
        return ldsh.union(filteredSynagogue.map((synagogue) => synagogue.address),
            filteredSynagogue.map((synagogue) => synagogue.phone),
            filteredSynagogue.map((synagogue) => synagogue.city),
            filteredSynagogue.map((synagogue) => synagogue.name),
            filteredSynagogue.map((synagogue) => synagogue.rabbi),
            filteredSynagogue.map((synagogue) => synagogue.nusach),
            filteredSynagogue.map((synagogue) => synagogue.community))
    }
    const s = (newValue: any) => {
        const modifiedSynagogues = filteredSynagogue.filter(h => {
            return h.address.includes(newValue) || h.phone.includes(newValue)
                || h.city.includes(newValue) || h.name.includes(newValue)
                || h.rabbi.includes(newValue) || h.nusach.includes(newValue)
                || h.community.includes(newValue);
        });
        setFilteredSynagogue(modifiedSynagogues);
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
                        setFilteredSynagogue(synagogue);
                    else
                        s(newValue);


                }}
                onChange={(e: any, newValue: any) => {
                    if (newValue === "") {
                        setFilteredSynagogue(synagogue);
                    }
                    else
                        s(newValue);
                }}
                style={{ width: 348, marginRight: '9%' }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Synagogue"
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
                SYNAGOGUES
            </h2>
            </div>
            {
                <CustomTable headCells={headCells} rows={filteredSynagogue} editRow={(data: any) => editRow(data)} />
            }

            {
                permission === '1' && <AddSynagogue></AddSynagogue>
            }
        </div>
    )
}