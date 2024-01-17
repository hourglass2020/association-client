import React from 'react'
import { Button, Container } from 'react-bootstrap'
import useSWR from 'swr'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import toast from 'react-hot-toast';
import { FiEdit } from 'react-icons/fi';
import { BsFillEyeFill } from 'react-icons/bs';

import { SERVER_URL } from '../../../services'
import Loading from '../../../components/Loading';
import { formatDate, numberFormat } from "../../../utils/helpers";
import DeleteModal from '../../../components/modals/DeleteModal';
import { deleteApiCourse } from '../../../reducers/courseSlice';

export default function TeacherCourses() {
    const dispatch = useDispatch();

    const { data, error } = useSWR(`${SERVER_URL}/teachers/courses`, url => fetch(url, {
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()));

    if (error) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (!data) {
        return <Loading />
    }

    const handleDelete = (courseId) => {
        if (courseId) {
            dispatch(deleteApiCourse(courseId));
        }
    }

    return (
        <Container>
            <div className='d-flex my-3 justify-content-between'>
                <h3>دوره‌ها</h3>
                <Link to="../new-course">
                    <Button variant='warning'>افزودن دوره</Button>
                </Link>
            </div>
            <Container className='card-box card'>
                <div className="table-responsive">
                    <table className="table align-middle">
                        <thead>
                            <tr>
                                <th>نام</th>
                                <th>نوع دوره</th>
                                <th>قیمت</th>
                                <th>سطح</th>
                                <th>تاریخ شروع</th>
                                <th>عملیات</th>
                                <th>آخرین بروزرسانی</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((course) => (
                                <tr key={course.id}>
                                    <td>{course.title}</td>
                                    <td>{course.courseType}</td>
                                    <td>{numberFormat(course.price)}</td>
                                    <td>{course.level}</td>
                                    <td>{formatDate(course.startDate)}</td>
                                    <td>
                                        <div className="d-flex">
                                            <Link to={`${course.id}`}>
                                                <button className="btn btn-sm btn-outline-dark">
                                                    <BsFillEyeFill className="ms-1" />
                                                    نمایش
                                                </button>
                                            </Link>
                                            <Link to={`../edit-course/${course.id}`}>
                                                <button className="btn btn-sm btn-secondary me-1">
                                                    <FiEdit className="ms-1" />
                                                    ویرایش
                                                </button>
                                            </Link>
                                            <DeleteModal title={"دوره"} onDelete={() => handleDelete(course.id)} />
                                        </div>
                                    </td>

                                    <td>{formatDate(course.updatedAt)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Container>
        </Container >
    )
}
