<template>
  <div>
    <my-nav @signin="showSignin"></my-nav>
    <router-view></router-view>
    <i-footer></i-footer>
    <signin :signin="signin" @signin="hiddenSignin"></signin>
  </div>
</template>

<script>
import store from 'store'
import MyNav from 'components/Nav'
import IFooter from 'components/Footer'       // prevent repeat tag name with html built-in  footer
import Signin from 'components/Signin'

export default {
  components: { MyNav, IFooter, Signin },
  name: 'App',
  store,
  data() {
    return {
      signin: false
    }
  },

  methods:{
    showSignin()   { this.signin = true },
    hiddenSignin() { this.signin = false }
  }
}

</script> 

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
</style>
