import React, { useState } from 'react'
import newspaper from '../../assets/newspaper.jpg';
import Iframe from 'react-iframe'
import { CircularProgress } from '@material-ui/core';

export default function Weather() {
    document.title = `Datiuli - Weather`

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const doTheComponentWork = (e: any) => {
        e.preventDefault();
        setIsLoading(true);
        //getZipcodesInRadius();
        // getListsOfServices();
        // filterListsOfServicesInRadius();
    }

    return (
        <div onSubmit={doTheComponentWork} style={{
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
                WEATHER
            </h2>

            {isLoading == true && <CircularProgress />}

            <Iframe url="https://www.accuweather.com/en/world-weather"
                width="100%"
                height="1800px"
                position="relative"
                styles={{
                    backgroundImage: "url(${newspaper})",
                    backgroundRepeat: "repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    textAlign: "center",
                    direction: "rtl",
                    padding: "10%",
                    width: "100%",
                    height: "100%",
                }} />
        </div>
    )
}