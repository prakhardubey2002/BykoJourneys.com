import React, { useContext, useEffect, useState } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
    useEffect(() => {
        
    }, [])
    const [destinationarray, SetDestinationarray] = useState(["Kasoli", "Raj-Kosh", "Delhi", "Noida"]);

    return <AppContext.Provider value={{ destinationarray }} >
        {children}
    </AppContext.Provider>
};
const useGlobalContext = () => {
    return useContext(AppContext);
}
export { AppContext, AppProvider, useGlobalContext };