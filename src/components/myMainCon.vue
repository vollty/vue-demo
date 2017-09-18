<template>
  <div class="main" >
    <ul>
      <li v-for="item of articleLists" :key="item.id">
        <div class="left">
          <router-link :to="{name:'myUser',params:{name:item.author.loginname}}">
              <img :src="item.author.avatar_url" :title="item.author.loginname">
          </router-link>
        </div>
        <div class="right">
          <router-link :to="{name:'myArticle',params:{id:item.id}}">
             <p class="title">{{item.title}}</p>
          </router-link>
          <span>回复：{{item.reply_count}}</span>
          <span>创建于：{{dealTime}}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default{
      name:'MainCon',
      data(){
        return {
            item:{
                create_at:'2017-08-17'
            },
        }
      },
      computed:{  //dom加载后马上执行 类似于ready
        dealTime(){
          return String(this.item.create_at).match(/.{10}/)[0]
        },
        articleLists(){
          return this.$store.state.articleLists
        }
      },
      methods:{  //声明方法 必须有触发条件
          getData(){
            this.$store.dispatch('getArticleLists')
          }
      },
      created(){  //组件创建完后获取数据
        if(this.$store.state.articleLists.length===0){
          this.getData()
        }else{
          return
        }

      }

  }
</script>
<style scoped>
  .main{
    width:100%;
    padding:0.3rem;
  }
  .main ul li{
    overflow:hidden;
    margin-bottom: 0.3rem;
    border-bottom: 1px dashed #ccc;
    padding-bottom: 0.3rem;
  }
  .main .left{
    float:left;
    width:10%;
  }
  .main .left img{
    width:100%;
    display: block;
    vertical-align: top;
  }
  .main .right{
    float:right;
    width:80%;
    font-size:0.3rem;
    text-align: left;
  }
  .main .right span{
    color:#999;
    margin-right:0.2rem;
    font-size:0.22rem
  }
</style>
