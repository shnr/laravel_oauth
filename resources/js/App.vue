<template>
      <div id="app">

        <header>
          <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 class="my-0 mr-md-auto font-weight-normal"><router-link :to="rootpath" >My Task List</router-link></h5>
            <nav class="my-2 my-md-0 mr-md-3">
              <div v-show="isLoggedIn" class="loginbtn-wrapper"><button class="btn btn-logout" type="" v-on:click="logout">Logout</button></div>
            </nav>
            <!-- <a class="btn btn-outline-primary" href="#">Sign up</a> -->
          </div>
        </header>

        <div class="container">
          <div class="main-content">
            <transition name="fade" mode="">
              <router-view class="view"></router-view>
            </transition>            
          </div>
        </div>

      </div>
</template>

<script>

export default {
  name: 'app',

  data() {
    return {
      rootpath: '/',
      appName: 'My surf Log',
      loginStates: false
    }
  },

  created() {
    const self = this
    // ログインステータスの確認
    self.$store.dispatch('checkLoginStatus')
    .then( function(response) {
      console.log(response)
      if (!response) {
        // redirect
        self.$router.push('/login')
      } else {
        // if Login Page
        if (self.$route.name == 'Login') {
          self.$router.push('/')
        }
      }
    })

  },

  computed: {

    isLoggedIn () {
      return this.$store.getters.getLoginStatus
    },

    isLogin () {
      console.log('computed')
      console.log(this.$store.getters.getLoginStatus)
      return
    }

  },

  methods: {

    logout () {
      const self = this
      this.$store.dispatch('logout')
      self.$router.push('/login')
    }

  }
}
</script>