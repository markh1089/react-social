import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";

class PostBox extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      postText: "",
      style: {},
    };
  }

  handleClick() {
    this.props.submitPost(this.state.postText, "AnonUser");
  }
  handleChange(event) {
    let style = {};
    if (event.target.value.length > 140) {
      style = { color: "red" };
    }
    this.setState({
      postText: event.target.value,
      style: style,
    });
  }
  render() {
    return (
      <Container className='bg-light pt-5'>
        <div>
          <textarea
            className="form-control"
            onChange={this.handleChange}
            placeholder="Type in your post here!"

          ></textarea>
          <br />
          <Button
            className='btn-dark mr-3'
            onClick={this.handleClick}
            disabled={
              this.state.postText.length === 0 ||
              this.state.postText.length > 140
            }
          >
            Submit Post
          </Button>
          <span>Characters left: {140 - this.state.postText.length}</span>
        </div>
      </Container>
    );
  }
}
export default PostBox;
