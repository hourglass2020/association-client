import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Auth/context";

export default function Logout() {
    const { setLoggedIn } = useContext(AuthContext);
    const navigator = useNavigate();

    useEffect(() => {
        localStorage.removeItem("token");
        setLoggedIn(false);
        navigator("/");
    });

    return null;
}
