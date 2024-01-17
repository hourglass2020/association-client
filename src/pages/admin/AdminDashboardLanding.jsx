import { Row, Col, Container, Card } from "react-bootstrap";
import { Helmet } from "react-helmet-async";

export default function AdminDashboardLanding() {
    return (
        <>
            <Helmet>
                <title>
                    داشبورد ادمین
                </title>
            </Helmet>
            <Container className="mt-4">
                <Row>
                    <Col xs={12} md={6} lg={3} className="mt-4">
                        <Card bg="primary" text="light">
                            <Card.Header>تعداد دانشجویان</Card.Header>
                            <Card.Body>
                                <Card.Title>۲۰ دانشجو</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mt-4">
                        <Card bg="danger" text="light">
                            <Card.Header>تعداد اساتید</Card.Header>
                            <Card.Body>
                                <Card.Title>۲۰ استاد</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mt-4">
                        <Card bg="success" text="light">
                            <Card.Header>تعداد مقالات</Card.Header>
                            <Card.Body>
                                <Card.Title>۲۵ مقاله</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={6} lg={3} className="mt-4">
                        <Card bg="dark" text="light">
                            <Card.Header>تعداد دوره‌ها</Card.Header>
                            <Card.Body>
                                <Card.Title>۱۰ دوره</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
