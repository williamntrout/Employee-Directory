import React, { Component } from "react";
import API from "../utils/api";
import Directoryhead from "./DirectoryHead";
import Directorydetails from "./DirectoryDetails";

class DirectoryTable extends Component {
  state = {
    employees: [],
    search: "",
    sort: true,
    filtered: [],
  };
  componentDidMount() {
    this.showEmployees();
  }
  // api call to get info from database
  showEmployees = () => {
    API.getEmployees()
      .then((res) => {
        this.setState({ result: res.data.results });
      })
      .catch((err) => console.log(err));
    console.log(this.state.results);
  };

  // functions to handle sort criteria
  // sort by first.

  // sort by last

  // function to render table card

  render() {
    return (
      <div className="jumbotron">
        <div className="table">
          <Directoryhead sortFirst={this.sortFirst} sortLast={this.sortLast} />
          <Directorydetails results={this.state.result} />
        </div>
      </div>
    );
  }
}

export default DirectoryTable;
