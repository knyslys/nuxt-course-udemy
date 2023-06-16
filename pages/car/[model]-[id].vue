<template>
  <!-- <NavBar /> -->
  <!-- car detail -->
  <!-- <div
    class="mx-auto mt-4 max-w-7xl space-y-4 xs:px-8 sm:px-10 lg:px-16 pb-16 w-3/5"
  > -->
  <!-- car hero -->
  <CarDetailHero
    :img="selectedCar.url"
    :carName="selectedCar.name"
    :features="selectedCar.features"
    :price="selectedCar.price"
  ></CarDetailHero>
  <!-- car hero -->

  <!-- car attributes -->
  <CarDetailAttributes :features="selectedCar.features" />
  <!-- car atributes -->

  <!-- car desc -->
  <CarDetailDesc :description="selectedCar.description" />
  <!-- car desc -->
  <!-- car contact -->
  <CarDetailContact />

  <!-- </div> -->
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
const { findCarById } = useCards();
useHead({
  title: toTitleCase(route.params.model),
});
const selectedCar = findCarById(route.params.id);

if (selectedCar === undefined) {
  throw createError({
    statusCode: 404,
    message: "Car not found",
  });
}

definePageMeta({ layout: "custom" });
</script>
