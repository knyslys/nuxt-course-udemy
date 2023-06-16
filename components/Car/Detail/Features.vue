<template>
  <p class="mr-2">{{ feature }} |</p>
</template>

<script setup>
const props = defineProps({
  feature: String,
});
</script>

<style scoped></style>
