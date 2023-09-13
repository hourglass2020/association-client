import { Link, useNavigate, useParams } from "react-router-dom";
import { Alert, Button, Card, Col, Container, Row } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

import CourseDescription from "./CourseDescription.jsx";
import CourseContent from "./CourseContents.jsx";
import CourseComments from "./CourseComments.jsx";
import CourseInfo from "./CourseInfo.jsx";
import { useDispatch, useSelector } from "react-redux";
import { courseDeleted, selectCourseById } from "../../reducers/courseSlice.js";

export default function Course() {
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const { courseId } = useParams();
    const course = useSelector(state => selectCourseById(state, courseId));

    if (!course) {
        return (
            <div style={{ margin: "2%" }}>
                <Alert variant="danger">دوره مورد نظر موجود نیست.</Alert>
                <Link to={"/courses"}>
                    <Button>برگشت به دوره ها</Button>
                </Link>
            </div>
        );
    }

    const handleDelete = () => {
        if (course) {
            dispatch(courseDeleted({ id: course.id }));
            navigator("/courses");
        }
    }

    return (
        <div>
            <Helmet>
                <title>{`دوره ${course.title}`}</title>
            </Helmet>
            <Container className={"mt-4"}>
                <Row>

                    <Button
                        onClick={() => navigator(`../dashboard/edit-course/${courseId}`)}
                    >
                        ویرایش دوره
                    </Button>

                    <Button variant="danger" onClick={handleDelete}>
                        حذف دوره
                    </Button>
                </Row>
                <Row>
                    <Col sm={12} lg={4}>
                        <CourseInfo data={course} />
                        <Card className={"card-box card mt-4 d-none d-md-block"}>
                            <Card.Header className={"bg-body"}>دوره های دیگر</Card.Header>
                            <Card.Body>دورهای دیگر</Card.Body>
                        </Card>
                    </Col>
                    <Col sm={12} lg={8}>
                        <CourseDescription data={course} />
                        <CourseContent contents={courseContents} />
                        <CourseComments comments={courseComments} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const courseComments = [
    {
        name: "پوریا",
        comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22",
    },
    {
        name: "پوریا",
        comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22",
    },
    {
        name: "پوریا",
        comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22",
    },
    {
        name: "پوریا",
        comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22",
    },
    {
        name: "پوریا",
        comment:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22",
    },
];

const courseContents = [
    {
        title: "عنوان 1",
        content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        title: "عنوان 2",
        content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        title: "عنوان 3",
        content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        title: "عنوان 4",
        content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
    {
        title: "عنوان 5",
        content:
            "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
    },
];
