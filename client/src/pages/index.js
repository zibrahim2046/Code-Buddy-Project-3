import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import Loader from '../components/Loader';

const MainPage = () => {
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 2000);
    // }, []);

    return (
        <div className='App'>
            {loading ? (
                <Loader />
            ) : (
                <>
                    <h1>welcome to code buddy</h1>
                    <p>please sign in to continue</p>
                    <Form inline>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                            <Label for='exampleEmail' className='mr-sm-2'>
                                username
                            </Label>
                            <Input type='username' name='username' id='username' placeholder='' />
                        </FormGroup>
                        <FormGroup className='mb-2 mr-sm-2 mb-sm-0'>
                            <Label for='password' className='mr-sm-2'>
                                password
                            </Label>
                            <Input type='password' name='password' id='password' placeholder='' />
                        </FormGroup>
                        <Button>Submit</Button>
                    </Form>
                </>
            )}
        </div>
    );
};
export default MainPage;
