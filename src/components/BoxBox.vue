<template>
  <div class="box has-text-weight-bold" :style="estilos">
    <slot> </slot>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'; 
export default defineComponent ({
    name:'BoxBox',
    data() {
        return {
            estilos:{
                background : '#46bee2'
            }
        }
    }

})
</script>

<style scoped>
    /* .box{
        background:#46bee2;
    } */
</style>