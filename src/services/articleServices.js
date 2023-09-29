import axios from "axios";

const SERVER_URL = 'https://api.boxinoshop.com';

export const getAllArticles = () => {
    return axios.get(`${SERVER_URL}/articles`)
}

export const getArticleById = (articleId) => {
    return axios.get(`${SERVER_URL}/articles/${articleId}`)
}