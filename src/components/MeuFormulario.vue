<script lang="ts">
import { defineComponent } from "vue";
import MeuTemporizador from "./MeuTemporizador.vue";
import type { ITarefa } from "@/interfaces/ITarefa";

export default defineComponent({
  name: "MeuFormulario",
  data() {
    return {
      descricaoTarefa: "",
    };
  },
  emits: ["aoSalvarTarefa"],
  components: {
    MeuTemporizador,
  },
  methods: {
    finalizarTarefa(tempoDecorrido: number): void {
      this.$emit("aoSalvarTarefa", {
        descricao: this.descricaoTarefa,
        tempo: tempoDecorrido,
      } as ITarefa);

      this.descricaoTarefa = "";
    },
  },
});
</script>

<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-8"
        role="form"
        aria-label="Formulário para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual tarefa você deseja iniciar?"
          v-model="descricaoTarefa"
        />
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
