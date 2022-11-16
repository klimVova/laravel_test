<template>
 <div class="container">
     <form class=" w-25">
     <input v-model="email" class="form-control mb-3" type="email" placeholder="Email">
     <input v-model="password" class="form-control mb-3" type="password" name="password" placeholder="Password" autocomplete="on">
     <input @click.prevent="login" class="btn btn-primary" type="submit" value="Login">
     </form>
 </div>
</template>

<script>
export default {
    name: "Login",
    data(){
        return{
            email:null,
            password:null,
            role:null,
        }
    },
    mounted() {
    },
    methods:{
        login(){
            axios.get('/sanctum/csrf-cookie').then(response =>{
                axios.post('/login', {email:this.email, password:this.password})
                    .then(res=>{
                        localStorage.setItem('x-xsrf-token', res.config.headers['X-XSRF-TOKEN'])
                        this.$router.push({name:'persons'})
                    })
            })

        },

    }
}
</script>

<style scoped>

</style>
