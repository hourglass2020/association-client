import { Button, Card, Col, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

export default function CourseCard({ title, image, price, link }) {
    const navigator = useNavigate();

    return (
        <article>
            <Card className={"card-box mt-3 mt-lg-3"}>
                <Card.Img
                    height={150}
                    variant={"top"}
                    src={`../../images/${image}`}
                    alt={title}
                />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
                <Card.Footer style={{ background: "#fff" }}>
                    <Row>
                        <Col className={"d-flex flex-column justify-content-center"}>
                            <p>{`${price} تومان `}</p>
                        </Col>
                        <Col>
                            <Link to={link}>
                                <Button variant={"primary"} className={"w-100"}>
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
