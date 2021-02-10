import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users';
import SelectedUser from './components/selectedUser';

let getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
let getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');

class App extends Component {
  state = {
    users: [],
    posts: [],
    selectedUser: {},
  };

  componentDidMount() {
    const obj = this;

    axios
      .all([getUsers(), getPosts()])
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
        <div className='float-right user-section'>
          <Users state={this} />
        </div>
      </>
    );
  }
}

export default App;
