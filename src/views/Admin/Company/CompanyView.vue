<template>
    <div class="p-2">
        <h1 class="text-xl font-bold">Les entreprises</h1>
        
    </div>
</template>
<script>
    import store from "@/store/index"
    export default{
        name:'CompanyView',
        data() {
            return {
                company:[]
            }
        },
        components:{
            
        },
        mounted() {
            store.dispatch('company/index').then((data)=>{
                console.log(data.data.company)
                data.data.company.forEach(element => {
                    this.company.push({
                        id:element.id,
                        name:element.name
                    })
                });
                console.log(this.company)
            })
        },
    }
</script>