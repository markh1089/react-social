import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import EmptyFeed from './EmptyFeed';
import ViewPost from './ViewPost';
import PostBox from './PostBox'
import Feed from "./CurrentFeed";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts:[
        {text:'You must be barking mad not to use this new app!', author:'@RufusMcBarkingson'},
        {text:'woof', author:'@doggo'},
        {text:'Should i be worried....there are an awful lot of dogs on here', author: '@meowthecat'}
      ],
      ownPost: false
    };
    this.addPost = this.addPost.bind(this)
  }

  addPost(post, user) {
    this.setState({
      posts:[...this.state.posts, {text: post, author: user}]
    })
  }

  feedFill = () => {
    this.setState({ownPost:true})
  }

  render() {
    return (
      <>
      {this.props.postState ? <PostBox feed={this.feedFill} submitPost = {this.addPost}/> : <div />}
      <div className='bg-light'>
        {this.state.ownPost ? <EmptyFeed />: <div />}        
        <div className="bg-light lead text-muted text-center">
          <h3 className='text-dark m-5'>
            Your feed displays the latest posts from the people you follow:
            </h3>
        <Feed posts={this.state.posts} />
        <ViewPost />        
        </div>
      </div>
      </>
    );
  }
}

export default Home;
