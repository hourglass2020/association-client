import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Col, Row, Container, Image } from "react-bootstrap";

import CourseCard from "./CourseCard.jsx";

import Course from "../../assets/icons/course.png";
import { Link } from "react-router-dom";

export function Courses() {

    const courses = useSelector(state => state.courses);


    return (
        <div>
            <Helmet>
                <title>دوره های انجمن</title>
            </Helmet>
            <Container>
                <div className={"d-flex align-items-center"}>
                    <Image src={Course} alt={"course"} className={"mt-2 ms-2"} height={50} width={50} />
                    <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
                    <Link to="../dashboard">افزودن دوره جدید</Link>
                </div>
                <Row className={"mt-3 mb-4"}>
                    {
                        courses.map(course => (
                            <Col sm={12} md={6} lg={3} key={course.id}>
                                <CourseCard title={course.title}
                                    image={course.image}
                                    link={course.id}
                                    price={course.price} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}