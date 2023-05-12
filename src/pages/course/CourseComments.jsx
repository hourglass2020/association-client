export default function CourseComments({comments}) {
    return (
        <section className={"mb-3"}>
            <h4 className={"pt-3 pe-3"}>نظرات دانشجویان</h4>
            <ul className={"m-0 list-group"}>
                {comments.map((comment, index) => (<li
                    className="card-box card my-2 p-3 d-flex justify-content-between align-items-start"
                    key={`comment${index}`}>
                    <div className="ms-2 me-auto">
                        <div className={"d-flex"}>
                            <div className="fw-bold">{comment.name}</div>
                            <span className={"mx-2"}>|</span>
                            <div className="fw-bold">{comment.date}</div>

                        </div>
                        <p className={"text-muted m-0"}>
                            {comment.comment}
                        </p>
                    </div>
                </li>))}
            </ul>
        </section>
    )
}