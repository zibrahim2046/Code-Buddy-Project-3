import React from 'react';
import { Button } from 'reactstrap';

class SaveBtn extends React.Component {
    async postData() {
        try {
            let result = await fetch('https://webhook.site/7729b300-3867-49c8-9d8f-a89408f1426f', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    Accept: 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({}),
            });
            console.log('Result:' + result);
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <Button onClick={() => this.postData()} color='secondary'>
                Save
            </Button>
        );
    }
}

export default SaveBtn;
