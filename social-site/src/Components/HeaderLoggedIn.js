import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

class HeaderLoggedIn extends React.Component {
  
  render() {
    const { toggleLogOut } = this.props;
    const { toggleCreatePost } = this.props;

    return (
      <div className="mx-auto">
        <Button onClick={() => toggleCreatePost()} className="mr-3 btn-light">
          Create Post
        </Button>
        <Button className="mr-3 btn-light" onClick={() => toggleLogOut()}>Log Out</Button>
      </div>
    );
  }
}

export default HeaderLoggedIn;
