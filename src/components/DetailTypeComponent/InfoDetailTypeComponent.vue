<template>
    <div class="p-2 mt-4 space-y-4">
        <div :class="{ shake: disabled }" class=" p-4 fixed top-8 right-4">
            <span v-if="disabled" class=" p-4 bg-green-500 rounded-lg text-white">{{ message }}</span>
        </div>
        <div class="flex">
            <div class="w-7/12 self-center">
                <div class="flex space-x-2">
                    <div class="">
                        <h1 class="text-xl font-bold">{{ infoDetailType.name }}</h1>
                    </div>
                </div>
            </div>
            <div class="w-5/12 self-center mx-auto">
                <div class="float-right flex space-x-2  mr-2">
                    <button @click="modal=true" class="text-white flex ring-1 ring-green-400 rounded-md space-x-2 p-2 bg-green-400 transition duration-200 hover:bg-green-600">
                        <span class="mt-1 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                            </svg>                              
                        </span>
                        <span>Modifier</span>
                    </button>
                </div>
            </div>
        </div>

        <div v-if="modal" class="fixed inset-0  w-full h-full bg-opacity-30 bg-gray-200 " >
            <div class=" bg-white p-4 z-100 w-1/2 mx-auto mt-24 lg:my-8 self-center " >
                <div class="flex ">
                    <div class="w-11/12">
                        <h1 class="text-xl font-medium">Ajout d'une base</h1>
                    </div>
                    <div class="w-1/12 self-center text-gray-600 text-lg" @click="modal=false">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 self-center cursor-pointer">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                          
                    </div>
                </div>
                <div>
                    <form action="" @submit.prevent="update(infoDetailType.id)">
                        <div class="mt-4">
                            <InputView :modelValue="infoDetailType.name"  name="name" labeling="Nom de la base" v-model="form.name" typeInput="text" idInput="name" />
                        </div>
                        <div class="mt-4 p-2 text-right">
                            <button type="submit" class="p-2 transition duration-200 bg-blue-400 hover:bg-blue-500 rounded-lg">Modifier</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="mt-4">
            
        </div>
    </div>
</template>
<script>
    import InputView  from '@/components/InputView.vue'
    import store from "@/store/index"

    export default{
    name:'InfoCategoryView',
    data() {
        return {
            modal:false,
            form:{
                name:''
            },
            message:'',
            disabled: false
        }
    },
    props:{
        infoDetailType:{
            type: Object
            }
        },
        components:{
            InputView
        },
        methods: {
            update(id){
                this.form.id=id
                store.dispatch('detail_type/update',this.form).then((data)=>{
                    console.log(data)
                    this.$props.infoDetailType.id=data.data.detail_type.id,
                    this.$props.infoDetailType.name=data.data.detail_type.name,
                    this.$props.infoDetailType.code=data.data.detail_type.code,
                    this.$props.infoDetailType.category=data.data.detail_type.category,
                    this.$props.infoDetailType.base=data.data.detail_type.base,
                    this.$props.infoDetailType.typeImpot=data.data.detail_type.typeImpot,
                    this.$props.infoDetailType.taux=data.data.detail_type.taux,
                    this.$props.infoDetailType.description=data.data.detail_type.description,
                    this.$props.infoDetailType.article=data.data.detail_type.article
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