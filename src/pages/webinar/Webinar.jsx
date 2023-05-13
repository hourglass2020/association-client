import {Link, useParams} from "react-router-dom";
import {Button, Card, Col, Container, Image, ListGroup, Row} from "react-bootstrap";
import {Helmet} from "react-helmet-async";

import GitImage from "../../assets/images/pic4.png"
import WebinarDescription from "./WebinarDescription.jsx";
import WebinarContent from "./WebinarContents.jsx";
import WebinarComments from "./WebinarComments.jsx";
import WebinarInfo from "./WebinarInfo.jsx";

export default function Webinar() {

    const {webinarId} = useParams();

    return (<div>
        <Helmet>
            <title>{`دوره ${webinarId}`}</title>
        </Helmet>
        <Container className={"mt-4"}>
            <Row>
                <Col sm={12} lg={4}>
                    <WebinarInfo/>
                    <Card className={"card-box card mt-4 d-none d-md-block"}>
                        <Card.Header className={"bg-body"}>
                            وبینارهای دیگر
                        </Card.Header>
                        <Card.Body>
                            وبینارهای دیگر
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12} lg={8}>
                    <WebinarDescription courseId={webinarId}/>
                    <WebinarContent contents={webinarContents}/>
                    <WebinarComments comments={webinarComments}/>
                </Col>
            </Row>
        </Container>
    </div>)
}

const webinarComments = [
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

const webinarContents = [{
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