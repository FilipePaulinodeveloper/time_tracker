import {createRouter,createWebHashHistory,RouteRecordRaw} from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/projetos/FormularioProject.vue'
const rotas: RouteRecordRaw[] = [

    {
        path: '/',
        name:'Tarefas',
        component:Tarefas   
    },
    {
        path: '/projetos',
        name:'ProjeTos',
        component:Projetos   
    },
    {
        path: '/projetos/novo',
        name:' Nome Projeto ',
        component:Formulario 
    },
    {
        path: '/projetos/id',
        name:' Editar Projeto ',
        component:Formulario 
    },
]

const roteador  = createRouter({
    history: createWebHashHistory(),
    routes:rotas
}) 

export default roteador;