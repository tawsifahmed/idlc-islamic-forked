
<template>
  <div>
<!--    <app-header />-->
<!--    <app-header-mobile />-->
<!--    <app-side-nav />-->

    <transition name="fade">
      <router-view />
    </transition>


<!--    <app-footer />-->
    <go-top></go-top>
  </div>
</template>
<style>


</style>

<script>
// import './assets/css/main.css';
// import './assets/css/custom.css';
import   './assets/js/jquery-1.11.0.min.js';
import './assets/js/jquery-migrate-1.2.1.min.js';
import './assets/js/script.js';

import GoTop from '@inotom/vue-go-top';
export default {
  name: 'App',
  components: {
    // AppHeaderMobile: () => import('./components/incudes/HeaderMobile'),
    // AppHeader: () => import('./components/incudes/Header'),
    // AppSideNav: () => import('./components/incudes/SideNav'),
    // AppSearchResult: () => import('./components/incudes/SearchResult'),
    // Loader: () => import('../src/components/incudes/Loader'),
    // AppFooter: () => import('./components/incudes/Footer'),

    GoTop

  },
  created() {

  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
