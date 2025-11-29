<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BarraLateral",
  emits: ["aoAlterarTema"],
  data() {
    return { modoEscuroAtivo: false };
  },
  computed: {
    textoBotao(): string {
      return this.modoEscuroAtivo
        ? "Desativar tema escuro"
        : "Ativar tema escuro";
    },
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo;
      this.$emit("aoAlterarTema", this.modoEscuroAtivo);
    },
  },
});
</script>

<template>
  <header>
    <h1>
      <img src="../assets/logo.png" alt="Logo do Alura Tracker" />
    </h1>

    <button class="button" @click="alterarTema">{{ textoBotao }}</button>
  </header>
</template>

<style scoped>
header {
  text-align: center;
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
