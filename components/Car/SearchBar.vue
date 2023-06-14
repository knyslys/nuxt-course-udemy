<template>
  <!-- search -->
  <div
    class="font-serif w-[1000px] text-2xl rounded-full bg-white flex justify-between overflow-hidden drop-shadow-md"
  >
    <input
      type="text"
      placeholder="Search by city"
      class="py-3 px-5 w-full text-2xl rounded-full focus:outline-none"
      :class="inputClass"
      v-model.trim="city"
    />
    <button class="bg-sky-500 px-10 text-white" @click="handleSearch">
      Search
    </button>
  </div>
  <!-- search -->
</template>

<script setup>
const city = ref("");
const cityError = ref(false);
const handleSearch = () => {
  if (!city.value) {
    cityError.value = true;
    return;
  }
  navigateTo(`/city/${city.value}/car`);
  cityError.value = false;
};

const inputClass = computed(() => {
  if (cityError.value) {
    setTimeout(() => {
      cityError.value = false;
    }, 3000);
    return "error";
  }
});
</script>

<style scoped>
.error {
  transition: 0.5s border linear;
  border: 1px solid rgb(255, 77, 77);
}
</style>
