import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import HeaderSlide from "../../components/landing/HeaderSlide.jsx";
import BlogNews from "./BlogNews.jsx";
import BlogPopular from "./BlogPopular.jsx";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchArticles,
    selectAllArticles,
} from "../../reducers/articleSlice.js";
import { useEffect } from "react";
import Article from "../../assets/icons/blog.png";

export default function Blog() {
    const dispatch = useDispatch();
    const articleStatus = useSelector((state) => state.articles.status);
    const articles = useSelector(selectAllArticles);
    const error = useSelector((state) => state.error);

    useEffect(() => {
        if (articleStatus === "idle") {
            dispatch(fetchArticles());
        }
    }, [articleStatus, dispatch]);

    let content;

    if (articleStatus === "loading") {
        content = <Spinner animation="border" variant="primary" />;
    } else if (articleStatus === "completed") {
        content = articles.map((article) => (
            <div key={article.id}>
                <BlogNews key={article.id} article={article} />
            </div>
        ));
    } else if (articleStatus === "failed") {
        content = <div>{error}</div>;
    }

    return (
        <div>
            <Helmet>
                <title>وبلاگ انجمن</title>
            </Helmet>
            <Container className={"mt-4"}>
                <div className={"d-flex align-items-center mb-3"}>
                    <Image
                        src={Article}
                        alt={"article"}
                        className={"mt-2 ms-2"}
                        height={50}
                        width={50}
                    />
                    <h3 className={"mt-4"}>وبلاگ انجمن علمی برق</h3>
                </div>
                <Row className={"position-relative"}>
                    <Col lg={8} md={12} className={" position-relative h-100"}>
                        <HeaderSlide />
                    </Col>
                    <Col lg={4} md={12} className={"mt-3 mt-lg-0"}>
                        <Row>
                            <Col>
                                <HeaderSlide />
                            </Col>
                        </Row>
                        <Row className={"mt-3"}>
                            <Col>
                                <HeaderSlide />
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
