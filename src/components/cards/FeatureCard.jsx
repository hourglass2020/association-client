import { Link } from "react-router-dom";

export default function FeatureCard({ title, image, link }) {
    return (
        <Link to={link} style={{ textDecoration: "none" }}>
            <div className={"mt-2"}>
                <div style={{ display: "flex", justifyContent: "start", alignItems: "center" }}>
                    <img src={image} alt={title} height={30} width={30} />
                    <h6 className={"mt-2 me-1 text-light"} >{title}</h6>
                </div>
            </div>
        </Link>
    )
}