import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Wrapper from "./components/Wrapper";
// import Header from "./components/Header";
// import SearchBox from "./components/searchBox";
import DirectoryTable from "./components/DirectoryTable";

// import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DirectoryTable} />
      </div>
    </Router>
  );
}

export default App;
