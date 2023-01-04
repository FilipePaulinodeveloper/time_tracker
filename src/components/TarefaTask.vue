<template>
    <BoxBox>
        <div class="columns">
          <div class="column is-7">
             {{tarefa.descricao || 'Tarefa sem Descrição'}}
          </div>
          <div class="column">            
              <CronometroTask :tempoEmSegundos="tarefa.duracaoEmSegundos"/>
          </div>
        </div>
    </BoxBox>
   
</template>

<script lang="ts">
import { defineComponent , PropType} from "vue";
import CronometroTask from "./CronometroTask.vue";
import ITarefa from "@/Interfaces/ITarefa";
import BoxBox from "./BoxBox.vue"



export default defineComponent({ 
    name:'TarefaTask',

    components:{
        CronometroTask,
        BoxBox
    },
    props:{
        tarefa:{
            type: Object as PropType<ITarefa>,
            required:true
        }
    }

})
</script>


