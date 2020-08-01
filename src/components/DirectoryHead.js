import React from "react";

const DirectoryHead = (props) => {
  return (
    <thead>
      <tr>
        <th className="th-one" scope="col"></th>
        <th className="th-first" scope="col">
          <a
            href="#name"
            className="btn btn-link"
            onClick={() => props.sortFirst()}
          >
            First
          </a>
        </th>
        <th className="th-last" scope="col">
          <a
            href="#name"
            className="btn btn-link"
            onClick={() => props.sortLast()}
          >
            Last
          </a>
        </th>
        <th className="th-username" scope="col">
          Username
        </th>
        <th className="th-email" scope="col">
          Email
        </th>
        <th className="th-phone" scope="col">
          Phone
        </th>
        <th className="th-city" scope="col">
          City
          <a
            href="#name"
            className="btn btn-link"
            onClick={() => props.sortCity()}
          ></a>
        </th>
      </tr>
    </thead>
  );
};

export default DirectoryHead;
