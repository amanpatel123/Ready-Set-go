import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import Background from './background.jpg';
// import './App.css';
import Register from './components/Register';
import Login from './components/Login';
// import Dropdown from './components/DropDown';
import Main from './components/MainPage';
import Table from './components/Table';
import Order from './components/OrderFood';
import Payment from './components/Payment';

class App extends Component {
state = {
    data: []
  };

  componentDidMount() {
      // Call our fetch function below once the component mounts
    this.callBackendAPI()
      .then(res => this.setState({ data: res}))
      .catch(err => console.log(err));
  }
    // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/tasks');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
         
      //     <h1 className="App-title">Welcome to React</h1>
      //   </header>
      //   // Render the newly fetched data inside of this.state.data 
      //   <p className="App-intro">{this.state.data.map(home => <div>{home.task}</div>)}
      //   </p>
      // </div>
      <BrowserRouter>
        <div>
        {/* <img src={Background} className="App-logo" alt="logo" /> */}
            <Switch>
             <Route path="/" component={Register} exact/>
             <Route path="/login" component={Login}/>
             {/* <Redirect from="/login" to="/contact" /> */}
             <Route path="/main" component={Main}/>
             <Route path="/table" component={Table}/>
            <Route path="/orderfood" component={Order}/>
            <Route path="/payment" component={Payment}/>
           </Switch>
          {/* <Navigation /> */}
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;


 