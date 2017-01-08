<template>
<nav class="nav has-shadow" id="nav">

  <div class="nav-left">
    <a class="nav-item is-brand" href="#">
      <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo">
    </a>
  </div>

  <div class="nav-center">

    <a class="nav-item" href="#">
      全部
    </a>
    <a class="nav-item" href="#">
      热点
    </a>
    <a class="nav-item" href="#">
      关注
    </a>

  </div>


  <div class="nav-right nav-menu">
    <search />
      <span v-show="!isLoggedin" class="nav-item">
        <a class="button" @click="signin">
          <span>登陆</span>
        </a>
        <a class="button is-primary" href="#">
          <span>注册</span>
        </a>
      </span>        
      <avatar v-show="isLoggedin"></avatar>
    </span>
  </div>
</nav>
</template>

<script>
import Search from './Search.vue'
import Avatar from './avatar'
import { mapState } from 'vuex'


export default {
    name: 'Nav',
    components: { Search, Avatar },
    methods: {
      signin() { this.$emit('signin') }
    },
    computed: {
      ...mapState(['isLoggedin'])
    },
    mounted () {
      console.dir(this.$store)
    }
}
</script>

<style scoped>
  #nav {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
  }


</style>