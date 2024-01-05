import React from 'react'
import { useParams } from 'react-router-dom';
const Packagetemplate = () => {
    const { id, name } = useParams();
    return (
        <div>Destinationtemplate : {id} name :{name}</div>
    )
}

export default Packagetemplate