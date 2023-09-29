import { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import AuthIcon from "../../assets/images/auth.png";
import { Link } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({});

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const formState = event.currentTarget;

        /* 
                if (formState.checkValidity() === false) {
                    event.preventDefault();
                    event.stopPropagation();
                    return;
                } */


        setValidated(true);
    };

    return (
        <Container>
            <Row className='justify-content-center align-items-center mt-5'>
                <Col xs={12} lg={5}>
                    <div className='card-box card p-3'>
                        <h5 className='text-center'>
                            ورود به سایت
                        </h5>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Form.Group controlId="formEmail">
                                <Form.Label>نام کاربری</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="example@gmail.com"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group controlId="formPassword" className='mt-3'>
                                <Form.Label>رمز عبور</Form.Label>
                                <Form.Control
                                    required
                                    type="password"
                                    name="password"
                                    value={form.password}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا قیمت عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button variant='warning' type="submit" className='w-100 mt-4'>ورود</Button>
                            <p className='my-0 mt-3'>
                                آیا حساب کاربری ندارید؟
                                {" "}
                                <Link to="/register">
                                    حساب جدید بسازید!
                                </Link>
                            </p>
                        </Form>
                    </div>
                </Col>
                <Col xs={0} lg={7} className='d-none d-lg-block'>
                    <Image src={AuthIcon} width={'100%'} />
                </Col>
            </Row>
        </Container>
    )
}
