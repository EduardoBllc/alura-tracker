<script lang="ts">
import { defineComponent, PropType } from "vue";
import CronometroTarefa from "./CronometroTarefa.vue";
import { ITarefa } from "@/interfaces/ITarefa";
import CaixaTarefa from "./CaixaTarefa.vue";

export default defineComponent({
  name: "MinhaTarefa",
  components: {
    CronometroTarefa,
    CaixaTarefa,
  },
  props: {
    tarefa: {
      type: Object as PropType<ITarefa>,
      required: true,
    },
  },
});
</script>

<template>
  <CaixaTarefa>
    <div class="columns">
      <div class="column is-7">
        {{ tarefa.descricao || "Descrição não informada" }}
      </div>

      <div class="column">
        <CronometroTarefa :tempoEmSegundos="tarefa.tempo" />
      </div>
    </div>
  </CaixaTarefa>
</template>
