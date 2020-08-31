import axios from "axios";

const baseURL = 'https://www.googleapis.com/books/v1/volumes?maxResults=5&key=AIzaSyDpGNS4rSWylbzwdv0LR9e5MiSxYIR-x7o&q='

export default {

    searchBook: searchQuery => {
        return axios.get(baseURL + searchQuery);
    },

    getBooks: () => {
        return axios.get("/api/books");
    },

    getBook: id => {
        return axios.get(`/api/books/${id}`);
    },

    saveBook: bookData => {
        return axios.post("/api/books", bookData);
    },

    deleteBook: id => {
        return axios.delete(`/api/books/${id}`);
    }

}