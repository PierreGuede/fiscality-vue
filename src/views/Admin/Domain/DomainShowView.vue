<template>
    <div>
        <InfoDomainComponent :infoDomain="domain"/>
    </div>
</template>
<script>
import InfoDomainComponent from "@/components/DomainComponents/InfoDomainComponent.vue";
import store from "@/store/index"

    export default{
        name:'CompanyView',
        data() {
            return {
                domain:{}
            }
        },
        components:{
    InfoDomainComponent
},
        mounted() {
            store.dispatch('domain/find',this.$route.params.id).then((data)=>{
                console.log(data);
                this.domain={
                    id:data.data.domain.id,
                    name:data.data.domain.name,
                    detailType:data.data.domain.detailType,
                    itemsIM:data.data.domain.itemsIM
                }
                console.log(this.domain)
            })
        },
    }
</script>