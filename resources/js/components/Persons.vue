<template>
    <div>
        <table class="table table-dark">
            <thead>
            <tr>
                <th scope="col">№</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Role</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="user in users">
                <th scope="row">{{user.id}}</th>
                <td>{{user.name}}</td>
                <td>{{user.email}}</td>
                <td>{{user.role}}</td>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: "Persons",
    data() {
        return {
        users:null
        }

    },
    mounted() {
        this.getPerson()
    },
    methods: {
        getPerson() {
            axios.get('/api/admin/')
                .then(res => {
                    this.users = res.data.data
                    console.log(res.data.data);
                })
        },
    }
}
</script>

<style scoped>

</style>
