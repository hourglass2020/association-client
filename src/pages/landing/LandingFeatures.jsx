import {Col, Container, Row} from "react-bootstrap";

import Magazine from "../../assets/icons/talangor.png";
import Article from "../../assets/icons/blog.png";
import Course from "../../assets/icons/course.png";
import Webinar from "../../assets/icons/webinar.png";
import FeatureCard from "../../components/cards/FeatureCard.jsx";

const features = [
    {
        title: "دوره ها", image: Course, link: "/courses"
    },
    {
        title: "مقالات", image: Article, link: "/blog"
    },
    {
        title: "وبینارها", image: Webinar, link: "/webinars"
    },
    {
        title: "نشریه تلنگر", image: Magazine, link: "/talangor"
    }
]

export default function LandingFeatures() {
    return (
        <Container className={"mb-4 mb-md-0"}>
            <Row className={"mb-4 mb-md-0"}>
                {
                    features.map(feature => (
                        <Col md={12} lg={3} key={feature.title}>
                            <FeatureCard image={feature.image} title={feature.title} link={feature.link}/>
                        </Col>
                    ))
                }
            </Row>
        </Container>)
}