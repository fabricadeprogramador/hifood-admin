import * as axiosManager from "@/axios/AxiosInstance"
const axiosInstance = axiosManager.getAxiosInstance()

import { actionTypes, apiClient } from "@/constants"

export default {
  async [actionTypes.PRODUTO.BUSCAR_TODOS_PRODUTO]() {
    const response = await axiosInstance.get(apiClient.URL_PRODUTO)
    return response
  }
}
