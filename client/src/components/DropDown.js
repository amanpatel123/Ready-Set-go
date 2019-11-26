import React from 'react';
import { NavLink } from 'react-router-dom';
import './dropdown.css';


class Dropdown extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div  className="dropdown" style = {{background:"#3CB371",width:"200px"}} >
         <div className="button" onClick={this.showDropdownMenu} style={{courser:"pointer"}}> ORDER NOW </div>

          { this.state.displayMenu ? (
          <ul>
         <li><NavLink to="/login">Dine-In</NavLink></li>
         <li><NavLink to="/login">Take-Out</NavLink></li>
          </ul>
        ):
        (
          null
        )
        }

       </div>

    );
  }
}

export default Dropdown;