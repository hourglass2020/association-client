import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import BlogSlide from "./BlogSlide.jsx";
import BlogNews from "./BlogNews.jsx";
import BlogPopular from "./BlogPopular.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles, selectAllArticles } from "../../reducers/articleSlice.js";
import { useEffect } from "react";

export default function Blog() {
    const dispatch = useDispatch();
    const articleStatus = useSelector(state => state.articles.status);
    const articles = useSelector(selectAllArticles);
    const error = useSelector(state => state.error);

    useEffect(() => {
        if (articleStatus === 'idle') {
            dispatch(fetchArticles());
        }
    }, [articleStatus, dispatch])

    let content;

    if (articleStatus === "loading") {
        content = <Spinner animation="border" variant="primary" />;
    } else if (articleStatus === "completed") {
        content = articles.map((article) => (
            <BlogNews key={article.id} article={article} />
        ));
    } else if (articleStatus === "failed") {
        content = <div>{error}</div>
    }


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
                        {content}
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
