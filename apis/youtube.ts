import axios from "axios"

const BASE_URL = "https://www.googleapis.com/youtube/v3"
const KEY = "AIzaSyA-sc-2dN34RYRqz7y3mgsI8aVC9x-sIYk"

export default axios.create({
  baseURL: BASE_URL,
  params: {
    part: "snippet",
    maxResults: 50,
    key: KEY
  },
  headers: {}
})
