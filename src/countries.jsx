import React from 'react';
import { useEffect, useState } from 'react';
const Countries = () => {

    const [data, setData] = useState([]);

    const getCountriesData = async () => {
        try {
            const response = await fetch('https://restcountries.com/v3.1/all');
            const countries = await response.json();
            setData(countries);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getCountriesData();
    },[])

    const cardStyle = {
        width: "200px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        margin: "10px",
        padding: "10px",
        display: "flex",
        flexDirection: "column",
        aligItems: "center",
        justifyContent: "center"
    }

    const containerStyle = {
        display: 'flex',
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
    }

    const imageStyle = {
        width: '100px',
        height: '100px',
        margin: "auto"
    }

  return (
    <div style={containerStyle}>
        {data.map((item) => {
            return (
                <div style={cardStyle}>
                    <img src={item.flags.png} alt={`Flag of ${item.name.common}`} style={imageStyle} class='center' />
                    <h2>{item.name.common}</h2>
                </div>
            )
        })}
    </div>
  )
}

export default Countries