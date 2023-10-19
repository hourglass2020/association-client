import { useDispatch, useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";
import { Col, Row, Container, Image, Spinner } from "react-bootstrap";

import CourseCard from "./CourseCard.jsx";

import Course from "../../assets/icons/course.png";
import { Link } from "react-router-dom";
import { fetchCourses, selectAllCourses } from "../../reducers/courseSlice.js";
import { useEffect } from "react";

export function Courses() {
    const dispatch = useDispatch();
    const courses = useSelector(selectAllCourses);
    const courseStatus = useSelector(state => state.courses.status);
    const error = useSelector(state => state.error);

    useEffect(() => {
        if (courseStatus === "idle") {
            dispatch(fetchCourses());
        }
    }, [courseStatus, dispatch]);

    let content;

    if (courseStatus === "loading") {
        content = <Spinner animation="border" variant="primary" />;
    } else if (courseStatus === "completed") {
        content = courses.map(course => (
            <Col sm={12} md={6} lg={3} key={course.id}>
                <CourseCard title={course.title}
                    image={course.image}
                    link={course.id}
                    price={course.price} />
            </Col>
        ));
    } else if (courseStatus === "failed") {
        content = <div>{error}</div>;
    }

    return (
        <div>
            {/*   <Helmet>
                <title>دوره های انجمن</title>
            </Helmet> */}
            <Container>
                <div className={"d-flex align-items-center"}>
                    <Image src={Course} alt={"course"} className={"mt-2 ms-2"} height={50} width={50} />
                    <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
                </div>
                <Row className={" mb-4"}>
                    {
                        content
                    }
                </Row>
            </Container>
        </div>
    )
}