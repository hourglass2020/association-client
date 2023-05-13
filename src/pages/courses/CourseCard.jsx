import {Button, Card, Col, Row} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function CourseCard({title, image, price, link}) {
    const navigator = useNavigate();

    const handleClick = () => {
        navigator(link);
    }

    return (
        <Card className={"card-box mt-3 mt-lg-3"}>
            <Card.Img height={150} variant={"top"} src={image} alt={title}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
            </Card.Body>
            <Card.Footer style={{background:"#fff"}}>

                <Row>
                    <Col className={"d-flex flex-column justify-content-center"}>
                        <p>{`${price} تومان `}</p>
                    </Col>
                    <Col>
                        <Button variant={"primary"} className={"w-100"} onClick={handleClick}>بیشتر</Button>
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    )
}