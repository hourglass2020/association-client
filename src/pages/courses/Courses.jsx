import {Helmet} from "react-helmet-async";
import {Col, Row, Container, Image} from "react-bootstrap";

import CourseCard from "./CourseCard.jsx";

import GitImage from "../../assets/images/pic4.png"
import ManageImage from "../../assets/images/pic5.jpg"
import Image1 from "../../assets/images/pic1.jpg"
import Image2 from "../../assets/images/pic2.jpg"
import Image3 from "../../assets/images/pic3.jpg"
import Course from "../../assets/icons/course.png";

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
    }, {
        title: "دوره 1",
        image: Image1,
        price: 150000,
        link: "/courses/course1"
    }, {
        title: "دوره 2",
        image: Image2,
        price: 150000,
        link: "/courses/course2"
    }, {
        title: "دوره 3",
        image: Image3,
        price: 150000,
        link: "/courses/course3"
    },
]

export function Courses() {
    return (
        <div>
            <Helmet>
                <title>دوره های انجمن</title>
            </Helmet>
            <Container>
                <div className={"d-flex align-items-center"}>
                    <Image src={Course} alt={"course"} className={"mt-2 ms-2"} height={50} width={50}/>
                    <h3 className={"mt-4"}>دوره های انجمن علمی برق</h3>
                </div>
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