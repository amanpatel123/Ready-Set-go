import React from 'react';
import styled from 'styled-components';

const InputField = styled.input`
float: center;
width: 450px;
height: 25px;
font-size: 20px;
margin: 30px 20px 30px 26px;
`;

const FormInputField = ({type, name, placeholder, value, onChange}) => {
    return (
       <InputField type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    );
}
 
export default FormInputField;