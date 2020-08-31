import React from "react";
import Card from "react-bootstrap/Card";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const SearchForm = ({ handleInputChange, handleBookSearch, searchState }) => {

    return (

        <Card>
            <Card.Header as="h5">Book Search</Card.Header>
            <Card.Body>
                <Card.Title>Book Title</Card.Title>
                <Card.Text>
                    Enter the Book Title below to search:
                </Card.Text>

                <InputGroup className="mb-3">
                    <FormControl
                        placeholder="Search By Book Title"
                        aria-label="title"
                        aria-describedby="basic-addon2"
                        name="title"
                        onChange={handleInputChange}
                        value={searchState.title}
                    />
                    <InputGroup.Append>
                        <Button
                            variant="outline-secondary"
                            onClick={handleBookSearch}
                        >
                            Search</Button>
                    </InputGroup.Append>
                </InputGroup>

            </Card.Body>
        </Card>

    )
}

export default SearchForm;