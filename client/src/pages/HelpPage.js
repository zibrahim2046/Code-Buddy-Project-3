import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const HelpPage = () => {
    // const [dropdownOpen, setOpen] = React.useState(false);
    // const toggle = () => setOpen(!dropdownOpen);
    return (
        <div>
            <h1>Hello, User! My name is Code Buddy, what can I help you with?</h1>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>HTML5/CSS</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Intro to HTML/CSS</DropdownItem>
                    <DropdownItem>Styling your HTML</DropdownItem>
                    <DropdownItem>Advanced HTML/CSS Topics</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>NodeJS</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Intro to NodeJS</DropdownItem>
                    <DropdownItem>NodeJS and MySql</DropdownItem>
                    <DropdownItem>Restful API's</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>Javascript</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Intro to Javascript</DropdownItem>
                    <DropdownItem>For Loops and Functions</DropdownItem>
                    <DropdownItem>Back End Javascript</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>React</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Create-React-App</DropdownItem>
                    <DropdownItem>ES6 Syntax</DropdownItem>
                    <DropdownItem>Conditional Rendering</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
    );
};
export default HelpPage;
