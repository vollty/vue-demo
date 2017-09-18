import Vue from 'vue'
import Router from 'vue-router'

import myMain from '@/components/myMainCon'
import myUser from '@/components/myUser'
import myArticle from '@/components/myArticle'




Vue.use(Router)

export default new Router({
  routes: [{
    path:'/',
    name:'RootPath',
    components:{
      main:myMain
    }
  },{
    path:'/topic/:id',
    name:'myArticle',
    components:{
      main:myArticle
    }
  },{
    path:'/user/:name',
    name:'myUser',
    components:{
      main:myUser
    }
  }


  ]
})
