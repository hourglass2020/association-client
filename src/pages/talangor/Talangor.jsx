import {Helmet} from "react-helmet-async";
import { Container, Image} from "react-bootstrap";
import Magazine from "../../assets/icons/talangor.png";

export default function Talangor(){
    return (
        <div>
            <Helmet>
                <title>نشریه تلنگر</title>
            </Helmet>
            <Container>
                <div className={"d-flex align-items-center"}>
                    <Image src={Magazine} alt={"course"} className={"mt-2 ms-2"} height={50} width={50}/>
                    <h3 className={"mt-4"}>نشریه تلنگر</h3>
                </div>

            </Container>
        </div>
    )
}