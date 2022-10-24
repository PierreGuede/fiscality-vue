<template>
    <div class="bg-gray-200 h-screen ">
      <main class="bg-white h-screen w-full  text-gray-700 flex">
        <div class="w-3/5 h-full  flex items-center justify-center ">
          <div class=" w-4/6 mx-auto space-y-6">
            <h2 class="text-4xl font-bold ">TECIT</h2>
            <h6 class=" font-medium text-lg">Mettez un text plus important à ce niveau</h6>
            <p class="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure natus quibusdam quo commodi tenetur, labore hic est accusantium in eligendi sit reiciendis laudantium iste culpa laboriosam exercitationem? Consectetur, esse amet!</p>
      
              <small class="block text-gray-400 font-semibold" >Mettez un text de salutation ici</small>
              <button class="py-3 px-8 border-2 border-blue-500  rounded-md text-blue-500 font-semibold">
                En savoir plus
              </button>
          </div>
      
      
        </div>
        <div class="w-2/5 bg-blue-50/40 flex items-center justify-center ">
          <div class="w-2/3" >
          <h6 class="text-2xl text-gray-700 font-semibold mb-2" >Commencez</h6>
          <p class="text-gray-500 text-sm mb-10">L'inscription ne prend qu'une minute</p>
          <form action="" class=" space-y-6">
        
            <div class="flex gap-x-4">
               <div class="relative">
                  <InputView  name="name" labeling="Nom de famille" v-model="form.name" typeInput="text" idInput="name" placeholder="ok" />

                </div>
                   <div class="relative">
                    <InputView  name="firstname" labeling="Prénom" v-model="form.firstname" typeInput="text" idInput="firstname" placeholder="ok"/>
                  </div>
                </div>
                   <div class="relative">
                  <InputView  name="email" labeling="Addresse mail" v-model="form.email" typeInput="email" idInput="email" placeholder="ok"/>
                </div>
                   <div class="relative">
                    <InputView  name="password" labeling="Mot de passe" v-model="form.password" typeInput="password" idInput="password" placeholder="*********"/>
                  </div>
                  <div class="relative">
                    <InputView  name="password_confirmation" labeling="Répétez le mot de passe" v-model="form.password_confirmation" typeInput="password" idInput="password_confirmation" placeholder="*********"/>
                  </div>

                    <button class="mt-20 px-4 py-3 rounded bg-blue-500 hover:bg-blue-400 text-white font-semibold text-center block w-full focus:outline-none focus:ring focus:ring-offset-2 focus:ring-blue-500 focus:ring-opacity-80 cursor-pointer" >Créer mon compte</button>
      
          </form>
        <p class="text-sm text-center text-gray-500">
                  J'ai déjà un compte?
                <a href="#" class="mt-4 inline-block text-sm text-center font-medium text-blue-600 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"> Connectez-vous </a>
                </p>
          </div>
        </div>
      </main>
    </div>
</template>
<script>
import { mapActions } from 'vuex';
import InputView  from '@/components/InputView.vue'
export default {
  name: 'RegisterView',
  data() {
    return {
      form:{
        name:'',
        firstname:'',
        email:'',
        password:'',
        password_confirmation:'',
      }
    }
  },
  components: {
    InputView
  },
  methods: {
    ...mapActions({
        signUp:'auth/signUp'
    }),
    registered(){
      this.signUp(this.form).then((e)=>{
        console.log(e)
      })
    }
  },
}
</script>