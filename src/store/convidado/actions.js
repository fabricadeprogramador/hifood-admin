import * as axiosManager from "@/axios/AxiosInstance"
const axiosInstance = axiosManager.getAxiosInstance()

import { actionTypes, apiClient } from "@/constants"

export default {
  async [actionTypes.CONVIDADO.BUSCAR_TODOS_CONVIDADO]() {
    const response = await axiosInstance.get(apiClient.URL_CONVIDADO)
    return response
  }
}
