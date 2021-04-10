import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class CreatePost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postTitle:'',
      postText: ''
    };
  }

  

  updatePostText(event) {
    this.setState({
      postText: event.target.value,
    });
  }

  updateTitleText(event) {
    this.setState({
      postTitle: event.target.value,
    });
  }

  render() {
    return (
      <>
        <Container className="mx-auto">
          <Form>
            <div className="form-group">
              <label for="post-title" className="text-muted mb-1">
                <small>Title</small>
              </label>
              <input onChange={this.updateTitleText}
                autofocus
                name="title"
                id="post-title"
                className="form-control form-control-lg form-control-title"
                type="text"
                placeholder="type in your post title here!"
                autocomplete="off"
              />
            </div>

            <div className="form-group">
              <label for="post-body" className="text-muted mb-1 d-block">
                <small>Body Content</small>
              </label>
              <textarea
              onChange={this.updatePostText}
                name="body"
                id="post-body"
                className="body-content tall-textarea form-control"
                type="text"
                placeholder="tell us whats on your mind...."
              ></textarea>
            </div>

            <Button className="btn btn-primary">Submit post</Button>
          </Form>
        </Container>
      </>
    );
  }
}

export default CreatePost;

