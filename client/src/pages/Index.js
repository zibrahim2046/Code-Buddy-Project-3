import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components';
import Authentication from '../components/Authentication';

const MainPage = () => {
    return (
        <div className='App'>
            <h1>Welcome To Code Buddy</h1>
            <p>Please Sign In To Continue</p>
            <Form inline>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='exampleEmail' className='mr-sm-2'>
                        Username
                    </Label>
                    <Input type='username' name='username' id='username' placeholder='' />
                </FormGroup>
                <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                    <Label for='password' className='mr-sm-2'>
                        Password
                    </Label>
                    <Input type='password' name='password' id='password' placeholder='' />
                </FormGroup>
                <Button>Submit</Button>
            </Form>
            <Authentication buttonLabel='New User?' style={{ marginTop: 100 }} />
        </div>
    );
};
export default MainPage;
