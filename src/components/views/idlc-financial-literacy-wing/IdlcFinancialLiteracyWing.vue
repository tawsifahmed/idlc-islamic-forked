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
    <h6 v-if="contentData.tagline">{{ contentData.tagline }}</h6>
    <span v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->

    <app-fin-initiatives />
    <app-material />
    <app-RelatedProduct />
    <app-footer />
    </div>
  </template>

<script>
import axios from "axios";

export default {
  name: "",
  data() {
    return {
      shortcode: "idlc_financial_literacy_wing",
      contentData: "",
      activityData: "",
      yearData: "",
      reportData: "",
      relatedProductData: [],
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/TopCurve"),
    AppSlider: () => import('../../incudes/Slider'),
    AppFinInitiatives: () => import("./IdlcFinLitIn"),
    AppMaterial: () => import("./materials.vue"),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),

    AppFooter: () => import("../../incudes/Footer")
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
      axios
        .get("get-page-content", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.contentData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    getActivityContent() {
      axios
        .get("get-csr-activity", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.activityData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },
    getYearContent() {
      axios
        .get("get-csr-year", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.yearData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },
    getReportContent() {
      axios
        .get("get-csr-report", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.reportData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getRelatedProducts();
  },
  mounted() {
    this.getActivityContent();
    this.getYearContent();
    this.getReportContent();
  },
  updated() {
    // this.loadsOff();
  }
};

</script>
  