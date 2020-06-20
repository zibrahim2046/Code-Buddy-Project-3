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
                <ModalHeader toggle={toggle}>Create An Account</ModalHeader>
                <ModalBody>
                    <InputForm />
                </ModalBody>
                <ModalFooter>
                    <Button color='primary' onClick={toggle}>
                        Submit
                    </Button>{' '}
                    <Button color='secondary' onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
};

export default Authentication;
