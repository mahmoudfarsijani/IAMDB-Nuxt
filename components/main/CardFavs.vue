<template>
  <BaseCard v-if="movies" tag="li" :is-col="true" class="w-[300px] gap-[10px] overflow-hidden" >
    <template #header>
      <div class="box-img">
        <BaseImg :src="srcImg" :alt="movies.title" />
      </div>
    </template>
    <div class="body">
      <h3 class="title whitespace-nowrap text-ellipsis overflow-hidden">
        {{ movies.title }}
      </h3>
      <div class="box-stars flex flex-nowrap gap-[3px] pt-[5px]">
        <BaseIcon :name="voteNum >= item.count ? 'filled-star-s' : 'empty-star-s' " v-for="(item,index) in vote" :key="index"/>
      </div>
    </div>
  </BaseCard>
</template>

<script setup>
import VueTypes from "vue-types";

const props = defineProps({
  movies: VueTypes.shape({
    id: VueTypes.number,
    original_title: VueTypes.string,
    poster_path: VueTypes.string,
    vote_average: VueTypes.number,
    title: VueTypes.string
  }),
});

const srcImg = computed(() => {
  return `https://image.tmdb.org/t/p/w500/${props.movies.poster_path}`;
});

const vote = [
  {
    count: 2,
  },
  {
    count: 4,
  },
  {
    count: 6,
  },
  {
    count: 8,
  },
  {
    count: 10,
  },
];

const voteNum = computed(() => {
  return Math.ceil(props.movies?.vote_average);
});
</script>
