import axios from "axios"
import LocalStorageManager from "../utils/LocalStorageManager"

export function getAxiosInstance() {
  let loggedUser = LocalStorageManager.getItem()

  if (!loggedUser) {
    loggedUser = {
      token: ""
    }
  }

  return axios.create({
    baseURL: "http://localhost:3000",
    timeout: 5000,
    headers: {
      "x-access-token": loggedUser.token
    }
  })
}
