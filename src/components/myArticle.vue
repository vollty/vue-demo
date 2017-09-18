<template>
  <div class="secDiv">
    <div v-show='loading' class="loading">loading...</div>
    <div class="topCon" v-show="!loading">
      <p class="title">{{article.title}}</p>
      <p class="addInfo">
        <span>发布于：{{createdTime}}</span>
        <span>浏览量{{article.visit_count}}</span>
        <span class="mb20">来自：{{article.tab}}</span>
      </p>
      <div class="wrap_reply">
        <div v-for="reply in article.replies" class="reply">
          <span class='replyName'>{{reply.author.loginname}}</span>
          <span>{{dealCommentTime(reply.create_at)}}</span>
          <span class="read">{{reply.ups.length}}次浏览</span>
        </div>
      </div>
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
    computed:{
      createdTime(time){
        return String(this.article.create_at).match(/.{10}/)[0]
      },
      article(){
        return this.$store.state.article;
      }
    },
    methods:{
      dealCommentTime(time){
        return String(time).match(/.{10}/)[0].replace(/.{2}/,'').replace(/[T]/,'')
      },
      getData(){
        const url=`https://cnodejs.org/api/v1${this.$route.path}`;
        this.$store.dispatch('getArticle',url);

      }
    },
    created(){
      this.getData()
    },
    watch:{
      article(val){
        if(val){
          this.loading=false;
        }
      }
    }

  }
</script>

<style scoped>
  .mb20{
    margin-bottom:0.4rem;
  }
  .secDiv{
    width:100%;
    padding-top:0.2rem;
    /*padding:0.3rem;*/
  }
  .loading{
    color:#999;
    font-size:0.3rem;
  }
  .topCon{
    overflow:hidden;
    padding-top:0.4rem;
  }
  .topCon .title{
    font-size:0.4rem;
    color:#172b4d;
    max-width:80%;
    margin:0 auto;

  }
  .topCon .addInfo{
    font-size: 0.6rem;
    color: #999;
  }
  .topCon span{
    font-size:0.2rem;
  }
  .topCon .wrap_reply{
    margin-top:0.6rem;
  }
  .topCon .reply{
    overflow:hidden;
    color:#666;
    text-align: center;
    font-size:0.6rem;
  }

  .topCon .reply span{
    font-size:0.3rem;
    margin-right:0.3rem;
  }
  .topCon .reply span.replyName{
    font-size:0.36rem;
  }
  .topCon .reply span.read{
    color:#999;
    font-size:0.2rem
  }
</style>
