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
    <app-categorized-product />
    <app-deposit-rate-chart />
    <app-deposit-calculator />
    <div class="container p-4 text-center" style="font-size: 14px;">
      <p>
        This is an indicative amount. Tax, Excise duty will be applicable on the
        account as per Govt. regulation
      </p>
    </div>
    <app-w-h-tab />
    <app-related-product />
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title: "Deposit - Fixed deposit account, savings and investments | IDLC",
    meta: [
      {
        name: "description",
        content:
          "Enjoy high returns from your savings, by opening a deposit account and investing at IDLC from anywhere in Bangladesh"
      },
      {
        name: "keywords",
        content:
          "Deposit, Savings, Investment, Money, Fixed deposit, Account, Interest rate, bank, Investing"
      }
    ]
  },
  name: "SME-loan",
  data() {
    return {
      pageHeading: "",
      shortcode: "TermDeposit",
      relatedProductData: [],
      isVisible: false,
      contentData: "",
      footerContentData: "",
      rateTable: [],
      faqTabName: "Term Deposit"
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/BlackTopCurve"),
    AppSlider: () => import("../../incudes/Slider"),
    // AppSuccessStroriesButton: () => import('./SuccessStroriesButton'),
    AppCategorizedProduct: () => import("./CategorizedProduct"),
    AppDepositRateChart: () => import("./DepositRateChart"),
    // AppDepositCalculator: () => import('../../partials/TDCalculator'),
    AppDepositCalculator: () => import("../calculators/DepositCalculator"),

    AppWHTab: () => import("./WHTab"),
    AppRelatedProduct: () => import("../../partials/RelatedProduct"),
    AppFooter: () => import("../../incudes/Footer")

    // AppRelatedProduct: () => import('./RelatedProduct'),
  },
  methods: {
    getRelatedProducts() {
      axios
        .get("get-related-product", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.relatedProductData = response.data.details;
          }
        })
        .catch(error => console.log(error));
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

    getFooterContent() {
      axios
        .get("get-term-deposit-footer-content")
        .then(response => {
          if (response.status == 200) {
            this.footerContentData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },


    getRateTable() {
      axios
        .get("get-deposit-term", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.rateTable = response.data.details;
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getRelatedProducts();
    this.getRateTable();
    this.getFooterContent();
  }
};
</script>
<style scoped></style>
