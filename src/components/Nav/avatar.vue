<template>
  <div id="navAvatar" >
    <figure @click="toPersonPage"  class="image is-32x32">
        <img src="http://www.zhiyinmusic.cn/cimg/bd16859286.jpg">
    </figure>
  </div>
</template>

<script>
import route from 'routes'
export default {
  name: 'Avatar',
  methods: {
    toPersonPage() {
      route.push('user/111')
      
    }
  }
}
</script>

<style scoped>
  #navAvatar {
    display: flex;
    align-items: center;
    padding: 0 32px 0 16px;
  }

  figure  > img {
    border-radius: 4px;
    cursor: pointer ;
  }
</style>