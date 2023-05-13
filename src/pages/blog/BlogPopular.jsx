import {Image} from "react-bootstrap";
import Image2 from "../../assets/images/pic2.jpg";
import {BsFillChatFill, BsFillHandThumbsUpFill} from "react-icons/all.js";

export default function BlogPopular() {
    return (
        <article className={"card-box d-flex mb-3 py-2 px-2 w-100 align-items-center"} style={{ borderRadius: 10}}>
            <Image src={Image2}
                   style={{backgroundSize: "cover", width: 80, height: 80, marginInlineEnd: 10}} rounded/>
            <div className={"w-100 d-flex flex-column justify-content-center align-items-center"}>
                <p style={{fontSize:15}} className={"fw-bold m-0"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</p>
                <div className={"d-flex justify-content-between align-items-center w-100 mt-2"}>
                    <p style={{fontSize:14}} className={"m-0"}>
                        نویسنده: پوریا اقدم پور
                    </p>

                    <div className={"d-flex justify-content-center"}>
                        <p className={"mx-1 my-0"}>
                            21
                            <BsFillHandThumbsUpFill className={'mx-1'}/>
                        </p>
                        <p className={"mx-1 my-0"}>
                            22
                            <BsFillChatFill className={'mx-1'}/>
                        </p>
                    </div>
                </div>

            </div>
        </article>
    )
}