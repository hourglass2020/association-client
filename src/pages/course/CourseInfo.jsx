import { useState } from "react";
import { Button } from "react-bootstrap";
import {
    BsCash,
    BsClockFill,
    BsFillInfoCircleFill,
    BsLayersFill,
    BsPersonCircle,
} from "react-icons/all.js";
import CourseRegister from "../../components/course/CourseRegister";

export default function CourseInfo({ data }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className={"card-box card px-0 pt-3"}>
            <ul className="pe-4" style={{ listStyle: "none" }}>
                <li className={"d-flex"}>
                    <BsCash style={{ fontSize: 25, color: "green" }} />
                    <p className={"me-3"}>قیمت دوره: {data.price} تومان</p>
                </li>
                <div
                    className={"bg-dark bg-opacity-25 mb-3"}
                    style={{ height: 1 }}
                ></div>
                <li className={"d-flex"}>
                    <BsPersonCircle style={{ fontSize: 20, color: "gray" }} />
                    <p className={"me-3"}>مدرس دوره: پوریا اقدم پور</p>
                </li>
                <li className={"d-flex"}>
                    <BsClockFill style={{ fontSize: 20, color: "gray" }} />
                    <p className={"me-3"}>مدت دوره: {data.length}</p>
                </li>
                <li className={"d-flex"}>
                    <BsLayersFill style={{ fontSize: 20, color: "gray" }} />
                    <p className={"me-3"}>سطح دوره: {data.level}</p>
                </li>
                <li className={"d-flex"}>
                    <BsFillInfoCircleFill style={{ fontSize: 20, color: "gray" }} />
                    <p className={"me-3"}>
                        {" "}
                        وضعیت دوره:
                        <span className={"text-info"}>در حال ثبت نام</span>
                    </p>
                </li>
            </ul>
            <Button variant={"primary"} className={"mx-3 mb-3"} onClick={handleShow}>
                ثبت نام
            </Button>
            <CourseRegister show={show} handleClose={handleClose} />
        </section>
    );
}
