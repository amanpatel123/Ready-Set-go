import React, { Component } from 'react';
import styled from 'styled-components';
import './tableview.css';
import FormButton from "./Button"; 
// const TableWrapper = styled.div`
// padding-left: 500px;
// margin-top: 25px;
// `;
// const TextWrapper = styled.text`
// font-size: 42px;
// color: white;
// `;

const TableBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 600px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

const LargeTable = styled.button`
background-color: white;
width: 150px;
min-height: 150px;
border: 1px solid rgba(0, 0, 0, .2);
margin: 15px 60px 20px 60px;
`;

const Div = styled.div`
display:flex;
flex-direction: row;
`;

const SmallTable = styled.button`
background-color: white;
width: 150px;
height: 75px;
border: 1px solid rgba(0, 0, 0, .2);
margin: 15px 60px 20px 60px;
`;

class TableView extends Component {
    constructor(props){
        super(props)

        this.state = {
            tableNo: '',
            noOfSeats: '',
            isAvailable: true
        }
   }

   changeHandler = (event) => {
    this.setState({noOfSeats: event.target.value, tableNo: event.target.name, isAvailable:false
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state) 
  }

    render() {
        return (
                <TableBox onSubmit={this.submitHandler}>
                    <Div>
                        <LargeTable name="1" value="5" onClick={this.changeHandler}>TABLE 1</LargeTable>
                        <LargeTable name="2" value="5" onClick={this.changeHandler}>TABLE 2</LargeTable>
                    </Div>
                    <Div>
                        <LargeTable name="3" value="5" onClick={this.changeHandler}>TABLE 3</LargeTable>
                        <LargeTable name="4" value="5" onClick={this.changeHandler}>TABLE 4</LargeTable>
                    </Div>
                    <Div>
                        <SmallTable name="5" value="2">TABLE 5</SmallTable>
                        <SmallTable name="6" value="2">TABLE 6</SmallTable>
                    </Div>
                    <Div>
                        <SmallTable name="7" value="2">TABLE 7</SmallTable>
                        <SmallTable name="8" value="2">TABLE 8</SmallTable>
                    </Div>
                    <FormButton type="submit" text="NEXT" to="/orderfood"/>
                </TableBox>
        );
    }
}
 
export default TableView;