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
      <h6 >{{ this.contentData.tagline }}</h6>
      <p><span v-html="this.contentData.description"></span>
      </p>
    </div>

    <app-achievement-tab />
    <app-footer />




  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'our-achivement',
  data() {
    return {
      shortcode: 'OurAchievement',
      contentData: "",
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppTagline: () => import('./AchivementTagline'),
    AppAchievementTab: () => import('./AchievementTab'),
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
  mounted() {

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
