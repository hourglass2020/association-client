import React, { useEffect, useState } from "react";
import { Button, Modal, Spinner } from "react-bootstrap";
import toast from "react-hot-toast";
import { BsFillTrashFill } from "react-icons/bs";

export default function DeleteModal({ onDelete, title, isLoading, isError }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleSubmit = () => {
        onDelete();
        setShow(false);
    }

    useEffect(() => {
        if (isError) {
            setShow(false);
            toast.error("مشکلی پیش آمده است.");
        }
    }, [isError])

    return (
        <>
            <Button variant="danger" size="sm" className="me-1" onClick={handleShow}>
                <BsFillTrashFill className="ms-1" />
                حذف
            </Button>

            <Modal show={show} onHide={handleClose} centered backdrop="static">
                <Modal.Header>
                    <Modal.Title>حذف {title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>آیا از حذف این {title} مطمئن هستید؟</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        انصراف
                    </Button>
                    <Button variant="danger" onClick={handleSubmit}>
                        {isLoading ?
                            <Spinner size="sm" className="ms-1" />
                            : null}
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
