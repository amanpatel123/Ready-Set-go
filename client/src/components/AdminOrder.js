import React, { Component } from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import Button from "./reusableComponents/Button";
import SimpleDropdown from './reusableComponents/SimpleDropdown';

const Wrapper = styled.div`
padding-left: 500px;
margin-top: 70px;
`;

const OrdersBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 490px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

const Line = styled.hr`
width: 500px;
// height: 0px;
// border: 1px solid black;
border-color: black;
background-color: black;
`;

const OrderHeading = styled.div`
font-size: 25px;
`;

const OrderDetails = styled.div`
font-size: 15px;
`;

// const Text = styled.text`
// font-size: 22px;
// color: black;
// text-align: center;
// margin-top: 15px;
// `;

// const Div = styled.div`
// margin-top: 20px;
// margin-left: 40px;
// `;

class AdminOrder extends Component {
    render() {
        return (
           <Wrapper>
               <TitleBox heading="TAKEOUT ORDERS" />
               <OrdersBox>
                   <OrderHeading>Order #1</OrderHeading>
                   <OrderDetails>Customer Name: John Doe</OrderDetails>
                   <OrderDetails>Order Info: Item 1, Item 2, Item 3</OrderDetails>
                   <SimpleDropdown /><br />
                   <Line /><br />
                   <OrderHeading>Order #2</OrderHeading>
                   <OrderDetails>Customer Name: Adam</OrderDetails>
                   <OrderDetails>Order Info: Item 1, Item 2</OrderDetails>
                   <SimpleDropdown /><br />
                   <Line /><br />
                   <OrderHeading>Order #3</OrderHeading>
                   <OrderDetails>Customer Name: Philip</OrderDetails>
                   <OrderDetails>Order Info: Item 1, Item 2, Item 3, Item 4</OrderDetails>
                   <SimpleDropdown /><br />
                   <Button type="submit" text="NEXT" to="/adminsuccess"/>
               </OrdersBox>
            </Wrapper>
        );
    }
}
 
export default AdminOrder;