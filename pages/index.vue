<template>
  <div>
    <BaseContainer>
      <div class="row flex justify-center items-center min-h-screen">
        <div class="col flex flex-col gap-[40px]">
          <h1 class="title text-[40px] text-black uppercase text-center">
            iamdb for me
          </h1>
          <MainForm @submitData="findData" />
        </div>
      </div>
    </BaseContainer>
    <BaseContainer>
      <div v-if="dataFetched" class="row w-full mt-[50px]">
        <BaseRow tag="ul" class="flex flex-col w-full flex-wrap gap-[20px]">
          <NuxtLink
            v-for="item in dataFetched"
            :key="item.id"
            :to="`/movies/${item.id}`"
            class="w-full hover:shadow-xl transition-all duration-500"
          >
            <MainCardMovies :movies="item" />
          </NuxtLink>
        </BaseRow>
      </div>
    </BaseContainer>
  </div>
</template>

<script setup>
import axios from "axios";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZTg3ZTg0ODZlMDEyMzk0MmQ5ZjUyNzU2MWFiMjQ3OCIsInN1YiI6IjY1ZjZjMzFhZDhmNDRlMDE3YzUwMzM3MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-zJNixL2MLgqbhe-0wAVXI3b77AJ1b9aRMmU1ptF5LQ",
  },
};

const dataFetched = ref([]);
const findData = (d) => {
  fetchData(d);
};

const fetchData = async (i) => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${i}`,
      options
    );
    return (dataFetched.value = await response.data.results);
  } catch (e) {
    console.log(e);
  }
};

setPageLayout('default')

</script>
 
