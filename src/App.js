import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

let getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
let getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');

class App extends Component {
  state = {
    users: [],
    posts: [],
    headers: ['USERS', 'POSTS'],
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
    const obj = this;

    return (
      <table className='ui fixed table'>
        <thead>
          <tr>
            <th>{obj.state.headers[0]}</th>
          </tr>
        </thead>
        <tbody>
          {obj.state.users.map((user) => (
            <tr>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
        <thead>
          <tr>
            <th>{obj.state.headers[1]}</th>
          </tr>
        </thead>
        <tbody>
          {obj.state.posts.map((post) => (
            <tr>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default App;
