import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    const [navcontent, setNavcontent] = useState({
        data: false,
        error: "No error",
        load: true,
    })
    useEffect(() => {
        console.log(navcontent.data)
    }, [navcontent])

    return <AppContext.Provider value={{ navcontent, setNavcontent }} >
        {children}
    </AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };