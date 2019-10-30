import {get,post_json} from '../http'
export default{
  namespaced:true,
  state:{
    user:{}
  },
  mutations:{
    resetUser(state,data){
    state.user=data
    }
  },
  actions:{
    async login(context,data){
      //登陆
      let result=await post_json('/user/login',data)
      let token=result.data.token
      await context.dispatch('getuserInfo',token)
    },
    async getuserInfo(context,token){
      let response=await get('/user/info',{token})
      context.commit('resetUser',response.data)
      console.log(response.data)
    }
  }
}