<template>
    <div>
        <form @submit.prevent="submitHandle">
            <div :class="['flex w-[500px] bg-gray-300 overflow-hidden rounded-md relative h-[48px] shadow-xl transition-all duration-300',`${isToggle ? 'w-[700px]' : 'w-[500px]'}`]" @click.stop="clicked">
                <input v-model="dataInput" class="w-full px-[10px] text-[18px] outline-none"/>
                <BaseButton type="submit" :is-icon-only="true"  icon="search" class="absolute right-[10px] "/>
            </div>
        </form>
    </div>
</template>


<script setup>
    const dataInput = ref('')

    const emits = defineEmits(['submitData'])

    const submitHandle = () => {
        emits('submitData',dataInput.value)

        dataInput.value  =''
    }


    const isToggle = ref(false)
    const clicked = () => {
        isToggle.value = !isToggle.value
    }
</script>