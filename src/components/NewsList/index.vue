<template>

<div id="newsList">
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <news-card v-for="item in items"></news-card>
    </div>
  </div>  
</div>

</template>

<script>
  import NewsCard from 'components/NewsCard'

  export default {
    name: 'NewsList',
    components: {
      'news-card': NewsCard
    },
    data () {
      return {
        items: new Array(10)
      }
    }
  }
</script>

<style>
  #newsList {
    margin-top: 4rem;
  }
</style>