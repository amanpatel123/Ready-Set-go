import React from 'react';
import styled from 'styled-components';
import TitleBox from "./reusableComponents/TitleBox";
import FormatInputField from "./reusableComponents/InputField";
import FormButton from "./reusableComponents/Button"; 
// import {Redirect} from 'react-router-dom';

// import { NavLink } from 'react-router-dom';

const LoginWrapper = styled.div`
padding-left: 500px;
margin-top: 100px;
`;

const LoginBox = styled.form`
display: flex;
flex-direction: column;
  float: center;
  width: 500px;
  height: 250px;
  border: 1px solid rgba(0, 0, 0, .2);
`;

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          username: '',
          password: ''
        }
      }
    
      changeHandler = (event) => {
        this.setState({[event.target.name]: event.target.value
        })
      }
    
      submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state) 
      }

   render() {
    const {username, password} = this.state
    return (
      <LoginWrapper>
      <TitleBox heading="LOGIN" />
        <LoginBox onSubmit={this.submitHandler}>
            <FormatInputField type="text" name="username" placeholder="Username" value={username} onChange={this.changeHandler} />
            <FormatInputField type="password" name="password" placeholder="Password" value={password} onChange={this.changeHandler} />
            <FormButton type="submit" text="SUBMIT" to="/main" />
            {/* <button onClick={this.onSubmit}>SUBMIT</button> */}
            {/* <NavLink to="/contact">Login</NavLink>  */}
        </LoginBox>  
   </LoginWrapper>
    );
   }
}
 
export default Login;