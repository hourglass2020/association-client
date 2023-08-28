import React, { useState } from "react";
import { Form, Row, Col, InputGroup, Button, Container } from "react-bootstrap";

import Divider from "../../components/Divider";

export default function DashboardLanding() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container className="mt-4">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Divider text="کلیات دوره" />
                <Row className="my-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label>عنوان دوره</Form.Label>
                        <Form.Control required type="text" placeholder="دوره آرم پیشرفته" />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا مجدد عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="100,000 هزار تومان"
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا قیمت عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>سطح دوره</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="elementry">مقدماتی</option>
                            <option value="intermediate">متوسط</option>
                            <option value="professional">حرفه‌ای</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>نوع دوره</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="course">دوره</option>
                            <option value="webinar">وبینار</option>
                            <option value="seminar">سمینار</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                        <Form.Label>شرایط دوره</Form.Label>
                        <Form.Select aria-label="Default select example">
                            <option value="registering">در حال ثبت‌نام</option>
                            <option value="performing">در حال برگزاری</option>
                            <option value="finished">به پایان رسیده</option>
                            <option value="stopped">متوقف شده</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formFile" className="mb-3">
                        <Form.Label>عکس دوره</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>توضیحات دوره</Form.Label>
                        <Form.Control as="textarea" rows={2} required />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا توضیحات عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Divider text="شرایط زمانی دوره" />
                <Row className="my-3">
                    <Form.Group as={Col} md="4" controlId="validationCustom03">
                        <Form.Label>طول دوره</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 20h 30m"
                            required
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">لطفا طول دوره عنوان چک شود.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom04">
                        <Form.Label>زمان شروع</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 03-06-2023"
                            required
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">لطفا تاریخ شروع عنوان چک شود.</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="validationCustom05">
                        <Form.Label>زمان پایان</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 03-06-2023"
                            required
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">لطفا تاریخ پایان عنوان چک شود.</Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                    <Button type="submit">ثبت نام دوره</Button>
                </div>
            </Form>
        </Container>
    );
}
