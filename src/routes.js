import Cadastro from './components/shared/cadastro/cadastro.vue'
import Home from './components/home/home.vue'

export const routes = [
    {path: '', component: Home},
    {path: '/cadastro', component: Cadastro}
];