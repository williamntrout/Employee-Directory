import React from "react";



const DirectoryHead = (props) => {
  return (
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">
          <a
            href="#name"
            className="btn btn-link"
            onClick={() => props.sortFirst()}
          >
            First
          </a>
        </th>
        <th scope="col">
          <a
            href="#name"
            className="btn btn-link"
            onClick={() => props.sortLast()}
          >
            Last
          </a>
        </th>
        <th scope="col">Username</th>
        <th scope="col">Email</th>
        <th scope="col">Phone</th>
        <th scope="col">City</th>
      </tr>
    </thead>
  );
};

export default DirectoryHead;
