import React from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


const Header = () => {
    return (
        <Container>
            <Row>
                <Col>
                    <Jumbotron >
                        <h1>(React) Google Books Search</h1>
                        <p>
                            Search for and Save Books of Interest
                        </p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    )
}

export default Header;