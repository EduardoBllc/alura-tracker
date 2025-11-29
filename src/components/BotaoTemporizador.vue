<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BotaoTemporizador",
  emits: ["clicado"],
  props: {
    texto: {
      type: String,
      required: true,
    },
    desabilitado: {
      type: Boolean,
      required: true,
    },
    icone: {
      type: String,
      required: true,
    },
  },
  methods: {
    clicado(): void {
      this.$emit("clicado");
    },
  },
});
</script>

<template>
  <button class="button" @click="clicado" :disabled="desabilitado">
    <span class="icon">
      <i :class="icone"></i>
    </span>

    <span>{{ texto }}</span>
  </button>
</template>
