import axiosInstance from '../utils/axiosInstance';
// post Api
export function postApi(data) {
  return axiosInstance.post("/postEndpoint", data)
}

// get Api
export function getApi() {
  return axiosInstance.get(`/getEndpoint}`)
}