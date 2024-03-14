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

    <app-categorized-product class="mb-5" />
    <!-- <app-e-m-i-calculator/> -->
    <!-- <app-common-w-h-tab/> -->
    <!-- <app-related-product/> -->
    <app-footer />


  </div>
</template>

<script>
import axios from "axios";


export default {
  metaInfo: {
    title: 'Deposit Products',
    meta: [
      { name: 'description', content: 'Deposit Products' },
      { name: 'keywords', content: 'Deposit Products, IDLC Islamic, Financing Products, Islamic Finance, Interest Rate' },
    ]
  },
  name: 'Home-loan',
  data() {
    return {
      shortcode: 'DepositProducts:',
      relatedProductData: [],
      isMobile : false,
      contentData: "",
      faqTabName: 'Deposit Products'
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSlider: () => import('../../incudes/Slider'),
    AppCategorizedProduct: () => import('../../partials/CategorizedProducts'),
    AppEMICalculator: () => import('../../partials/EMICalculator'),
    // AppWHTab: () => import('./WHTab'),
    AppCommonWHTab: () => import('../../partials/CommonWHTab'),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),
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
</script>
<style scoped>

</style>
