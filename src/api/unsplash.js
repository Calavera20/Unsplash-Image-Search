import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 58cc3ddd673058e2896440dc2b55c5f193b0b84989aa0808489b9c0ea97337a7"
  }
});
