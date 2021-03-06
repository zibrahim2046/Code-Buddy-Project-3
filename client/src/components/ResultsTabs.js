import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import styled from 'styled-components';
import Video from '../components/VideoPlayer';
import SaveBtn from './SaveBtn';
import Books from './Books';

const LinkContainer = styled.div`
    margin-top: 10%;
    display: flex;
    flex-direction: column;
    font-size: 150%;
`;

const TabContainer = styled.div`
    height: 400px;
    width: 900px;
`;

const links = [
    {
        url: 'https://stackoverflow.com/',
        text: 'Stack Overflow',
    },
    {
        url: 'https://freecodecamp.org',
        text: 'FreeCodeCamp',
    },
    {
        url: 'https://www.w3schools.com/',
        text: 'W3 Schools',
    },
];

const WebLink = ({ url, text }) => (
    <a target='_blank' href={url}>
        Here's a link to {text}
    </a>
);

const RefreshBtn = () => {
    function refreshPage() {
        window.location.reload(false);
    }
    return (
        <div>
            <Button style={{ marginTop: 25 }} onClick={refreshPage}>
                New Content
            </Button>
        </div>
    );
};

const ResultsTabs = ({ topic }) => {
    const [activeTab, setActiveTab] = useState('1');

    const toggle = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    };

    return (
        <TabContainer>
            <Nav style={{ justifyContent: 'center' }} tabs>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '1' })}
                        onClick={() => {
                            toggle('1');
                        }}
                    >
                        Videos
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '2' })}
                        onClick={() => {
                            toggle('2');
                        }}
                    >
                        Links
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink
                        className={classnames({ active: activeTab === '3' })}
                        onClick={() => {
                            toggle('3');
                        }}
                    >
                        Books
                    </NavLink>
                </NavItem>
            </Nav>
            <TabContent activeTab={activeTab}>
                <TabPane tabId='1'>
                    <Row>
                        <Col sm='12'>
                            <Video topic={topic} />
                            {/* <SaveBtn style={{ marginRight: 25 }} /> */}
                            <RefreshBtn />
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId='2'>
                    <Row>
                        <Col sm='12'>
                            <LinkContainer>
                                {links.map(({ url, text }, index) => (
                                    <WebLink key={index} url={url} text={text} />
                                ))}
                            </LinkContainer>
                        </Col>
                    </Row>
                </TabPane>
                <TabPane tabId='3'>
                    <Row>
                        <Col sm='12'>
                            {/* <h4>Tab 3 Contents</h4> */}
                            <Books topic={topic} />
                        </Col>
                    </Row>
                </TabPane>
            </TabContent>
        </TabContainer>
    );
};

export default ResultsTabs;
