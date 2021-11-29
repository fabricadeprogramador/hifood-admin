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
    baseURL: "https://hifood-api.herokuapp.com/",
    timeout: 5000,
    headers: {
      "x-access-token": loggedUser.token
    }
  })
}
