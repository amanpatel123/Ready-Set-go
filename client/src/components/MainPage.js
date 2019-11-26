import React, { Component } from 'react';
import styled from 'styled-components';
import Dropdown from './DropDown';
import Background from '../background.jpg';

const MainWrapper = styled.div`
// margin-top: 125px;
// margin-left: 500px;
`;

const Image = styled.img`
margin-top: 125px;
margin-left: 500px;
`;

// const TextWrapper = styled.text`
// font-size: 42px;
// color: white;
// `;

class Main extends Component {
    render() {
        return (
            <MainWrapper>
                <Dropdown></Dropdown><br />
                <Image src={Background} className="App-logo" alt="logo" />
            </MainWrapper>
        );
    }
}
 
export default Main;