import axios from "axios";

export default axios.create({
  baseURL: "https://bot9p1l589.execute-api.us-east-2.amazonaws.com",
  headers: {
    "Content-type": "application/json",
  },
});
