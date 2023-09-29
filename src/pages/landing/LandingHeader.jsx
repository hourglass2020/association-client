import { Col, Container, Row } from "react-bootstrap";
import { useCallback } from "react";
import { loadFull } from "tsparticles";

import Logo from "../../assets/images/logo.png";
import { BsFillPinMapFill, BsFillTelephoneFill, BsMapFill } from "react-icons/all.js";

export default function LandingHeader() {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine)
    }, []);

    const particleLoaded = useCallback(async container => {
        await console.log(container);
    }, []);

    return (
        <Container style={{
            height: "65vh",
        }}>
            {/*<Particles id={"tsparticles"} init={particlesInit} loaded={particleLoaded} options={links}/>*/}
            <Row className={"h-100"}>
                <Col sm={12} md={2} className={"d-flex flex-column justify-content-center align-items-center"}
                >
                    <img src={Logo} style={{ width: "100%", maxWidth: 200, minWidth: 150 }} alt={"eesa logo"} />
                </Col>
                <Col sm={12} md={10}
                    className={"d-flex flex-column align-items-center justify-content-start align-items-md-start justify-content-md-center"}
                >
                    <h1 className={"d-none d-md-block"}>انجمن علمی برق </h1>
                    <h2 className={"d-none d-md-block"}>دانشگاه خواجه نصیرالدین طوسی</h2>
                    <p className={"mt-1 w-75 text-center text-md-end"}>
                        <BsFillPinMapFill className={"ms-2"} />
                        تهران - خیابان شریعتی ضلع جنوب شرقی پل سید خندان صندوق پستی ۱۳۵۵-۱۶۳۱۵
                    </p>
                    <p className={"mt-1"}>
                        <BsFillTelephoneFill className={"ms-2"} />
                        09037892696
                    </p>
                </Col>
            </Row>
        </Container>
    )
}