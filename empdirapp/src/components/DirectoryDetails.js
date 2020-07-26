import React from "react";

// this should create a row in the table for each individual employee.
// each row will contain an image, first, last, email, phone.
// will replicate for each returned employee from the data base.

function DirectoryDetails(props) {
  return (
    <tbody>
      {props.results.map(result => {
        return (<tr>
          <td>
            <img src={result.picture.thumbnail} alt={result.name}></img>
          </td>
          <td>{result.name.first}</td>
          <td>{result.name.last}</td>
          <td>{result.email}</td>
          <td>{result.phone}</td>
        </tr>);
      })}
    </tbody>
  );
}

export default DirectoryDetails;
