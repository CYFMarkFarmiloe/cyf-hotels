import { useEffect, useState } from "react";
import Hotel from './Hotel';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch('/hotels')
        .then(res => res.json())
        .then(data => setHotels(data))
        .catch(e => console.log(e));
    }, []);
    return <ul>
        <li key={0}>Hotels List</li>
        {hotels.map(hotel => <Hotel hotel={hotel} />)}
    </ul>
};

export default Hotels;