


import axios from 'axios';


export default function BaseRequestPut(url: string, body: any) {

    const baseURL = "http://localhost:8080/"
    return axios.put(
        `${baseURL}${url}`, {
        body: body
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