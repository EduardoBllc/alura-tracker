import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import TarefasView from "@/views/TarefasView.vue";
import ProjetosView from "@/views/ProjetosView.vue";
import FormularioProjeto from "@/views/Projetos/FormularioProjeto.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Tarefas",
    component: TarefasView,
  },
  {
    path: "/projetos",
    name: "Projetos",
    component: ProjetosView,
  },
  {
    path: "/projetos/novo",
    name: "Novo Projetos",
    component: FormularioProjeto,
  },
  {
    path: "/projetos/:id",
    name: "Editar Projeto",
    component: FormularioProjeto,
    props: true,
  },
];

const roteador = createRouter({
  history: createWebHashHistory(),
  routes: rotas,
});

export default roteador;
