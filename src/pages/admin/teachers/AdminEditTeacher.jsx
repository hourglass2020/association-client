import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
    Container,
    Form,
    Row,
    Button,
    Col,
    Alert,
    Spinner,
} from "react-bootstrap";
import toast from "react-hot-toast";

import {
    useCreateAdminTeacherMutation,
    useEditAdminTeacherMutation,
    useGetAdminTeacherQuery,
} from "../../../api/apiSlice";
import Loading from "../../../components/Loading";
import Divider from "../../../components/Divider";
import { Helmet } from "react-helmet-async";

export default function AdminEditTeacher() {
    const [form, setForm] = useState({});
    const navigator = useNavigate();
    const { teacherId } = useParams();
    const [validated, setValidated] = useState(false);

    const {
        data: teacher = {},
        isError: isErrorFetch,
        isLoading: isLoadingFetch,
        isSuccess: isSuccessFetch
    } = useGetAdminTeacherQuery(teacherId);

    const [editTeacher, { isLoading, isError, isSuccess }] =
        useEditAdminTeacherMutation();

    useEffect(() => {
        setForm({
            ...teacher, ...teacher.Profile
        })
    }, [teacher])

    if (isErrorFetch) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoadingFetch) {
        return <Loading />;
    }

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

        setValidated(true);

        try {
            await editTeacher(form).unwrap();

            if (!isLoading && !isError) {
                navigator("../teachers");
            }

            if (isSuccess) {
                toast.success("استاد مورد نظر با موفقیت ساخته شد.");
            }
        } catch (error) {
            console.log("Failed to save the teacher", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>ویرایش استاد</title>
            </Helmet>

            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>ویرایش استاد</h3>
                    <Link to="../teachers">
                        <Button variant="warning">بازگشت</Button>
                    </Link>
                </div>
                <Container className="card-box card p-3 mb-2 pt-4">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Divider text="مشخصات پروفایل" />
                        <Row className="my-1 mb-3 gy-3">
                            <Form.Group as={Col} md="4" controlId="formFirstname">
                                <Form.Label>نام</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="firstname"
                                    value={form?.firstname}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد نام چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formLastname">
                                <Form.Label>نام خانوادگی</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="lastname"
                                    value={form?.lastname}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد نام خانوادگی چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formEmail">
                                <Form.Label>ایمیل</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    name="email"
                                    value={form?.email}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد ایمیل چک شود.
                                </Form.Control.Feedback>
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
                                    value={form?.phoneNumber}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد شماره تماس چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formUniversity">
                                <Form.Label>دانشگاه</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    name="university"
                                    value={form?.university}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد دانشگاه چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="4" controlId="formField">
                                <Form.Label>رشته تحصیلی</Form.Label>
                                <Form.Control
                                    type="text"
                                    required
                                    name="field"
                                    value={form?.field}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد رشته چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formDescription">
                                <Form.Label>توضیحات</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows={2}
                                    name="description"
                                    value={form?.description}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Button type="submit" className="w-100">
                            {isLoading ? (
                                <Spinner className="ms-1" color="dark" size="sm" />
                            ) : null}
                            ویرایش استاد
                        </Button>
                    </Form>
                </Container>
            </Container>
        </>
    );
}
