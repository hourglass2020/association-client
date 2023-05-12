import {Button} from "react-bootstrap";
import {BsCash, BsClockFill, BsFillInfoCircleFill, BsLayersFill, BsPersonCircle} from "react-icons/all.js";

export default function CourseInfo({data}) {
    return (
        <section className={"card-box card px-0 pt-3"}>
            <ul style={{listStyle: "none"}}>
                <li className={"d-flex"}>
                    <BsCash style={{fontSize: 25, color: "green"}}/>
                    <p className={"me-3"}>قیمت دوره: 120000 تومان</p>
                </li>
                <div className={"bg-dark bg-opacity-25 mb-3"} style={{height: 1}}></div>
                <li className={"d-flex"}>
                    <BsPersonCircle style={{fontSize: 20, color: "gray"}}/>
                    <p className={"me-3"}>مدرس دوره: پوریا اقدم پور</p>
                </li>
                <li className={"d-flex"}>
                    <BsClockFill style={{fontSize: 20, color: "gray"}}/>
                    <p className={"me-3"}>مدت دوره: 20 ساعت</p>
                </li>
                <li className={"d-flex"}>
                    <BsLayersFill style={{fontSize: 20, color: "gray"}}/>
                    <p className={"me-3"}>سطح دوره: متوسط</p>
                </li>
                <li className={"d-flex"}>
                    <BsFillInfoCircleFill style={{fontSize: 20, color: "gray"}}/>
                    <p className={"me-3"}> وضعیت دوره:
                        <span className={"text-info"}>
                                       {" "} در حال ثبت نام
                                    </span>
                    </p>
                </li>
            </ul>
            <Button variant={"primary"} className={"mx-3 mb-2"}>ثبت نام</Button>
        </section>
    )
}