import React, { Component } from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import FormButton from "./reusableComponents/Button"; 

const OrderWrapper = styled.div`
padding-left: 500px;
margin-top: 35px;
`;

const OrderBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 571px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

const Text = styled.text`
font-size: 25px;
color: black;
text-align: center;
margin-top: 15px;
`;

const Checkbox = styled.input`
// margin-left: 150px;
width: 20   px; 
height: 20px;
`;

const Box = styled.div`
width: 200px;
height: 30px;
border: 1px solid rgba(0, 0, 0, .2);
margin: 20px 20px 10px 20px;
`;

const Div = styled.div`
display:flex;
flex-direction: row;
text-align: center;
`;

class Order extends Component {

    constructor(props){
        super(props)

        this.state = {
            itemID: '',
            itemName: '',
            isAvailable: true
        }
   }

   changeHandler = (event) => {
    this.setState({itemID: event.target.value, itemName: event.target.name
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state) 
  }
  render() {
    return (
        <OrderWrapper>
            <TitleBox heading="ORDER FOOD"></TitleBox>
            <OrderBox onSubmit={this.submitHandler}>
                <Text>Appetizers</Text>
                <Div>
                    <Box>Item 1</Box>
                    <Box>Item 2</Box>
                </Div>
                <Div>
                    <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Select<br />
                    <Checkbox type="checkbox" name="menuitem" value="item2" style={{"margin-left":"184px"}} onClick={this.changeHandler} />Select<br />
                </Div>
                <Text>Entrees</Text>
                <Div>
                    <Box>Item 3</Box>
                    <Box>Item 4</Box>
                </Div>
                <Div>
                    <Checkbox type="checkbox" name="menuitem" value="item3" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
                    <Checkbox type="checkbox" name="menuitem" value="item4" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
                </Div>
                <Div>
                    <Box>Item 5</Box>
                    <Box>Item 6</Box>
                </Div>
                <Div>
                    <Checkbox type="checkbox" name="menuitem" value="item5" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
                    <Checkbox type="checkbox" name="menuitem" value="item6" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
                </Div>
                <Text>Deserts</Text>
                <Div>
                    <Box>Item 7</Box>
                    <Box>Item 8</Box>
                </Div>
                <Div>
                    <Checkbox type="checkbox" name="menuitem" value="item7" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
                    <Checkbox type="checkbox" name="menuitem" value="item8" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
                </Div><br />
                    <FormButton type="submit" text="NEXT" to="/payment"/>
            </OrderBox>
        </OrderWrapper>
    );
  }
}
 
export default Order;