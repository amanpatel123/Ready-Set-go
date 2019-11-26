import React, {Component} from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox"
import FormatInputField from "./reusableComponents/InputField";
import FormButton from "./reusableComponents/Button"; 
import { NavLink } from 'react-router-dom';

const RegisterWrapper = styled.div`
padding-left: 500px;
margin-top: 100px;
`;

// const RegisterHeading = styled.div`
//   float: center;
//   width: 500px;
//   height: 75px;
//   border: 1px solid rgba(0, 0, 0, .2);
//   background: #3CB371;
//   text-align: center;
// `;

const RegisterBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 450px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

// const TextWrapper = styled.text`
// font-size: 42px;
// color: white;
// `;

const LoginText = styled.text`
color: black;
font-size: 15px;
padding-left: 175px;
padding-top: 6px;
`;

class register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      name: '',
      password: '',
      phonNo: ''
    }
  }

  changeHandler = (event) => {
    this.setState({[event.target.name]: event.target.value
    })
  }

  submitHandler = (event) => {
    event.preventDefault()
    console.log(this.state) 
    axios.post("http://localhost:5000/customers", this.state)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      })
  }

  render() {
    const {username, name, password, phonNo} = this.state
    return (
        <RegisterWrapper>
          <TitleBox heading="REGISTER" />
            {/* <RegisterHeading>
                <TextWrapper>REGISTER</TextWrapper>
            </RegisterHeading> */}
            <RegisterBox onSubmit={this.submitHandler}>
                <FormatInputField type="text" name="username" placeholder="Username" value={username} onChange={this.changeHandler} />
                <FormatInputField type="text" name="name" placeholder="Name" value={name} onChange={this.changeHandler} />
                <FormatInputField type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} />
                <FormatInputField type="text" name="phonNo" placeholder="Phone Number" value={phonNo} onChange={this.changeHandler} />
                <FormButton type="submit" text="SUBMIT" to="/main"/>
                <LoginText>Already a user? <NavLink to="/login">Login</NavLink> </LoginText>
            </RegisterBox>
       </RegisterWrapper>
    );
  }
}
 
export default register;