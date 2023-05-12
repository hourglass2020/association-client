import {Helmet} from "react-helmet-async";
import {Col, Row, Container} from "react-bootstrap";

import GitImage from "../../assets/images/pic4.png"
import ManageImage from "../../assets/images/pic5.jpg"
import CourseCard from "./CourseCard.jsx";

const courseData = [
    {
        title: "دوره آموزشی گیت",
        image: GitImage,
        price: 120000,
        link: "/courses/git"
    }, {
        title: "دوره آموزشی مدیریت",
        image: ManageImage,
        price: 150000,
        link: "/courses/management"
    },
]

export function Courses() {
    return (
        <div>
            <Helmet>
                <title>دوره های انجمن</title>
            </Helmet>
            <Container>
                <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
                <Row className={"mt-3 mb-4"}>
                    {
                        courseData.map(course => (
                            <Col sm={12} md={6} lg={3} key={course.title}>
                                <CourseCard title={course.title}
                                            image={course.image}
                                            link={course.link}
                                            price={course.price}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}