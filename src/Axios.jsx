import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/clone-79347/us-central1/api"// Firebase emulator
});

// if deployed, change to your deployed cloud function URL
// e.g. https://us-central1-YOUR_PROJECT.cloudfunctions.net/api

export default instance;
