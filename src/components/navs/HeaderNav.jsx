import {Container, Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";


export default function HeaderNav() {
    return (
        <Navbar bg={"dark"} expand={"lg"} variant={"dark"}>
            <Container>
                <Link to={"/"} style={{textDecoration: "none"}}>
                    <Navbar.Brand>انجمن علمی برق</Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls={"navbar-collapse"}></Navbar.Toggle>
                <Navbar.Collapse id={"navbar-collapse"} className={"mt-1 me-2"}>
                    <Nav>
                        <Nav.Link>درباره انجمن</Nav.Link>
                        <Nav.Link>ارتباط با ما</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}