import React from 'react'
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { BsFillEyeFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from '../../../components/Loading';
import { formatDate } from '../../../utils/helpers';

import { useGetAdminBannersQuery } from '../../../api/apiSlice';

export default function AdminBanners() {
    const { data, isError, isLoading } = useGetAdminBannersQuery();

    if (isError) {
        toast.error("مشکلی در دریافت اطلاعات پیش آمده است.");
        return;
    }

    if (isLoading) {
        return <Loading />;
    }

    return (
        <>
            <Helmet>
                <title>
                    بنرهای انجمن
                </title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>دوره‌ها</h3>
                </div>
                <Container className="card-box card">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>تیتر</th>
                                    <th>نوع بنر</th>
                                    <th>لینک</th>
                                    <th>عملیات</th>
                                    <th>آخرین بروزرسانی</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((banner) => (
                                    <tr key={banner.id}>
                                        <td>{banner.title}</td>
                                        <td>{banner.bannerType}</td>
                                        <td>{banner.link}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to={`${banner.id}`}>
                                                    <button className="btn btn-sm btn-outline-dark">
                                                        <BsFillEyeFill className="ms-1" />
                                                        نمایش
                                                    </button>
                                                </Link>
                                                <Link to={`../edit-banner/${banner.id}`}>
                                                    <button className="btn btn-sm btn-secondary me-1">
                                                        <FiEdit className="ms-1" />
                                                        ویرایش
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>

                                        <td>{formatDate(banner.updatedAt)}</td>
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
