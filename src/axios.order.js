import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-burger-c73db.firebaseio.com/"
});

export default instance;
