import axios from "axios"

const BASE_URL = "https://youtube138.p.rapidapi.com"

export default axios.create({
  baseURL: BASE_URL,
  params: {
    hl: "en",
    gl: "US"
  },
  headers: {
    "X-RapidAPI-Key": "08709733dbmsh018e1c0c152a96dp15b53cjsn7a2ff77e58fa",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
  }
})
