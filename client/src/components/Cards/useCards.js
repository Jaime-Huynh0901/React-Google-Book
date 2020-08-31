import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const useCards = (initialState, handleFunction, cardTitle, buttonLabel) => {

    const BookCards = () => (
        <Card>
            <Card.Header as="h5">{cardTitle}</Card.Header>
            <Card.Body>
                {initialState.map((book, index) => (
                    <Card
                        key={index}
                        data-index={index}
                    >
                        <Container>
                            <Row>
                                <Col xs={10} md={10}>
                                    <Card.Title className="pt-2">{book.title}</Card.Title>
                                    <Card.Text>
                                        <small> writen by: {book.authors} </small>
                                    </Card.Text>

                                </Col>
                                <Col xs={2} md={2}>
                                    <div className="pt-2">
                                        <Button variant="primary" href={book.link} target="_blank">View</Button>{' '}
                                        <Button
                                            variant="info"
                                            index={index}
                                            onClick={e => handleFunction(index)}
                                        >
                                            {buttonLabel}</Button>

                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <Row>
                                <Col xs={2} md={2}>
                                    <Image src={book.image} thumbnail />
                                </Col>
                                <Col xs={10} md={10}>
                                    <Card.Body>{book.description}</Card.Body>

                                </Col>
                            </Row>
                        </Container>
                    </Card>
                ))}
            </Card.Body>
        </Card>
    );

    return [BookCards]

}

export default useCards;