import React from 'react'
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { BsFillEyeFill, BsPersonFillAdd } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from '../../../components/Loading';
import { formatDate } from '../../../utils/helpers';
import { useDeleteAdminTeacherMutation, useGetAdminTeachersQuery } from '../../../api/apiSlice';
import DeleteModal from '../../../components/modals/DeleteModal';

export default function AdminTeachers() {
    const [deleteTeacher, { isLoading: isLoadingDelete, isError: isErrorDelete }] =
        useDeleteAdminTeacherMutation();

    const { data, isError, isLoading } = useGetAdminTeachersQuery();

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />;
    }

    const handleDelete = (teacherId) => {
        if (teacherId) {
            deleteTeacher(teacherId);
        }
    };

    return (
        <>
            <Helmet>
                <title>
                    اساتید
                </title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>اساتید</h3>
                    <Link to="../create-teacher">
                        <Button variant='warning' size='sm'>
                            <BsPersonFillAdd className='ms-1' />
                            افزودن استاد
                        </Button>
                    </Link>
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
                                {data.map((teacher) => (
                                    <tr key={teacher.id}>
                                        <td>{teacher.Profile.firstname}</td>
                                        <td>{teacher.Profile.lastname}</td>
                                        <td>{teacher.phoneNumber}</td>
                                        <td>{teacher.Profile.email}</td>
                                        <td>{teacher.field}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to={`${teacher.ProfileId}`}>
                                                    <button className="btn btn-sm btn-outline-dark">
                                                        <BsFillEyeFill className="ms-1" />
                                                        نمایش
                                                    </button>
                                                </Link>
                                                <Link to={`../edit-teacher/${teacher.ProfileId}`}>
                                                    <button className="btn btn-sm btn-secondary me-1">
                                                        <FiEdit className="ms-1" />
                                                        ویرایش
                                                    </button>
                                                </Link>
                                                <DeleteModal
                                                    title={"استاد"}
                                                    onDelete={() => handleDelete(teacher.ProfileId)}
                                                    isLoading={isLoadingDelete}
                                                    isError={isErrorDelete}
                                                />
                                            </div>
                                        </td>

                                        <td>{formatDate(teacher.updatedAt)}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Container>
            </Container>
        </>
    )
}
