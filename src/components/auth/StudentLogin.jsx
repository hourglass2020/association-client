import React, { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import { loginStudent } from "../../services/studentServices";
import { AuthContext } from "../../context/Auth/context";
import jwtDecode from "jwt-decode";

export default function StudentLogin() {
    const navigator = useNavigate();
    const { setLoggedIn, setUser } = useContext(AuthContext);

    const [form, setForm] = useState({});

    const [validated, setValidated] = useState(false);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formState = event.currentTarget;

        if (formState.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }

        const { data, status } = await loginStudent(form);

        if (status === 200) {
            setLoggedIn(true);
            setUser(jwtDecode(data.token).user)
            console.log(user);
            localStorage.setItem("token", data.token);
            // navigator("/student-panel");
            toast.success("ورود با موفقیت انجام شد.");
            navigator("/");
        }

        setValidated(true);
    };

    return (
        <Form noValidate validated={validated} onSubmit={handleSubmit} className="mt-3">
            <Form.Group controlId="formEmail">
                <Form.Label>نام کاربری</Form.Label>
                <Form.Control
                    required
                    type="email"
                    placeholder="example@gmail.com"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    لطفا مجدد نام کاربری چک شود.
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword" className="mt-3">
                <Form.Label>رمز عبور</Form.Label>
                <Form.Control
                    required
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
                <Form.Control.Feedback>بسیار عالی!</Form.Control.Feedback>
                <Form.Control.Feedback type="invalid">
                    لطفا رمز عبور چک شود.
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="warning" type="submit" className="w-100 mt-4">
                ورود
            </Button>
            <p className="my-0 mt-3">
                آیا حساب کاربری ندارید؟ <Link to="/register">حساب جدید بسازید!</Link>
            </p>
        </Form>
    );
}
