import React from "react";

// this should create a row in the table for each individual employee.
// each row will contain an image, first, last, email, phone.
// will replicate for each returned employee from the data base.

function DirectoryDetails(props) {
  return (
    <div className="tablebody">
      <tbody>
        {props.results.map((result) => {
          return (
            <tr>
              <td className="td-image">
                <img src={result.picture.medium} alt={result.name}></img>
              </td>
              <td className="td-first">{result.name.first}</td>
              <td className="td-last">{result.name.last}</td>
              <td className="td-username">{result.login.username}</td>
              <td className="td-email">{result.email}</td>
              <td className="td-phone">{result.phone}</td>
              <td className="td-city">{result.location.city}</td>
            </tr>
          );
        })}
      </tbody>
    </div>
  );
}

export default DirectoryDetails;
