import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import LandingFeatures from "../../pages/landing/LandingFeatures";
import LandingHeader from "../../pages/landing/LandingHeader";

export default function FooterNav() {
    return (
        <Navbar
            expand={"lg"}
            variant={"dark"}
            style={{ backgroundColor: "#5c00e6" }}
        >
            <Container>
                <LandingHeader />
            </Container>
        </Navbar>
    );
}
