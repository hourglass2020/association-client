import { Col, Container, Form, Image, Row, Tab, Tabs } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async';

import AuthIcon from "../../assets/images/auth.png";
import StudentLogin from '../../components/auth/StudentLogin';
import TeacherLogin from '../../components/auth/TeacherLogin';
import AdminLogin from '../../components/auth/AdminLogin';

export default function Login() {
    return (
        <>
            <Helmet>
                <title>
                    ورود | ثبت نام
                </title>
            </Helmet>
            <Container>
                <Row className='justify-content-center align-items-center mt-5'>
                    <Col xs={12} lg={5}>
                        <div className='card-box card p-3'>
                            <h5 className='text-center mb-4'>
                                ورود به سایت
                            </h5>
                            <Tabs fill>
                                <Tab eventKey={"student"} title="دانشجو">
                                    <StudentLogin />
                                </Tab>
                                <Tab eventKey={"teacher"} title="مدرس">
                                    <TeacherLogin />
                                </Tab>
                                <Tab eventKey={"admin"} title="ادمین">
                                    <AdminLogin />
                                </Tab>
                            </Tabs>
                        </div>
                    </Col>
                    <Col xs={0} lg={7} className='d-none d-lg-block'>
                        <Image src={AuthIcon} width={'100%'} />
                    </Col>
                </Row>
            </Container>
        </>

    )
}
