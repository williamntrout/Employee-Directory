import axios from "axios";

// Gets all Employee information from database.
// will call function later to retrieve data into table.

export default {
  getEmployees: () => {
    return axios.get("https://randomuser.me/api/?results=200&nat=us");
  },
};
