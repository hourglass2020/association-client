import axios from "axios"

const SERVER_URL = "http://localhost:7000/students"

// @desc    handle login
// @route   POST /students/login
export const loginAdmin = async (body) => {
    return axios.post(`${SERVER_URL}/login`, body);
}

