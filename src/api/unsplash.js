import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID fDj4SLlsF1ywgpM0T5umKkFHkKY9PrnCRoWMV_8_qkE",
  },
});
