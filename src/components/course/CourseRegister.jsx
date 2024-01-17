import React from 'react'
import { Button, Modal } from 'react-bootstrap'

export default function CourseRegister({ show, handleClose }) {
    return (
        <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered

        >
            <Modal.Header >
                <Modal.Title>متاسفانه ثبت نام فعال نیست.</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                در حال حاضر بخش ثبت نام سایت فعال نیست. برای ثبت نام به کانال تلگرامی انجمن مراجعه کنید.
            </Modal.Body>
            <Modal.Footer>
                <Button variant="primary" onClick={handleClose}>
                    متوجه شدم
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
