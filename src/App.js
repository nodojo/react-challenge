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
    isLoading: false,
  };

  componentDidMount() {
    const obj = this;

    obj.setState({ isLoading: true });

    axios
      .all([BlogData('/users'), BlogData('/posts')])
      .then(
        axios.spread((user, post) => {
          const users = user.data;
          const posts = post.data;
          obj.setState({ users, posts });

          obj.setState({ isLoading: false });
        })
      )
      .catch((err) => {
        console.log(err);
        obj.setState({ isLoading: false });
      });
  }

  render() {
    return (
      <>
        <div className={ this.state.isLoading ? 'loading' : ''}></div>
        <SelectedUser state={this.state} />
        <Users state={this} />
      </>
    );
  }
}

export default App;
