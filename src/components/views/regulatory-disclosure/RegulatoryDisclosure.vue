<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image />
    <app-tagline />
    <app-tabbed-panel />
    <app-footer />

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "RegulatoryDisclosure.vue",
  data() {
    return {
      shortcode: 'RegulatoryDisclosure',
      contentData: "",
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppStaticImage: () => import('../../views/regulatory-disclosure/StaticImage'),
    AppTagline: () => import('../../views/regulatory-disclosure/Tagline'),
    AppTabbedPanel: () => import('../../views/regulatory-disclosure/TabbedPanel'),
    AppFooter: () => import('../../incudes/Footer'),


  },
  methods: {
    getHeaderContent(){

      axios.get('get-page-content', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if(response.status == 200){
          this.contentData = response.data.details;
        }
      }).catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
  }
}
</script>
<style scoped>
  @media screen and (max-width: 600px){
  .topShape {
      max-height: 170px;
  }
}
</style>
