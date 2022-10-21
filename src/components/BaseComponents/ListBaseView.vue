<template>
    <div class="p-2 mt-4 space-y-4">

        <table class="space-y-4 p-2 w-full text-sm text-left text-gray-500  ">
            <thead class=" w-full text-xs text-gray-700 uppercase bg-gray-200">
                <th  class="w-full px-6 py-3">
                Nom
                </th>
                <th  class="w-full px-6 py-3">
                    action
                </th>
            </thead>
            <tbody class=" space-y-4 p-2" v-for="listBase in listBase" :key="listBase.id">
                <tr class="mt-2 border-b transition duration-200 hover:shadow-lg">
                    <th class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        {{ listBase.name }}
                    </th>
                    <th class="flex space-x-4 px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                        <router-link :to="{name:'BaseInfoView',params:{id:listBase.id}}" class="text-blue-500">Voir plus</router-link>
                        <span class="text-red-500" @click="loadeleting(listBase.id)">Supprimer</span>
                    </th>
                </tr>
                <div v-if="modalDelete" class="fixed inset-0  w-full h-full bg-opacity-30 bg-gray-200 " >
                    <div class=" bg-white p-4 z-100 w-1/2 mx-auto mt-24 lg:my-8 self-center " >
                        <div class="flex ">
                            <div class="w-11/12">
                                <h1 class="text-xl font-medium">Supprimer</h1>
                            </div>
                            <div class="w-1/12 self-center text-gray-600 text-lg" @click="modalDelete=false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5 self-center cursor-pointer">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                  </svg>
                                  
                            </div>
                        </div>
                        <div class="mt-4">
                            <div class="text-center">
                                <p class=" text-lg ">Voulez vous vraiment supprimer ce element ?</p>
                            </div>
                            <div class="mt-4 space-x-6 p-2 text-right">
                                <button class="p-2 transition duration-200 bg-gray-50 hover:bg-gray-100 text-black rounded-lg" @click="modalDelete=false">Annuler</button>
                                <button class="p-2 transition duration-200 bg-red-400 hover:bg-red-500 text-black rounded-lg" @click="deleting(id)">Supprimer</button>
                            </div>
                        
                        </div>

                    </div>
                </div>
            </tbody>
        </table>
    </div>
</template>
<script>
    import store from "@/store/index"
export default{
    name:'ListBaseView',
    data() {
        return {
            modalDelete:false,
            id:''
        }
    },
    methods: {
        loadeleting(id){
            this.modalDelete=true
            this.id=id
        },
        deleting(id){
           store.dispatch('base/delete',id).then(()=>{
                this.$router.go()
           })
        }
    },
    props:{
        listBase:{
            type: Array
        }
    }
}
</script>