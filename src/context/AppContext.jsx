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
    useEffect(() => {
        console.log("NavContent Data :");
        console.log(navcontent.data);
        console.log("Event Package Data :");
        console.log(eventdata.data)

    }, [navcontent,eventdata])

    return <AppContext.Provider value={{ navcontent, setNavcontent, eventdata, setEventdata }} >
        {children}
    </AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };