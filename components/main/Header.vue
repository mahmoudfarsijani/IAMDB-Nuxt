<template>
  <header :class="['py-[20px] transition-all duration-300',`${showNavbar ? 'bg-transparent px-[80px] ' : 'bg-slate-200 px-[50px] '}`]">
    <nav class="flex justify-between">
      <NuxtLink to="/"> Log Comp</NuxtLink>
      <BaseRow tag="ul" class="flex gap-[20px] capitalize">
        <li>
          <NuxtLink to="/" active-class="active"> home </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/movies/fav"  active-class="active"> favorits </NuxtLink>
        </li>
      </BaseRow>
      <div>search box</div>
    </nav>
  </header>
</template>

<script setup>
const showNavbar = ref(true);
const scrollHandler = () => {
  const scrollTop = window.scrollY;

  if (scrollTop > 5) {
    // Scroll down, hide navbar
    showNavbar.value = false;
  } else {
    // Scroll up or at the top, show navbar
    showNavbar.value = true;
  }
};
onMounted(() => {
  window.addEventListener("scroll", scrollHandler);
});

onUnmounted(() => {
  window.removeEventListener("scroll", scrollHandler);
});
</script>


<style scoped>
  .active {
    @apply text-gray-500
  }
</style>
