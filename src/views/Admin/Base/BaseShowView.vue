<template>
    <div>
        <InfoBaseView :infoBase="base"/>
    </div>
</template>
<script>
import store from "@/store/index"
import InfoBaseView from "@/components/BaseComponents/InfoBaseComponent.vue"

    export default{
        name:'CompanyView',
        data() {
            return {
                base:{}
            }
        },
        components:{
            InfoBaseView
        },
        mounted() {
            store.dispatch('base/find',this.$route.params.id).then((data)=>{
                console.log(data);
                this.base={
                    id:data.data.base.id,
                    name:data.data.base.name,
                    detailType:data.data.base.detailType,
                    itemsIM:data.data.base.itemsIM
                }
                console.log(this.base)
            })
        },
    }
</script>