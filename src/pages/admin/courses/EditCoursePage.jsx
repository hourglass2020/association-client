import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Container, Form, Row, Button, Col, Alert } from "react-bootstrap";
import Divider from "../../../components/Divider";
import toast from "react-hot-toast";
import Loading from "../../../components/Loading";
import {
    useEditCourseMutation,
    useGetCourseQuery,
} from "../../../api/apiSlice";
import { Helmet } from "react-helmet-async";

export default function EditCoursePage() {
    const [form, setForm] = useState();
    const [validated, setValidated] = useState(false);
    const { courseId } = useParams();
    const navigator = useNavigate();

    const {
        data: course = {},
        isSuccess: isSuccessFetch,
        isLoading,
        error,
    } = useGetCourseQuery(courseId);
    const [
        updateCourse,
        {
            isSuccess,
            error: errorUpdate,
            isLoading: isLoadingEdit,
            isError: isErrorEdit,
        },
    ] = useEditCourseMutation();

    useEffect(() => {
        setForm(course);
    }, [course]);

    if (error) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />;
    }

    const handleChange = (e) => {
        if (e.target.name === "image") {
            setForm({ ...form, [e.target.name]: e.target.files[0] });
            return;
        }
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

        setValidated(true);

        let formData = new FormData();
        formData.append("id", form.id);
        formData.append("startDate", new Date(form.startDate));
        formData.append("endDate", new Date(form.endDate));
        formData.append("title", form.title);
        formData.append("price", form.price);
        formData.append("level", form.level);
        formData.append("length", form.length);
        formData.append("courseType", form.courseType);
        formData.append("image", form.image);
        formData.append("description", form.description);

        try {
            await updateCourse(formData).unwrap();
            if (!isLoadingEdit && !isErrorEdit) {
                navigator("../courses");
            }
        } catch (error) {
            console.error("Failed to save the course", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>ویرایش دوره</title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>ویرایش دوره</h3>
                    <Link to="../courses">
                        <Button variant="warning">بازگشت</Button>
                    </Link>
                </div>
                <Container className="card-box card p-3 mb-2 pt-4">
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
                                    value={form?.title}
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
                                    value={form?.price}
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
                                    value={form?.level}
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
                                    value={form?.courseType}
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
                                    value={form?.courseStatus}
                                    onChange={handleChange}
                                >
                                    <option value="registering">در حال ثبت‌نام</option>
                                    <option value="performing">در حال برگزاری</option>
                                    <option value="finished">به پایان رسیده</option>
                                    <option value="stopped">متوقف شده</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group
                                as={Col}
                                md="4"
                                controlId="formImage"
                                className="mb-3"
                            >
                                <Form.Label>عکس دوره</Form.Label>
                                <Form.Control type="file" onChange={handleChange} />
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
                                    value={form?.description}
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
                                    value={form?.length}
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
                                    value={form?.startDate}
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
                                    name="endDate"
                                    value={form?.endDate}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا تاریخ پایان عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className="d-flex justify-content-end"></div>
                        <Button type="submit">ویرایش دوره</Button>
                    </Form>
                </Container>
            </Container>
        </>
    );
}
