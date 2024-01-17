import { useContext } from "react";
import { Button, Container, Dropdown, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../context/Auth/context";
import { FaUserCircle } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { isEmpty } from "lodash";
import ThemeToggle from "./ThemeToggle";

const features = [
    {
        title: "دوره ها",
        link: "/courses",
    },
    {
        title: "مقالات",
        link: "/blog",
    },
    /*   {
            title: "وبینارها",
            link: "/webinars",
        }, */
    {
        title: "نشریه تلنگر",
        link: "/talangor",
    },
];

export default function HeaderNav() {
    const { isLoggedIn, user } = useContext(AuthContext);

    return (
        <Navbar
            expand={"lg"}
            sticky="top"
            variant={"dark"}
            style={{ backgroundColor: "#5c00e6" }}
        >
            <Container>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Navbar.Brand>انجمن علمی برق</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls={"navbar-collapse"}></Navbar.Toggle>
                <Navbar.Collapse id={"navbar-collapse"} className={"mt-1 me-2"}>
                    <Nav className="w-100">
                        {features.map((feature) => (
                            <NavLink
                                key={feature.link}
                                to={feature.link}
                                style={{ textDecoration: "none", color: "white" }}
                            >
                                <Nav.Link>
                                    {feature.title}
                                </Nav.Link>
                            </NavLink>
                        ))}
                        {isLoggedIn ? (
                            <NavDropdown className="p-2 d-lg-none w-100"
                                title={
                                    <>
                                        <FaUserCircle className="mx-1" size={"1.5rem"} />
                                        {`${user.firstname} ${user.lastname}`}
                                    </>
                                }>

                                <Link to={`/${getType()}-panel`} style={{ textDecoration: "none" }}>
                                    <NavDropdown.Item href="#/action-1">
                                        داشبورد
                                    </NavDropdown.Item>
                                </Link>
                                <Link to="/logout" className="text-decoration-none">
                                    <NavDropdown.Item href="#/action-2">خروج</NavDropdown.Item>
                                </Link>
                            </NavDropdown>
                        ) : (
                            <Link to="/login" className="d-lg-none">
                                <Button variant="warning" className="w-100">
                                    ورود / ثبت نام
                                </Button>
                            </Link>
                        )}
                    </Nav>
                </Navbar.Collapse>

                {isLoggedIn ? (
                    <NavDropdown className="bg-warning card text-dark p-2 d-none d-lg-block"
                        title={
                            <>
                                <FaUserCircle className="mx-1" size={"1.5rem"} />
                                {`${user.firstname} ${user.lastname}`}
                            </>
                        }>

                        <Link to={`/${getType()}-panel`} style={{ textDecoration: "none" }}>
                            <NavDropdown.Item href="#/action-1">
                                داشبورد
                            </NavDropdown.Item>
                        </Link>
                        <Link to="/logout" className="text-decoration-none">
                            <NavDropdown.Item href="#/action-2">خروج</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                ) : (
                    <Link to="/login" className="d-none d-lg-block">
                        <Button variant="warning">ورود / ثبت نام</Button>
                    </Link>
                )}
            </Container>
            <ThemeToggle />
        </Navbar>
    );
}


const getType = () => {
    const token = localStorage.getItem("token");
    if (isEmpty(token)) {
        return ""
    }
    const data = jwtDecode(token);
    return data.user.type;
}