<template>
  <component
    :is="tag"
    :class="['button', `button--${isIconOnly ? 'simple' : 'default'}`,elementClass]"
  >
    <slot v-if="!isIconOnly" />
    <BaseIcon v-if="icon" :name="icon" />
  </component>
</template>

<script setup>
import VueTypes from 'vue-types';

const props = defineProps({
    tag: VueTypes.oneOf(['button','span','a','NuxtLink']).def('button'),
    isIconOnly: VueTypes.bool.def(false),
    icon: VueTypes.string,
    isCenter: VueTypes.bool.def(false),
    isBetween: VueTypes.bool.def(false)
})

const elementClass = computed(() => ({
    'center': props.isCenter,
    'between': props.isBetween
}))
</script>

<style scoped>
.button {
  @apply cursor-pointer;
}

.button--simple {
  @apply flex justify-center items-center p-[10px];
}

.button--default {
  @apply flex flex-nowrap;
}

.center {
    @apply justify-center
}

.between {
    @apply justify-between
}
</style>
