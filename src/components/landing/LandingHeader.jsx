import React from 'react'
import { Col, Container, Row, Spinner } from 'react-bootstrap'
import HeaderSlide from './HeaderSlide'
import { useGetBannersQuery } from '../../api/apiSlice'

export default function LandingHeader() {

    const { data, isLoading, isError } = useGetBannersQuery();

    if (isLoading) {
        return <Spinner animation="border" variant="primary" />;
    }

    const banners = data || [];

    return (
        <Container className='mt-3'>
            <Row className={"position-relative"}>
                <Col lg={8} md={12} className={" position-relative h-100"}>
                    <HeaderSlide banner={banners[0]} />
                </Col>
                <Col lg={4} md={12} className={"mt-3 mt-lg-0"}>
                    <Row>
                        <Col>
                            <HeaderSlide banner={banners[1]} />
                        </Col>
                    </Row>
                    <Row className={"mt-3"}>
                        <Col>
                            <HeaderSlide banner={banners[2]} />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
