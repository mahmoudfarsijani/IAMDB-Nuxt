
export default ({ app }, inject) => {
    // Inject $localStorage in Vue, context and store
    inject('localStorage', {
      getItem(key) {
        return localStorage.getItem(key)
      },
      setItem(key, value) {
        localStorage.setItem(key, value)
      },
      removeItem(key) {
        localStorage.removeItem(key)
      }
    })
  }