<template>
<div class="modal" :class="{'is-active': signin}">
  <div class="modal-background" @click="hiddenSignin"></div>
  <div class="modal-card">
    <header class="modal-card-head">
      <p class="modal-card-title">登陆</p>
      <button class="delete" @click="hiddenSignin"></button>
    </header>
    <section class="modal-card-body">
      <label class="label">用户名</label>
      <p class="control has-icon has-icon-right">
        <input class="input" :class="[usernameIsValid? 'is-success':'is-danger']" placeholder="输入用户名" v-model="fields.username.value">
        <template v-if="usernameIsValid">
          <i class="fa fa-success fa-check"></i>
          <span class="help is-success">用户名可用</span>
        </template>  
        <template v-else>
          <i class="fa fa-warning fa-check"></i>
          <span class="help is-danger">用户名不合法</span>
        </template>
      </p>
      <label class="label">用户密码 <small>长度6-16位</small></label>
      <p class="control has-icon has-icon-right">
        <input class="input" :class="[passwordIsValid? 'is-success':'is-danger']" v-model="fields.password.value" type="password" placeholder="输入密码">
        <template v-if="passwordIsValid">
          <i class="fa fa-success fa-check"></i>
          <span class="help is-success">密码合法</span>
        </template>  
        <template v-else>
          <i class="fa fa-warning fa-check"></i>
          <span class="help is-danger">用户密码不合法</span>
        </template>
      </p>    
    </section>
    <footer class="modal-card-foot">
      <a class="button is-primary" :class="{'is-disabled': !(usernameIsValid && passwordIsValid), 'is-loading': isLogging}" @click="login">登陆</a>
      <a class="button" @click="hiddenSignin">关闭</a>
    </footer>
  </div>
</div>
</template>

<script>
  export default {
    props:['signin'],
    name: 'Signin',

    data () {
      return {
        validation: '',
        fields: {
          username: {
            rules: 'required|minLength:4|maxLength:20'
          },
          password: {
            rules: 'required|minLength:6|maxLength:16'
          }
        },
        isLogging: false
      }
    },

    computed: {
      passwordIsValid() {
        return this.fields.password.dirty && this.fields.password.valid
      },
      usernameIsValid() {
        return this.fields.username.dirty && this.fields.username.valid
      }
    },
    methods: {
      hiddenSignin() { this.$emit('signin') },
      login() {
        this.isLogging = true
        this.$store.dispatch('login', {
          username: this.fields.username.value,
          password: this.fields.password.value  
        }).then(() => {
          console.dir(this)
          this.isLogging = false
          this.hiddenSignin()
        })
      }
    },

    created () {
      this.$validate('validation', this.fields)
    }
  }
</script>