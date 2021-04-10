import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: 0,
    };
  }

  likes() {
    this.setState((state) => ({
      likes: state.likes + 1,
    }));
  }

  dislikes() {
    this.setState((state) => ({
      likes: state.likes - 1,
    }));
  }

  render() {
    return (
      <>
        <Container className='m-0'>
          <Card className='text-white bg-secondary'>
              <Card.Header>
                <h3>User: {this.props.posts.author}</h3>

              </Card.Header>
            <Card.Body className='mt-5'>
              {/* <img src="https://picsum.photos/100?image"></img> wanted to make a random image appear for each user - struggled to achieve */}
  
              <div>
                  {this.props.posts.text}
                  </div>
              <h4 className='mt-5'>likes: {this.state.likes}</h4>
              <Button className="mt-5 btn-dark mr-3" onClick={() => this.likes()}>
                {" "}
                Like
              </Button>
              <Button className="mt-5 btn-dark" onClick={() => this.dislikes()}>
                Dislike
              </Button>
            </Card.Body>
          </Card>
        </Container>
      </>
    );
  }
}
export default Posts;
