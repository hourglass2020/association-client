import { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap'

import AuthIcon from "../../assets/images/auth.png";
import { Link, useNavigate } from 'react-router-dom';
import { loginTeacher } from '../../services/teacherServices';
import toast from 'react-hot-toast';

export default function Login() {
    const navigator = useNavigate();
    const [form, setForm] = useState({});

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formState = event.currentTarget;

        if (formState.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const { data, status } = await loginTeacher(form);

        if (status === 200) {
            localStorage.setItem("token", data.token);
            navigator("/teacher-panel");
            toast.success("ورود با موفقیت انجام شد.");
        }


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
                                    لطفا مجدد نام کاربری چک شود.
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
                                    لطفا رمز عبور چک شود.
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
