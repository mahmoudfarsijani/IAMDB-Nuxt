<template>
    <div>
        <h1>
            {{ error.statusCode }}
        </h1>
        <p>
            {{ error.message }}
        </p>
    </div>
</template>

<script setup>
    import VueTypes from 'vue-types';

    defineProps({
        error: VueTypes.string
    })
</script>