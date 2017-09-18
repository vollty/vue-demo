import get from '@/assets/js/xhr.js'
export default{
  getType(context,type){
    if(type.toString().indexOf('topic')>-1){
      type='文章'
    }else if(type.toString().indexOf('user')>-1){
      type='用户'
    }else{
      type='主页'
    }
    context.commit('changeType',type)
  },
  getArticleLists(context){
    context.commit('addArticleNumber');
    let number=context.getters.getArticleNumber;
    get('https://cnodejs.org/api/v1/topics',{
      page: 1,
      limit: number,
      mdrender: 'false',
    }).then((res)=>{
      context.commit('addArticleLists', res.data)
    }).catch((res) => {
      console.log('main error: ', res);
    });
  },
  getArticle(context,url){
    get(url).then((res)=>{
      if(res.success===true){
        context.commit('addArticle',res.data);
      }else{
        console.log('sorry.something wrong')
      }
    }).catch((res)=>{
      console.log('article error:',res)
    })
  },
  getUserInfo(context,url){
    get(url).then((res)=>{
      context.commit('addUserInfo',res.data)
    }).catch((res)=>{
      console.log('user error:',res)
    })
  }
}
