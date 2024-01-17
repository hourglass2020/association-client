import axios from "axios"

const SERVER_URL = "http://localhost:7000/teachers"

// @desc    create new teacher
// @route   POST /teachers
export const registerTeacher = async (body) => {
    return axios.post(`${SERVER_URL}`, body);
}

// @desc    handle login
// @route   POST /teachers/login
export const loginTeacher = async (body) => {
    return axios.post(`${SERVER_URL}/login`, body);
}

// @desc    handle update teacher
// @route   PUT /teachers/update
export const updateTeacher = async (body) => {
    return axios.put(`${SERVER_URL}/update`, body);
}

// @desc    get all course
// @route   GET /teachers/courses
export const getTeacherCourses = async () => {
    return axios.get(`${SERVER_URL}/courses`);
}

// @desc    handle create new course
// @route   POST /teachers/courses
export const createCourse = async (body) => {
    return axios.post(`${SERVER_URL}/courses`, body, {
        headers: {
            Authorization: `Barear ${localStorage.getItem("token")}`
        }
    });
}

// @desc    handle update a course
// @route   PUT /teachers/courses/courseId
export const updateCourse = async (body, courseId) => {
    return axios.put(`${SERVER_URL}/courses/${courseId}`, body, {
        headers: {
            Authorization: `Barear ${localStorage.getItem("token")}`
        }
    });
}

// @desc    handle delete a course
// @route   DELETE /teachers/courses/courseId
export const deleteCourse = (courseId) => {
    return axios.delete(`${SERVER_URL}/courses/${courseId}`, {
        headers: {
            Authorization: `Barear ${localStorage.getItem("token")}`
        }
    });
}