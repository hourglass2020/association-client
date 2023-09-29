import { Col, Row } from "react-bootstrap";

import Logo from "../../assets/images/logo-white.png";
import {
    BsFillPinMapFill,
    BsFillTelephoneFill,
    BsMapFill,
} from "react-icons/all.js";

export default function LandingHeader() {
    return (
        <div className="w-100">
            <Row className={"mt-2"}>
                <Col
                    sm={12}
                    md={2}
                    className={
                        "d-flex flex-column justify-content-center align-items-center"
                    }
                >
                    <img
                        src={Logo}
                        style={{ width: "100%", maxWidth: 180, minWidth: 150 }}
                        alt={"eesa logo"}
                    />
                </Col>
                <Col
                    sm={12}
                    md={10}
                    className={
                        "d-flex flex-column align-items-center justify-content-start align-items-md-start justify-content-md-center"
                    }
                >
                    <h5 className={"d-none d-md-block text-light"}>انجمن علمی برق </h5>
                    <h6 className={"d-none d-md-block  text-light"}>
                        دانشگاه خواجه نصیرالدین طوسی
                    </h6>
                    <p className={"mt-1 w-75 text-center text-md-end text-light"}>
                        <BsFillPinMapFill className={"ms-2"} />
                        تهران - خیابان شریعتی ضلع جنوب شرقی پل سید خندان صندوق پستی ۱۳۵۵-۱۶۳۱۵
                    </p>
                    <p className={"mt-1 text-light"}>
                        <BsFillTelephoneFill className={"ms-2"} />
                        09037892696
                    </p>
                </Col>
            </Row>
        </div>
    );
}
