import React, { Component } from 'react';
import styled from 'styled-components';
import './reusableComponents/tableview.css';
import TitleBox from "./reusableComponents/TitleBox"
import FormButton from "./reusableComponents/Button"; 
// const TableWrapper = styled.div`
// padding-left: 500px;
// margin-top: 25px;
// `;
// const TextWrapper = styled.text`
// font-size: 42px;
// color: white;
// `;

// const TableBox = styled.form`
// display: flex;
// flex-direction: column;
//   float: center;
//   width: 500px;
//   height: 600px;
//   border: 1px solid rgba(0, 0, 0, .2);
// `;

// const LargeTable = styled.button`
// background-color: white;
// width: 150px;
// min-height: 150px;
// border: 1px solid rgba(0, 0, 0, .2);
// margin: 15px 60px 20px 60px;
// `;

// const Div = styled.div`
// display:flex;
// flex-direction: row;
// `;

// const SmallTable = styled.button`
// background-color: white;
// width: 150px;
// height: 75px;
// border: 1px solid rgba(0, 0, 0, .2);
// margin: 15px 60px 20px 60px;
// `;

// class TableView extends Component {
//     constructor(props){
//         super(props)

//         this.state = {
//             tableNo: '',
//             noOfSeats: '',
//             isAvailable: true
//         }
//    }

//    changeHandler = (event) => {
//     this.setState({noOfSeats: event.target.value, tableNo: event.target.name, isAvailable:false
//     })
//   }

//   submitHandler = (event) => {
//     event.preventDefault()
//     console.log(this.state) 
//   }

//     render() {
//         return (
//                 <TableBox onSubmit={this.submitHandler}>
//                     <Div>
//                         <LargeTable name="1" value="5" onClick={this.changeHandler}>TABLE 1</LargeTable>
//                         <LargeTable name="2" value="5" onClick={this.changeHandler}>TABLE 2</LargeTable>
//                     </Div>
//                     <Div>
//                         <LargeTable name="3" value="5" onClick={this.changeHandler}>TABLE 3</LargeTable>
//                         <LargeTable name="4" value="5" onClick={this.changeHandler}>TABLE 4</LargeTable>
//                     </Div>
//                     <Div>
//                         <SmallTable name="5" value="2">TABLE 5</SmallTable>
//                         <SmallTable name="6" value="2">TABLE 6</SmallTable>
//                     </Div>
//                     <Div>
//                         <SmallTable name="7" value="2">TABLE 7</SmallTable>
//                         <SmallTable name="8" value="2">TABLE 8</SmallTable>
//                     </Div>
//                     <FormButton type="submit" text="NEXT" to="/orderfood"/>
//                 </TableBox>
//         );
//     }
// }
 
// export default TableView;

const TableWrapper = styled.div`
padding-left: 500px;
margin-top: 1px;
`;

const TableBox = styled.form`
display: flex;
flex-direction: column;
float: center;
width: 500px;
height: 805px;
border: 1px solid rgba(0, 0, 0, .2);
`;

const Div = styled.div`
display:flex;
flex-direction: row;
`;
const Checkbox = styled.input`
// margin-left: 150px;
width: 20   px; 
height: 20px;
`;

class TableBig extends Component{
    constructor(props){
        super(props)
        this.state={
            color: '',
            number : 'hello world',    
        }
    }
    changeColor=()=>{
        var newColor = this.state.color === ''? 'red':'';
        this.setState({color : newColor});
    }
    render(){
        return (
            <div>
                <div style={{background:this.state.color,width: '130px',height: '150px',border: '1px solid rgba(0, 0, 0, .2)',margin: '15px 60px 20px 60px', "text-align":'center'}} onClick={this.changeColor}>{this.props.number}</div>
            </div>
        )
    }
};
class TableSmall extends Component{
    constructor(props){
        super(props)
        this.state={
            color: '',
            number : 'hello world',    
        }
    }
    changeColor=()=>{
        var newColor = this.state.color === ''? 'red':'';
        this.setState({color : newColor});
    }
    render(){
        return (
            <div>
                <div style={{background:this.state.color,width: '130px',height: '75px',border: '1px solid rgba(0, 0, 0, .2)',margin: '15px 60px 20px 60px',"text-align":'center'}} onClick={this.changeColor}>{this.props.number}</div>
            </div>
        )
    }
};

class AdminTableView extends Component {
    constructor(props){
        super(props)

        this.state = {
            tableNo: '',
            noOfSeats: '',
            isAvailable: true,
        
        }
   }
   
    handleClick = (e)=>
    {

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
            <TableWrapper> 
                <TitleBox heading="SELECT TABLE"></TitleBox>
                <TableBox onSubmit={this.submitHandler}>
                    <Div>
                        <TableBig number="Table 1" name="1" value="5" onClick={this.changeHandler} >Table 1</TableBig>
                        <TableBig number="Table 2" value="5" onClick={this.changeHandler} >TABLE 2</TableBig>   
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Occupied<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"178px"}} onClick={this.changeHandler} />Occupied<br />
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Available<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"180px"}} onClick={this.changeHandler} />Available<br />
                    </Div>
                    <Div>
                        <TableBig number="Table 3" value="5" onClick={this.changeHandler}></TableBig>
                        <TableBig number="Table 4" value="5" onClick={this.changeHandler}></TableBig>
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Occupied<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"178px"}} onClick={this.changeHandler} />Occupied<br />
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Available<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"180px"}} onClick={this.changeHandler} />Available<br />
                    </Div>
                    <Div>
                        <TableSmall number = "Table 5" name="5" value="2">TABLE 5</TableSmall>
                        <TableSmall number = "Table 6" name="6" value="2">TABLE 6</TableSmall>
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Occupied<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"178px"}} onClick={this.changeHandler} />Occupied<br />
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Available<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"180px"}} onClick={this.changeHandler} />Available<br />
                    </Div>
                    <Div>
                        <TableSmall number = "Table 7" name="7" value="2">TABLE 7</TableSmall>
                        <TableSmall number = "Table 8" name="8" value="2">TABLE 8</TableSmall>
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Occupied<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"178px"}} onClick={this.changeHandler} />Occupied<br />
                    </Div>
                    <Div>
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Available<br />
                        <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"180px"}} onClick={this.changeHandler} />Available<br />
                    </Div>
                    <FormButton type="submit" text="NEXT" to="/adminsuccess"/>
                </TableBox>
            </TableWrapper>
        );
    }
}
 
export default AdminTableView;