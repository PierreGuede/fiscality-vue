import axios from "axios";
export default{
    namespaced:true,
    state:{
        domain:null,
        error:null
    },
    getters:{
        getDomain(state){
            return state.domain
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_DOMAIN(state,data){
            state.domain=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('domain');
            commit('SET_DOMAIN',response.data.domain)
            return response
        },
        async store({commit},data)
        {
            let response= await axios.post('domain',data)
            commit('SET_DOMAIN',response.data)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`domain/${id}`)
            commit('SET_DOMAIN',response.data)
            return response
        },
        async update({commit},data){
            let response= await axios.put(`domain/${data.id}`,data)
            commit('SET_DOMAIN',response)
            return response
        },
        async delete(_,id)
        {
            let response= await axios.delete(`domain/${id}`)
            return response
        },
    }
}