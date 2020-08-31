import { useState } from 'react';
import API from "./API";


const useForm = () => {

    const blankState = [];
    // States
    const [bookState, setBookState] = useState(blankState);
    const [searchState, setSearchState] = useState({ title: "" });

    const handleInputChange = event => {
        const { value, name } = event.target;
        setSearchState({
            ...searchState,
            [name]: value
        })
    }

    const getSearchBook = async () => {
        try {
            let myResult = []
            const response = await API.searchBook(searchState.title);
            response.data.items.map(item => myResult.push({
                title: `${item.volumeInfo.title}  ${item.volumeInfo.subtitle}`,
                authors: item.volumeInfo.authors[0],
                description: item.volumeInfo.description,
                image: item.volumeInfo.imageLinks.thumbnail,
                link: item.volumeInfo.previewLink
            }));
            setBookState(myResult);
        } catch (err) {
            console.log(err)
        }
    };

    const handleBookSearch = event => {
        getSearchBook();
        setSearchState({
            ...searchState,
            title: ""
        })
    }

    const handleBookSaved = async index => {
        try {
            const savedBook = bookState[index];
            await API.saveBook(savedBook)
            console.log(index)
            console.log(savedBook)
        }
        catch (err) {
            console.log(err);
        }
    }


    console.log(searchState);
    console.log(bookState);

    return {
        bookState,
        searchState,
        handleInputChange,
        handleBookSearch,
        handleBookSaved
    };

};

export default useForm;

