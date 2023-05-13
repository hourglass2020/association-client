import {Col, Container, Image, Row} from "react-bootstrap";
import {Helmet} from "react-helmet-async";

import Image1 from "../../assets/images/pic1.jpg";
import Image2 from "../../assets/images/pic2.jpg";
import Image3 from "../../assets/images/pic3.jpg";
import Image4 from "../../assets/images/pic6.jpg";
import Image5 from "../../assets/images/pic5.jpg";

export default function Blog() {
    return (<div>
        <Helmet>
            <title>
                وبلاگ انجمن
            </title>
        </Helmet>
        <Container className={"mt-4"}>
            <Row className={"position-relative"}>
                <Col lg={8} md={12} className={" position-relative h-100"}>
                    <article style={{position: "relative"}}>
                        <Image src={Image2} className={"w-100"} style={{backgroundSize: "cover"}} rounded/>
                        <div className={"intro-item-caption"}></div>
                        <h4 style={{
                            position: "absolute",
                            bottom: "8px",
                            right: "16px",
                            color: "white",
                            zIndex: 10
                        }}>salam</h4>
                    </article>
                </Col>
                <Col lg={4} md={12}>
                    <Row>
                        <Col>

                            <article style={{position: "relative"}}>
                                <Image src={Image3} className={"w-100"} rounded/>
                                <div className={"intro-item-caption"}></div>
                                <h4 style={{
                                    position: "absolute",
                                    bottom: "8px",
                                    right: "16px",
                                    color: "white",
                                    zIndex: 10
                                }}>salam</h4>
                            </article>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Col>

                            <article style={{position: "relative"}}>
                                <Image src={Image3} className={"w-100"} rounded/>
                                <div className={"intro-item-caption"}></div>
                                <h4 style={{
                                    position: "absolute",
                                    bottom: "8px",
                                    right: "16px",
                                    color: "white",
                                    zIndex: 10
                                }}>salam</h4>
                            </article>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className={"mt-4"}>
                <Col lg={8} md={12}>
                    <h3 className={"title"}>جدیدترین مقالات</h3>
                </Col>
                <Col lg={4} md={12}></Col>
            </Row>
        </Container>
    </div>)
}