import React from 'react';
import axios from "axios";
import {useEffect, useState} from "react";
import Api from "../../API/api";

function Hotel() {
    const [hotels, setHotels] = useState([]);

    useEffect(() => {
        fetchHotels()
    }, [])

    async function fetchHotels(){
        const hotels = await Api.getHotels();
        setHotels(hotels);
    }
    return (
        <div className="hotels" key={hotels.id}>

            <div className="leftBlockHotels">

            </div>
            <div className="rightBlockHotels">
                <h3 className="h3nameHotel">{hotels.name}</h3>
                <h4 className="h4sityHotel">{hotels.city}</h4>
            </div>
        </div>
    );
}

export default Hotel;