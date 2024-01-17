import React, { useState } from 'react'
import { Button, Col, Container, Form, Row, Spinner } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'
import { Link, useNavigate } from 'react-router-dom'
import { useCreateNewArticleMutation } from '../../../api/apiSlice';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function AdminCreateArticle() {
    const navigator = useNavigate();

    const [addNewArticle, { isLoading, isError, isSuccess }] = useCreateNewArticleMutation();

    const [form, setForm] = useState({
        title: "",
        image: null,
        description: "",
    });

    const [validated, setValidated] = useState(false);

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
        formData.append("title", form.title);
        formData.append("image", form.image);
        formData.append("description", form.description);

        try {
            await addNewArticle(formData).unwrap();
            if (!isLoading && !isError) {
                navigator("../articles");
            }
        } catch (error) {
            console.error("Failed to save the article", error);
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    ایجاد مقاله جدید
                </title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>مقاله جدید</h3>
                    <Link to="../articles">
                        <Button variant="warning">بازگشت</Button>
                    </Link>
                </div>
                <Container className="card-box card p-3 mb-2 pt-4">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="my-3 gy-3">
                            <Form.Group as={Col} md="6" controlId="formTitle">
                                <Form.Label>عنوان مقاله</Form.Label>
                                <Form.Control
                                    required
                                    type="text"
                                    name="title"
                                    value={form.title}
                                    onChange={handleChange}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا مجدد عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Form.Group as={Col} md="6" controlId="formImage" className="mb-3">
                                <Form.Label>عکس مقاله</Form.Label>
                                <Form.Control type="file" name="image" onChange={handleChange} />
                            </Form.Group>
                            <Form.Group as={Col} md={12} className="mb-3" controlId="formDescription">
                                <Form.Label>متن مقاله</Form.Label>
                                <CKEditor
                                    editor={ClassicEditor}
                                    onChange={(event, editor) => {
                                        const data = editor.getData();
                                        setForm(prev => ({ ...prev, description: data }))
                                    }}
                                    data={form.description}
                                />
                                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                <Form.Control.Feedback type="invalid">
                                    لطفا توضیحات عنوان چک شود.
                                </Form.Control.Feedback>
                            </Form.Group>
                            <Button type="submit">
                                {isLoading ? <Spinner className="ms-1" color="dark" size="sm" /> : null}
                                ثبت نام دوره
                            </Button>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}