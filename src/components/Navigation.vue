<template>
    <div>
        <nav v-if="userStore.authUser != null && userStore.authUser.access_token" class="navbar navbar-default">
            <div class="container-fluid">
                <!-- Brand and toggle get grouped for better mobile display -->
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span class="sr-only">Toggle navigation</span>
                    </button>
                    <a class="navbar-brand" href="#">Brand</a>
                </div>

                <!-- Collect the nav links, forms, and other content for toggling -->
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul class="nav navbar-nav">
                        <li><router-link :to="{name: 'user.get'}">Users</router-link></li>
                        <li><a>Post</a></li>
                    </ul>

                    <ul class="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li class="dropdown">
                            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Logout <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li><a id="logout" @click="getLogout">Logout</a></li>
                            </ul>
                        </li>
                    </ul>
                </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
        </nav>
    </div>
</template>

<style>
    #logout {
        cursor: pointer
    }
</style>

<script>
import {mapState} from 'vuex'
export default {
    computed: {
        ...mapState({
            userStore: state => state.userStore
        })
    },
    methods: {
        getLogout() {
           this.$store.dispatch('clearAuthUser')
           window.localStorage.removeItem('authUser')
           this.$router.push({name: 'login'})
        }
    },
    mounted() {

    }
}
</script>
