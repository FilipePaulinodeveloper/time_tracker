<template>
  <div class="box formulario">
    <div class="columns">
      <div
        class="column is-5"
        role="form"
        aria-label="Formulário para criação para criação de uma nova tarefa"
      >
        <input
          type="text"
          class="input"
          placeholder="Qual a tarefa você deseja iniciar?"
          v-model = "descricao"
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
          <TemporizadorTask @aoTemporizadorFinalizado="salvarTarefa"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue';
import TemporizadorTask from './TemporizadorTask.vue';
import {useStore} from 'vuex';

import { key } from '@/store';

/* eslint-disable */
export default defineComponent({
  name: "FormuláriForm",
  emits:['aoSalvarTarefa'],
  components: {
    TemporizadorTask
  },
  data() {
    return {      
      descricao: '',
      idProjeto: ''
    }    
  },
  methods:{
    salvarTarefa (tempoDecorrido:number) : void  {                      
      console.log(this.idProjeto)
      this.$emit('aoSalvarTarefa', {
        duracaoEmSegundos:tempoDecorrido,
        descricao:this.descricao,
        projeto: this.projetos.find(proj => proj.id == this.idProjeto),                
      })
      this.descricao = ''
    }
  },
  setup() {
    const store = useStore(key)
    console.log(store)
    console.log("------------------")
    console.log(store.state.projetos)
    console.log("------------------")
    return {
      projetos: computed(() => store.state.projetos)
    }
    console.log(store.state.projetos)
  },
})

</script>

<style>
  .formulario{
    color:var(--texto-primario);
    background-color:var(--bg-primario);
  }
</style>