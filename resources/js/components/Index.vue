<template>
    <div class="container ">
        <ul class="nav nav-pills">
            <li class="nav-item">
                <router-link v-if="token" :to="{name:'persons'}" class="nav-link ">Main</router-link>
            </li>
            <li class="nav-item">
                <router-link v-if="!token" :to="{name:'login'}" class="nav-link ">Login</router-link>
            </li>
            <li class="nav-item">
                <router-link v-if="!token" :to="{name:'registration'}" class="nav-link"> Registration</router-link>
            </li>
            <li class="nav-item">
                <a v-if="token" @click.prevent="logout" href="#" class="nav-link">Logout</a>
            </li>
        </ul>
        <router-view  :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: "Index",
    data(){
        return{
            token:null,
        }
    },

    methods:{
        getToken(){
            this.token=localStorage.getItem('x-xsrf-token')

        },
        logout(){
            axios.post('/logout')
            localStorage.removeItem('x-xsrf-token')
            this.$router.push({name:'login'})
        }
    },
    mounted() {
        this.getToken()
    },
    updated() {
        this.getToken()
    },

}
</script>

<style scoped>

</style>
