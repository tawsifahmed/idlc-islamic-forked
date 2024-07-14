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

    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="header sectionTitle text-uppercase text-center">
              <h2 class="h2Responsive" style="margin-bottom: 30px;">PSR Table</h2>
            </div>
            <div v-html="depositPSR" style="overflow-x: auto;"></div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="header sectionTitle text-uppercase text-center">
              <h2 class="h2Responsive" style="margin-bottom: 30px;">Actual Previous Profits</h2>
            </div>
            <div v-html="depositPSR" style="overflow-x: auto;"></div>
          </div>
        </div>
      </div>
    </div>

    <app-deposit-calculator />
    <app-faq-tab />
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
  name: 'deposit-products',
  data() {
    return {
      shortcode: 'DepositProducts:',
      relatedProductData: [],
      isMobile: false,
      contentData: "",
      faqTabName: 'Deposit Products',
      depositPSR: null,
      depoPrevProfits: null,
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
    AppDepositCalculator: () => import("../calculators/DepositCalculator"),
    // AppWHTab: () => import('./WHTab'),
    AppFaqTab: () => import('./TabComponent'),
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

    getHeaderContent() {
      axios.get('get-page-content', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if (response.status == 200) {
          this.contentData = response.data.details;
        }
      }).catch(error => console.log(error));
    },
    getDepositPSR() {
      axios.get('deposite-page-asset').then((response) => {
        if (response.status == 200) {
          this.depositPSR = response.data.data.psr_table;
          this.depoPrevProfits = response.data.data.tabs;
          console.log('this.depositPSR', response);
        }
      }).catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getRelatedProducts();
    this.getDepositPSR();

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
.product-description {
  font-size: 14px;
}
</style>
