<template>
  <BaseCard tag="li" :is-col="false" class="  h-[300px] overflow-hidden gap-[30px] p-[20px]">
    <template #header>
      <div class="box-img h-full w-[180px] rounded-lg overflow-hidden ">
        <BaseImg :src="srcImg" :alt="movies.original_title" class="w-full h-full object-cover"/>
      </div>
    </template>
    <div class="body flex flex-col gap-[15px]">
        <h2 class="title text-[25px]">
            {{ movies.title }}
        </h2>
        <p class="subtitle h-[120px] overflow-hidden">
            {{ movies.overview }}
        </p>
        <div class="box-sta flex flex-nowrap gap-[5px]">
          <BaseIcon :name="vote >=  item.count ? 'filled-star' :  'empty-star'  " v-for="(item,index) in numbStar" :key="index"/>
        </div>
    </div>
  </BaseCard>
</template>

<script setup>
    import VueTypes from 'vue-types';

    const props = defineProps({
        movies: VueTypes.shape({
            title: VueTypes.string,
            original_title: VueTypes.string,
            vote_average: VueTypes.number,
            poster_path: VueTypes.string,
            id: VueTypes.number,
            overview: VueTypes.string
        })
    })

    const srcImg  = computed(() => {
        return `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`
    })

    const numbStar = [
      {
        count:2
      },
      {
        count:4
      },
      {
        count:6
      },
      {
        count:8
      },
      {
        count:10
      }
    ]

    const vote = computed(() => {
      return Math.ceil(props.movies.vote_average)
    })
</script>
