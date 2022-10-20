<template>
    <div class="grid gap-4 grid-cols-3 grid-rows-1">
        <div class="p-4  shadow-md" v-for="dataCom in dataCom" :key="dataCom.id">
            <div class="flex ">
                <div class="w-full">
                    <div class="text-right">
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="cursor-pointer float-right w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                          </svg>  
                    </div>
                </div>
            </div>
            <p class="text-center  w-2/3 mx-auto">{{ dataCom.name }}</p>
            <p class="text-center  w-95 mx-auto p-2 mt-4">{{ dataCom.fo }}</p>
        </div>
        
      </div>
</template>
<script>
    export default{
        name:'ComponentDivView',
        props: {
            accountType:{
                type: String
            },
            dataCom:{
                type:String
            }
        },
    }
</script>