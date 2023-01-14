import React from 'react';

const UserInput = (props) => (
  <div className="user-input">
    <input id="search-field" placeholder="Search..."></input>
    <button onClick={props.handleSearch}>Go!</button>
  </div>
);

export default UserInput;