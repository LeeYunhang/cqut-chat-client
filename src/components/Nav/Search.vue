<template>
<p id="search" class="control has-addons has-addons-right has-addons-centered">
  <span class="select">
    <select>
      <option>用户</option>
      <option>内容</option>
    </select>
  </span>
  <input class="input" type="text" placeholder="用户or内容">
  <a class="button is-primary">
    搜索
  </a>

</p>
</template>
<script>
  export default {
    name: 'Search',
    data() {
      return {
        input: '',
        select: ''
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
      }
    }

  }
</script>

<style scoped>
  #search {
    display: flex;
    align-items: center;
    margin-left: 6rem;
    margin-bottom: 0;
  }
</style>