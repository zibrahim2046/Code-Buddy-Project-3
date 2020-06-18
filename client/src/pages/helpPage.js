import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const HelpPage = () => {
    // const [dropdownOpen, setOpen] = React.useState(false);
    // const toggle = () => setOpen(!dropdownOpen);
    return (
        <div>
            <h1>hello, User! my name is Code Buddy, what can I help you with?</h1>
            <UncontrolledButtonDropdown>
                <DropdownToggle caret>HTML5</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
                <DropdownToggle caret>CSS</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
                <DropdownToggle caret>NodeJS</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown>
                <DropdownToggle caret>React</DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                    <DropdownItem>Action</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
    );
};
export default HelpPage;
