
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
      <span class="product-description" v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->
    <app-categorized-product class="mb-5" />
    <app-EMICalculator/>

    <app-faq-tab/>

    <!-- <app-success-strories-button /> -->
    <app-footer />

  </div>
</template>

<script>

import axios from "axios";

export default {
  metaInfo: {
    title: 'Islamic Retail',
    meta: [
      { name: 'description', content: 'Apply for Small Business Loan, Women Entrepreneur Loan, SME Loan Online at flexible terms and interest rates' },
      { name: 'keywords', content: 'Financing Products, SME, Islamic Finance, Small Business, Loan, new business, Interest Rate, Eligibility, Criteria, Entreprenuer, business man, term loan, shop' },
    ]
  },
  name: 'Financing-Products',
  data() {
    return {
      shortcode: 'IslamicRetail',
      relatedProductData: [],
      isMobile: false,
      contentData: "",
      faqTabName: 'Islamic Corporate'

    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSlider: () => import('../../incudes/Slider'),
    // AppSuccessStroriesButton: () => import('./SuccessStroriesButton'),
    AppCategorizedProduct: () => import('../../partials/CategorizedProducts'),
    AppFaqTab: () => import('./TabComponent'),
    AppSuccessStory: () => import('./SuccessStory'),
    AppEMICalculator: () => import('../../partials/EMICalculator'),
    AppWHTab: () => import('./WHTab'),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),
    AppFooter: () => import('../../incudes/Footer'),

    // AppRelatedProduct: () => import('./RelatedProduct'),


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
  },
  mounted() {
    var scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js",
      "https://code.highcharts.com/stock/modules/data.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },

}
 // window.addEventListener("load", function(event) {
 //    JsLoadingOverlay.hide();
 //  });
</script>
<style scoped>
table tbody tr td {
      /* border: 1px solid #333; */
      padding: 10px;
  }


  .product-description{
    font-size: 14px;
  }
</style>

