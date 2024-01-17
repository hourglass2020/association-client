import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Form, Row, Button, Col, Alert } from "react-bootstrap";
import toast from "react-hot-toast";

import { useGetAdminCourseQuery } from "../../../api/apiSlice";
import Loading from "../../../components/Loading";
import Divider from "../../../components/Divider";
import { Helmet } from "react-helmet-async";

export default function AdminCourseDetails() {
    const { courseId } = useParams();

    const { data: course, isError, isLoading } = useGetAdminCourseQuery(courseId);

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />
    }

    return (
        <>
            <Helmet>
                <title>
                    دوره {course.title}
                </title>
            </Helmet>

            <Container>
                <div className='d-flex my-3 justify-content-between'>
                    <h3>دوره {course.title}</h3>
                    <Link to="../courses">
                        <Button variant='warning'>بازگشت</Button>
                    </Link>
                </div>
                <Container className='card-box card p-3 mb-2 pt-4'>
                    <Form noValidate>
                        <Divider text="کلیات دوره" />
                        <Row className="my-3">
                            <Form.Group as={Col} md="4" controlId="formTitle" >
                                <Form.Label>عنوان دوره</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    placeholder="دوره آرم پیشرفته"
                                    name="title"
                                    value={course.title}
                                    readOnly
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formPrice" >
                                <Form.Label>قیمت</Form.Label>
                                <Form.Control
                                    required
                                    type="number"
                                    placeholder="100,000 هزار تومان"
                                    name="price"
                                    value={course.price}
                                    readOnly
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا قیمت عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formLevel" >
                                <Form.Label>سطح دوره</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    name="level"
                                    value={course.level}
                                    readOnly
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
                                    value={course.courseType}
                                    readOnly
                                >
                                    <option value="course">دوره</option>
                                    <option value="webinar">وبینار</option>
                                    <option value="seminar">سمینار</option>
                                </Form.Select>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formCourseStatus" readOnly>
                                <Form.Label>شرایط دوره</Form.Label>
                                <Form.Select
                                    aria-label="Default select example"
                                    name="courseStatus"
                                    value={course.courseStatus}
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
                                    value={course.description}
                                    readOnly
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
                                    value={course.length}
                                    readOnly
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
                                    value={course.startDate}
                                    readOnly
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
                                    value={course?.endDate}
                                    readOnly
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا تاریخ پایان عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <div className="d-flex justify-content-end">
                        </div>
                    </Form>
                </Container>
            </Container>
        </>
    )
}
