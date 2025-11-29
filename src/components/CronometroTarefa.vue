<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "CronometroTarefa",
  props: {
    tempoEmSegundos: {
      type: Number,
      required: true,
    },
  },
  computed: {
    tempoDecorrido(): string {
      return new Date(this.tempoEmSegundos * 1000)
        .toISOString()
        .substring(11, 19);
    },
  },
});
</script>

<template>
  <section class="display">
    <strong>{{ tempoDecorrido }}</strong>
  </section>
</template>

<style scoped>
.display strong {
  color: var(--texto-primario);
}
</style>
