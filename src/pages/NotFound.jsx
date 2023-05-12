import Logo404 from "../assets/images/404.png";
import {Button} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function NotFound() {
    const navigator = useNavigate();
    const handleClick = () => {
        navigator(-1);
    }

    return (
        <div className={"h-100 d-flex flex-column justify-content-center align-items-center"}>
            <img src={Logo404} alt="404" height={304} className={"mt-5"}/>
            <h4>صفحه موردنظر پیدا نشد.</h4>
            <Button variant={"outline-primary"} onClick={handleClick} className={"mt-4"}>بازگشت به صفحه قبل</Button>
        </div>
    )
}