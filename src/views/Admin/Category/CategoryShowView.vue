<template>
    <div>
        <InfoCategoryComponent :infoCategory="category"/>
    </div>
</template>
<script>
import store from "@/store/index"
import InfoCategoryComponent from "@/components/CategoryComponents/InfoCategoryComponent.vue"

    export default{
        name:'CompanyView',
        data() {
            return {
                category:{}
            }
        },
        components:{
            InfoCategoryComponent
        },
        mounted() {
            store.dispatch('category/find',this.$route.params.id).then((data)=>{
                console.log(data);
                this.category={
                    id:data.data.category.id,
                    name:data.data.category.name,
                    code:data.data.category.code,
                    detailType:data.data.category.detailType
                }
                console.log(this.category)
            })
        },
    }
</script>