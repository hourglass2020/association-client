import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaUserCircle } from 'react-icons/fa'
import SidebarContent from "../sidebar/SidebarContent";


export default function DashboardNav({ items }) {
    return (
        <Navbar expand={"lg"} variant={"dark"} className="w-100 d-block d-lg-none" style={{ backgroundColor: "#5c00e6" }}>
            <Container>
                <div className='card card-box bg-warning p-2 d-flex flex-row align-items-center'>
                    <FaUserCircle className="mx-1" size={"1.5rem"} />
                    پوریا اقدم پور
                </div>
                <Navbar.Toggle aria-controls={"navbar-collapse"}></Navbar.Toggle>
                <Navbar.Collapse id={"navbar-collapse"} className={"mt-1 me-2"}>
                    <SidebarContent itemsRef={items} />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}