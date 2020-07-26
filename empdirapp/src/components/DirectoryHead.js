import React from "react";

const DirectoryHead = (props) => {
  return (
    <table>
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
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col"></th>
        </tr>
      </thead>
    </table>
  );
};

export default DirectoryHead;
