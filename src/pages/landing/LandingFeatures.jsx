import { Col, Container, Row } from "react-bootstrap";

import Magazine from "../../assets/icons/talangor.png";
import Article from "../../assets/icons/blog.png";
import Course from "../../assets/icons/course.png";
import Webinar from "../../assets/icons/webinar.png";
import FeatureCard from "../../components/cards/FeatureCard.jsx";
import toast from "react-hot-toast";

const features = [
    {
        title: "دوره ها",
        image: Course,
        link: "/courses",
    },
    {
        title: "مقالات",
        image: Article,
        link: "/blog",
    },
    {
        title: "وبینارها",
        image: Webinar,
        link: "/webinars",
    },
    {
        title: "نشریه تلنگر",
        image: Magazine,
        link: "/talangor",
    },
];

export default function LandingFeatures() {
    const handleClickTalangor = () => {
        toast.error("در حال بروزرسانی هستیم.", { icon: "🚀" });
    };

    return (
        <Container className={"mb-4 mb-md-0"}>
            <Row className={"mb-4 mb-md-0"}>
                {features.map((feature) => (
                    <Col
                        sm={12}
                        md={6}
                        lg={3}
                        key={feature.title}
                        onClick={feature.link === "/talangor" ? handleClickTalangor : null}
                    >
                        <FeatureCard
                            image={feature.image}
                            title={feature.title}
                            link={feature.link}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}
