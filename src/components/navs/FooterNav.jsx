import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import InfoSection from "./InfoSection";

export default function FooterNav() {
    return (
        <Navbar
            expand={"lg"}
            variant={"dark"}
            className="mt-3"
            style={{ backgroundColor: "#5c00e6" }}
        >
            <Container>
                <InfoSection />
            </Container>
        </Navbar>
    );
}
