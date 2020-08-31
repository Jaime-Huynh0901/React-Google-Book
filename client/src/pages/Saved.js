import React from "react";
import useCards from "../components/Cards/useCards";
import useSavedCards from "../utils/useSavedCards";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

const Saved = () => {
    const {
        savedBookState,
        handleDeletedBook,
    } = useSavedCards();

    const [SavedCards] = useCards(savedBookState, handleDeletedBook, "Saved Books", "Delete")

    return (
        <Container>
            <Row>
                <Col>
                    <SavedCards />
                </Col>
            </Row>
        </Container>
    )
}

export default Saved;