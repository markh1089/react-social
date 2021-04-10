import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './Components/Header'
import LogIn from './Components/LogIn';
import Footer from './Components/Footer'
import Home from './Components/Home'
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      createPost: false,
      userPosts: ''
      };
  }

  toggleLogIn = () => {
    this.setState({loggedIn:true})
  }
  toggleLogOut = () => {
    this.setState({loggedIn:false})
  }
  toggleCreatePost = () => {
    if (this.state.createPost === false) {
      this.setState({createPost: true})
    } else {
      this.setState({createPost:false}) 
    }
  }

  render() {  
  return (
<BrowserRouter>
  <Header logState={this.state.loggedIn} toggleLogIn={this.toggleLogIn} toggleLogOut={this.toggleLogOut} toggleCreatePost={this.toggleCreatePost} postState={this.state.createPost}/>
  <Switch>
    <Route path='/' exact>
    {this.state.loggedIn ? <Home postState={this.state.createPost} /> : <LogIn />}
    </Route>
  </Switch>
  <Footer />
</BrowserRouter>
  );
}
}


export default App;
