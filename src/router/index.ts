import { createRouter, createWebHistory } from 'vue-router'
import Index from '../views/Index.vue'
import CreateProduto from '../views/CreateProduto.vue'
import EditProduto from '../views/EditProduto.vue'
import ShowProduto from '../views/ShowProduto.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/produtos',
        name: 'Index',
        component: Index
    },
    {
        path: '/produtos/create',
        name: 'Create',
        component: CreateProduto
    },
    {
        path: '/produtos/:id/edit',
        name: 'Edit',
        component: EditProduto
    },
    {
        path: '/produtos/:id',
        name: 'Show',
        component: ShowProduto
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },

];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;