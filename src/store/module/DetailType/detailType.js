import axios from "axios";
export default{
    namespaced:true,
    state:{
        detail_type:null,
        error:null
    },
    getters:{
        getDetailType(state){
            return state.detail_type
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_DETAILTYPE(state,data){
            state.detail_type=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('detail-Type');
            commit('SET_DETAILTYPE',response.data.detail_type)
            return response
        },
        async store({commit},data)
        {
            let response= await axios.post('detail-Type',data)
            commit('SET_DETAILTYPE',response.data)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`detail-Type/${id}`)
            commit('SET_DETAILTYPE',response.data)
            return response
        },
        async update({commit},data){
            let response= await axios.put(`detail-Type/${data.id}`,data)
            commit('SET_DETAILTYPE',response)
            return response
        },
        async delete(_,id)
        {
            let response= await axios.delete(`detail-Type/${id}`)
            return response
        },
    }
}