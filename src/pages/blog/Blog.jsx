import {Col, Container, Image, Row} from "react-bootstrap";
import {Helmet} from "react-helmet-async";

import Image1 from "../../assets/images/pic1.jpg";
import Image2 from "../../assets/images/pic2.jpg";
import Image3 from "../../assets/images/pic3.jpg";
import Image4 from "../../assets/images/pic6.jpg";
import Image5 from "../../assets/images/pic5.jpg";
import BlogSlide from "./BlogSlide.jsx";
import BlogNews from "./BlogNews.jsx";
import BlogPopular from "./BlogPopular.jsx";

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
                    <BlogSlide/>
                </Col>
                <Col lg={4} md={12} className={"mt-3 mt-lg-0"}>
                    <Row>
                        <Col>
                            <BlogSlide/>
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Col>
                            <BlogSlide/>
                        </Col>
                    </Row>
                </Col>
            </Row>


            <Row className={"mt-5"}>
                <Col lg={8} md={12}>
                    <h3 className={"title"}>جدیدترین مقالات</h3>
                    <BlogNews/>
                    <Row>
                        <Col lg={6} md={12}>
                            <BlogNews/>
                        </Col>
                        <Col lg={6} md={12}>
                            <BlogNews/>
                        </Col>
                    </Row>
                </Col>
                <Col lg={4} md={12}>
                    <h3 className={"title"}>محبوب ترین مقالات</h3>
                    <Row>
                        <BlogPopular/>
                    </Row>
                    <Row>
                        <BlogPopular/>
                    </Row>
                    <Row>
                        <BlogPopular/>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>)
}