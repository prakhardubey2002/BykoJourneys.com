import React from 'react'
import { useParams } from 'react-router-dom';

const Destinationtemplate = () => {
  const {id,name} = useParams();
  return (
    <div>Destinationtemplate : {id} name :{name} </div>
  )
}

export default Destinationtemplate