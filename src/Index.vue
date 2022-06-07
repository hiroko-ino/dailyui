<template>
  <p>Challenge list</p>
  <div v-for="[key, value] in pages" :key="value.challengeTitle">
    <router-link :to="{ name: key }">
      <span>Challenge {{ value.index }}</span>
      <span>{{ value.challengeTitle }}</span>
    </router-link >
  </div>
</template>

<script lang="ts">
import { pages } from './challenges';

export default {
  data: () => {
    return {
      pages
    }
  }
}
</script>

<style>

</style>
