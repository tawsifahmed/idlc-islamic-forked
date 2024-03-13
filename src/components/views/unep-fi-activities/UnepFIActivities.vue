<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image />
    <app-detail-and-video />
    <app-categorized-product :productData="productData" />
    <app-initiative-content />
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UnepFiActivities",
  data() {
    return {
      shortcode: "unep-fi-activities",
      contentData: "",
      productData: [],
      relatedProductData: [],
      isMobile: false
    };
  },
  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("../../incudes/TopCurve"),
    AppStaticImage: () => import("./StaticImage"),
    AppDetailAndVideo: () => import("./DetailAndVideo"),
    AppInitiativeContent: () => import("./InitiativeComponent"),
    AppCategorizedProduct: () => import("./CategorizedProduct"),
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
          if (response.data.code == 200) {
            this.contentData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },
    getProducts() {
      axios
        .get("get-unep-fi-activities", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          console.log('response =>', response)
          if (response.data.code == 200) {
            this.productData = response.data.details;
            
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getProducts();
  }
};
</script>
<style scoped>
.page-item.active .page-link {
  background-color: #00a6b4 !important;
  border-color: #00a6b4 !important;
}
.green-finance-initiative {
  padding-bottom: 30px;
}
@media screen and (max-width: 600px) {
  .homePageTitleDetails p {
    padding: 20px;
  }
}
@media screen and (max-width: 600px) {
  .topShape {
    max-height: 170px;
  }
}
</style>
