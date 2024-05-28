<template>
    <component :is="tag" :class="['card',`card--${isCol ? 'col' : 'row'}`]">
        <div v-if="$slots.header">
            <slot name="header"/>
        </div>
        <slot/>
        <div v-if="$slots.footer">
            <slot name="footer"/>
        </div>
    </component>
</template>

<script setup>
    import VueTypes from 'vue-types';
     defineProps({
        tag: VueTypes.string.def('div'),
        isCol:  VueTypes.bool.def(false)
     })
</script>


<style scoped>
    .card {
        @apply rounded flex 
    }

    .card--col {
        @apply flex-col
    }

    .card--row {
        @apply flex-row
    }
</style>