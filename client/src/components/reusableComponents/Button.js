import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Button = styled.button`
background-color: #3CB371;
border: 1px solid black;
color: white;
padding: 15px 32px;
// margin-left: 182px;
font-size: 16px;
cursor: pointer; 
`;

// const Navigation = styled.NavLink`
// color: white;
// textDecoration: None;
// `;

const FormButton = ({type, text, onClick, to}) => {
    return (
        <Button type={type} onClick={onClick}><NavLink to={to}  style={{color: "white", textDecoration: "None"}} activeStyle={{
            fontWeight: "bold",
            color: "black"
          }}>{text}</NavLink></Button>
    );
}
 
export default FormButton;