import { IProjeto } from "@/interfaces/IProjeto";
import { InjectionKey } from "vue";
import { createStore, Store, useStore as vuexUseStore } from "vuex";

interface Estado {
  projetos: IProjeto[];
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export const store = createStore<Estado>({
  state: {
    projetos: [],
  },
  mutations: {
    ADICIONA_PROJETO(state, nomeProjeto: string) {
      const projeto = {
        id: new Date().toISOString(),
        nome: nomeProjeto,
      } as IProjeto;

      state.projetos.push(projeto);
    },
    ALTERA_PROJETO(state, projetoAlterado: IProjeto) {
      const indice = state.projetos.findIndex(
        (projeto) => projeto.id === projetoAlterado.id,
      );

      state.projetos[indice] = projetoAlterado;
    },
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key);
}
