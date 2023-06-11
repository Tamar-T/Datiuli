import React from 'react'
import newspaper from '../../assets/newspaper.jpg';
import Rabbi from '../../assets/Rabbi.jpg';

export default function Chabad() {
    document.title = `Datiuli - Chabad`

    return (
        <div style={{
            backgroundImage: `url(${newspaper})`,
            backgroundRepeat: 'repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            textAlign: "center",
            direction: "rtl",
            padding: '10%',
        }}>
            <h4 style={{
                fontSize: '200%',
                fontStyle: 'oblique',
                fontFamily: 'serif',
                color: '#F50057',
                fontWeight: 'bold',
                //marginRight: '40%',
                marginTop: '-5%',
                textAlign: 'center',
            }}>
                Links For Chabad Websites
            </h4>
            <p>&nbsp;
                <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
                    <div style={{
                        backgroundImage: `url(${Rabbi})`,
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        width: '20.6%',
                        //height: '100%',
                        padding: '1%',
                        marginRight: '50',
                        opacity: 0.6,
                        color: '#5dc6b3', 
                    }}>
                        <br /><br />
                        <a href="https://he.chabad.org/">BeitChabad.com</a>‏
                                <br /><br />
                        <a href="https://www.chabadworld.net/#/home">Chabad around the world</a>‏
                                <br /><br />
                        <a href="http://www.chabad.org.il/Articles/Article.asp?ArticleID=1973&CategoryID=1202">Chabad to tourists</a>‏
                                <br /><br />
                        <a href="https://he.chabad.org/centers/default_cdo/aid/9318/jewish/-.htm">Find A Chabad-Lubavitch Center</a>‏
                                <br /><br />
                        <a href="https://he.chabad.org/centers/default_cdo/aid/15676/jewish/Advanced-Search.htm">Chabad-Lubavitch Centers - Advanced Search</a>‏
                </div>
                </div>
            </p>
        </div>


    )
}