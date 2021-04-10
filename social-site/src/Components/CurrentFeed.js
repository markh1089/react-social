import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Posts from "./Posts";
import Container from "react-bootstrap/Container";

class Feed extends React.Component {
  render() {
    return (
      <>
      <Container className='bg-light'>

        <div>{this.props.posts.map((postText,index)=>{return <Posts posts={postText} key={index} />})}
        </div>
        </Container>
      </>
    );
  }
}
export default Feed;