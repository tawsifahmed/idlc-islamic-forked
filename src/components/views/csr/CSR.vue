<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image />
    <app-tagline />
    <app-csr-content />
    <app-csr-initiatives />

    <div class="container annualSustainabilityReportButtons">
      <a
        class=" btn btn-danger annualSustainabilityReportButton mb-4"
        target="_blank"
        href="https://idlc.com/sustainability-report/"
        >Annual Sustainability Report</a
      >
    </div>
    <!--    <app-annual-sustainability-report/>-->
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "csr",
  data() {
    return {
      shortcode: "csr",
      contentData: "",
      activityData: "",
      yearData: "",
      reportData: ""
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/TopCurve"),
    AppStaticImage: () => import("./StaticImage"),
    AppTagline: () => import("./Tagline"),
    AppCsrContent: () => import("./CsrContent"),

    AppCsrInitiatives: () => import("./CsrInitiatives"),
    AppAnnualSustainabilityReport: () => import("./AnnualSustainabilityReport"),
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
            console.log('contentData =>', this.contentData)
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
            console.log('yearData =>', this.yearData)
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
<style scoped>
.annualSustainabilityReportButtons {
  margin: auto;
  text-align: center;
}

.annualSustainabilityReportButton {
  border: 2px solid #fff;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 100px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-decoration: none;
  /*color: #dc3545;*/
  color: #fff;
  display: inline-block;
  text-align: center;
}
.annualSustainabilityReportButton:hover {
  color: #dc3545;
  background: #fff;
  border: 2px solid #dc3545;
}
@media screen and (max-width: 600px) {
  .topShape {
    max-height: 170px;
  }
}
</style>
