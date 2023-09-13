import { Image } from "react-bootstrap";
import Image3 from "../../assets/images/pic7.jpg";

import { BsFillChatFill, BsFillHandThumbsUpFill, BsFillShareFill } from "react-icons/all.js";

export default function BlogNews({ article }) {
    return (
        <article style={{ width: "100%" }}>
            <Image src={`../images/${article.image}`} className={"w-100"} style={{ backgroundSize: "cover" }} rounded />
            <div className={"mt-3"}>
                <h5 className={"text-black"}>{article.title}</h5>
                <div className={"d-flex justify-content-between mt-2 mb-2"}>
                    <h6 className={"text-black"}>
                        نویسنده: پوریا اقدم پور
                    </h6>

                    <div className={"d-flex"}>
                        <h6 className={"mx-2"}>
                            21
                            <BsFillHandThumbsUpFill className={'mx-1'} />
                        </h6>
                        <h6 className={"mx-2"}>
                            22
                            <BsFillChatFill className={'mx-1'} />
                        </h6>
                        <h6 className={"me-3"}>
                            <BsFillShareFill />
                        </h6>
                    </div>

                </div>
                <p>
                    {article.description}
                </p>
            </div>
        </article>
    )
}