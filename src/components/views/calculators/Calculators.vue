<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <!-- <app-static-image /> -->

    <div class="promotion-header">
      <div class="homePageTitleDetails sectionTitle dFTagline" >
        <div class="page_heading">
           <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                Calculators
            </h2>
        </div>

            <!-- <h6>{{ contentData.tagline }}</h6> -->

      </div>
    </div>
    <app-EMICalculator />
    <app-DepositCalculator />
  <div class="container p-4 text-center" style="font-size: 14px;">
      <p>This is an indicative amount. Tax, Excise duty will be applicable on the account as per Govt. regulation</p>
  </div>
<!--    <app-DPSCalculator />-->
    <app-footer />

  </div>
</template>

<script>
export default {
  name: 'promotions-and-campaigns-news-and-events',
  data() {
      return {
        shortcode: 'Calculators',
        modalShow1: false,
        modalShow2: false,
        modalShow3: false,
        modalShow4: false,
        modalShow5: false,
        modalShow6: false,
      }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/SlimTopCurve'),
    // AppDepositCalculator: () => import('../../partials/TDCalculator'),
    AppDepositCalculator: () => import('./DepositCalculator'),
    AppEMICalculator: () => import('../../partials/EMICalculator'),
    // AppDPSCalculator: () => import('../dps/DPSCalculator'),
    // AppStaticImage: () => import('../incudes/StaticImage'),
    AppFooter: () => import('../../incudes/Footer'),
  },
  methods: {

  },
  created() {
  },
  mounted() {
    // this.$store.state.isLoading =false;

  },updated(){

  }
}

</script>
<style scoped>


</style>

