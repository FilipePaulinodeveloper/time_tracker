<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do projeto
                </label>
                <input 
                 type="text"
                 class="input" 
                 v-model="nomeDoProjeto"
                 id="nomeDoProjeto"
                />
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { defineComponent, computed } from "vue";


export default defineComponent (
{
     name: "FormularioProject",

     data() {
        return {
            nomeDoProjeto:'',            
        }
     },
     methods:{
        salvar() {
            this.store.commit('ADICIONA_PROJETO',this.nomeDoProjeto)           
            this.nomeDoProjeto = ''
            this.$router.push('/projetos')
        }        
     },
     setup(){
        const store = useStore()
        return{
            store,
            projetos: computed(()=> store.state.projetos)
        }
     }
})
</script>

<style scoped>
.projetos{
    padding: 1.25rem;
}

</style>