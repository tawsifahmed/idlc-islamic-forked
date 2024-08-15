<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-tagline />
    <app-expandable-form />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: "DownloadForms",

  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/SlimTopCurve"),
    AppTagline: () => import("./Tagline"),
    AppExpandableForm: () => import("./ExpandableForm"),
    AppFooter: () => import("../../incudes/Footer")
  },
  methods: {},
  created() {},
  mounted() {
    // this.$store.state.isLoading =false;
  },
  updated() {}
};
</script>
<style scoped></style>
