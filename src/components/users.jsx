import React from 'react';

const Users = (obj) => {
  const props = obj.state;

  function setSelectedUser(name) {
    const selectedUser = name;
    return obj.state.setState({ selectedUser });
  }

  return (
    <table className='ui fixed table'>
      <tbody>
        {props.state.users.map((user) => (
          <tr key={user.id}>
            <details id='custom-marker'>
              <summary>
                {user.name} ({user.username})
              </summary>
              <div className='float-left'>
                <div>email: {user.email}</div>
                <div>phone: {user.phone}</div>
                <div>website: {user.website}</div>
                <div>company: {user.company.name}</div>
              </div>
              <div>
                <button
                  onClick={() => setSelectedUser(user)}
                  className='float-right'
                >
                  Select
                </button>
                <div>street: {user.address.street}</div>
                <div>suite: {user.address.suite}</div>
                <div>city: {user.address.city}</div>
                <div>zip: {user.address.zipcode}</div>
              </div>
              {props.state.posts
                .filter((post) => post.userId === user.id)
                .map((filteredPost) => (
                  <div>
                    <div className='float-left'>post id: {filteredPost.id}</div>
                    <div>
                      author: {user.name} ({user.username})
                    </div>
                    <div>
                      {filteredPost.title}
                      {filteredPost.body}
                    </div>
                  </div>
                ))}
            </details>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Users;
