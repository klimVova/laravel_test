import {createRouter, createWebHistory} from 'vue-router'


const routes = [
    {
        path: '/login', component: () => import('./components/Login.vue'),
        name: 'login',
    },
    {
        path: '/registration', component: () => import('./components/Registration.vue'),
        name: 'registration'
    },
    {
        path: '/persons', component: () => import('./components/Persons.vue'),
        name: 'persons'
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next)=>{
    const token = localStorage.getItem('x-xsrf-token')
    const role = localStorage.getItem('role')
    if (!token) {
        if (to.name === 'login' || to.name === 'registration') {
            return next()
        } else {
            return next({
                name: 'login'
            })
        }
    }
    if (to.name === 'login' || to.name === 'registration' && to.role === 0  &&  token) {
        return next({
            name: 'persons'
        })
    }
    next()
})


export default router
