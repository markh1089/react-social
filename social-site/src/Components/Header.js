import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "react-bootstrap/Navbar";
import HeaderLoggedOut from "./HeaderLoggedOut";
import logo from "./Images/dog.png";
import HeaderLoggedIn from "./HeaderLoggedIn";

class Header extends React.Component {



  render() {
    console.log(this.props)
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">
          <img className="pr-2" src={logo} alt="dog" width="50"></img>
          Barkker!
        </Navbar.Brand>
        {this.props.logState ? <HeaderLoggedIn toggleLogOut={this.props.toggleLogOut} toggleCreatePost={this.props.toggleCreatePost} /> : <HeaderLoggedOut toggleLogIn={this.props.toggleLogIn} />}
      </Navbar>
    );
  }
}

export default Header;
