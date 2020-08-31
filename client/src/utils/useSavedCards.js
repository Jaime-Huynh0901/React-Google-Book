import { useState, useEffect } from 'react';
import API from "./API";


const useSavedCards = () => {

    const blankState = [];
    // States
    const [savedBookState, setSavedBookState] = useState(blankState);

    const getSavedBooks = async () => {
        try {
            const response = await API.getBooks();
            setSavedBookState(response.data);
            console.log(response.data);
        } catch (err) {
            console.log(err)
        }
    };

    useEffect(() => {
        getSavedBooks();
    }, [])

    console.log(savedBookState);

    const handleDeletedBook = async index => {
        try {
            const deletedBook = savedBookState[index];
            await API.deleteBook(deletedBook._id)
            getSavedBooks()
        }
        catch (err) {
            console.log(err);
        }
    }


    return {
        savedBookState,
        handleDeletedBook,

    };

};

export default useSavedCards;