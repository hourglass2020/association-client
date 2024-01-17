import axios from "axios"
import { SERVER_URL } from ".";

// @desc    handle login
// @route   POST /admins/login
export const loginAdmin = async (body) => {
    return axios.post(`${SERVER_URL}/admins/login`, body);
}

