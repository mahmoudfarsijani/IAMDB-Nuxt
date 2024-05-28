<template>
    <div>
        <div v-if="details" class="row flex gap-[50px]">
            <div class="col">
                <div class="box-img w-[300px] overflow-hidden rounded-lg shadow-md shadow-gray-600">
                    <BaseImg :src="srcImg" :alt="details.title"/>
                </div>
            </div>
            <div class="col basis-[600px]   flex flex-col gap-[20px]">
                <h1 class="title text-black text-[45px]">
                    {{ details.title }}
                </h1>
                <p class="description text-black">
                    {{  details.overview }}
                </p>
                <div class="box-date flex flex-nowrap gap-[10px]">
                    <span>
                        Release:
                    </span>
                    <span>
                        {{ details.release_date }}
                    </span>
                </div>
                <div class="box-stars flex flex-nowrap gap-[3px] pt-[30px]">
                    <BaseIcon :name="voteNum >= item.count ? 'filled-star' : 'empty-star' " v-for="(item,index) in vote" :key="index"/>
                </div>
                <div class="box-btns flex flex-nowrap gap-[10px]">
                    <BaseButton :icon="`${isFav ?  'filled-heart':'empty-heart'}`" @click="addFav(details.id)"/>
                    <BaseButton icon="share"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import VueTypes from 'vue-types';
    import { useFav } from '~/stores/fav.js';

    const props = defineProps({
        details: VueTypes.shape({
            overview: VueTypes.string,
            original_title: VueTypes.string,
            vote_average: VueTypes.number,
            title: VueTypes.string,
            poster_path:  VueTypes.string,
            id: VueTypes.number,
            release_date: VueTypes.string,
            genres: VueTypes.array
        }),
        // cast: VueTypes.shape({
        //     name: VueTypes.string,
        //     original_name: VueTypes.string,
        //     profile_path: VueTypes.string,
        //     character: VueTypes.string
        // })
    })

    const { addFav,toggle } = useFav();

    const isFav = computed(() => useFav().toggle(props.details.id))

    const srcImg = computed(() => {
        return `https://image.tmdb.org/t/p/w500/${props.details.poster_path}`
    })

    const vote = [
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
        },
    ]

    const voteNum = computed(() => {
        return Math.ceil(props.details.vote_average)
    });


</script>