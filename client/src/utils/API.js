import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  // getResults: function(query) {
  //   return axios.get("/api/resources", { params: { q: query } });
  
  
  // },

// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// API Front-End
// ---------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------

  // Gets all resources
  getResources: function() {
    return axios.get("/api/resources")
  },
  //Gets the resource with the given id
  // getResource: function(id) {
  //   return axios.get("/api/resources/" + id);
  // },

  // Deletes the resource with the given id
  deleteResource: function(id) {
    return axios.delete("/api/resources/" + id);
  },
  // Saves a resource to the database
  saveResource: function(resourceData) {
    console.log("API: " + resourceData)
    return axios.post("/api/resources", resourceData);
  },
  getUsers: function() {
    return axios.get("/api/users")
  },
  getUser: function(username) {
    return axios.get("/api/users/" + username);
  },
  saveUser: function(userData) {
    return axios.post("/api/users", userData);
  },
  removeUser: function(username) {
    return axios.delete("/api/users/delete" + username);
  },
  castVote: function(id, vote) {
    return axios.post("/api/resources/" + id, vote);
  },
  getCategory: function(category) {
    return axios.get("/api/resources/" + category)
  }
}
