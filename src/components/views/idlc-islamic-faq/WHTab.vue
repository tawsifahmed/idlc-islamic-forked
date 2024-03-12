<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />

    <div class="homePageTitleDetails sectionTitle dFTagline">
      <div class="page_heading">
        <h2 style="text-align: center; " class="h2Responsive textUpperCase">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      </div>
    </div>
    <div class="container">
      <app-tab-content/>

    </div>
    <app-footer />
  </div>
</template>

<script>
export default {
  name: 'faq',

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/SlimTopCurve'),
    AppCoverImage: () => import('../../incudes/CoverImage'),
    AppTabContent: () => import('./TabComponent'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  methods: {

  },
  created() {
  },
  mounted() {
    // this.$store.state.isLoading =false;
  },

}
</script>

<style scoped>

</style>
