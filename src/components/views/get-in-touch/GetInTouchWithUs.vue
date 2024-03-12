<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <!-- <app-tagline/> -->
    <app-form/>
    <app-footer />

  </div>
</template>

<script>
export default {
  name: 'get-in-touch',

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    // AppTagline: () => import('../../partials/test/Tagline'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppForm: () => import('../../views/get-in-touch/Form'),
    
    AppFooter: () => import('../../incudes/Footer'),

  },

  data() {
    return {

    }
  },
  methods: {

  },

  created() {
  },
  mounted() {
    // this.$store.state.isLoading =false;

  },updated(){

  }
}

</script>
<style scoped>

</style>
