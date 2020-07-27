import React, { Component } from "react";
import API from "../utils/api";
import Directoryhead from "./DirectoryHead";
import Directorydetails from "./DirectoryDetails";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "./style.css";

class DirectoryTable extends Component {
  state = {
    result: [],
    search: "",
    currentPage: "",
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

  // set state
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };

  // Inputs are event driven, get the value of a name to be filtered
  handleInputChange = (event) => {
    this.handlePageChange(event.target.value);
  };

  // Prevent search from refreshing
  ignoreSubmit = (event) => {
    event.preventDefault();
    return;
  };

  // functions to handle sort criteria

  // sort by first.
  sortFirst = () => {
    let firstName = this.state.result.sort(compare);

    function compare(a, b) {
      const nameA = a.name.first.toUpperCase();
      const nameB = b.name.first.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    this.setState({
      result: firstName,
    });
  };

  // sort by last
  sortLast = () => {
    let lastName = this.state.result.sort(compare);

    function compare(a, b) {
      const nameA = a.name.last.toUpperCase();
      const nameB = b.name.last.toUpperCase();
      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }
    this.setState({
      result: lastName,
    });
  };

  // function to render table card

  render() {
    return (
      <div className="body">
        <Navbar />
        <div className="container">
          <div className="jumbotron">
            <div className="table">
              <Directoryhead
                sortFirst={this.sortFirst}
                sortLast={this.sortLast}
              />
              <Directorydetails results={this.state.result} />
            </div>
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default DirectoryTable;
