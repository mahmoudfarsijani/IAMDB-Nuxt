 <template>
    <BaseCard tag="li" :is-col="true" class="w-[200px] h-[375px] overflow-hidden">
        <template #header>
            <div class="box-img h-[310px]">
                <BaseImg :src="srcImg" :alt="similars.original_title" class="h-full"/>
            </div>
        </template>
        <div class="body mt-[10px]">
            <h3 class="name whitespace-nowrap text-ellipsis overflow-hidden">
                {{ similars.original_title }}
            </h3>
            <div class="box-stars flex flex-nowrap mt-[5px]">
                <BaseIcon :name="voteNum >= item.count ? 'filled-star-s' : 'empty-star-s' " v-for="(item,index) in vote" :key="index"/>
            </div>
        </div>
    </BaseCard>
</template>

<script setup>
import VueTypes from 'vue-types';

const props = defineProps({

    similars: VueTypes.shape({
        id: VueTypes.number,
        original_title: VueTypes.string,
        poster_path: VueTypes.string,
        vote_average: VueTypes.number,
       
    })

})

const srcImg  = computed(() => {
        return `https://image.tmdb.org/t/p/w500/${props.similars.poster_path}`
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
        return Math.ceil(props.similars.vote_average)
    });
</script>  
 