<template>
  <div>
    <app-header />
      <app-header-mobile />
      <app-side-nav />
      <app-top-curve />
    <div class="promotion-header">
      <div class="homePageTitleDetails sectionTitle dFTagline">
        <div class="page_heading">
          <h2 style="text-align: center; " class="h2Responsive textUpperCase">
<!--            Feedback And Complaint Cell-->
          </h2>
        </div>
        <!--        <p>If you have invested your part in IDLC, it is now our aim to make it easier for you to know the ins and outs-->
        <!--          of the stock-market updates.</p>-->
      </div>
    </div>
    <div class="productFeatures container mb-4 mt-4">
      <div class="mb-4 p-4 card lead font-weight-bold ">As per online loan eligibility checker, your loan application is found
        to be ineligible for next level of assessment. However, you can visit your nearest IDLC Branch or call 16409
        for more information
      </div>
      <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : 'PersonalLoan'}}"  class="button btnBack ">Back to loan page</router-link>

    </div>
    <app-footer />
  </div>

</template>


<script>
  export default {
    name: "WarningMessage",
    components: {
      AppHeaderMobile: () => import('../incudes/HeaderMobile'),
      AppHeader: () => import('../incudes/Header'),
      AppSideNav: () => import('../incudes/SideNav'),
      AppTopCurve: () => import('../incudes/SlimTopCurve'),
      AppFooter: () => import('../incudes/Footer'),

    },
  }
</script>

<style scoped>

  .btnBack {
    outline: none;
    border: 2px solid #d62e2f !important;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-decoration: none;
    color: inherit;
    display: inline-block;
    margin: auto;
    margin-right: 10px;
  }

  .btnBack:hover {
    outline: none;
    border: 2px solid #d62e2f !important;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
    margin: auto;
    margin-right: 10px;
    background: #d62e2d;
  }

</style>
