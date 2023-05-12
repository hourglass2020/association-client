


export default function CourseContent({contents}){
    return (
        <section className={"mb-3"}>
            <h4 className={"pt-3 pe-3"}>مطالب دوره</h4>
            <ul className={"m-0 list-group"}>
                {contents.map(content => (<li
                    className="card-box card my-2 p-3 d-flex justify-content-between align-items-start"
                    key={content.title}>
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{content.title}</div>
                        <p className={"text-muted m-0"}>
                            {content.content}
                        </p>
                    </div>
                </li>))}
            </ul>
        </section>
    )
}