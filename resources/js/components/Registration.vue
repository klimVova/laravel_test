<template>
    <div class="container">
        <form class=" w-25">
            <input v-model="name" class="form-control mb-3" type="text" placeholder="Name">
            <input v-model="email" class="form-control mb-3" type="email" placeholder="Email">
            <input v-model="password" class="form-control mb-3" type="password" placeholder="Password" autocomplete="on">
            <input v-model="password_confirmation" class="form-control mb-3" type="password" placeholder="Password_confirmation" autocomplete="on">
            <input @click.prevent='registration' class="btn btn-primary" type="submit" value="Registration">
        </form>
    </div>
</template>

<script>
export default {
    name: "Registration",
    data(){
        return{
            name:null,
            email:null,
            password:null,
            password_confirmation:null
        }
    },
    methods:{
        registration(){
            axios.get('/sanctum/csrf-cookie').then(response =>{
                axios.post('/register', {name:this.name, email:this.email, password:this.password, password_confirmation:this.password_confirmation})
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
