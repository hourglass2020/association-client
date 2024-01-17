import { useState } from 'react';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import AuthIcon from "../../assets/images/auth.png";
import { registerStudent } from '../../services/studentServices';

export default function Register() {
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

        const { data, status } = await registerStudent(form);

        if (status === 201) {
            navigator("/login");
            toast.success("ثبت نام با موفقیت انجام شد.");
        }

        setValidated(true);
    };

    return (
        <Container>
            <Row className='justify-content-center align-items-center mt-5'>
                <Col xs={12} lg={5}>
                    <div className='card-box card p-3'>
                        <h5 className='text-center'>
                            ثبت نام در سایت
                        </h5>
                        <Form noValidate validated={validated} onSubmit={handleSubmit}>
                            <Row className="my-3">
                                <Form.Group as={Col} xs="6" controlId="formFirstname">
                                    <Form.Label>نام</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="firstname"
                                        value={form.firstname}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group as={Col} xs="6" controlId="formTitle">
                                    <Form.Label>نام خانوادگی</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="lastname"
                                        value={form.lastname}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="formEmail" className='mt-3'>
                                    <Form.Label>ایمیل</Form.Label>
                                    <Form.Control
                                        required
                                        type="email"
                                        name="email"
                                        value={form.email}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا قیمت عنوان چک شود.
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
                            </Row>
                            <Button variant='warning' type="submit" className='w-100 mt-2'>ثبت نام</Button>
                            <p className='my-0 mt-3'>
                                آیا حساب کاربری دارید؟
                                {" "}
                                <Link to="/login">
                                    ورود کنید!
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
