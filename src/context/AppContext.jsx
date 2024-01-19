import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [navcontent, setNavcontent] = useState({
        data: false,
        error: "No error",
        load: true,
    })
    const [eventdata, setEventdata] = useState({
        data: false,
        error: "No error",
        load: true,
    })
    const [packagecontent, setPackageContent] = useState({
        pdata: false,
        error: "no error",
        load: true,
    })
    const link = `${process.env.REACT_APP_BACKEND_LINK}api/package/getall`;
    useEffect(() => {
        const abortcont = new AbortController();
        fetch(link, { signal: abortcont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error('Could not intiate request')
                }
                return res.json();
            })
            .then(data => {

                setPackageContent({
                    ...packagecontent,
                    pdata: data,
                    error: null,
                    load: false,
                });

            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log("Fetch aborted")
                } else {
                    console.log(err.message);
                    setPackageContent({
                        ...packagecontent,
                        error: err.message,
                        load: false,
                    });
                }
            });
        return () => abortcont.abort();
    }, [])






    return <AppContext.Provider value={{ navcontent, setNavcontent, eventdata, setEventdata, packagecontent }} >
        {children}
    </AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };