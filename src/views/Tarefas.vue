<template>    
     
    <FormularioForm @aoSalvarTarefa="salvarTarefa"/>
    <div class="lista">        
        <TarefaTask v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa"/>
        <BoxBox v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </BoxBox>
    </div>     
   
   
</template>
   
   <script lang="ts">
   import { defineComponent } from 'vue';   
   import BoxBox from '../components/BoxBox.vue';
   import FormularioForm from '../components/FormularioForm.vue';
   import TarefaTask from '../components/TarefaTask.vue';
   import ITarefa from '../Interfaces/ITarefa'
   
   export default defineComponent({
     name: 'App',   
   
     components:{       
       FormularioForm,
       TarefaTask,
       BoxBox
   },
     data() {
       return {
         tarefas: [] as ITarefa[] ,         
       };
     },
   
     computed: {
       listaEstaVazia(): boolean {
         return this.tarefas.length === 0 
       }
     },
     methods:{
       salvarTarefa(tarefa:ITarefa) : void
       {
           this.tarefas.push(tarefa);
       },    
     }
   
   });
   </script>   

   