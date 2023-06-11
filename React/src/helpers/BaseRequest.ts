import React from 'react';
import axios from 'axios';


export default function BaseRequest(url: string, param?: any) {

    const baseURL = "http://localhost:8080/"
    return axios.get(
        `${baseURL}${url}`, {
        params: param
    }
    ).then((res) => {
        console.log(res);
        return res.data;
    })
        .catch((err) => {
            console.log(err);
            throw err;
        })
}