import axios from "axios"

const BASE_URL = "https://youtube138.p.rapidapi.com"

export default axios.create({
  baseURL: BASE_URL,
  params: {
    hl: "en",
    gl: "US"
  },
  headers: {
    "X-RapidAPI-Key": "4e89ef9fa2msh46ab1921755c2c3p162ef5jsnfe03be051907",
    "X-RapidAPI-Host": "youtube138.p.rapidapi.com"
  }
})
