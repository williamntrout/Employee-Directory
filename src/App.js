import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
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
