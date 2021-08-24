<template>
  <div class="relative h-screen">
      <navigation></navigation>
      <router-view class="route-container w-full"></router-view>
      <footer class="flex-shrink-0">
        <app-footer></app-footer>
      </footer>
  </div>
</template>

<script>
import Navigation from '../components/global/Navigation';
import AppFooter from '../components/global/Footer';

export default {
    name: 'App',
    components: {
        Navigation,
        AppFooter
    }
}
</script>

<style>

</style>