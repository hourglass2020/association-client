import { Outlet } from "react-router-dom";

import HeaderNav from "../components/navs/HeaderNav.jsx";
import FooterNav from "../components/navs/FooterNav.jsx";

export default function MainLayout() {
    return (
        <>
            <HeaderNav />
            <div style={{ minHeight: "90vh" }}>
                <Outlet />
            </div>
            <FooterNav />
        </>
    )
}