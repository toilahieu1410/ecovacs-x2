import axios from "axios"

export const API_SERVER = 'https://testserver.gigadigital.vn/v1'

const authHeader = () => {
    return {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
}

export const axiosIntance = axios.create({
  headers: authHeader()
})