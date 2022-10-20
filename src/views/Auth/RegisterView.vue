<template>
    <div class="bg-gray-200 h-screen text-center">
      <form action="" @submit.prevent="registered">
          <div>
            <label for="name">nom</label>
          <input type="text" v-model="form.name">
          
          </div>
          <div>
            <label for="prenom">prenom</label>
          <input type="text" v-model="form.firstname">
          
          </div>
          <div>
            <label for="email">email</label>
          <input type="email" v-model="form.email">
          
          </div>
          <div>
            <label for="password">password</label>
          <input type="password" v-model="form.password">
          
          </div>
          <div>
            <label for="password_confirmation">password_confirmation</label>
          <input type="password" v-model="form.password_confirmation">
          
          </div>
          <button type="submit">Register</button>
        </form>
    </div>
</template>
<script>
import { mapActions } from 'vuex';

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