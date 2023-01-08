import { useEffect, useState } from "react";
import Hotel from './Hotel';

// When we run 'npm run start', NODE_ENV is set to development for us.
// When we run 'npm run build', NODE_ENV is set to production for us.
// When in development, our React server needs to call to the backend server 
// on 'http://localhost:5000/', 
// while in production, it is all running on the same server, 
// so we don't need an absolute url.
// This prefix should probably be set up in the App.js file.
// And I'm sure that there are better ways to do this.   
const prefix = (process.env.NODE_ENV==='development') ? 'http://localhost:5000/' : '/';

const Hotels = () => {
    const [hotels, setHotels] = useState([]);
    useEffect(() => {
        fetch(prefix + 'hotels')
        .then(res => res.json())
        .then(data => setHotels(data))
        .catch(e => console.log(e));
    }, []);
    return <ul>
        <li key={0}>Hotel List</li>
        {hotels.map(hotel => <Hotel hotel={hotel} />)}
    </ul>
};

export default Hotels;
