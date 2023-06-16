<template>
  <!-- cards cars -->
  <div class="w-full">
    <!-- card -->
    <CarCard v-for="car in cars" :key="car.id" :car="car" />
    <!-- card -->
  </div>
  <!-- cards cars -->
</template>
<script setup>
const { cars } = useCards();
</script>
