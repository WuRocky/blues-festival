<script setup></script>

<template>
  <nav
    class="w-[95%] max-w-screen-xl mx-auto h-14 px-4 flex items-center justify-between bg-blue-600 text-white rounded-xl shadow-sm backdrop-blur transition-all duration-300"
  >
    <h1 class="text-xl font-semibold">Blues Festival 2026</h1>
    <div class="flex gap-3">
      <UButton to="/" variant="ghost" color="white">{{ $t('home') }}</UButton>
      <UButton to="/info" variant="ghost" color="white">{{ $t('info') }}</UButton>
      <UButton to="/register" color="white" icon="i-heroicons-arrow-right-20-solid">
        {{ $t('register') }}
      </UButton>
      <UButton to="/schedule" variant="ghost" color="white">{{ $t('schedule') }}</UButton>
      <UButton to="/competitions" variant="ghost" color="white">{{ $t('competitions') }}</UButton>
      <UButton to="/teachers" variant="ghost" color="white">{{ $t('teachers') }}</UButton>
      <UButton to="/about" variant="ghost" color="white">{{ $t('about') }}</UButton>
    </div>
  </nav>
</template>

<style scoped></style>
