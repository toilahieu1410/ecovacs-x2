import { API_SERVER, axiosIntance } from "./auth_header"

export const _postReserve = async (body) => {
  const request = await axiosIntance.post(`${API_SERVER}/home/reserve`, body)
  return request
}