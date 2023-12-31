import React from 'react'
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
const Navbar = () => {
  const { data: apiData, isPending, error } = useFetch('https://bykojourney.adaptable.app/api/location/getbycategory')
  return (
    <div className={styles.navbartop}>
      {isPending && <div>Loading....</div>}
      {!isPending && console.log(apiData)}

      {apiData && Object.keys(apiData).map((category) => (
        <div className={styles.dropdown} key={category}>
          <p>{category}</p>
          <div class={styles.dropdowncontent}>
            <ul>
              {apiData[category].map((location) => (
                <li key={location.locationId}>
                  <Link to={`/destination/${location.locationId}/${location.name}`}>
                    {location.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      ))}
    </div>
  )
}

export default Navbar