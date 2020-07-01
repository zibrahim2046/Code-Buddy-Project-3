import React from 'react';
import { Button } from 'reactstrap';

const SaveBtn = () => {
    return (
        <Button onClick={this.props.handleClick} color='secondary'>
            {this.props.label}
            Save
        </Button>
    );
};

export default SaveBtn;
