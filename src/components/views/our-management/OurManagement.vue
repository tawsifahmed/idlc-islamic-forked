<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image/>

    <div class="container  homePageTitleDetails sectionTitle">
      <!-- <h2 style="text-align: center; text-transform: uppercase;" class="h2Responsive ">
        {{ this.contentData.page_name }}
      </h2> -->
      <h6 style="margin-top: unset;">{{ contentData.tagline }}</h6>
      <p><span v-html="contentData.description"></span>
      </p>
    </div>
    <app-management-tab />
    <app-footer />
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Shariah-Supervisory-Committee',
  data() {
    return {
      shortcode: 'ShariahSupervisoryCommittee',
      contentData: [],
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppManagementTab: () => import('./ManagementTab'),
    AppStaticImage: () => import('./StaticImage'),
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
  },
  updated() {
    $( "#defaultOpen" ).trigger( "click" );
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
