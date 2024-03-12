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
    <app-categorized-product/>
     <app-DPSCalculator />
    <app-WHTab />
    <app-RelatedProduct />
    <app-footer />

  </div>
</template>

<script>


import axios from "axios";

export default {
  name: 'Car-loan',
    data () {
        return {
          pageHeading: "",
          shortcode: 'DPS',
          relatedProductData: [],
          contentData: "",
          faqTabName: 'DPS',
          isMobile : false //initiate as false
        }
    },
  watch: {
      '$route' (to, from) {
          this.pageHeading = "Car Loan"
      }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/BlackTopCurve'),
    AppSlider: () => import('./Slider'),
    AppCategorizedProduct: () => import('./CategorizedProduct'),
    // AppDPSCalculator: () => import('./DPSCalculator'),
    AppDPSCalculator: () => import('./DPSCalculatorNew'),
    AppWHTab: () => import('./WHTab'),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),
    // AppRelatedProduct: () => import('./RelatedProduct'),
    AppFooter: () => import('../../incudes/Footer'),


  },
  methods: {
    getRelatedProducts() {
      axios.get('get-related-product', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if (response.status == 200) {
          this.relatedProductData = response.data.details;
        }
      }).catch(error => console.log(error));
    },

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
    this.getRelatedProducts();
  }
}
</script>
<style scoped>

</style>
