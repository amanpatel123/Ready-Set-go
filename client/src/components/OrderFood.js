import React from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import FormButton from "./reusableComponents/Button"; 

const OrderWrapper = styled.div`
padding-left: 500px;
margin-top: 1px;
`;

const OrderBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

const Order = () => {
    return (
        <OrderWrapper>
            <TitleBox heading="ORDER FOOD"></TitleBox>
            <OrderBox>
            <FormButton type="submit" text="NEXT" to="/payment"/>
            </OrderBox>
        </OrderWrapper>
    );
}
 
export default Order;