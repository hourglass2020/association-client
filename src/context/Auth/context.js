import { createContext } from "react";

export const AuthContext = createContext({
    user: {},
    setUser: () => { },
    isLoggedIn: false,
    setLoggedIn: () => { }
})