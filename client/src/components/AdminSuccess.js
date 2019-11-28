import React, { Component } from 'react';
import styled from 'styled-components';
import Button from "./reusableComponents/Button";

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
margin-left: 40px;
`;

class Table extends Component {
    render() {
        return (
           <Wrapper>
               <Text>INFORMATION UPDATED</Text><br />
               <Div> 
                <Button type="submit" text="MAIN PAGE" to="/admin" />
               </Div>
            </Wrapper>
        );
    }
}
 
export default Table;