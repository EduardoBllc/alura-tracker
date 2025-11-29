<script lang="ts">
import { defineComponent } from "vue";
import CronometroTarefa from "./CronometroTarefa.vue";
import BotaoTemporizador from "./BotaoTemporizador.vue";

export default defineComponent({
  name: "MeuTemporizador",
  data() {
    return {
      tempoEmSegundos: 0,
      cronometo: 0,
      cronometroRodando: false,
    };
  },
  emits: ["aoTemporizadorFinalizado"],
  methods: {
    iniciarTarefa() {
      this.cronometo = setInterval(() => {
        this.tempoEmSegundos++;
      }, 1000);

      this.cronometroRodando = true;
    },
    finalizarTarefa() {
      clearInterval(this.cronometo);
      this.$emit("aoTemporizadorFinalizado", this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
      this.cronometroRodando = false;
    },
  },
  components: {
    CronometroTarefa,
    BotaoTemporizador,
  },
});
</script>

<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <CronometroTarefa :tempoEmSegundos="tempoEmSegundos" />

    <BotaoTemporizador
      @clicado="iniciarTarefa"
      :desabilitado="cronometroRodando"
      texto="start"
      icone="fas fa-play"
    />

    <BotaoTemporizador
      @clicado="finalizarTarefa"
      :desabilitado="!cronometroRodando"
      texto="stop"
      icone="fas fa-stop"
    />
  </div>
</template>
