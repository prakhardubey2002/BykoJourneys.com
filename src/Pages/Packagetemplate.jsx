import React from 'react'
import { useParams } from 'react-router-dom';
import PackageTopSection from '../Components/PackageTopSection/PackageTopSection';
const Packagetemplate = () => {
    const { id, name } = useParams();
    return (
        <div className='Packagemain' >
            <PackageTopSection name={name} />
        </div>
    )
}

export default Packagetemplate