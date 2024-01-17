import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { Button, Col, Container, Form, Image, Row, Spinner } from 'react-bootstrap';

import { useEditBannerMutation, useGetAdminBannerQuery } from '../../../api/apiSlice';
import { SERVER_URL } from '../../../services';
import Loading from '../../../components/Loading';

export default function EditBannerPage() {
    const { bannerId } = useParams();
    const navigator = useNavigate();

    const [form, setForm] = useState();
    const [validated, setValidated] = useState(false);

    const { data: banner, isError, isLoading } = useGetAdminBannerQuery(bannerId);
    const [editBanner, { isLoading: isLoadingEdit, isError: isErrorEdit, isSuccess }] = useEditBannerMutation();

    useEffect(() => {
        setForm(banner);
    }, [banner]);

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />
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
        formData.append("title", form.title);
        formData.append("link", form.link);
        formData.append("image", form.image);

        try {
            await editBanner(formData).unwrap();
            if (!isLoadingEdit && !isErrorEdit) {
                navigator("../banners");
            }
        } catch (error) {
            console.error("Failed to save the course", error);
        }
    }

    return (
        <>
            <Helmet>
                <title>
                    دوره {banner.title}
                </title>
            </Helmet>

            <Container>
                <div className='d-flex my-3 justify-content-between'>
                    <h3>دوره {banner.title}</h3>
                    <Link to="../banners">
                        <Button variant='warning'>بازگشت</Button>
                    </Link>
                </div>
                <Container className='card-box card p-3 mb-2 pt-2'>
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="my-3">
                            <Col sm={12} md={6}>
                                <Image src={`${SERVER_URL}/uploads/images/${banner.image}`} rounded width={"100%"} />
                            </Col>
                            <Col sm={12} md={6}>
                                <Form.Group className='mb-2' controlId="formTitle" >
                                    <Form.Label>عکس جدید بنر</Form.Label>
                                    <Form.Control
                                        type="file"
                                        name="image"
                                        onChange={handleChange}
                                    />
                                </Form.Group>
                                <Form.Group className='mb-2' controlId="formTitle" >
                                    <Form.Label>عنوان بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="title"
                                        defaultValue={banner.title}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mb-2' controlId="formType" >
                                    <Form.Label>نوع بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="bannerType"
                                        defaultValue={banner.bannerType}
                                        readOnly
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group className='mb-2' controlId="formLink" >
                                    <Form.Label>لینک بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="link"
                                        defaultValue={banner.link}
                                        onChange={handleChange}
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Button type='submit' className='w-100'>
                                    {
                                        isLoadingEdit ?
                                            <Spinner size='sm' className='ms-1' />
                                            : null
                                    }
                                    ویرایش</Button>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}
