import React from "react";
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';


function InserirAluno({ isOpen, toggleModal }) {
    if (!isOpen) return null;

    return (
        <Modal>
            <ModalHeader>Incluir Alunos</ModalHeader>
            <button className="close-button" onClick={toggleModal} />
            <ModalBody>
                <div className='form-group'>
                    <label>Nome:</label>
                    <input type='text' className='form-control' />
                    <label>Email:</label>
                    <input type='text' className='form-control' />
                    <label>Idade:</label>
                    <input type="number" className="form-control" />
                </div>
            </ModalBody>
            <ModalFooter>
                <button className='btn btn-primary'>Incluir</button>
                <button className='btn btn-danger' onClick={toggleModal}>Cancelar</button>
            </ModalFooter>
        </Modal>
    );
}

export default InserirAluno;
