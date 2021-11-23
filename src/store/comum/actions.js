import * as axiosManager from "@/axios/AxiosInstance"
const axiosInstance = axiosManager.getAxiosInstance()

import { apiClient, actionTypes, mutationTypes } from "@/constants"

export default {
  async [actionTypes.COMUM.EFETUAR_LOGIN](context, usuario) {
    const response = await axiosInstance.post(
      `${apiClient.URL_COMUM.AUTENTICAR}`,
      usuario
    )

    return response
  },

  async [actionTypes.COMUM.VERIFICA_TOKEN]({ commit }) {
    try {
      const { data } = await axiosInstance.get(
        apiClient.URL_COMUM.VERIFICA_TOKEN
      )

      if (data) {
        commit(mutationTypes.COMUM.UPDATE_USUARIO_LOGADO, data)
      }
    } catch (error) {
      commit(mutationTypes.ALERTA.EXIBIR_ALERTA, {
        tipo: "error",
        msg: "Acesso não autorizado"
      })
    }
  }
}
