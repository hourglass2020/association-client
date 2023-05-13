import {Image} from "react-bootstrap";
import Image3 from "../../assets/images/pic7.jpg";

import {BsFillChatFill, BsFillHandThumbsUpFill, BsFillShareFill} from "react-icons/all.js";

export default function BlogNews() {
    return (
        <article style={{width: "100%"}}>
            <Image src={Image3} className={"w-100"} style={{backgroundSize: "cover"}} rounded/>
            <div className={"mt-3"}>
                <h5 className={"text-black"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h5>
                <div className={"d-flex justify-content-between mt-2 mb-2"}>
                    <h6 className={"text-black"}>
                        نویسنده: پوریا اقدم پور
                    </h6>

                    <div className={"d-flex"}>
                        <h6 className={"mx-2"}>
                            21
                            <BsFillHandThumbsUpFill className={'mx-1'}/>
                        </h6>
                        <h6 className={"mx-2"}>
                            22
                            <BsFillChatFill className={'mx-1'}/>
                        </h6>
                        <h6 className={"me-3"}>
                            <BsFillShareFill/>
                        </h6>
                    </div>

                </div>
                <p>
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
                    چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
                    تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در
                    شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها
                    شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                    ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط
                    سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته
                </p>
            </div>
        </article>
    )
}