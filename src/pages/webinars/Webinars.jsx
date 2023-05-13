import {Helmet} from "react-helmet-async";
import {Col, Row, Container, Image} from "react-bootstrap";

import GitImage from "../../assets/images/pic4.png"
import ManageImage from "../../assets/images/pic5.jpg"
import Image1 from "../../assets/images/pic1.jpg"
import Webinar from "../../assets/icons/webinar.png";
import WebinarCard from "./WebinarCard.jsx";

const webinarData = [
    {
        title: "دوره آموزشی گیت",
        image: GitImage,
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        price: 120000,
        link: "/webinars/git"
    }, {
        title: "دوره آموزشی مدیریت",
        image: ManageImage,
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        price: 150000,
        link: "/webinars/management"
    }, {
        title: "دوره 1",
        image: Image1,
        price: 150000,
        description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
        link: "/webinars/course1"
    }
]

export function Webinars() {
    return (
        <div>
            <Helmet>
                <title>دوره های انجمن</title>
            </Helmet>
            <Container>
                <div className={"d-flex align-items-center"}>
                    <Image src={Webinar} alt={"course"} className={"mt-2 ms-2"} height={50} width={50}/>
                    <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
                </div>
                <Row className={"mt-3 mb-4"}>
                    {
                        webinarData.map(webinar => (
                            <Col sm={12} lg={6} key={webinar.title}>
                                <WebinarCard title={webinar.title}
                                             image={webinar.image}
                                             link={webinar.link}
                                             description={webinar.description}
                                             price={webinar.price}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}