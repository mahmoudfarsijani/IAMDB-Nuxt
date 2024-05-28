<template>
    <component :is="tag" :class="['list',`list--${isCol ? 'col' : 'row'}`]">
        <slot/>
    </component>
</template>

<script setup>
    import VueTypes from 'vue-types';

    defineProps({
        tag: VueTypes.string.def('div'),
        isCol: VueTypes.bool.def(false)
    })
</script>


<style scoped>
    .list {
        @apply flex 
    }

    .list--col {
        @apply flex-col
    }

    .list--row {
        @apply flex-row
    }
</style>