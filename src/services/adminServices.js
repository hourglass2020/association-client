import axios from "axios"

const SERVER_URL = "http://localhost:7000/admins"

// @desc    handle login
// @route   POST /admins/login
export const loginAdmin = async (body) => {
    return axios.post(`${SERVER_URL}/login`, body);
}

