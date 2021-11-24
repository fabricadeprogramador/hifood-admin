export default {
  setItem(credentials) {
    localStorage.setItem("credentials", JSON.stringify(credentials))
  },

  getItem() {
    if (localStorage.getItem("credentials")) {
      try {
        return JSON.parse(localStorage.getItem("credentials"))
      } catch (error) {
        localStorage.removeItem("credentials")
      }
    }
  },

  removeItem() {
    localStorage.removeItem("credentials")
  },

  updateItem(credentials) {
    const tokenAtual = this.getItem()
    credentials.token = tokenAtual.token

    localStorage.setItem("credentials", JSON.stringify(credentials))
  }
}
