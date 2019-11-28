import React, { Component } from 'react';
import styled from 'styled-components';
// import Button from "./reusableComponents/Button";
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
padding-left: 500px;
margin-top: 250px;
margin-left: 175px;
`;

const Text = styled.text`
font-size: 22px;
color: black;
text-align: center;
margin-top: 15px;
`;

const Div = styled.div`
margin-top: 20px;
margin-left: 12px;
`;

const Button = styled.button`
background-color: #3CB371;
border: 1px solid black;
color: white;
padding: 15px 32px;
// margin-left: 182px;
font-size: 16px;
cursor: pointer; 
`;


class Table extends Component {
    render() {
        return (
           <Wrapper>
               <Div> 
                <Button type="submit" style={{padding: "15px 41px"}} ><NavLink to="/admintable"  style={{color: "white", textDecoration: "None"}} activeStyle={{fontWeight: "bold",color: "black"}}>UPDATE TABLE</NavLink></Button><br /><br />
                <Button type="submit" style={{padding: "15px 43px"}} ><NavLink to="/edit"  style={{color: "white", textDecoration: "None"}} activeStyle={{fontWeight: "bold",color: "black"}}>UPDATE MENU</NavLink></Button><br /><br />
                <Button type="submit" ><NavLink to="/adminorder"  style={{color: "white", textDecoration: "None"}} activeStyle={{fontWeight: "bold",color: "black"}}>UPDATE ORDERS</NavLink></Button>
               </Div>
            </Wrapper>
        );
    }
}
 
export default Table;