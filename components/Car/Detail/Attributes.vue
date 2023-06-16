<template>
  <div class="mr-10 mt-5 border-b pb-5">
    <div>
      <p v-for="feature in features" class="flex">
        <span class="rounded text-lime-800 mr-3">✓</span>
        <span>{{ feature }}</span>
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  features: Array,
});
</script>
