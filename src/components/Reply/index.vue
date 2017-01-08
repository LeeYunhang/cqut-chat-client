<template>
<div class="reply">
    <figure class="reply-avatar image is-32x32 is-pulled-left">
      <img src="http://qq1234.org/uploads/allimg/140627/3_140627145519_2.jpg">
    </figure>
    <div class="reply-input">
      <input v-on:input="onChange" class="input is-success"  type="text" placeholder="回复内容">
    </div>
    <br><br>
    <div class="is-pulled-right control is-grouped">
      <p class="control">
        <a class="button is-primary is-outlined" :class="{'is-disabled': inputHasWord }" @click="reply">回复</a>
      </p>
      <p class="control" @click="reply">
        <a class="button">
          退出
        </a>
      </p>
    </div>
</div>
</template>

<script>
  export default {
    name: 'Reply',
    data () {
      return {
        'inputHasWord': true
      }
    },
    methods:{
      reply() { this.$emit('reply') },
      onChange(e) {
        this.inputHasWord = !e.target.value
      }
    },
    created(){
    }
  }
</script>

<style scoped>


.reply {
  margin-top: 16px;
  width: 100%;
}

.reply-avatar {
  cursor: pointer
}
.reply-avatar > img {
  border-radius: 4px;
}
.reply-input {
  float: right;
  width: 90%;
}

</style>