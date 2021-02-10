import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Users from './components/users';

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
        <div className='float-left selected-user-section'>
          <h3>{this.state.selectedUser.name || `Please select a user`}</h3>
          <div>
            {this.state.posts
              .filter((post) => post.userId === this.state.selectedUser.id)
              .map((filteredPost) => (
                <div className='selected-user-post'>
                  <div>
                    <strong>post id: {filteredPost.id}</strong>
                  </div>
                  <div>
                    {filteredPost.title}
                    {filteredPost.body}
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='float-right user-section'>
          <Users state={this} />
        </div>
      </>
    );
  }
}

export default App;
