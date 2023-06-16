<template>
  <div class="mt-10">
    <img :src="img" alt="" class="w-full" />
    <h1 class="mt-10 text-4xl">{{ props.carName }}</h1>
    <div class="flex text-slate-500 text-lg mt-3 border-b pb-5 justify-between">
      <div class="flex">
        <CarDetailFeatures v-for="feature in features" :feature="feature" />
      </div>
      <div>
        <p class="font-bold text-2xl">{{ props.price }}$</p>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  carName: String,
  features: Array,
  img: String,
  price: String,
});
</script>
