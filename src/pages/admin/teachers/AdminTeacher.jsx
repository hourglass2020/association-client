import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Container, Form, Row, Button, Col, Alert } from "react-bootstrap";
import toast from "react-hot-toast";

import { useGetAdminCourseQuery, useGetAdminTeacherQuery } from "../../../api/apiSlice";
import Loading from "../../../components/Loading";
import Divider from "../../../components/Divider";
import { Helmet } from "react-helmet-async";

export default function AdminTeacher() {
    const { teacherId } = useParams();

    const { data: teacher, isError, isLoading } = useGetAdminTeacherQuery(teacherId);

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
                    {`${teacher.Profile.firstname} ${teacher.Profile.lastname}`}
                </title>
            </Helmet>

            <Container>
                <div className='d-flex my-3 justify-content-between'>
                    <h3>                    {`${teacher.Profile.firstname} ${teacher.Profile.lastname}`}
                    </h3>
                    <Link to="../teachers">
                        <Button variant='warning'>بازگشت</Button>
                    </Link>
                </div>
                <Container className='card-box card p-3 mb-2 pt-4'>
                    <Form noValidate>
                        <Divider text="مشخصات پروفایل" />
                        <Row className="my-1 mb-3 gy-3">
                            <Form.Group as={Col} md="4" controlId="formFirstname" >
                                <Form.Label>نام</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="firstname"
                                    value={teacher.Profile.firstname}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formLastname" >
                                <Form.Label>نام خانوادگی</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="lastname"
                                    value={teacher.Profile.lastname}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formEmail" >
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="email"
                                    value={teacher.Profile.email}
                                    readOnly
                                />
                            </Form.Group>
                        </Row>
                        <Divider text="مشخصات فرد" />
                        <Row className="my-1 gy-3">
                            <Form.Group as={Col} md="4" controlId="formPhoneNumber">
                                <Form.Label>شماره تماس</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    name="phoneNumber"
                                    value={teacher.phoneNumber}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formUniversity">
                                <Form.Label>دانشگاه</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    name="university"
                                    value={teacher.university}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formField">
                                <Form.Label>رشته تحصیلی</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    name="field"
                                    value={teacher?.field}
                                    readOnly
                                />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>توضیحات</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    required
                                    name="description"
                                    value={teacher.description}
                                    readOnly
                                />
                            </Form.Group>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}
