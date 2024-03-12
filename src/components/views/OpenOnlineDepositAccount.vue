<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-cover-image />
    <div class="text-center" style="padding: 100px 30px">
        <h1>Open Online Deposit Account Page</h1>
    </div>
    <app-footer />

  </div>
</template>

<script>
export default {
  name: 'open-online-deposit-account',

  components: {
    AppHeaderMobile: () => import('../incudes/HeaderMobile'),
    AppHeader: () => import('../incudes/Header'),
    AppSideNav: () => import('../incudes/SideNav'),
    AppTopCurve: () => import('../incudes/TopCurve'),
    AppCoverImage: () => import('../incudes/CoverImage'),
    AppFooter: () => import('../incudes/Footer'),

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
