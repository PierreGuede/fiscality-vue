<template>
    <div class="p-2">
        <div :class="{ shake: disabled }" class=" fixed top-8 right-4">
            <span v-if="disabled" class=" p-2 bg-green-500 rounded-lg text-white">{{ message }}</span>
        </div>
        <div class="flex">
            <div class="w-9/12 self-center">
                <h1 class="text-xl font-bold">Les domaines</h1>
            </div>
            <div class="w-3/12 self-center mx-auto">
                <div class="float-right mr-2">
                    <button @click="modal=true" class="flex ring-1 ring-blue-400 rounded-md space-x-2 p-2 bg-blue-400 transition duration-200 hover:bg-blue-600">
                        <span class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                            </svg>
                        </span>
                        <span>Ajouter</span>
                    </button>
                </div>
                <div v-if="modal" class="fixed inset-0  w-full h-full bg-opacity-30 bg-gray-200 " >
                    <div class=" bg-white p-4 z-100 w-1/2 mx-auto mt-24 lg:my-8 self-center " >
                        <div class="flex ">
                            <div class="w-11/12">
                                <h1 class="text-xl font-medium">Ajout d'une domaine</h1>
                            </div>
                            <div class="w-1/12 self-center text-gray-600 text-lg" @click="modal=false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 self-center cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  
                            </div>
                        </div>
                        <div>
                            <form action="" @submit.prevent="storing">
                                <div class="mt-4">
                                    <InputView  name="name" labeling="Nom de la Domain" v-model="form.name" typeInput="text" idInput="name" />
                                </div>
                                <div class="mt-4 p-2 text-right">
                                    <button type="submit" class="p-2 transition duration-200 bg-blue-400 hover:bg-blue-500 rounded-lg">Ajouter</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <ListDomainView :listDomain="Domain"/>
    </div>
</template>
<script>
    import store from "@/store/index"
    import InputView  from '@/components/InputView.vue'
    import ListDomainView from "@/components/DomainComponents/ListDomainView.vue"

    export default{
        name:'DomainView',
        data() {
            return {
                domain:[],
                modal:false,
                form:{
                    name:''
                },
                message:'',
                disabled: false
            }
        },
        components:{
            InputView,
            ListDomainView
        },
        mounted() {
            store.dispatch('domain/index',this.$route.params.id).then((data)=>{
                data.data.domain.forEach(element => {
                    this.domain.push({
                        id:element.id,
                        name:element.name
                    })
                });
            })
        },
        methods: {
            storing(){
                store.dispatch('domain/store',this.form).then((data)=>{
                    this.domain.push({
                        id:data.data.domain.id,
                        name:data.data.domain.name
                    })
                    this.message=data.data.message
                    this.modal=false
                    this.disabled = true
                        setTimeout(() => {
                            this.disabled = false
                        }, 5000)
                })
            }
        },
    }
</script>