<template>
  <div class="container">
      <div class="row">
          <div class="col-md-6 col-md-offset-3 jumbotron">
              <form class="form-signin">
                  <h2 class="form-signin-heading">Please sign in</h2>

                  <div class="form-group">
                      <label for="inputEmail" class="sr-only">Email address</label>
                      <input type="email" id="inputEmail" class="form-control" placeholder="Email address" v-model="username">
                  </div>

                  <div class="form-group">
                      <label for="inputPassword" class="sr-only">Password</label>
                      <input type="password" id="inputPassword" class="form-control" placeholder="Password" v-model="password">
                  </div>

                  <div class="form-group">
                      <button class="btn btn-lg btn-primary btn-block" @click="getLogin">Sign in</button>
                  </div>
              </form>
          </div>
      </div>
  </div>
</template>

<style>
    body {

    }
    .jumbotron {
        background-color:#eeee;
        margin-top: 50px
    }
</style>

<script>
import {mapState} from 'vuex'
export default {
  data () {
    return {
        username: 'jaidul26@gmail.com',
        password: '123456'
    };
  },
  computed: {
    ...mapState({
      userStore: state => state.userStore
    })
  },
  methods: {
    getLogin(e) {
        e.preventDefault();
        let self = this;
        const postData = {
            grant_type: 'password',
            client_id: config.clientId,
            client_secret: config.clientSecret,
            username: this.username,
            password: this.password
        };

         axios.post(config.baseUrl + 'oauth/token', postData)
          .then( (response) => {
              if(response.status === 200) {
                let authUser = {}
                authUser.access_token = response.data.access_token
                authUser.refresh_token = response.data.refresh_token
                window.localStorage.setItem('authUser', JSON.stringify(authUser))
                this.$store.dispatch('setUserObject', authUser)
                this.$router.push({name: 'dashboard'})
              }
          })
    }
  },
  mounted() {

  }
}
</script>
