<template>
  <div class="columns">
    <div class="column is-6 is-offset-3">
      <div class="box">
        <article class="media">
          <div class="media-left">
           <figure class="image is-64x64">
             <img class="avatar" src="http://pic.pimg.tw/simour/1373950251-394218016.jpg" alt="Image">
           </figure>
         </div>
         <div class="media-content">
            <div class="content">
              <p>
               <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                <br>
               女:“能借你的肩膀靠一下吗？”吕不同:“可以。”五分钟后……吕不同:“我屁股有点痒，你起开，我抓一抓……”
              </p>
           </div>
           <nav class="level">
              <div class="level-left">
               <a class="level-item" @click="reply">
                 <span class="icon is-small"><i class="fa fa-reply"></i></span>
              </a>
                <span>16</span>
                <a class="level-item is-danger">
                  <span class="icon is-small"><i class="fa fa-heart "></i></span>
                </a>
               <span>16</span>
              </div>
          </nav>
          <reply v-if="isReply" @reply="reply"></reply>
        </div>
      </article>
      <reply-news v-for="item in repleyNews"></reply-news>
    </div> 
    </div>
  </div>
</template>

<script>
import ReplyNews from './replyNews'
import { replyMixin } from 'mixins'
import Reply from 'components/Reply'
  export default {
    mixins:[replyMixin],
    name: 'NewsDetail',
    components:{
      ReplyNews,
      Reply
    },
    
    data() {
      return {
        repleyNews: new Array(10),
      }
    }
  }
</script>

<style scoped>
  div.columns {
    margin-top: 4rem;
  }

  img.avatar {
    height: 100%;
  }
  
</style>