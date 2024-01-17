import { Image } from "react-bootstrap";
import GitImage from "../../assets/images/pic4.png";
import { SERVER_URL } from "../../services";

export default function CourseDescription({ data, courseId }) {
    return (
        <section className={"card-box card mt-3 mt-md-0 p-3 mb-2"}>
            <Image
                src={`${SERVER_URL}/uploads/images/${data.image}`}
                className={"w-100 mb-3"}
                rounded
                style={{ maxHeight: 500 }}
                alt={courseId}
            />
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </section>
    );
}
