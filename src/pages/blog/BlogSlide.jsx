import {Image} from "react-bootstrap";
import Image2 from "../../assets/images/pic2.jpg";
import {BsFillChatFill, BsFillHandThumbsUpFill, BsFillShareFill} from "react-icons/all.js";

export default function BlogSlide(){
    return(
        <article style={{position: "relative", width:"100%"}}>
            <Image src={Image2} className={"w-100"} style={{backgroundSize: "cover"}} rounded/>
            <div className={"intro-item-caption"}></div>
            <div style={{
                position: "absolute",
                bottom: "8px",
                right: "16px",
                color: "white",
                zIndex: 10,
                width: "93%"
            }}>

                <h5 className={"text-light"}>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</h5>
                <div className={"d-flex justify-content-between mt-3"}>
                    <h6 className={"text-light"}>
                        نویسنده: پوریا اقدم پور
                    </h6>
                    <div className={"d-flex"}>
                        <h6 className={"mx-1 my-0"}>
                            21
                            <BsFillHandThumbsUpFill className={'mx-1'}/>
                        </h6>
                        <h6 className={"mx-1 my-0"}>
                            22
                            <BsFillChatFill className={'mx-1'}/>
                        </h6>
                    </div>
                </div>
            </div>
        </article>
    )
}