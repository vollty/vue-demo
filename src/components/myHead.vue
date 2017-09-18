<template>
  <div class="head">
    <router-link to="/">
      <img src="../assets/cnodejs.svg" alt="">
    </router-link>
    <p class="type">{{type}}</p>
  </div>
</template>

<script>
  export default{
    data(){
       return {

       }
    },
    computed:{
      type(){
        return this.$store.state.type
      }
    },
    methods:{
      typeMethod(){
        let type=this.$route.path;
        this.$store.dispatch('getType',type)
      }
    },
    created(){
      this.typeMethod()
    },
    watch:{
      "$route":"typeMethod"
    }

  }
</script>
<style scoped>
  .head{
    width:100%;
    height:1rem;
    background: #324057;
    position:relative;
  }

  .head img{
    position: absolute;
    left:0.5rem;
    top: 0;
    border-radius: 100%;
    height: 1rem;
    width: 2rem;
  }
  .head .type{
    position:absolute;
    right: 0.3rem;
    top:0.3rem;
    font-size:0.3rem;
    color:#a9bad7;
  }
</style>

