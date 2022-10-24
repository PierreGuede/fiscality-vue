<template>
    <div>
        <InfoDetailTypeComponent :infoDetailType="detail_type"/>
    </div>
</template>
<script>
import store from "@/store/index"
import InfoDetailTypeComponent from "@/components/DetailTypeComponent/InfoDetailTypeComponent.vue"

    export default{
        name:'CompanyView',
        data() {
            return {
                detail_type:{}
            }
        },
        components:{
            InfoDetailTypeComponent
        },
        mounted() {
            store.dispatch('detail_type/find',this.$route.params.id).then((data)=>{
                console.log(data);
                this.detail_type={
                    id:data.data.detail_type.id,
                    name:data.data.detail_type.name,
                    code:data.data.detail_type.code,
                    category:data.data.detail_type.category,
                    base:data.data.detail_type.base,
                    typeImpot:data.data.detail_type.typeImpot,
                    taux:data.data.detail_type.taux,
                    description:data.data.detail_type.description,
                    article:data.data.detail_type.article,
                }
                console.log(this.detail_type)
            })
        },
    }
</script>