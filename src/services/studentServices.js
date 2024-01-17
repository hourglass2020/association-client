import axios from "axios";

import { SERVER_URL } from ".";

// @desc    handle login
// @route   POST /students/login
export const loginStudent = async (body) => {
    return axios.post(`${SERVER_URL}/students/login`, body);
}

export const registerStudent = async (body) => {
    return axios.post(`${SERVER_URL}/students/register`, (body));
}