import axios from "axios";
export default{
    namespaced:true,
    state:{
        imCalculationDetail:null,
        error:null
    },
    getters:{
        getIMCalculationDetail(state){
            return state.imCalculationDetail
        },
        getError(state){
            return state.error
        },
    },
    mutations:{
        SET_IMCALCULATIONDETAIL(state,data){
            state.imCalculationDetail=data
        },
        SET_ERROR(state,data){
            state.error=data
        },
    },
    actions: {
        async index({commit})
        {
            let response=await axios.get('im-calculation-detail');
            commit('SET_IMCALCULATIONDETAIL',response.data.imCalculationDetail)
            return response
        },
        async store({commit},data)
        {
            let response= await axios.post('im-calculation-detail',data)
            commit('SET_IMCALCULATIONDETAIL',response.data)
            return response
        },
        async find({commit},id)
        {
            let response= await axios.get(`im-calculation-detail/${id}`)
            commit('SET_IMCALCULATIONDETAIL',response.data)
            return response
        },
        async update({commit},data){
            let response= await axios.put(`im-calculation-detail/${data.id}`,data)
            commit('SET_IMCALCULATIONDETAIL',response)
            return response
        },
        async delete(_,id)
        {
            let response= await axios.delete(`im-calculation-detail/${id}`)
            return response
        },
    }
}