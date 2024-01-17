import React from 'react'
import { Link, useParams } from 'react-router-dom';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
import { Button, Col, Container, Form, Image, Row } from 'react-bootstrap';

import { useGetAdminBannerQuery } from '../../../api/apiSlice';
import { SERVER_URL } from '../../../services';
import Loading from '../../../components/Loading';

export default function AdminBannerDetails() {
    const { bannerId } = useParams();

    const { data: banner, isError, isLoading } = useGetAdminBannerQuery(bannerId);

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
                <Container className='card-box card p-3 mb-2 pt-4'>
                    <Form noValidate>
                        <Row className="my-3">
                            <Col sm={12} md={6}>
                                <Image src={`${SERVER_URL}/uploads/images/${banner.image}`} rounded width={"100%"} />
                            </Col>
                            <Col sm={12} md={6}>
                                <Form.Group md="4" controlId="formTitle" >
                                    <Form.Label>عنوان بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="title"
                                        value={banner.title}
                                        readOnly
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group md="4" controlId="formType" >
                                    <Form.Label>نوع بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="bannerType"
                                        value={banner.bannerType}
                                        readOnly
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group md="4" controlId="formLink" >
                                    <Form.Label>لینک بنر</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        name="link"
                                        value={banner.link}
                                        readOnly
                                    />
                                    <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                                    <Form.Control.Feedback type="invalid">
                                        لطفا مجدد عنوان چک شود.
                                    </Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                    </Form>
                </Container>
            </Container>
        </>
    )
}
