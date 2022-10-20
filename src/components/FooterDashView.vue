<template>
    <div class="fixed bottom-0 p-2 bg-slate-600 w-full">
        <div class="flex text-gray-50">
            <div class="w-1/3">
                {{ accountType }}
            </div>
            <div class="w-1/3 text-center">
                TECIT-2022
            </div>
            <div class="w-1/3 text-right cursor-pointer">
                Profile user
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name:'FooterDashView',
        props: {
            accountType:{
                type: String
            }
        },
    }
</script>