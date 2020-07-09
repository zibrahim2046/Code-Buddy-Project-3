import React from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import { UncontrolledButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { useHistory } from 'react-router-dom';
import { htmlCss, node, js, react } from '../assets/topics';

const HelpPage = () => {
    // const [dropdownOpen, setOpen] = React.useState(false);
    // const toggle = () => setOpen(!dropdownOpen);
    const history = useHistory();

    const test = (topic) => {
        history.push({ pathname: '/results', state: { topic } });
    };

    return (
        <div>
            <h1>What can I help you with?</h1>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>HTML5/CSS</DropdownToggle>
                <DropdownMenu>
                    {htmlCss.map(({ title, topic }) => (
                        <DropdownItem key={topic} onClick={() => test(topic)}>
                            {title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>NodeJS</DropdownToggle>
                <DropdownMenu>
                    {node.map(({ title, topic }) => (
                        <DropdownItem key={topic} onClick={() => test(topic)}>
                            {title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>Javascript</DropdownToggle>
                <DropdownMenu>
                    {js.map(({ title, topic }) => (
                        <DropdownItem key={topic} onClick={() => test(topic)}>
                            {title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledButtonDropdown>
            <UncontrolledButtonDropdown style={{ marginRight: 25 }}>
                <DropdownToggle caret>React</DropdownToggle>
                <DropdownMenu>
                    {react.map(({ title, topic }) => (
                        <DropdownItem key={topic} onClick={() => test(topic)}>
                            {title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </UncontrolledButtonDropdown>
        </div>
    );
};
export default HelpPage;
