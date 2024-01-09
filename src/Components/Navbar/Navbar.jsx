import React, { useEffect } from 'react';
import styles from './style.module.css';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import { useGlobalContext } from '../../context/AppContext';

const Navbar = () => {
  const { navcontent, setNavcontent } = useGlobalContext();

  const { data: apiData, isPending, error } = useFetch(`${process.env.REACT_APP_BACKEND_LINK}api/location/getbycategory`);
  useEffect(() => {
    // Update navcontent only when apiData or isPending changes
    setNavcontent({
      ...navcontent,
      data: apiData,
      error: error,
      load: isPending,
    });
    console.log(process.env.BACKEND_LINK);
  }, [apiData, isPending, error]);

  return (
    <div className={styles.navbartop}>
      <div className={styles.navbarcontent}>
        {apiData &&
          Object.keys(apiData).map((category) => (
            <div className={styles.dropdown} key={category}>
              <p>{category}</p>
              <div className={styles.dropdowncontent}>
                <ul>
                  {apiData[category].map((location) => (
                    <li className={styles.animated} key={location.locationId}>
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
    </div>
  );
};

export default Navbar;
