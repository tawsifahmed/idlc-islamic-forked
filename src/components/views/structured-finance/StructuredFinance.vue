<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-slider />
    <!--    //page heading start-->
    <div class="container homePageTitleDetails sectionTitle">
      <h2 style="text-align: center; " class="h2Responsive ">
        {{ contentData.second_title }}
      </h2>
      <h6>{{ contentData.tagline }}</h6>
      <span v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->
    <app-categorized-product />
    <br>
<!--    <app-achivement></app-achivement>-->
    <br><br>
    <app-footer />

  </div>
</template>

<script>

  import axios from "axios";
export default {
  metaInfo: {
    title: 'Structured Finance - Project Financing, Syndication and Bonds | IDLC',
    meta: [
      { name: 'description', content: 'Learn about our project finance, the bond market and syndication. See achievements of Project management at IDLC Structured Finance' },
      { name: 'keywords', content: 'Structured Finance, project finance, project, project management, idlc projects, bonds, syndication' },
    ]
  },
    data () {
        return {
          isMobile : false,
          contentData: "",
          shortcode: 'StructuredLoan',
        }
    },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSlider: () => import('../../incudes/Slider'),
    // AppKeyFeatures: () => import('./KeyFeatures'),
    AppCategorizedProduct: () => import('./CategorizedProduct'),
    AppAchivement: () => import('./Achivement'),
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
    },

  },
  created() {
    this.getHeaderContent();
  }
}
 window.addEventListener("load", function(event) {
    JsLoadingOverlay.hide();
  });
</script>
<style scoped>

</style>
