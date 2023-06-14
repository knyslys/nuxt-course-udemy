<template>
  <!-- <NavBar /> -->
  <!-- car detail -->
  <!-- <div
    class="mx-auto mt-4 max-w-7xl space-y-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  > -->
  <!-- car hero -->
  <CarDetailHero />
  <!-- car hero -->

  <!-- car attributes -->
  <CarDetailAttributes />
  <!-- car atributes -->

  <!-- car desc -->
  <CarDetailDesc />
  <!-- car desc -->
  <!-- car contact -->
  <CarDetailContact />
  <!-- </div> -->
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();

useHead({
  title: toTitleCase(route.params.model),
});

definePageMeta({ layout: "custom" });
</script>
