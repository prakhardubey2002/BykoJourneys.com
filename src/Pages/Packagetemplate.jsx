import React from 'react'
import { useParams } from 'react-router-dom';
import PackageTopSection from '../Components/PackageTopSection/PackageTopSection';
import PackageOverview from '../Components/PackageOverview/PackageOverview';
const Packagetemplate = () => {
    const { id, name } = useParams();
    return (
        <div className='Packagemain' >
            <PackageTopSection name={name} />
            <PackageOverview/>
        </div>
    )
}

export default Packagetemplate