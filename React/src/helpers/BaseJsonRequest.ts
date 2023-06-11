import React from 'react';
import axios from 'axios';


export default function BaseJsonRequest(url: string, param?: any) {

    const baseURL = "../assets/json/"
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