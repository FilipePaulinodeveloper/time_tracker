import IProjeto from "@/Interfaces/IProjeto";
import { InjectionKey } from "vue";
import {createStore, Store }from "vuex"

interface Esatado {
    projetos: IProjeto[];
}

export const key:InjectionKey<Store<Esatado>> = Symbol()

export const store = createStore<Esatado>({
    state: {
        projetos :{
            id: new Date().toISOString,
            nome: "Teste"
        }
    }
})