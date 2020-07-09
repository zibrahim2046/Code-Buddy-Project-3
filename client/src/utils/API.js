import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q="


export default {
  // Google API call
  search: function(topic) {
    return axios.get(BASEURL + topic);
  },  
}
