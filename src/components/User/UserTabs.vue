<template>

<div>
<div class="tabs">
  <ul>
    <li @click="switchTab(1)" :class="{'is-active': activeIndex === 1}"><a>我的动态</a></li>
    <li @click="switchTab(2)" :class="{'is-active': activeIndex === 2}"><a >我的微博</a></li>
    <li @click="switchTab(3)" :class="{'is-active': activeIndex === 3}"><a>我的关注</a></li>
    <li @click="switchTab(4)" :class="{'is-active': activeIndex === 4}"><a>谁关注我</a></li>
  </ul>
</div>
  <div v-if="activeIndex === 1">
    <user-dynamic-list></user-dynamic-list>
  </div>
  <div v-else-if="activeIndex === 2">
    <user-weibo></user-weibo>
  </div>
  <div v-else-if="activeIndex === 3">
    <user-following-list></user-following-list>
  </div>
  <div v-else-if="activeIndex === 4">
    <user-follower-list></user-follower-list>
  </div>
</div>
</template>

<script>

import UserDynamicList from './UserDynamicList'
import UserFollowerList from './UserFollowerList'
import UserFollowingList from './UserFollowingList'
import UserWeibo from './UserWeibo'

  export default {
    name: 'UserTab',
    components:{
      UserDynamicList,
      UserFollowingList,
      UserFollowerList,
      UserWeibo
    },
    data () {
      return {
        activeIndex: 1,
      }
    },
    methods:{
      switchTab(index) {
        this.activeIndex = index
      }
    }
  }
</script>