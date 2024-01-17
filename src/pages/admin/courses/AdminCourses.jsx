import React from "react";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import toast from "react-hot-toast";
import { FiEdit } from "react-icons/fi";
import { BsFillEyeFill } from "react-icons/bs";
import { Helmet } from "react-helmet-async";

import {
    useDeleteCourseMutation,
    useGetAdminCoursesQuery,
} from "../../../api/apiSlice";
import Loading from "../../../components/Loading";
import { formatDate, numberFormat } from "../../../utils/helpers";
import DeleteModal from "../../../components/modals/DeleteModal";

export default function AdminCourses() {
    const { data, isError, isLoading } = useGetAdminCoursesQuery();
    const [deleteCourse, { isLoading: isLoadingDelete, isError: isErrorDelete }] =
        useDeleteCourseMutation();

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />;
    }

    const handleDelete = (courseId) => {
        if (courseId) {
            deleteCourse(courseId);
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    دوره‌های انجمن
                </title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>دوره‌ها</h3>
                    <Link to="../new-course">
                        <Button variant="warning">افزودن دوره</Button>
                    </Link>
                </div>
                <Container className="card-box card">
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
                                                <DeleteModal
                                                    title={"دوره"}
                                                    onDelete={() => handleDelete(course.id)}
                                                    isLoading={isLoadingDelete}
                                                    isError={isErrorDelete}
                                                />
                                            </div>
                                        </td>

                                        <td>{formatDate(course.updatedAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Container>
        </>
    );
}
