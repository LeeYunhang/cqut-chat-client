<template>
  <div>
    <user-dynamic v-for="item in demo">
    </user-dynamic>
  </div>
</template>

<script>
import UserDynamic from './UserDynamic'

  export default {
    name: 'UserDynamicList',
    components:{
      UserDynamic
    },
    data () {
      return {
        demo: new Array(10)
      }
    }
  }
</script>