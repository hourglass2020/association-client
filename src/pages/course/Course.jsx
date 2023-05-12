import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import {Helmet} from "react-helmet-async";

import GitImage from "../../assets/images/pic4.png"
import CourseDescription from "./CourseDescription.jsx";
import CourseContent from "./CourseContents.jsx";
import CourseComments from "./CourseComments.jsx";
import CourseInfo from "./CourseInfo.jsx";

export default function Course() {

    const {courseId} = useParams();

    return (<div>
        <Helmet>
            <title>{`دوره ${courseId}`}</title>
        </Helmet>
        <Container className={"mt-4"}>
            <Row>
                <Col sm={12} lg={4}>
                    <CourseInfo/>
                    <Card className={"card-box card mt-4 d-none d-md-block"}>
                        <Card.Header className={"bg-body"}>
                            دوره های دیگر
                        </Card.Header>
                        <Card.Body>
                            دورهای دیگر
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={8}>
                    <CourseDescription courseId={courseId}/>
                    <CourseContent contents={courseContents}/>
                    <CourseComments comments={courseComments}/>
                </Col>
            </Row>
        </Container>
    </div>)
}

const courseComments = [
    {
        name: "پوریا",
        comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22"
    }, {
        name: "پوریا",
        comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22"
    }, {
        name: "پوریا",
        comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22"
    }, {
        name: "پوریا",
        comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22"
    }, {
        name: "پوریا",
        comment: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        date: "1401/02/22"
    },
]

const courseContents = [{
    title: "عنوان 1",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
}, {
    title: "عنوان 2",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
}, {
    title: "عنوان 3",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
}, {
    title: "عنوان 4",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
}, {
    title: "عنوان 5",
    content: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است."
},]