<template>
  <div>
    <div>
      <slot></slot>
    </div>
    <div>
      <router-link :to="{ name: 'Home' }">Back to TOP</router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
