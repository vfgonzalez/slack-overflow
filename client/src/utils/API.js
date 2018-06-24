// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// API Front-End
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

import axios from "axios";

export default {
  // Gets all resources
  getResources: function() {
    return axios.get("/api/resources")
  },
  // Gets the resource with the given id
  getResource: function(id) {
    return axios.get("/api/resources/" + id);
  },
  // Deletes the resource with the given id
  deleteResource: function(id) {
    return axios.delete("/api/resources/" + id);
  },
  // Saves a resource to the database
  saveResource: function(resourceData) {
    return axios.post("/api/resources", resourceData);
  }
};