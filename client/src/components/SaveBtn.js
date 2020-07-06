import React, { Component } from 'react';
import { Button } from 'reactstrap';
import Video from '../components/VideoPlayer'


class SaveBtn extends Component {
    async postData() {
        try {
            let result = await fetch('https://webhook.site/4cb72455-603c-44a4-b29b-d93a3755caf6', {
                method: 'post',
                mode: 'no-cors',
                headers: {
                    'Accept': 'application/json',
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    videoID: this.props.videoID.getVideo
                })
            });
            console.log('Result:' + result)
        } catch (e) {
            console.log(e)
        }


    }
    render() {

        return (<Button onClick={() => this.postData()} color='secondary'>Save</Button>
        )
    };








}



export default SaveBtn;
