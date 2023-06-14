<template>
  <div class="mt-32 flex">
    <CarSideBar />
    <NuxtPage />
  </div>
</template>

<script setup>
const route = useRoute();
const { toTitleCase } = useUtilities();
const capitalizeTitle = (str) => {
  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1);
  const title = `${firstLetter}${rest}`;
  return title;
};
useHead({
  title: `${
    route.params.make ? toTitleCase(route.params.city) : "Cars"
  } in ${toTitleCase(route.params.city)}`,
});
definePageMeta({ layout: "custom" });
</script>
