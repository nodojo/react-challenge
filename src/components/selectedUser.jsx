import React from 'react';

const SelectedUser = (props) => {
  return (
    <div className='float-left selected-user-section'>
      <h3>{props.state.selectedUser.name || `Please select a user`}</h3>
      <div>
        {props.state.posts
          .filter((post) => post.userId === props.state.selectedUser.id)
          .map((filteredPost) => (
            <div className='selected-user-post' key={filteredPost.userId-filteredPost.id}>
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
  );
};

export default SelectedUser;
