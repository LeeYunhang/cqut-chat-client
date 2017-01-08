<template>
<div class="user-container">
    <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img class="avatar" src="http://img.hutufan.com/hutufanimgbiz/q8gFjoMyrjxUAkN1INVtVVibnEab68uzPL6JGChdMywK7jvF37YicmI37KBRiabbflrq9xtjoKhRTK8iad1bG9ODUA.jpg" alt="Image">
      </figure>
    </div>
    <div class="media-content user-info">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> 
          <br>
          <strong>哥只是个传说</strong>
          <br>
          
          <span>16</span><span>个关注者</span>
        </p>
      </div>
      <div class="follow-btn">
        <a class="button is-primary">
          <span class="icon">
            <i class="fa fa-plus"></i>
          </span>
          <span>关注他</span>
        </a>
      </div>
    </div>
  </article>
</div>
</template>

<script>
  export default {
    name: 'User',
    components:{
    }
  }
</script>

<style scoped>
  img.avatar {
    height: 100%;
    width: 100%;
  }

  .user-info {
    display: flex;
    justify-content: space-between;
  }

  .follow-btn {
    align-self: center;
  }

  .user-container {
    padding: 8px 16px;
    border-bottom: 1px solid lightgray;
  }
</style>