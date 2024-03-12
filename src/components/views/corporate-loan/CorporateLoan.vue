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

    <!-- <app-key-features /> -->
    <app-categorized-product />
    <!-- <app-get-in-touch-button /> -->
    <br><br>
    <app-footer />


  </div>
</template>

<script>


import axios from "axios";

export default {
  metaInfo: {
    title: 'Corporate Loan - Term Loan, Project Financing, Lease, Commercial Financing | IDLC',
    meta: [
      { name: 'description', content: 'Learn about IDLCs corporate services, loans, syndications, financing, interest rates for business expansion or new project' },
      { name: 'keywords', content: 'Corporate Loan, Business Loan, Term Loan, Project Management, Lease, Working Capital, Commercial Space, Commercial Vehicle' },
    ]
  },
  name: 'Corporate-loan',
    data () {
        return {
          isMobile : false,
          contentData: "",
          shortcode: 'CorporateLoan',
        }
    },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSlider: () => import('../../incudes/Slider'),
    AppCategorizedProduct: () => import('../../partials/CategorizedProducts'),
    AppFooter: () => import('../../incudes/Footer'),

    // AppGetInTouchButton: () => import('./GetInTouchButton'),
    isMobile: false

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
</script>
<style scoped>

</style>
