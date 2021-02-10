import axios from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  getUsers: () => axios.get(this.baseURL+`/users`)
});

// let getUsers = () => axios.get('https://jsonplaceholder.typicode.com/users');
// let getPosts = () => axios.get('https://jsonplaceholder.typicode.com/posts');