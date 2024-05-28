<template>
  <div class="mt-[100px]">
    <BaseContainer>
      <button @click="back" class="bg-gray-300 px-[10px] py-[6px] rounded-md capitalize">go back</button>
      <div class="row">
        <div  class="col w-full mt-[50px]">
          <BaseRow tag="ul" :is-col="false" class="w-full justify-between flex-wrap gap-[25px]">
            <MainCardFavs v-for="(item,index) in dataMovie"  :key="index" :movies="item"/>
          </BaseRow>
        </div>
      </div>
    </BaseContainer>
    
  </div>
</template>

<script setup>
import { useFav } from "~/stores/fav.js";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const dataMovie = ref([]);
//option for GET Method API
const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};

//find list fav
const listIds = computed(() => {
  if (process.client) {
    return useFav().favList;
  }
  return "No Data!";
});

//fetch Data
const fetchData = async (id) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}`,
      options
    );
    dataMovie.value.push( await response.data) 
    console.log(dataMovie.value)
    
    // console.log(dataMovie.value.backdrop_path);
  } catch (e) {
    console.log(e);
  }
};



//convert to array and get value
const arr = Object.entries(listIds.value).map((i) => i[1]);
const findId = () => {
  return [...arr].map((i) => fetchData(i));
};



const back = () => {
  router.back(-1);
};

onMounted(() => {
  findId();
});
setPageLayout("menu-movies");
</script>
