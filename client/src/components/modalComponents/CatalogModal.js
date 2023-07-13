import React from 'react';
import Modal from 'react-bootstrap/Modal';
import CatalogCards from '../commonComponents/CatalogCards';
import { Container, Row } from 'react-bootstrap';

const CatalogModal = ({ show, onHide, categories }) => {

    return (
        <Modal show={show} onHide={onHide} size="xl">
            <Modal.Header closeButton>
                <Modal.Title>Choose Category</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Container>
                    <Row>
                        <CatalogCards categories={categories} />
                    </Row>
                </Container>
            </Modal.Body>
        </Modal>
    );
}

export default CatalogModal;
