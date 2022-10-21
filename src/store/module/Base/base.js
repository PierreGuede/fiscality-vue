import axios from "axios";
export default{
    namespaced:true,
    state:{
        base:null,
        error:null
    },
    getters:{
        getBase(state){
            return state.base
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_BASE(state,data){
            state.base=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('base');
            commit('SET_BASE',response.data.base)
            return response
        },
        async store({commit},data)
        {
            let response= await axios.post('base',data)
            commit('SET_BASE',response.data)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`base/${id}`)
            commit('SET_BASE',response.data)
            return response
        },
        async update({commit},data){
            let response= await axios.put(`base/${data.id}`,data)
            commit('SET_BASE',response)
            return response
        },
        async delete(_,id)
        {
            let response= await axios.delete(`base/${id}`)
            return response
        },
    }
}