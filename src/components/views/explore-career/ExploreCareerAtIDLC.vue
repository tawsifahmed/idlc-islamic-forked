<template>

  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image/>
    <!--    //page heading start-->
    <div class="container homePageTitleDetails sectionTitle">
      <!-- <h2 style="text-align: center; " class="h2Responsive ">
        {{ contentData.second_title }}
      </h2> --> <br>

      <h6 style="margin-top: unset;">{{ contentData.tagline }}</h6>
      <br>
      <br>
      <span v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->
    <app-why-works />
    <app-tab-content/>
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Explore-Career-at-IDLC',

  data() {
    return {
      contentData: [],
      shortcode: 'ExploreCareer',
    }
  },

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSliderImage: () => import('../../incudes/SliderStatic'),
    AppStaticImage: () => import('./StaticImage'),
    // AppTagline: () => import('./Tagline'),
    AppWhyWorks: () => import('./WhyWorks'),
    AppTabContent: () => import('./TabComponent'),
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
  mounted() {

  },updated(){

  }
}
</script>
<style scoped>

</style>
