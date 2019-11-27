import React from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import Button from "./reusableComponents/Button";
import { NavLink } from 'react-router-dom';

const PaymentWrapper = styled.div`
padding-left: 500px;
margin-top: 70px;
`;

const PaymentBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 494px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

const Text = styled.text`
font-size: 22px;
color: black;
text-align: center;
margin-top: 15px;
`;

const PayButton = styled.button`
width: 100px;
height: 35px;
background-color: white;
border: 1px solid rgba(0, 0, 0, .2);
margin: 20px 0 0 200px;
`;

const Separator = styled.form`
  width: 500px;
  height: 40px;
  border: 1px solid rgba(0, 0, 0, .2);
  margin-top: 35px;
  text-align: center;
`;

const InputField = styled.input`
float: center;
width: 215px;
height: 25px;
font-size: 20px;
margin: 0px 0px 15px 26px;
`;

const Div = styled.div`
display:flex;
flex-direction: row;
`;


const Payment = () => {
    return (
        <PaymentWrapper>
            <TitleBox heading="PAYMENT" />
            <PaymentBox>
                <Text>Pay at Pickup</Text>
                <Text style={{"font-size": "15px"}}>You can just pay when you arrive!</Text>
                <PayButton><NavLink to="/success"  style={{color: "black", textDecoration: "None"}} activeStyle={{fontWeight: "bold",color: "black"}}>Pay Later</NavLink></PayButton>
                <Separator><Text>OR</Text></Separator>
                <Text>Pay Now</Text>
                <InputField type="text" name="cardnumber" placeholder="Credit Card Number" style={{width: "450px", height: "25px", "margin-top": "25px"}} />
                <Div>
                    <InputField placeholder="EXP Date" />
                    <InputField placeholder="CVV" style={{"margin-left":"15px"}} />
                </Div>
                <Div>
                    <InputField placeholder="First Name" />
                    <InputField placeholder="Last Name" style={{"margin-left":"15px"}} />
                </Div><br />
                <Button type="submit" text="PLACE ORDER" to="/success" />
            </PaymentBox>
        </PaymentWrapper>
    );
}
 
export default Payment;