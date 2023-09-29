import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function HeaderNav() {
    return (
        <Navbar expand={"lg"} variant={"dark"} style={{ backgroundColor: "#5c00e6" }}>
            <Container>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                    <Navbar.Brand>انجمن علمی برق</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls={"navbar-collapse"}></Navbar.Toggle>
                <Navbar.Collapse id={"navbar-collapse"} className={"mt-1 me-2"}>
                    <Nav className="w-100">
                        <Nav.Link>درباره انجمن</Nav.Link>
                        <Nav.Link>ارتباط با ما</Nav.Link>
                        <Link to="/login" className="d-lg-none">
                            <Button variant="warning" className="w-100">ورود / ثبت نام</Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
                <Link to="/login" className="d-none d-lg-block">
                    <Button variant="warning">ورود / ثبت نام</Button>
                </Link>
            </Container>
        </Navbar>
    )
}