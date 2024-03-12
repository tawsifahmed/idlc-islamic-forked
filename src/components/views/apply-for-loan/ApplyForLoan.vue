<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <!-- <app-cover-image /> -->
    <!-- <div class="text-center" style="padding: 100px 30px">
        <h1>Apply For Loan Page</h1>
    </div> -->
    <div class="homePageTitleDetails sectionTitle " style="color: #fff;">
      <h2 style="text-align: center; " class="h2Responsive textUpperCase">
        Apply For Loan
      </h2>
      <!-- <h6>{{ contentData.tagline }}</h6> -->
      <p>Apply for loan from our wide ranges of products</p>
    </div>
    <!-- <div class="im_files">

      <a href="./static/Service_Request_Form_1.pdf" target="_blank">Service Request Form for Deposit Product</a>
      <a href="./static/Service_Request_Form_2.pdf" target="_blank">Service Request Form for Loan & Others</a>
    </div> -->
    <app-product-tab />
    <app-footer />
  </div>
</template>

<script>
export default {
  name: "Apply-for-Loan",

  components: {
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHeader: () => import("../../incudes/Header"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppTopCurve: () => import("./TopCurve"),
    // AppCoverImage: () => import('../../incudes/CoverImage'),
    AppProductTab: () => import("../../views/apply-for-loan/ProductTab"),
    // AppStepFormValidation: () => import('./'),
    AppFooter: () => import("../../incudes/Footer")
  },
  methods: {},
  mounted() {
    // this.$store.state.isLoading =false;
  }
};
</script>
<style scoped>
.im_files {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}
.im_files a {
  color: #fff;
  font-size: 14px;
  cursor: pointer;
  padding: 5px 10px;
  border: 2px solid #fff;
  border-radius: 100px;
  margin-bottom: 10px;
  background-color: #d62e2f;
  transition: all 0.3s;
}
.im_files a:hover {
  border: 2px solid #333;
  background-color: #333;
  text-decoration: none;
}
.dFTagline {
  color: #fff;
  height: 380px;
  padding: 130px 0 0px 0;
}
@media screen and (max-width: 600px) {
  .dFTagline {
    color: #fff;
    height: 215px;
    padding: 30px 0 0px 0;
  }

  .im_files {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: -70px;
    margin-top: 50px;
  }
}
</style>
