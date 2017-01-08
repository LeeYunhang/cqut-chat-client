<template>
    <article class="media">
    <div class="media-left">
      <figure class="image is-64x64">
        <img class="avatar" src="http://i2.hdslb.com/bfs/archive/aed66c77d20f24432f5fd34d1f8c7336c8b9135a.jpg" alt="Image">
      </figure>
    </div>
    <div class="media-content">
      <div class="content">
        <p>
          <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
          <small>回复给</small> <small>Mr-code</small>
          <br>
          
          <span>
            他曾以老鼠和鸽子为实验对象，使用斯金纳箱和一系列魔改 · 斯金纳箱塑造它们的行为，提出了能
            够塑造行为的操作性条件反射。它的力量如此强大，以至于一次实验中，鸽子摇了一万多次头才完成了行为的消除。这
            一概念的影响巨大而深远。
          </span>
        </p>
      </div>
      <nav class="level">
        <div class="level-left">
          <a class="level-item" @click="reply">
            <span class="icon is-small"><i class="fa fa-reply"></i></span>
          </a>
          <span>16</span>
          <!--<a class="level-item">
            <span class="icon is-small"><i class="fa fa-retweet"></i></span>
          </a>-->
          <a class="level-item is-danger">
            <span class="icon is-small"><i class="fa fa-heart "></i></span>
          </a>
          <span>16</span>
        </div>
      </nav>
      <reply v-if="isReply" @reply="reply"></reply>
    </div>
  </article>
</template>

<script>
import { replyMixin } from 'mixins'
import Reply from 'components/Reply'
  export default {
    mixins: [replyMixin],
    name: 'UserDynamic',
    components:{
      Reply
    }
  }
</script>

<style scoped>
  img.avatar {
    height: 100%;
    width: 100%;
  }
</style>