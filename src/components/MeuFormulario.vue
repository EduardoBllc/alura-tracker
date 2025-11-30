<script lang="ts">
import { computed, defineComponent } from "vue";
import MeuTemporizador from "./MeuTemporizador.vue";
import type { ITarefa } from "@/interfaces/ITarefa";
import { useStore } from "@/store";

export default defineComponent({
  name: "MeuFormulario",
  data() {
    return {
      descricao: "",
      idProjeto: "",
    };
  },
  emits: ["aoSalvarTarefa"],
  components: {
    MeuTemporizador,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        descricao: this.descricao,
        tempo: tempoDecorrido,
        projeto: this.projetos.find((projeto) => projeto.id === this.idProjeto),
      } as ITarefa);

      this.descricao = "";
    },
  },
  setup() {
    const store = useStore();
    return {
      projetos: computed(() => store.state.projetos),
    };
  },
});
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricao"
        />
      </div>

      <div class="column is-3">
        <div class="select">
          <select v-model="idProjeto">
            <option value="">Selecione o projeto</option>
            <option
              :value="projeto.id"
              v-for="projeto in projetos"
              :key="projeto.id"
            >
              {{ projeto.nome }}
            </option>
          </select>
        </div>
      </div>

      <div class="column">
        <MeuTemporizador @aoTemporizadorFinalizado="finalizarTarefa" />
      </div>
    </div>
  </div>
</template>

<style>
.formulario {
  color: var(--texto-primario);
  background-color: var(--bg-primario);
}
</style>
