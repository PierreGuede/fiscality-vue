<template>
    <div class="bg-gray-200 h-screen text-center">
        <div class=" items-center justify-center p-6 sm:p-12 md:w-1/2">
          <div class="w-full">
            <h1 class="mb-4 text-xl font-semibold text-gray-700">
                TECIT
            </h1></div>
            <div class="mx-auto w-3/4 shadow-md p-6">
              <form class="" action="" @submit.prevent="login">
                  <div class=" space-x-2">
                    <InputView  name="username" labeling="Identifiant" v-model="form.username" typeInput="text" idInput="username" placeholder="ok" />
                  </div>
                <div class=" space-x-2">
                  <InputView  name="email" labeling="Addresse mail" v-model="form.email" typeInput="email" idInput="email" placeholder="ok"/>
                </div>
                <div class=" space-x-2">
                  <div class=" space-x-2">
                    <InputView  name="password" labeling="Mot de passe" v-model="form.password" typeInput="password" idInput="password" />
                  </div>
                </div>
                <div class=" space-x-2">
                  <button type="submit" class="px-4 py-2 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-blue-600 border border-transparent rounded-lg active:bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring">ok</button>
                </div>
                
              </form>
            </div>
        </div>
      </div>
</template>
<script>
import { mapActions } from 'vuex';
import InputView  from '@/components/InputView.vue'
export default {
  name: 'LoginView',
  data() {
    return {
      form:{
        username:'',
        email:'',
        password:'',
      }
    }
  },
  components: {
    InputView
  },
  methods: {
    ...mapActions({
        signIn:'auth/signIn'
    }),
    login(){
      this.signIn(this.form).then((e)=>{
        console.log(e)
      })
    }
  },
}
</script>