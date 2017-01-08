<template>

  <div>
  <div id="user" class="columns">
    <div id="userCard" class="card column is-6 is-offset-3 is-paddingless">
      <div class="card-image">
        <figure class="user-cover image">
          <img src="http://uploadfile.zhuoku.org/2015/1203/20151203055419735.jpg" alt="">
        </figure>
      </div>
      <div id="userProfile">
        <div id="userAvatar" class="image is-128x128">
          <img src="http://www.qq1234.org/uploads/allimg/140722/3_140722094148_7.jpg">
        </div>
        <div id="profileContent">
          <div class="media-content">
            <div class="content">
              <h4>
                <strong>日他妈的香蕉皮</strong>
                <small>@fuckman</small>
              </h4>
              <div>
                <p>喜欢吊儿郎当的一本正经的胡说八道。目前正在维护世界和平。</p>
              </div>
              <div id="userElse">
                <span>关注了</span><small>19</small><small>人</small>
                <span>关注者</span><small>19</small><small>人</small>
              </div>
              <div id="editProfile">
                <a class="button is-primary is-outlined">编辑资料</a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
    </div>
    <br>  
    <div id="userTabs" class="columns">
    <div class="card column is-6 is-offset-3">
      <user-tabs></user-tabs>
    </div>
    </div>
  </div>
</template>

<script>
  import UserTabs from './UserTabs'

  export default {
    name: 'Personal',
    components:{
      UserTabs
    },

  }   
</script>

<style scoped>
  #user {
    margin-top: 4rem;
  }

  .user-cover, user-profile {
    width: 100%;
  }
  .user-cover > img {
    height: 200px;
  }

  #userAvatar {
    margin: -20px 0 0 0;
    border: 4px white solid;
    border-radius: 4px;
  }

  #userAvatar > img {
    border-radius: 4px;
  }

  #userProfile {
    display: flex;
    padding-left: 16px;
  }

  div.content {
    padding: 16px;
  }

  #userElse {
    margin: 16px 0;
  }

  #editProfile {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }

  #userTabs {
    margin-bottom: 16px;
  }
</style>