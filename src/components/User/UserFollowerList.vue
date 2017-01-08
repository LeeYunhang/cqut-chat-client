<template>
  <div>
    <user v-for="item in demo"></user>
  </div>
</template>

<script>
  import User from 'components/FollowerUser'
  export default {
    name: 'UserFollowerList',
    components: {
      User
    },
    data () {
      return {
        demo: new Array(10)
      }
    }
  }
</script>