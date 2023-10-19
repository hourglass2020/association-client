import axios from "axios"

const SERVER_URL = "http://localhost:7000"

export const getAllCourses = () => {
    return axios.get(`${SERVER_URL}/courses`);
}