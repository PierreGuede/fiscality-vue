import axios from "axios";
export default{
    namespaced:true,
  state: {
    token:null,
    user:null,
    registerInfo:null,
    error:null,
  },
  getters: { 
    authenticated(state){
        return state.token && state.user
    },
    user(state){
        return state.user
    },
    sucessfullyRegister(state){
        return state.registerInfo
    },
    error(state){
        return state.error
    },
  },
  mutations: {
    SET_TOKEN(state,token){
        state.token=token
    },
    SET_USER(state,data){
        state.user=data
    },
    SET_REGISTRYING(state,data){
        state.registerInfo=data
    },
    SET_ERROR(state,data){
        state.error=data
    },
  },
  actions: {
    async signUp({commit,dispatch},data){
        dispatch
        let response=await axios.post('auth/register',data).then(()=>{
            commit('SET_REGISTRYING',data)
        }).catch((e)=>{
            console.log(e);
            commit('SET_ERROR',e.response.data.errors)
        });
        return response
    },
    async signIn({commit,dispatch},credentials){
        let response=await axios.post('login',credentials).catch((e)=>{
            console.log(e);
            commit('SET_ERROR',e.response.data.errors)
        })
        return dispatch('attempt',response.data.token)
    },
    async attempt({commit,state},token){
        if (token) {
            commit('SET_TOKEN',token);
        }
        if (!state.token) {
                return
        }
        try {
            let response= await axios.get('user')
            commit('SET_USER',response.data)
        } catch (e) {
            commit('SET_TOKEN',null);
            commit('SET_USER',null)
        }
    },
    async confirm({_},data){
        _
        console.log(data);
        let response=await axios.put('/confirmCode',data)
        return response
    },
    signOut({commit}){
      return axios.post('logout').then(()=>{
          commit('SET_TOKEN',null)
          commit('SET_USER',null)
      })
  },
  }

}