import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


class HeaderLoggedOut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }

  handleChange(event) {
    this.setState({ user: event.target.value });
  }

  login() {
    alert("Welcome " + this.state.user);
  }

  render() {
    const { toggleLogIn } = this.props;

    return (
      <>
        <Form className="form-inline my-2 mx-auto my-lg-0">
          <input
            onChange={this.handleChange}
            name="username"
            className="form-control form-control-sm input-dark"
            type="text"
            placeholder="Username"
            autoComplete="off"
          />
          <input
            name="password"
            className="form-control form-control-sm input-dark"
            type="password"
            placeholder="Password"
          />
        </Form>
        <Button className="btn-light" onClick={() => toggleLogIn()}>sign in</Button>
      </>
    );
  }
}
export default HeaderLoggedOut;
