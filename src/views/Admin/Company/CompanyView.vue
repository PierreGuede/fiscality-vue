<template>
    <div class="p-2">
        <div class="flex">
            <div class="w-9/12 self-center">
                <h1 class="text-xl font-bold">Les entreprises</h1>
            </div>
            <div class="w-3/12 self-center mx-auto">
                <div class="float-right mr-2">
                    <button class="flex ring-1 ring-blue-400 rounded-md space-x-2 p-2 bg-blue-400 transition duration-200 hover:bg-blue-600">
                        <span class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                        <span>Ajouter</span>
                    </button>
                </div>
            </div>
        </div>
        <ListCompanyView :listCompany="company"/>
    </div>
</template>
<script>
    import store from "@/store/index"
    import ListCompanyView from "@/components/CompanyCompany/ListCompanyView.vue"
    export default{
        name:'CompanyView',
        data() {
            return {
                company:[]
            }
        },
        components:{
            ListCompanyView
        },
        mounted() {
            store.dispatch('company/index').then((data)=>{
                console.log(data.data.company)
                data.data.company.forEach(element => {
                    this.company.push({
                        id:element.id,
                        name:element.name,
                        celphone:element.celphone,
                        domain:element.domain.name,
                        email:element.email,
                        status:element.status,
                    })
                });
                console.log(this.company)
            })
        },
       
    }
</script>