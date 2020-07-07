import React from 'react';
import { Button } from 'reactstrap';

const SaveBtn = () => {
    return (
        <Button onClick={() => this.postData()} color='secondary'>
            Save
        </Button>
    );
};

export default SaveBtn;
