import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import InputForm from '../components/InputForm';

const Authentication = ({ buttonLabel, className, style }) => {
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    return (
        <div style={style}>
            <Button color='secondary' onClick={toggle}>
                {buttonLabel}
            </Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <ModalHeader toggle={toggle}>create an account</ModalHeader>
                <ModalBody>
                    <InputForm />
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={toggle}>
                        submit
                    </Button>{' '}
                    <Button color='secondary' onClick={toggle}>
                        cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Authentication;
