<script lang="ts">
import { computed, defineComponent } from "vue";
import { useStore } from "@/store";

export default defineComponent({
  name: "FormularioProjeto",
  props: {
    id: {
      type: String,
    },
  },
  mounted() {
    if (this.id) {
      const projeto = this.store.state.projetos.find(
        (proj) => proj.id === this.id,
      );

      if (projeto) {
        this.nomeProjeto = projeto.nome;
      }
    }
  },
  data() {
    return {
      nomeProjeto: "",
    };
  },
  setup() {
    const store = useStore();
    return {
      store,
    };
  },
  methods: {
    salvar() {
      if (this.id) {
        this.store.commit("ALTERA_PROJETO", {
          id: this.id,
          nome: this.nomeProjeto,
        });
      } else {
        this.store.commit("ADICIONA_PROJETO", this.nomeProjeto);
      }
      this.nomeProjeto = "";
      this.$router.push("/projetos");
    },
  },
});
</script>

<template>
  <section class="projetos">
    <h1 class="title">Projetos</h1>

    <form @submit.prevent="salvar">
      <div class="field">
        <label for="nome-projeto" class="label"> Nome do Projeto </label>
        <input type="text" class="input" v-model="nomeProjeto" />
      </div>

      <div class="field">
        <button class="button">Salvar</button>
      </div>
    </form>
  </section>
</template>

<style scoped>
.projetos {
  padding: 1.25rem;
}
</style>
