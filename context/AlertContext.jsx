"use client";

import { createContext, useState } from "react";

export const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
    const [alert, setAlert] = useState(null);
    const showAlert  = (type, message)  =>  {
        setAlert({
            type: type,
            msg: message,
        })
        setTimeout(() => {
            setAlert(null);
        }, 1500);

    }
    return <AlertContext.Provider value={{ alert, showAlert }}>
        {children}
    </AlertContext.Provider>
}