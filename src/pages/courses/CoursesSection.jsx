import { Helmet } from "react-helmet-async";
import { Col, Row, Container, Image, Spinner } from "react-bootstrap";

import CourseCard from "./CourseCard.jsx";

import Course from "../../assets/icons/course.png";
import { Link } from "react-router-dom";
import { useGetCoursesQuery } from "../../api/apiSlice.js";
import { useMemo } from "react";

let CourseItem = ({ course, key }) => {
    return (
        <Col sm={12} md={6} lg={3} key={key}>
            <CourseCard
                title={course.title}
                image={course.image}
                link={course.id}
                price={course.price}
            />
        </Col>
    );
};

export default function CoursesSection() {
    const {
        data: courses = [],
        isLoading,
        isSuccess,
        isError,
        isFetching,
        error,
        refetch
    } = useGetCoursesQuery();

    const sortedCourses = useMemo(() => {
        const sortedCourses = courses.slice();
        sortedCourses.sort((a, b) => b.updatedAt.localeCompare(a.updatedAt));
        return sortedCourses;
    }, [courses])

    let content;

    if (isLoading) {
        content = <Spinner animation="border" variant="primary" />;
    } else if (isSuccess) {
        content = sortedCourses.map((course, index) => (
            <CourseItem course={course} key={`course${index}`} />
        ));
    } else if (isError) {
        content = <div>{error}</div>;
    }

    return (
        <Container className="mt-4">
            <div className={"d-flex align-items-center"}>
                <Image
                    src={Course}
                    alt={"course"}
                    className={"mt-2 ms-2"}
                    height={50}
                    width={50}
                />
                <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
            </div>
            <Row className={" mb-4"}>{content}</Row>
        </Container>
    );
}
