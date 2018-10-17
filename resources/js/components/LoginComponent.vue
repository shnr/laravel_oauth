<!-- 
Modal example
https://vuejs.org/v2/examples/modal.html
 -->
<template>
  <div class=" box-login">
    <h1 class="ttl">Login</h1>
    <div class="d-flex align-items-center">
      <div class="">
        <a v-on:click="showLoginModal" class="btn btn-primary">Login</a>
      </div>
      <div class="">
        <router-link to='/register' class="btn btn-success">Register</router-link>
      </div>
    </div>

    <div class="modal-mask" v-show="showModal">
      <div class="modal-wrapper">
        <div class="modal-container">

          <div class="modal-header">
            <slot name="header">
              Please Login
            </slot>
          </div>

          <div class="modal-body">
            <slot name="body">
              <p><input type="text" name="email" v-model="your_email" class="form-control" placeholder="sample@mail.com"></p>
              <p><input type="password" name="password" class="form-control" v-model="your_pw"></p>
              <button v-on:click="letsLogin" class="btn btn-primary">Log in!</button>
            </slot>
          </div>

          <div class="modal-footer">
            <slot name="footer">
              <button class="modal-default-button btn btn-secondary" @click="closeModal">
                close
              </button>
            </slot>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>


<script>
  export default {
    created() {
      const self = this
      if (this.$store.getters.getLoginStatus) {
        self.$router.push('/')
      }
    },

    mounted() {

    },

    data() {
      return {
        showModal: false,
        loggedIn: false,
        title:'',
        content:'',
        your_email: '',
        your_pw: ''
      }
    },

    methods: {

      showLoginModal () {
        const self = this
        if (!self.showModal) {
          self.showModal = true
        }
      },

      closeModal () {
        const self = this
        if (self.showModal) {
          self.showModal = false
        }
      },


      /*
      */
      letsLogin() {
        const self = this
        let formParams = {
          your_email : self.your_email,
          your_pw : self.your_pw
        }
        this.$store.dispatch('login', formParams)
        .then( function(response) {
          console.log(response)
          if (!response) {
            // redirect
            self.$router.push('/login')
            self.showModal = false
          } else {
            // if Login Page
            if (self.$route.name == 'Login') {
              self.$router.push('/')
            }
          }
        })


      }

    }
  }
</script>


<style scoped>
</style>
