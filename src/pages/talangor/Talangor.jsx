import { Helmet } from "react-helmet-async";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import Magazine from "../../assets/icons/talangor.png";
import { BsPersonCircle } from "react-icons/bs";

import Mag1 from "../../assets/images/mag1.jpg";
import Mag2 from "../../assets/images/mag2.jpg";
import Mag3 from "../../assets/images/mag3.jpg";

export default function Talangor() {
    return (
        <div>
            <Helmet>
                <title>نشریه تلنگر</title>
            </Helmet>
            <Container>
                <div
                    className={
                        "d-flex flex-column align-items-center justify-content-center"
                    }
                >
                    {/*   <Image
                        src={Magazine}
                        alt={"course"}
                        className={"mt-2 ms-2"}
                        height={50}
                        width={50}
                    /> */}
                    <h1
                        className={"mt-4"}
                        style={{ fontSize: "10rem", fontWeight: "bold" }}
                    >
                        تلنگر
                    </h1>
                    <h6 className={"mt-2 mb-4 text-center"}>
                        فصلنامه علمی انجمن علمی برق دانشکاه خواجه نصیرالدین طوسی
                    </h6>
                </div>

                <div className="card-box card p-3">
                    <h4 className="text-center fw-bold">تیم مدیریت</h4>
                    <Row>
                        <Col
                            sm={12}
                            md={6}
                            lg={3}
                            className="d-flex flex-column justify-content-center align-items-center mt-4"
                        >
                            <BsPersonCircle fontSize={"6rem"} color="#5c00e6" />
                            <h5 className="mt-2">دبیر انجمن</h5>
                            <h4 className="fw-bold">شیرین حاتم</h4>
                        </Col>
                        <Col
                            sm={12}
                            md={6}
                            lg={3}
                            className="d-flex flex-column justify-content-center align-items-center mt-4"
                        >
                            <BsPersonCircle fontSize={"6rem"} color="#5c00e6" />
                            <h5 className="mt-2">مدیرمسئول</h5>
                            <h4 className="fw-bold">ملیحه ملکی</h4>
                        </Col>
                        <Col
                            sm={12}
                            md={6}
                            lg={3}
                            className="d-flex flex-column justify-content-center align-items-center mt-4"
                        >
                            <BsPersonCircle fontSize={"6rem"} color="#5c00e6" />
                            <h5 className="mt-2">سردبیر</h5>
                            <h4 className="fw-bold">امیرمهدی لنجانی</h4>
                        </Col>
                        <Col
                            sm={12}
                            md={6}
                            lg={3}
                            className="d-flex flex-column justify-content-center align-items-center mt-4"
                        >
                            <BsPersonCircle fontSize={"6rem"} color="#5c00e6" />
                            <h5 className="mt-2">ویراستار</h5>
                            <h4 className="fw-bold">تارا صفایی</h4>
                        </Col>
                    </Row>
                </div>

                <Row className="mt-3">
                    <Col sm={12} md={6}>
                        <article
                            className={"row card-box mb-3 py-2 px-2 m-1"}
                            style={{ borderRadius: 10 }}
                        >
                            <Col sm={12} md={4}>
                                <Image
                                    src={Mag3}
                                    style={{
                                        backgroundSize: "cover",
                                        width: "100%",
                                        // height: 150,
                                        marginInlineEnd: 10,
                                    }}
                                    rounded
                                />
                            </Col>
                            <Col sm={12} md={8}>
                                <div className="my-3 my-sm-0">
                                    <h5 className="fw-bold ">تلنگر: شماره ۱</h5>
                                    <div>
                                        <p style={{ fontSize: 15 }} className={"fw-bold m-0"}>
                                            در این شماره می‌خوانیم:
                                        </p>
                                        <p className="my-0">
                                            هارمونیک‌ها؛ آشنایی با ریزپردازنده‌ها؛ مترو؛ پروژه تایم؛
                                            ارتباط با صنعت؛ شهر هوشمند؛ نسل‌های شبکه ارتباطی؛ برترین
                                            شهرهای هوشمند جهان
                                        </p>
                                    </div>
                                </div>
                                <a href="https://taaghche.com/book/75053" target="_blank">
                                    <Button size="sm" className="w-100 mt-1">
                                        خرید نسخه دیجیتال
                                    </Button>
                                </a>
                            </Col>
                        </article>
                    </Col>
                    <Col sm={12} md={6}>
                        <article
                            className={"row card-box mb-3 py-2 px-2 m-1"}
                            style={{ borderRadius: 10 }}
                        >
                            <Col sm={12} md={4}>
                                <Image
                                    src={Mag1}
                                    style={{
                                        backgroundSize: "cover",
                                        width: "100%",
                                        // height: 150,
                                        marginInlineEnd: 10,
                                    }}
                                    rounded
                                />
                            </Col>
                            <Col sm={12} md={8}>
                                <div className="my-3 my-sm-0">
                                    <h5 className="fw-bold ">تلنگر: شماره ۲</h5>
                                    <div>
                                        <p style={{ fontSize: 15 }} className={"fw-bold m-0"}>
                                            در این شماره می‌خوانیم:
                                        </p>
                                        <p className="my-0">
                                            انتقال بی‌سیم برق؛ دوربین‌های صنعتی و بینایی ماشین؛ تحریک
                                            عمقی مغز؛ مقدمه‌ای بر برد رزبری پای پیکو؛ موتورهای توربو
                                            شارژ
                                        </p>
                                    </div>
                                </div>
                                <a href="https://taaghche.com/book/159209" target="_blank">
                                    <Button size="sm" className="w-100 mt-1">
                                        خرید نسخه دیجیتال
                                    </Button>
                                </a>
                            </Col>
                        </article>
                    </Col>
                    <Col sm={12} md={6}>
                        <article
                            className={"row card-box mb-3 py-2 px-2 m-1"}
                            style={{ borderRadius: 10 }}
                        >
                            <Col sm={12} md={4}>
                                <Image
                                    src={Mag2}
                                    style={{
                                        backgroundSize: "cover",
                                        width: "100%",
                                        // height: 150,
                                        marginInlineEnd: 10,
                                    }}
                                    rounded
                                />
                            </Col>
                            <Col sm={12} md={8}>
                                <div className="my-3 my-sm-0">
                                    <h5 className="fw-bold ">تلنگر: شماره ۳</h5>
                                    <div>
                                        <p style={{ fontSize: 15 }} className={"fw-bold m-0"}>
                                            در این شماره می‌خوانیم:
                                        </p>
                                        <p className="my-0">
                                            شبکه‌های کامپیوتری از معرفی تا کاربرد؛ سیستم‌های چند
                                            عامله؛ خودروهای الکتریکی؛ نسل جدید فناوری نمایشگرها
                                        </p>
                                    </div>
                                </div>
                                <a href="https://taaghche.com/book/194951" target="_blank">
                                    <Button size="sm" className="w-100 mt-1">
                                        خرید نسخه دیجیتال
                                    </Button>
                                </a>
                            </Col>
                        </article>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
