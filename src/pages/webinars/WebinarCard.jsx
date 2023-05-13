import {Button, Image} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function WebinarCard({image, link, title, description, price}) {
    const navigator = useNavigate();

    const handleClick = ()=> {
        navigator(link)
    }

    return (
        <article className={"card-box d-flex mb-3 py-2 px-2 w-100 align-items-center"} style={{ borderRadius: 10}}>
            <Image src={image}
                   style={{backgroundSize: "cover", width: 80, height: 80, marginInlineEnd: 10}} rounded/>
            <div className={"w-100 d-flex flex-column justify-content-center align-items-start"}>
                <p style={{fontSize:15}} className={"fw-bold m-0 text-start"}>{title}</p>
                <p className={"m-0"}>{description}</p>

                <div className={"d-flex justify-content-between align-items-center w-100 mt-2"}>
                    <p style={{fontSize:14}} className={"m-0"}>
                        هزینه: {price}
                    </p>
                    <Button variant={"primary"} onClick={handleClick}>بیشتر</Button>
                </div>
            </div>
        </article>
    )
}