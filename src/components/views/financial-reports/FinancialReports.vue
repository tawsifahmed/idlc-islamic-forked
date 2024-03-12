<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-cover-image />
    <app-tagline />
    <app-stock-information />
    <app-financial-report-tab />
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  metaInfo: {
    title:
      "Financial Reports & Disclosures - Annual and Quarterly Reports and Analysis | IDLC",
    meta: [
      {
        name: "description",
        content:
          "View Annual Reports, Quarterly Reports, Financial Data, Analysis and Statistics. See all reports of IDLC Finance."
      },
      {
        name: "keywords",
        content:
          "IDLC Investor Relations, Annual Reports, Finance, Statistics, Investor, Information, Dividend, Governance"
      }
    ]
  },
  name: "financial-reports",
  data() {
    return {
      shortcode: "financial_report",
      contentData: ""
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/TopCurve"),
    AppCoverImage: () => import("../../views/financial-reports/StaticImage"),
    AppTagline: () => import("../../views/financial-reports/Tagline"),
    AppStockInformation: () =>
      import("../../views/financial-reports/StockInformation"),
    AppFinancialReportTab: () => import("./FinancialReportTab"),
    AppFooter: () => import("../../incudes/Footer")
  },
  methods: {
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
    }
  },
  created() {
    this.getHeaderContent();
  }
};
</script>
<style scoped>
@media screen and (max-width: 600px) {
  .topShape {
    max-height: 170px;
  }
}
</style>
