<template>
    <div class=" bg-slate-50 h-full ">
        <div class="p-4">
            <TopBarView :accountType="user.type_Account"/>
            <div class="mt-4 mx-auto w-96"><span class="text-blue-400">Acceuil <span class="text-black"> > </span> Entreprises </span></div>
            <div class="p-4 bg-white shadow-md mt-4 w-96 mx-auto">
                <router-view></router-view>
            </div>
        </div>
        <FooterDashView :accountType="user.type_Account"/>
    </div>
</template>
<script>
import TopBarView  from '@/components/TopBarView.vue'
 import FooterDashView  from '@/components/FooterDashView.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'IndexView',
  data() {
    return {
        componant:[
            {id:1,name:'ok'},
            {id:2,name:'ok'},
            {id:3,name:'ok'},
            {id:4,name:'ok'},
            {id:5,name:'ok'},
            {id:6,name:'ok'},
            {id:7,name:'ok'},
            {id:8,name:'ok'},
            {id:9,name:'ok'},
            {id:10,name:'ok'},
        ]
    }
  },
  components:{
    TopBarView,
    FooterDashView,
  },
  computed: {
        ...mapGetters({
            authenticated:'auth/authenticated',
            user:'auth/user'
        })
    },
}

</script>