<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image/>

    <div class="container homePageTitleDetails sectionTitle">
      <!-- <h2 style="text-align: center; " class="h2Responsive ">
        {{ contentData.second_title }}
      </h2> -->
      <h6 style="margin-top: unset">{{ contentData.tagline }}</h6>
      <div v-html="contentData.description"></div>
    </div>

    <app-stories/>
    <app-footer />

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'sme-success-stories',

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppStaticImage: () => import('./StaticImage'),
    AppStories: () => import('./Stories'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  data() {
    return {
      contentData: '',
      shortcode: 'SuccessStory',
    }
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
  },

}
 window.addEventListener("load", function(event) {
    JsLoadingOverlay.hide();
  });
</script>
<style scoped>
@media screen and (max-width: 600px){
  .topShape {
      max-height: 170px;
  }
}
</style>
