<template>
  <div class="secDiv">
    <div v-show='loading' class="loading">loading...</div>
    <div class="topCon" v-show="!loading">
      <img :src="userInfo.avatar_url" :title="userInfo.loginname">
      <p class="name">{{userInfo.loginname}}</p>
      <p class="extra">积分：<span>{{userInfo.score}}</span></p>
      <p class="extra">注册时间：<span>{{dealCommentTime(userInfo.create_at)}}</span></p>
      <p class="extra">Github：<span>https://github.com/{{userInfo.githubUsername}}</span></p>

    </div>

  </div>
</template>

<script>
  export default {
    data(){
      return{
        loading:true
      }
    },
    created(){
      this.getData();
    },
    methods:{
      dealCommentTime(time){
        return String(time).match(/.{10}/)[0].replace(/.{2}/,'').replace(/[T]/,'')
      },
      getData(){
        const url=`https://cnodejs.org/api/v1${this.$route.path}`;
        this.$store.dispatch('getUserInfo',url)
      }
    },
    computed:{   //类似ready
      userInfo(){
        return this.$store.state.userInfo
      }
    },
    watch:{
      userInfo(val){
        if(val){
          this.loading=false;
        }
      }
    }


  }
</script>

<style scoped>
  .secDiv{
    width:100%;
    padding:0.3rem;
  }
  .loading{
    color:#999;
    font-size:0.3rem;
  }
  .topCon{
    overflow:hidden;
    padding-top:0.4rem;
    font-size:0.5rem;
  }
  .topCon .name{
    color:#ea3939;
  }
  .topCon .extra{
    font-size:0.3rem;
  }
  .topCon .extra span{
    font-size: 0.3rem;
    color:#999
  }
</style>
