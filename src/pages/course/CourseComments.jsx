import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from 'react-bootstrap';

export default function CourseComments({ comments }) {
    return (
        <section className={"mb-3"}>
            <h4 className={"pt-3 pe-3"}>نظرات دانشجویان</h4>
            <ul className={"m-0 list-group"}>
                {comments.map((comment, index) => (<li
                    className="card-box card my-2 p-3 d-flex justify-content-between align-items-start"
                    key={`comment${index}`}>
                    <div className="ms-0 me-2">
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

            <section className="card-box card mt-3">
                <h4 className={"py-3 pe-3"}>نظر دهید!</h4>

                <div className='m-2'>
                    <CKEditor
                        id={'editor'}
                        editor={ClassicEditor}
                        data="<p>Hello from CKEditor&nbsp;5!</p>"
                        onReady={editor => {
                            // You can store the "editor" and use when it is needed.
                            console.log('Editor is ready to use!', editor);
                        }}
                        onChange={(event, editor) => {
                            const data = editor.getData();
                            console.log({ event, editor, data });
                        }}
                        onBlur={(event, editor) => {
                            console.log('Blur.', editor);
                        }}
                        onFocus={(event, editor) => {
                            console.log('Focus.', editor);
                        }}
                    />
                </div>

                <Button variant='warning' className='m-2'>ثبت نظر</Button>
            </section>
        </section>
    )
}