<template>
    <div class="p-2">
        <InfoCompanyView :infoCompany="company"/>
    </div>
</template>
<script>
    import store from "@/store/index"
        import InfoCompanyView from "@/components/CompanyCompany/InfoCompanyView.vue"

    export default{
        name:'CompanyView',
        data() {
            return {
                company:{}
            }
        },
        components:{
            InfoCompanyView
        },
        mounted() {
            store.dispatch('company/find',this.$route.params.id).then((data)=>{
                this.company={
                    celphone:data.data.company.celphone,
                    created_date:data.data.company.created_date,
                    domain:data.data.company.domain,
                    email:data.data.company.email,
                    ifu:data.data.company.ifu,
                    name:data.data.company.name,
                    rccm:data.data.company.rccm,
                    status:data.data.company.status,
                    taxCenter:data.data.company.taxCenter,
                    typeCompany:data.data.company.typeCompany,
                }
                console.log(this.company)
            })
        },
    }
</script>