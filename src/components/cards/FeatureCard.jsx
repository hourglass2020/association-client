import {useNavigate} from "react-router-dom";

export default function FeatureCard({title, image, link}) {
    const navigator = useNavigate();

    const onClick = () => {
        navigator(link);
    }

    return (
        <div className={"card-box feature-card mt-3 mt-lg-0"} onClick={onClick}>
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <img src={image} alt={title} height={50} width={50}/>
                <h3 className={"mt-2"}>{title}</h3>
            </div>
        </div>
    )
}