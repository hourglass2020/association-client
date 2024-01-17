import React from "react";
import { Helmet } from "react-helmet-async";
import toast from "react-hot-toast";
import { BsFillEyeFill, BsPersonFillAdd } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import Loading from "../../../components/Loading";
import { formatDate } from "../../../utils/helpers";
import { useDeleteStudentMutation, useGetAdminStudentsQuery } from "../../../api/apiSlice";
import DeleteModal from "../../../components/modals/DeleteModal";

export default function AdminStudents() {
    const [deleteStudent, { isLoading: isLoadingDelete, isError: isErrorDelete }] =
        useDeleteStudentMutation();

    const { data, isError, isLoading } = useGetAdminStudentsQuery();

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />;
    }

    const handleDelete = (studentId) => {
        if (studentId) {
            deleteStudent(studentId);
        }
    };

    return (
        <>
            <Helmet>
                <title>دانشجویان</title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>دانشجویان</h3>
                </div>
                <Container className="card-box card">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>نام</th>
                                    <th>نام خانوادگی</th>
                                    <th>شماره تماس</th>
                                    <th>ایمیل</th>
                                    <th>رشته</th>
                                    <th>عملیات</th>
                                    <th>آخرین بروزرسانی</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((student) => (
                                    <tr key={student.id}>
                                        <td>{student.Profile.firstname}</td>
                                        <td>{student.Profile.lastname}</td>
                                        <td>{student.phoneNumber}</td>
                                        <td>{student.Profile.email}</td>
                                        <td>{student.field}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to={`${student.ProfileId}`}>
                                                    <button className="btn btn-sm btn-outline-dark">
                                                        <BsFillEyeFill className="ms-1" />
                                                        نمایش
                                                    </button>
                                                </Link>
                                                <DeleteModal
                                                    title={"دانشجو"}
                                                    onDelete={() => handleDelete(student.ProfileId)}
                                                    isLoading={isLoadingDelete}
                                                    isError={isErrorDelete}
                                                />
                                            </div>
                                        </td>

                                        <td>{formatDate(student.updatedAt)}</td>
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
