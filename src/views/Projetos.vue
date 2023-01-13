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
import { defineComponent } from "vue";
import IProjeto from '../interfaces/projeto'

export default defineComponent (
{
     name: "ProjeTos",

     data() {
        return {
            nomeDoProjeto:''
        }
     },
     methods:{
        salvar() {
            const Projeto : IProjeto = {
                nome:this.nomeDoProjeto,
                id: new Date().toISOString
            }
        }
     }
})
</script>

<style>

</style>