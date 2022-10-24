<template>
      <div class="selection:bg-blue-500 selection:text-white">
        <div class="min-h-screen bg-blue-50 flex justify-center items-center">
          <div class="p-8 flex-1">
            <div class="w-1/3 bg-white rounded-3xl mx-auto overflow-hidden shadow-xl">
              <div class="relative h-48 bg-blue-500 rounded-bl-4xl">
                <svg class="absolute bottom-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                  <path fill="#ffffff" fill-opacity="1" d="M0,64L48,80C96,96,192,128,288,128C384,128,480,96,576,85.3C672,75,768,85,864,122.7C960,160,1056,224,1152,245.3C1248,267,1344,245,1392,234.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg>
                <h2 class="text-center text-2xl font-semibold pt-10 text-blue-50"> TECIT</h2>
              </div>
              <div class="px-10 pt-4 pb-8 bg-white rounded-tr-4xl">
                <h1 class="text-xl font-semibold text-gray-700">Bienvenue à nouveau !</h1>
                <p class="text-sm text-gray-500" >Veuillez vous identifier pour continuer</p>
                <form class="mt-12 space-y-6"  @submit.prevent="login">
                    <div class="relative">
                      <InputView  name="username" labeling="Identifiant" v-model="form.username" typeInput="text" idInput="username" placeholder="John" />
                    </div>
                  <div class="relative">
                    <InputView  name="email" labeling="Addresse mail" v-model="form.email" typeInput="email" idInput="email" placeholder="JohnDoe@gmail.com"/>
                  </div>
                  <div class="relative">
                    <InputView  name="password" labeling="Mot de passe" v-model="form.password" typeInput="password" idInput="password" placeholder="*******"/>
                  </div>

                  

              <button class="mt-20 px-4 py-3 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer" >Connectez-vous</button>
          </form>
                <p class="text-sm text-gray-500">
                  Je n'ai pas de compte?
                <a href="#" class="mt-4 inline-block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"> Créer un compte </a>
                </p>
                <a href="#" class="mt-1 block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"> Mot de passe oublié? </a>
      
              </div>
            </div>
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