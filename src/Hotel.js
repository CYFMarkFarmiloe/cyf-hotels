const Hotel = (props) => {
    const {id, name, rating} = props.hotel;
    return <li>
        Hotel: {`id: ${id}, name: ${name}, rating: ${rating}`}
    </li>;
};

export default Hotel;
