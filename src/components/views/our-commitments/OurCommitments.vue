<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image/>

     <!--    //page heading start-->
    <div class="container sectionTitle pt-5 pb-5">
      <h2 class="h2Responsive text-center mb-3"  style="text-transform: uppercase;"> {{ this.contentData.second_title }} </h2>
      <p class="text-center shortDescription" v-html="this.contentData.description"> </p>
    </div>
    <!--    //page heading end-->
    <app-commitments />
    <app-footer />
  </div>
</template>

<script>

import axios from "axios";

export default {
  name: 'Our-Commitments',
  data() {
    return {
      shortcode: 'OurCommitment',
      contentData: null,
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    // AppManagementTab: () => import('./ManagementTab'),
    AppStaticImage: () => import('./StaticImage'),
    AppCommitments: () => import('./Commitments'),
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
          console.log(this.contentData);
        }
      }).catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
  },
  // updated() {
  //   $( "#defaultOpen" ).trigger( "click" );
  // }
}
</script>
<style scoped>
@media screen and (max-width: 600px){
  .topShape {
      max-height: 170px;
  }
}
</style>
