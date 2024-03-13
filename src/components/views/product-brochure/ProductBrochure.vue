<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <!-- <div class="text-center" style="padding: 100px 30px">
        <h1>Green Finance Page</h1>
    </div> -->
    <div class="homePageTitleDetails sectionTitle textToUperCase container" >
        <h2 style="text-align: center; " class="h2Responsive text-uppercase">
            Product Brochures
        </h2>
        <!-- <h6>{{ contentData.tagline }}</h6> -->
        <p>Being a financial institution, IDLC is in a much better position to promote sustainable business practices among its stakeholder groups, especially our clients and employees. As such, IDLC has always been keen to commit its resources not only to maximize its own profitability, but also to offer better quality of life to both its internal and external stakeholder groups. As part of this practice, IDLC is renewing its commitment to contribute towards greater environmental and social sustainability by undertaking a number of initiatives in various areas. Initially staring within our own organization, IDLC will eventually reach out to its external stakeholder groups as well.</p>
    </div>
    <app-brochure-tab/>
    <!-- <app-investor-relations-contact-info/> -->
  </div>
</template>

<script>
export default {
  name: 'Product-Brochure',

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    //   AppShareHoldersTab: () => import('../../views/financial-information-for-shareholders/ShareHoldersTabTab'),
    //   AppInvestorRelationsContactInfo: () => import('../../views/financial-information-for-shareholders/InvestorRelationsContactInfo'),
    AppBrochureTab: () => import('./BrochureTab')
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
  .homePageTitleDetails {
    margin-top: 20px;
  }
  .page-item.active .page-link {
    background-color: #00a6b4 !important;
    border-color: #00a6b4 !important;
}
.green-finance-initiative {
  padding-bottom: 30px;
}
@media screen and (max-width: 600px){
  .homePageTitleDetails p{
    padding: 20px;
  }

}
</style>
