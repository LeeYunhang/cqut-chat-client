

export default {
  data() {
    return {
      isReply: false
    }
  },
  methods:{
    reply() {
      this.isReply = !this.isReply
    }
  }
}