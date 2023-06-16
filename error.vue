<template>
  <div class="flex min-h-screen items-center justify-center flex-col">
    <h1 class="text-9xl">{{ error.statusCode }}</h1>
    <span>{{ error.message }}</span>
    <button
      @click="goBack"
      class="rounded mt-7 text-2xl bg-blue-600 px-7 py-7 text-blue-500"
    >
      Go back
    </button>
  </div>
</template>

<script setup>
const error = useError();
const goBack = () => {
  clearError({
    redirect: "/",
  });
};
</script>
