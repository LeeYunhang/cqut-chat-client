<template>
  <div>
    <news-card v-for="item in demo"></news-card>
  </div>
</template>

<script>
  import NewsCard from 'components/NewsCard'

  export default {
    name: 'UserWeibo',
    components:{
      NewsCard
    },
    data () {
      return {
        demo: new Array(10)
      }
    } 
  }
</script>