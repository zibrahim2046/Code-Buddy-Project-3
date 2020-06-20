import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const InputForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for='firstName'>First Name</Label>
                <Input type='firstName' name='firstName' id='firstName' placeholder='Please enter your first name' />
            </FormGroup>
            <FormGroup>
                <Label for='lastName'>Last Name</Label>
                <Input type='lastName' name='lastName' id='lastName' placeholder='Please enter your last name' />
            </FormGroup>
            <FormGroup>
                <Label for='username'>Username</Label>
                <Input type='username' name='username' id='username' placeholder='Please enter a username' />
            </FormGroup>
            <FormGroup>
                <Label for='password'>Password</Label>
                <Input type='password' name='password' id='password' placeholder='Please enter a password' />
            </FormGroup>
        </Form>
    );
};

export default InputForm;
