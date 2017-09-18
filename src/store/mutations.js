export default {
  changeType(state,type){
    state.type=type
  },
  addArticleLists(state, articleLists) {
    state.articleLists = articleLists
  },
  addArticleNumber(state) {
    state.articleNumber += 10
  },
  addArticle(state,article){
    state.article=article
  },
  addUserInfo(state,userInfo){
    state.userInfo=userInfo
  }
}
