import React, { useState, useEffect } from 'react'
import { LectureInterface } from '../../interfaces/Lecture.interface';
import { HeadCell } from '../../interfaces/HeadCell.interface';
import CustomTable from './Table';
import { useParams } from 'react-router-dom';
import BaseRequest from '../../helpers/BaseRequest';
import { TextField } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import ldsh from 'lodash';
import BaseRequestPut from '../../helpers/put';
import AddLecture from '../Admin/AddLecture';
import newspaper from '../../assets/newspaper.jpg';

export default function Lecture() {

    var rows: LectureInterface[] = [];
    const { serviceId, country, id } = useParams();
    const [Lecture, setLecture] = useState<any[]>([])
    const [filteredLecture, setFilteredLecture] = useState<any[]>([])
    const permission = localStorage.getItem('permission');

    useEffect(() => {
        console.log("params:", serviceId, country)
        BaseRequest(`services/getServicesById/${serviceId}/${country}`).then(res => {
            console.log("useEffect", res);
            setLecture(res);
            setFilteredLecture(res);

        }
        ).catch(e => console.log(e))
    }, []);

    document.title = `Datiuli - Lectures in ${country}`

    const editRow = (row: LectureInterface) => {
        console.log("rows :", row)
        BaseRequestPut(`Lectures/editLecture/${row.id}`, { ...row }).then(res => {
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
        return ldsh.union(filteredLecture.map((Lecture) => Lecture.address),
            filteredLecture.map((Lecture) => Lecture.phone),
            filteredLecture.map((Lecture) => Lecture.city),
            filteredLecture.map((Lecture) => Lecture.name),
            filteredLecture.map((Lecture) => Lecture.rabbi),
            filteredLecture.map((Lecture) => Lecture.nusach),
            filteredLecture.map((Lecture) => Lecture.community))
    }
    const s = (newValue: any) => {
        const modifiedLectures = filteredLecture.filter(h => {
            return h.address.includes(newValue) || h.phone.includes(newValue)
                || h.city.includes(newValue) || h.name.includes(newValue)
                || h.rabbi.includes(newValue) || h.nusach.includes(newValue)
                || h.community.includes(newValue);
        });
        setFilteredLecture(modifiedLectures);
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
                        setFilteredLecture(Lecture);
                    else
                        s(newValue);


                }}
                onChange={(e: any, newValue: any) => {
                    if (newValue === "") {
                        setFilteredLecture(Lecture);
                    }
                    else
                        s(newValue);
                }}
                style={{ width: 348, marginRight: '10%' }}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search Lecture"
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
                LECTURES
            </h2>
            </div>

            {
                <CustomTable headCells={headCells} rows={filteredLecture} editRow={(data: any) => editRow(data)} />
            }

            {
                permission === '1' && <AddLecture></AddLecture>
            }
        </div>
    )
}