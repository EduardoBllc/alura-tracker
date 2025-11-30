<script lang="ts">
import { defineComponent } from "vue";
import MeuFormulario from "@/components/MeuFormulario.vue";
import MinhaTarefa from "@/components/MinhaTarefa.vue";
import type { ITarefa } from "@/interfaces/ITarefa";
import CaixaTarefa from "@/components/CaixaTarefa.vue";

export default defineComponent({
  name: "TarefasView",
  components: {
    MeuFormulario,
    MinhaTarefa,
    CaixaTarefa,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
    };
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {
      this.tarefas.push(tarefa);
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
</template>
