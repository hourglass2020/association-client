import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { courseUpdated, selectCourseById } from "../../../reducers/courseSlice";
import { Container, Form, Row, Button, Col, Alert } from "react-bootstrap";
import Divider from "../../../components/Divider";

export default function EditCourse() {
    const { courseId } = useParams();
    const navigator = useNavigate();
    const dispatch = useDispatch();

    const course = useSelector(state => selectCourseById(state, courseId));

    if (!course) {
        return (
            <div style={{ margin: "2%" }}>
                <Alert variant="danger">دوره مورد نظر موجود نیست.</Alert>
                <Link to={"/courses"}>
                    <Button>برگشت به دوره ها</Button>
                </Link>
            </div>
        )
    }

    const [form, setForm] = useState(course);

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
        console.log("salam")

        dispatch(courseUpdated(form));

        navigator(`../../courses/${courseId}`);

        setValidated(true);
    };

    return (
        <Container className="mt-4">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Divider text="کلیات دوره" />
                <Row className="my-3">
                    <Form.Group as={Col} md="4" controlId="formTitle">
                        <Form.Label>عنوان دوره</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            placeholder="دوره آرم پیشرفته"
                            name="title"
                            value={form.title}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا مجدد عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formPrice">
                        <Form.Label>قیمت</Form.Label>
                        <Form.Control
                            required
                            type="number"
                            placeholder="100,000 هزار تومان"
                            name="price"
                            value={form.price}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا قیمت عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formLevel">
                        <Form.Label>سطح دوره</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            name="level"
                            value={form.level}
                            onChange={handleChange}
                        >
                            <option value="elementry">مقدماتی</option>
                            <option value="intermediate">متوسط</option>
                            <option value="professional">حرفه‌ای</option>
                        </Form.Select>
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} md="4" controlId="formCourseType">
                        <Form.Label>نوع دوره</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            name="courseType"
                            value={form.courseType}
                            onChange={handleChange}
                        >
                            <option value="course">دوره</option>
                            <option value="webinar">وبینار</option>
                            <option value="seminar">سمینار</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formCourseStatus">
                        <Form.Label>شرایط دوره</Form.Label>
                        <Form.Select
                            aria-label="Default select example"
                            name="courseStatus"
                            value={form.courseStatus}
                            onChange={handleChange}
                        >
                            <option value="registering">در حال ثبت‌نام</option>
                            <option value="performing">در حال برگزاری</option>
                            <option value="finished">به پایان رسیده</option>
                            <option value="stopped">متوقف شده</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formImage" className="mb-3">
                        <Form.Label>عکس دوره</Form.Label>
                        <Form.Control type="file" />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group className="mb-3" controlId="formDescription">
                        <Form.Label>توضیحات دوره</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={2}
                            required
                            name="description"
                            value={form.description}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا توضیحات عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <Divider text="شرایط زمانی دوره" />
                <Row className="my-3">
                    <Form.Group as={Col} md="4" controlId="formLength">
                        <Form.Label>طول دوره</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 20h 30m"
                            required
                            name="length"
                            value={form.length}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا طول دوره عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formStartDate">
                        <Form.Label>زمان شروع</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 03-06-2023"
                            required
                            name="startDate"
                            value={form.startDate}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا تاریخ شروع عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="formEndDate">
                        <Form.Label>زمان پایان</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="به عنوان مثال: 03-06-2023"
                            required
                            name="endDate"
                            value={form.endDate}
                            onChange={handleChange}
                        />
                        <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            لطفا تاریخ پایان عنوان چک شود.
                        </Form.Control.Feedback>
                    </Form.Group>
                </Row>
                <div className="d-flex justify-content-end">
                </div>
                <Button type="submit">ویرایش دوره</Button>
            </Form>
        </Container>
    );
}
