<template>
    <BaseCard v-if="cast" tag="li" :is-col="false" class="w-[200px] gap-[20px] h-[80px] items-center">
        <template #header>
            <div class="box-img w-[60px] h-[60px] overflow-hidden rounded-full">
                <BaseImg :src="srcImg" :alt="cast.name" class="w-full h-full object-cover"/>
            </div>
        </template>
        <div class="body">
            <h3 class="name text-black">
                {{ cast.name }}
            </h3>
        </div>
    </BaseCard>
</template>


<script setup>
    import VueTypes from 'vue-types';

    const props = defineProps({
        cast: VueTypes.shape({
            name: VueTypes.string,
            original_name: VueTypes.string,
            profile_path: VueTypes.string,
            character: VueTypes.string
        })
    })


    const srcImg  = computed(() => {
        return `https://image.tmdb.org/t/p/w500/${props.cast.profile_path}`
    })

</script>