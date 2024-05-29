import { createContext, useEffect, useState } from "react";
export const UserContexts = createContext();
export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false)
    const [dat, setData] = useState({})

useEffect(() => {
    setData({name: 'fab', age: 24})
}, [])

    return (
        <UserContexts.Provider value={{login, setLogin}} >
            {children}
        </UserContexts.Provider>
    )
}