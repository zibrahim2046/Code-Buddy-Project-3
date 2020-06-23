import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const InputForm = (props) => {
    return (
        <Form>
            <FormGroup>
                <Label for='firstName'>first name</Label>
                <Input type='firstName' name='firstName' id='firstName' placeholder='enter your first name' />
            </FormGroup>
            <FormGroup>
                <Label for='lastName'>last name</Label>
                <Input type='lastName' name='lastName' id='lastName' placeholder='enter your last name' />
            </FormGroup>
            <FormGroup>
                <Label for='username'>username</Label>
                <Input type='username' name='username' id='username' placeholder='enter a username' />
            </FormGroup>
            <FormGroup>
                <Label for='password'>password</Label>
                <Input type='password' name='password' id='password' placeholder='enter a password' />
            </FormGroup>
        </Form>
    );
};

export default InputForm;
