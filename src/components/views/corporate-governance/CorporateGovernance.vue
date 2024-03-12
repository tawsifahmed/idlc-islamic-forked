<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-cover-image />
    <app-tagline />
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
  name: "Corporate-governance",
  data() {
    return {
      shortcode: "corporate_governance",
      contentData: ""
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/TopCurve"),
    AppCoverImage: () => import("../../views/corporate-governance/StaticImage"),
    AppTagline: () => import("../../views/corporate-governance/Tagline"),
    AppFinancialReportTab: () =>
      import("../../views/corporate-governance/ReportTab"),
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
    },
    getCorporateGovernanceData() {
      axios
        .get("get-corporate-governance-data")
        .then(response => {
          console.log(response);
          // if (response.status == 200) {
          //   this.contentData = response.data.details;
          // }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getCorporateGovernanceData();
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
