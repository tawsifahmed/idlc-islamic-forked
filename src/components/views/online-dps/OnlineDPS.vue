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
      <div v-html="contentData.description"></div>
    </div>
    <!--    //page heading end-->
    <app-eligibility-criteria />
    <!-- <app-categorized-product /> -->
    <!-- <app-deposit-calculator /> -->
    <!-- <div class="container p-4 text-center" style="font-size: 14px;">
      <p>This is an indicative amount. Tax, Excise duty will be applicable on the account as per Govt. regulation</p>
    </div> -->
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
          shortcode: 'OnlineDPS',
          isMobile: false,
          relatedProductData: [],
          contentData: "",
          faqTabName: 'Online DPS',
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
    AppEligibilityCriteria: () => import('./EligibilityCriteria'),
    // AppCategorizedProduct: () => import('./CategorizedProduct_01'),
    // AppDepositCalculator: () => import('../../partials/TDCalculator'),
    AppDepositCalculator: () => import('../calculators/DepositCalculator'),
    AppWHTab: () => import('./WHTab'),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),
    AppFooter: () => import('../../incudes/Footer'),

    // AppRelatedProduct: () => import('./RelatedProduct')

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
    },
  },
  created() {
    this.getHeaderContent();
    this.getRelatedProducts();
  }
}
</script>
<style scoped>

</style>
