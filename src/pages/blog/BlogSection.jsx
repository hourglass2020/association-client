import { Col, Container, Image, Row, Spinner } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import BlogNews from "./BlogNews.jsx";
import BlogPopular from "./BlogPopular.jsx";
import Article from "../../assets/icons/blog.png";
import { useGetArticlesQuery } from "../../reducers/courseEntity.js";

export default function BlogSection() {

    const { data: articles, isLoading, isError, isSuccess, error } = useGetArticlesQuery();

    let content;

    if (isLoading) {
        content = <Spinner animation="border" variant="primary" />;
    } else if (isSuccess) {
        content = articles.map((article) => (
            <div key={article.id}>
                <BlogNews key={article.id} article={article} />
            </div>
        ));
    } else if (isError) {
        content = <div>{error.message}</div>;
    }

    return (
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

            <Row className={"mt-3"}>
                <Col lg={8} md={12}>
                    <h3 className={"title"}>جدیدترین مقالات</h3>
                    {content}
                    <Row>
                        <Col lg={6} md={12}>
                            <BlogNews />
                        </Col>
                        <Col lg={6} md={12}>
                            <BlogNews />
                        </Col>
                    </Row>
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
    );
}
