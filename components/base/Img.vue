<template>
    <img :src="src" :alt="alt">
</template>

<script setup>
    import VueTypes from 'vue-types';

    defineProps({
        src: VueTypes.string,
        alt: VueTypes.string
    })
</script>