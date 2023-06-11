import React from 'react';
import newspaper from '../../assets/newspaper.jpg';
import Iframe from 'react-iframe'

export default function Times() {
    document.title= `Datiuli - Times`

    const x = { "coord": { "lon": -0.13, "lat": 51.51 }, "weather": [{ "id": 741, "main": "Fog", "description": "fog", "icon": "50n" }], "base": "stations", "main": { "temp": 284.04, "pressure": 1011, "humidity": 93, "tempmin": 280.93, "tempmax": 287.04 }, "visibility": 10000, "wind": { "speed": 1.5 }, "clouds": { "all": 20 }, "dt": 1570234102, "sys": { "type": 1, "id": 1417, "message": 0.0102, "country": "GB", "sunrise": 1570255614, "sunset": 1570296659 }, "timezone": 3600, "id": 2643743, "name": "London", "cod": 200 };
    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "center",
            direction: "rtl",
            padding: '10%',
            width: '100%',
            height: '100%',
        }}>
           <h2 style={{
                fontSize: '350%',
                fontStyle: 'oblique',
                fontFamily: 'serif',
                color: '#F50057',
                fontWeight: 'bold',
                //marginRight: '40%',
                marginTop: '-5%',
                marginBottom: '5%',
                textAlign: 'center',
            }}>
                TIMES
            </h2>
            <Iframe url="https://www.myzmanim.com/day.aspx?askdefault=1&vars=US11230"
                width="100%"
                height="2100px"
                //scrolling='no'
                position="relative" />
        </div>
    )
}
