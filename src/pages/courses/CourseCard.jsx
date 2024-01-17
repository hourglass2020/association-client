import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { SERVER_URL } from "../../services";

export default function CourseCard({ title, image, price, link }) {
    const navigator = useNavigate();

    return (
        <article>
            <Card className={"card-box mt-3 mt-lg-3"}>
                <Card.Img
                    height={200}
                    variant={"top"}
                    src={`${SERVER_URL}/uploads/images/${image}`}
                    alt={title}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer style={{ background: "var(--bg-card)" }} className="pb-0">
                    <Row>
                        <Col className={"d-flex flex-column justify-content-center mt-1"}>
                            <p>{`${price} تومان `}</p>
                        </Col>
                        <Col>
                            <Link to={`/courses/${link}`}>
                                <Button variant={"primary"} size="sm" className={"w-100"}>
                                    بیشتر
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card.Footer>
            </Card>
        </article>
    );
}
