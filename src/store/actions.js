

export default {
  login({ commit, state }, userinfo) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve()
      }, 1000)
    }).then(commit.call(this, 'setLoggedin', true))
  }  
}