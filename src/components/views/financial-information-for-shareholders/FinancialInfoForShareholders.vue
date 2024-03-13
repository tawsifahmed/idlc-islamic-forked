<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-cover-image />
    <app-tagline />
    <app-share-holders-tab/>
    <app-evenet-calendar/>
    <app-faq/>
    <app-investor-information/>
    <app-investor-relations-contact-info/>



    <div class="container footer_button  text-center p-3" >
      <router-link to="/financial-reports"  class="tabcontent1Button">Financial Reports</router-link>
      <router-link to="/price-sensitive-information-and-notices"   class="tabcontent1Button">Price-Sensitive Information</router-link>
      <router-link :to="{ name: 'RegulatoryDisclosure', params: { id : 'rd'}}"  class="tabcontent1Button">Regulatory Disclosures</router-link>
      <router-link to="/our-management"  class="tabcontent1Button">Our Governance</router-link>
    </div>

    <app-footer />
  </div>
</template>

<script>


import axios from "axios";

export default {
  name: 'SME-loan',
  data() {
    return {
      shortcode: 'FinancialInformation',
      contentData: "",
      investorRelationData:"",
      isVisible:false
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppCoverImage: () => import('../../views/financial-information-for-shareholders/StaticImage'),
    AppTagline: () => import('../../views/financial-information-for-shareholders/Tagline'),
    AppShareHoldersTab: () => import('../../views/financial-information-for-shareholders/ShareHoldersTabTab'),
    AppEvenetCalendar: () => import('./EvenetCalendar'),
    AppFaq: () => import('./Faq'),
    AppInvestorInformation: () => import('./InvestorInformation'),
    AppInvestorRelationsContactInfo: () => import('./InvestorRelationsContactInfo'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  methods: {
    getHeaderContent(){

      axios.get('get-page-content', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if(response.status == 200){
          this.contentData = response.data.details;
        }
      }).catch(error => console.log(error));

    },
    getInvestorRelation(){
      axios.get('investor-relation-contact',{
        params: {
          shortcode:'Home'
        }
      }).then((response) => {
        if(response.status == 200){
          this.investorRelationData = response.data.details;
        }
      }).catch(error => console.log(error));
    },
  },
  created() {
    this.getHeaderContent();
    this.getInvestorRelation();

    let recaptchaScript = document.createElement('script')
    recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
    document.head.appendChild(recaptchaScript)

    let recaptchaVueScript1 = document.createElement('script')
    recaptchaVueScript1.setAttribute('src', 'https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js')
    document.head.appendChild(recaptchaVueScript)

  },

  updated() {
  },
}
</script>
<style scoped>

  .footer_button{
    margin-top: 20px;
    display: flex;
    justify-content: center;
  }
  .footer_button .tabcontent1Button{
    outline: none;
    border: 2px solid #00a6b4;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin-bottom: 10px;
    text-decoration: none;
    color: inherit;
  }
  .footer_button .tabcontent1Button:not(:last-child){
    margin-right: 20px;
  }

  .footer_button .tabcontent1Button:hover{
    text-decoration: none;
    color: #ffffff;
    background-color: #00a6b4;
  }
  @media screen and (max-width: 600px){
    .footer_button{
      flex-wrap: wrap;
      justify-content: space-around;
    }
    .footer_button .tabcontent1Button{
      margin: 0 10px 10px 0;
    }

    /* .footer_button .tabcontent1Button:not(:last-child){
      margin-right: 0px;
    } */
  }

  @media screen and (max-width: 600px){
  .topShape {
      max-height: 170px;
  }
}
ul{
  list-style: none !important;
}
</style>
