import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users';
import SelectedUser from './components/selectedUser';
import BlogData from './api/blogData';

class App extends Component {
  state = {
    users: [],
    posts: [],
    selectedUser: {},
  };

  componentDidMount() {
    const obj = this;

    axios
      .all([BlogData('/users'), BlogData('/posts')])
      .then(
        axios.spread((user, post) => {
          const users = user.data;
          const posts = post.data;
          obj.setState({ users, posts });
        })
      )
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <>
        <SelectedUser state={this.state} />
        <Users state={this} />
      </>
    );
  }
}

export default App;
