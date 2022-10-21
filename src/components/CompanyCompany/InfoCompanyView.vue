<template>
    <div class="p-2 mt-4 space-y-4">
        <div class="flex">
            <div class="w-7/12 self-center">
                <div class="flex space-x-2">
                    <div class="">
                        <h1 class="text-xl font-bold">{{ infoCompany.name }}</h1>
                    </div>
                    <div class="self-center">
                        <h1 class="text-sm text-gray-400 font-bold">{{'créé le '+ infoCompany.created_date }}</h1>
                    </div>
                    <div class="text-green-400 self-center">
                        <p class="w-1 h-1 p-1 rounded-full bg-green-400" v-if="infoCompany.status == 'En fonction'"></p>
                        <div class="flex space-x-2 self-center" v-else>
                            <span class="mt-2 w-1 h-1 p-1 rounded-full bg-red-500" v-if="infoCompany.status == 'En fonction'"></span>
                            <span class="text-red-300">vous devez contacter le service client TECIT</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-5/12 self-center mx-auto">
                <div class="float-right flex space-x-2  mr-2">
                    <button class="flex ring-1 ring-green-400 rounded-md space-x-2 p-2 bg-green-400 transition duration-200 hover:bg-green-600">
                        <span class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </span>
                        <span>Télécharger IFU</span>
                    </button>
                    <button class="flex ring-1 ring-purple-400 rounded-md space-x-2 p-2 bg-purple-400 transition duration-200 hover:bg-purple-600">
                        <span class="mt-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                            </svg>
                        </span>
                        <span>Télécharger RCCM</span>
                    </button>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default{
    name:'InfoCompanyView',
    props:{
        infoCompany:{
            type: Object
        }
    }
}
</script>