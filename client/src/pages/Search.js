import React from "react";
import useForm from "../utils/useForm";
import SearchForm from "../components/Search/SearchForm";
import SearchResult from "../components/Search/SearchResult";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Search = () => {
    const {
        searchState,
        bookState,
        handleInputChange,
        handleBookSearch,
        handleBookSaved
    } = useForm();



    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <SearchForm
                            searchState={searchState}
                            handleInputChange={handleInputChange}
                            handleBookSearch={handleBookSearch} />
                    </Col>
                </Row>
                <br />
                <br />
                <Row>
                    <Col>
                        <SearchResult
                            bookState={bookState}
                            handleBookSaved={handleBookSaved} />

                    </Col>
                </Row>

            </Container>

        </div>
    )
}

export default Search;