<script lang="ts">
import { defineComponent } from "vue";
import BarraLateral from "./components/BarraLateral.vue";

export default defineComponent({
  name: "App",
  components: {
    BarraLateral,
  },
  data() {
    return {
      temaEscuroAtivo: false,
    };
  },
  methods: {
    trocarTema(temaEscuroAtivo: boolean) {
      this.temaEscuroAtivo = temaEscuroAtivo;
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
      <RouterView />
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
