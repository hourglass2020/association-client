import {Outlet} from "react-router-dom";

import HeaderNav from "../components/navs/HeaderNav.jsx";

export default function MainLayout(){


    return(
        <>
            <HeaderNav/>
            <Outlet/>
        </>
    )
}