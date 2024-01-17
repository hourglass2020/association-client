import { Image } from "react-bootstrap";
// import Image2 from "../../assets/images/pic2.jpg";
import { BsFillChatFill, BsFillHandThumbsUpFill, BsFillShareFill } from "react-icons/all.js";
import { SERVER_URL } from "../../services";
import { Link } from "react-router-dom";

export default function HeaderSlide({ banner }) {
    return (
        <Link to={banner.link}>
            <article style={{ position: "relative", width: "100%" }}>
                <Image src={`${SERVER_URL}/uploads/images/${banner?.image}`} className={"w-100"} style={{ backgroundSize: "cover" }} rounded />
                <div className={"intro-item-caption"}></div>
                <div style={{
                    position: "absolute",
                    bottom: "8px",
                    right: "16px",
                    color: "white",
                    zIndex: 10,
                    width: "93%"
                }}>

                    <h4 className={"text-light"}>{banner?.title}</h4>
                    {/*  <div className={"d-flex justify-content-between mt-3"}>
                    <h6 className={"text-light"}>
                    نویسنده: پوریا اقدم پور
                    </h6>
                    <div className={"d-flex"}>
                        <h6 className={"mx-1 my-0"}>
                        21
                        <BsFillHandThumbsUpFill className={'mx-1'} />
                        </h6>
                        <h6 className={"mx-1 my-0"}>
                        22
                        <BsFillChatFill className={'mx-1'} />
                        </h6>
                        </div>
                    </div> */}
                </div>
            </article>
        </Link>
    )
}