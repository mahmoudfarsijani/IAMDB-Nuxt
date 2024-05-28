<template>
  <div v-if="dataMovie">
    <BaseContainer class="pt-[200px]">
      <div class="row flex">
        <MainBoxDetails :details="dataMovie" class="basis-[1100px]" />
        <div>
          <BaseRow tag="ul" :is-col="true" class="gap-[10px]">
            <MainBoxCast
              v-for="(item, index) in limitCast"
              :key="index"
              :cast="item"
            />
          </BaseRow>
          <BaseButton
            :is-icon-only="false"
            tag="button"
            icon="more"
            class="bg-white rounded-full items-center shadow-md mt-[30px] transition-all duration-300 hover:shadow-sm px-[10px] py-[7px]"
            @click="showMore"
          >
            {{ titleBtn }}
          </BaseButton>
      
        </div>
      </div>
    </BaseContainer>
    <BaseContainer class="mt-[200px]">
      <h2 class="title-similar text-[45px] capitalize">similare</h2>
    </BaseContainer>
    <div class="similar-box mt-[50px] px-[10px]">
      <BaseRow tag="ul" :is-col="false" class="gap-[20px] overflow-scroll">
        <NuxtLink v-for="item in dataSimilar" :key="item.id" :to="`/movies/${item.id}`">
          <MainCardSimilar :similars="item"/>
        </NuxtLink>
      </BaseRow>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { slice } from "lodash";




import { useRoute } from "vue-router";

const dataMovie = ref(null);
const dataCast = ref([]);
const route = useRoute();
const isShow = ref(false);
const dataSimilar = ref([]);

const moiveId = computed(() => {
  return route.params.id;
});

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};

const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${moiveId.value}`,
      options
    );
    return (dataMovie.value = await response.data);
    // console.log(dataMovie.value.backdrop_path);
  } catch (e) {
    console.log(e);
  }
};

const fetchCast = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${moiveId.value}/credits`,
      options
    );
    dataCast.value = response.data.cast;
  } catch (e) {
    console.log(e);
  }
};

const fetchSimilar = async () => {
  try{
    const response = await axios.get(`https://api.themoviedb.org/3/movie/${moiveId.value}/similar`,options);
    dataSimilar.value = await response.data.results
  } catch(e){
    console.log(e);
  }
}

const showMore = () => {
  isShow.value = !isShow.value;
};

const limitCast = computed(() => {
  if (!isShow.value) {
    return slice(dataCast.value, 0, 4);
  } else if (isShow.value) {
    return slice(dataCast.value, 0, 9);
  }
});

const titleBtn = computed(() => {
  if (!isShow.value) {
    return "More";
  }
  return "Less";
});

onMounted(() => {
  fetchData()
  fetchCast()
  fetchSimilar()
});
setPageLayout("menu-movies");
</script>
