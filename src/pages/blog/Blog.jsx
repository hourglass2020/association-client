import { Col, Container, Image, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import BlogSlide from "./BlogSlide.jsx";
import BlogNews from "./BlogNews.jsx";
import BlogPopular from "./BlogPopular.jsx";
import { useSelector } from "react-redux";

export default function Blog() {
    const articles = useSelector((state) => state.articles);

    return (
        <div>
            <Helmet>
                <title>وبلاگ انجمن</title>
            </Helmet>
            <Container className={"mt-4"}>
                <Row className={"position-relative"}>
                    <Col lg={8} md={12} className={" position-relative h-100"}>
                        <BlogSlide />
                    </Col>
                    <Col lg={4} md={12} className={"mt-3 mt-lg-0"}>
                        <Row>
                            <Col>
                                <BlogSlide />
                            </Col>
                        </Row>
                        <Row className={"mt-3"}>
                            <Col>
                                <BlogSlide />
                            </Col>
                        </Row>
                    </Col>
                </Row>

                <Row className={"mt-5"}>
                    <Col lg={8} md={12}>
                        <h3 className={"title"}>جدیدترین مقالات</h3>
                        {articles.map((article) => (
                            <BlogNews key={article.id} article={article} />
                        ))}
                        {/*  <Row>
                        <Col lg={6} md={12}>
                            <BlogNews/>
                        </Col>
                        <Col lg={6} md={12}>
                            <BlogNews/>
                        </Col>
                    </Row> */}
                    </Col>
                    <Col lg={4} md={12}>
                        <h3 className={"title"}>محبوب ترین مقالات</h3>
                        <Row>
                            <BlogPopular />
                        </Row>
                        <Row>
                            <BlogPopular />
                        </Row>
                        <Row>
                            <BlogPopular />
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
