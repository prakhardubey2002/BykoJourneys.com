import React from 'react'
import { useParams } from 'react-router-dom';
import PackageTopSection from '../Components/PackageTopSection/PackageTopSection';
import PackageOverview from '../Components/PackageOverview/PackageOverview';
// import PackageTestimonials from '../Components/PackageTestimonials/PackageTestimonials';
const Packagetemplate = () => {
    const { id, name } = useParams();
    return (
        <div className='Packagemain' >
            <PackageTopSection name={name} />
            <PackageOverview/>
            {/* <PackageTestimonials/> */}
        </div>
    )
}

export default Packagetemplate