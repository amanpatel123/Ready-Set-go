import React, { Component } from 'react';
import styled from 'styled-components';
import './reusableComponents/tableview.css';
import TitleBox from "./reusableComponents/TitleBox"
import FormButton from "./reusableComponents/Button"; 
import TableView from './reusableComponents/TableView';
import Select from 'react-select'
import 'bootstrap/dist/css/bootstrap.min.css';


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
text-align: center;
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

class edit extends React.Component{

    constructor(props)
    {
        super(props)
        {
            this.state={
                items: [{
                
                    label: 'Item 1',
                    value: 1,
                    status: true
                },
                {
        
                    label: 'Item 2',
                    value : 2,
                    status: true
                },
                {
                    label: 'Item 3',
                    value : 3,
                    status: false
                    
                    
                },
                {
                    label: 'Item 4',
                    value : 4,
                    status: false
                    
                    
                },
                {label: 'Item 5',
                    value : 5,
                    status: false
                    
                   
                }],

            


            }
        }
    }
    handleChange = (event)=>{
        const label = event.target.value;
        this.state.items.forEach((item)=>{
            if(item.value==label)
            {
                item.status= item.status?false:true;
            }
        })
    }


    render(){
        return(
            <div style={{backgroudcolor:"red", width: '100%'}} className="container-fluid">

              <div className= "row" >
                <div className="col-6 col-md-4" >
                    <Select options={this.state.items} onChange={this.handleChange}></Select>
                </div>
       
              </div>
              {
                  this.state.items.map((item)=>{
                        if(item.status)
                  return <Box>{item.label}</Box>
                  })
              

                        
                 }
                  
              
                      
        

            </div>
        )
    }

}

export default edit;

 

   
//   class App extends React.Component {
//     state = {
//       selectedOption: null,
     
//     };
    
//     handleChange = selectedOption => {
//       this.setState({ selectedOption });
//       console.log(`Option selected:`, selectedOption);
//     };
//     render() {
//       const { selectedOption } = this.state;

//     const  options =[
//         { value: 'chocolate', label: 'Chocolate' ,status: false},
//         { value: 'strawberry', label: 'Strawberry',status: false },
//         { value: 'vanilla', label: 'Vanilla',status: false },
//       ];
//       return (
//         <div className="container">

//         <div className= "row" >
//           <div className="col col-lg-2" >
//         <Select
//           value={selectedOption}
//           onChange={this.handleChange}
//           options={this.props.options}
//         />
//         </div>
//         </div>
//         </div>



//       );
//     }
//   }
// class Order extends Component {

//     constructor(props){
//         super(props)

//         this.state = {
//             itemID: '',
//             itemName: '',
//             isAvailable: true
//         }
//    }

//    changeHandler = (event) => {
//     this.setState({itemID: event.target.value, itemName: event.target.name
//     })
//   }

//   submitHandler = (event) => {
//     event.preventDefault()
//     console.log(this.state) 
//   }
//   render() {
//     return (
//         <OrderWrapper>
//             <TitleBox heading="ORDER FOOD"></TitleBox>
//             <OrderBox onSubmit={this.submitHandler}>
//                 <Text>Appetizers</Text>
//                 <Div>
//                     <Box>Item 1</Box>
//                     <Box>Item 2</Box>
//                 </Div>
//                 <Div>
//                     <Checkbox type="checkbox" name="menuitem" value="item1" style={{"margin-left":"82px"}} onClick={this.changeHandler} />Select<br />
//                     <Checkbox type="checkbox" name="menuitem" value="item2" style={{"margin-left":"184px"}} onClick={this.changeHandler} />Select<br />
//                 </Div>
//                 <Text>Entrees</Text>
//                 <Div>
//                     <Box>Item 3</Box>
//                     <Box>Item 4</Box>
//                 </Div>
//                 <Div>
//                     <Checkbox type="checkbox" name="menuitem" value="item3" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
//                     <Checkbox type="checkbox" name="menuitem" value="item4" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
//                 </Div>
//                 <Div>
//                     <Box>Item 5</Box>
//                     <Box>Item 6</Box>
//                 </Div>
//                 <Div>
//                     <Checkbox type="checkbox" name="menuitem" value="item5" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
//                     <Checkbox type="checkbox" name="menuitem" value="item6" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
//                 </Div>
//                 <Text>Deserts</Text>
//                 <Div>
//                     <Box>Item 7</Box>
//                     <Box>Item 8</Box>
//                 </Div>
//                 <Div>
//                     <Checkbox type="checkbox" name="menuitem" value="item7" style={{"margin-left":"82px"}} onClick={this.changeHandler}/>Select<br />
//                     <Checkbox type="checkbox" name="menuitem" value="item8" style={{"margin-left":"184px"}} onClick={this.changeHandler}/>Select<br />
//                 </Div><br />
//                     <FormButton type="submit" text="NEXT" to="/payment"/>
//             </OrderBox>
//         </OrderWrapper>
//     );
//   }
// }
 


