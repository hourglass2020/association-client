import React from 'react'
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';
import { BsFillEyeFill, BsPersonFillAdd } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import Loading from '../../../components/Loading';
import { formatDate } from '../../../utils/helpers';
import { useGetAdminArticlesQuery } from '../../../api/apiSlice';

export default function AdminArticles() {
    const { data, isError, isLoading } = useGetAdminArticlesQuery();

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
                    مقالات
                </title>
            </Helmet>
            <Container>
                <div className="d-flex my-3 justify-content-between">
                    <h3>مقالات</h3>
                    <Link to="../create-article">
                        <Button variant='warning' size='sm'>
                            <BsPersonFillAdd className='ms-1' />
                            افزودن مقاله
                        </Button>
                    </Link>
                </div>
                <Container className="card-box card">
                    <div className="table-responsive">
                        <table className="table align-middle">
                            <thead>
                                <tr>
                                    <th>عنوان</th>
                                    <th>نمایش عمومی</th>
                                    <th>نویسنده</th>
                                    <th>عملیات</th>
                                    <th>آخرین بروزرسانی</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((article) => (
                                    <tr key={article.id}>
                                        <td>{article.title}</td>
                                        <td>{article.public}</td>
                                        <td>{article.author}</td>
                                        <td>
                                            <div className="d-flex">
                                                <Link to={`${article.id}`}>
                                                    <button className="btn btn-sm btn-outline-dark">
                                                        <BsFillEyeFill className="ms-1" />
                                                        نمایش
                                                    </button>
                                                </Link>
                                                <Link to={`../edit-article/${article.id}`}>
                                                    <button className="btn btn-sm btn-secondary me-1">
                                                        <FiEdit className="ms-1" />
                                                        ویرایش
                                                    </button>
                                                </Link>
                                            </div>
                                        </td>

                                        <td>{formatDate(article.updatedAt)}</td>
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
