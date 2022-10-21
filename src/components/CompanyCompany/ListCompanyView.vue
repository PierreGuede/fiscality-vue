<template>
    <div class="p-2 mt-4 space-y-4">
        <div class="p-4 bg-gray-50 shadow-md rounded-sm hover:shadow-xl transition duration-200" v-for="listCompany in listCompany" :key="listCompany.id">
            <router-link :to="{name:'CompanyInfoView', params:{id:listCompany.id} } " >
                <div class="flex">
                    <div class="w-11/12">
                        <p class="font-bold text-gray-600">{{listCompany.name}}</p>
                    </div>
                    <div class="w-1/12"> 
                        <p class="cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                            </svg> 
                        </p>                 
                    </div>
                </div>
                <div class="mt-2 ml-2 text-gray-400 text-sm">
                    <p><span class=" underline">Tél:</span> {{ listCompany.celphone }}</p>
                    <p><span class=" underline">Domaine d'activité:</span> {{ listCompany.domain }}</p>
                    <p><span class=" underline">Email:</span> {{ listCompany.email }}</p>
                    <p><span class=" underline">Activité:</span> <span class="text-green-300">{{ listCompany.status }}</span></p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script>
export default{
    name:'ListCompanyView',
    props:{
        listCompany:{
            type: String
        }
    }
}
</script>