<script lang="ts">
import { defineComponent } from "vue";
import MeuFormulario from "./components/MeuFormulario.vue";
import BarraLateral from "./components/BarraLateral.vue";
import MinhaTarefa from "./components/MinhaTarefa.vue";
import type { ITarefa } from "@/interfaces/ITarefa";
import CaixaTarefa from "./components/CaixaTarefa.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
    MeuFormulario,
    MinhaTarefa,
    CaixaTarefa,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      temaEscuroAtivo: false,
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
    },
    trocarTema(temaEscuroAtivo: boolean) {
      this.temaEscuroAtivo = temaEscuroAtivo;
    },
  },
  computed: {
    finalizouTarefas(): boolean {
      return this.tarefas.length > 0;
    },
  },
});
</script>

<template>
  <main
    class="columns is-gapless is-multitine"
    :class="{ 'modo-escuro': temaEscuroAtivo }"
  >
    <div class="column is-one-quarter">
      <BarraLateral @aoAlterarTema="trocarTema" />
    </div>

    <div class="column is-three-quarter conteudo">
      <MeuFormulario @aoSalvarTarefa="salvarTarefa" />

      <div class="lista">
        <MinhaTarefa
          :tarefa="tarefa"
          v-for="(tarefa, index) in tarefas"
          :key="index"
        />

        <CaixaTarefa v-if="!finalizouTarefas">
          Você não está muito produtivo hoje :(
        </CaixaTarefa>
      </div>
    </div>
  </main>
</template>

<style>
.lista {
  padding: 1.5rem;
}

main {
  --bg-primario: #fff;
  --texto-primario: #000;
}

main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd;
}

.conteudo {
  background-color: var(--bg-primario);
}
</style>
