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
      <span class="product-description" v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->
    <app-categorized-product class="mb-5" />

    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="header sectionTitle text-uppercase text-center">
              <h2 class="h2Responsive" style="margin-bottom: 30px;">PSR Table</h2>
            </div>
            <div v-html="depositPSR" style="overflow-x: auto;"></div>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div>
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="header sectionTitle text-uppercase text-center">
              <h2 class="h2Responsive" style="margin-bottom: 30px;">Actual Previous Profits</h2>
            </div>
            <pre>{{depoPrevProfits}}</pre>
            <div class="row filterOptions">
              <div class="col-md-12"  v-for="(tabData, index) in depoPrevProfits"   :key="tabData.id">
                <b-card  class="product-card py-3" style="background-color: #00a6b4;">
                  <a  v-b-toggle="'annualReportcollapse' + index" block class="d-flex px-2 text-decoration-none cursor-pointer">
                    <strong class="question_product" style="color:white; font-size: 1.25rem;">Actual Previous Profits
                    </strong>
                    <!-- replace these with your preferred icons -->
                    <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                    <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                  </a>
                  <b-collapse v-bind:id="'annualReportcollapse' + index">
                    <b-card class="question-card d-flex flex-row">
                      <a v-b-toggle.collapse-home-loan-1 block>
                        <div class="row">
                          <div class="col-12">
                            <ul class="all-report">
                              <li class="" style="" v-if="tabData.file">
                                <a :href="tabData.file" download target="_blank">
                                  <div class="f_icon">
                                    <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                                  </div>
                                  <div class="title">
                                    <h6>{{tabData.title}}</h6>
                                  </div>
                                  <div class="download-icon" style="padding: 5px 32px;">
                                    <div class="d_icon"></div>
                                  </div>
                                </a>
                              </li>
                              <li class="" style="" v-if="tabData.file">
                                <a :href="tabData.file" download target="_blank">
                                  <div class="f_icon">
                                    <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                                  </div>
                                  <div class="title">
                                    <h6>{{tabData.title}}</h6>
                                  </div>
                                  <div class="download-icon" style="padding: 5px 32px;">
                                    <div class="d_icon"></div>
                                  </div>
                                </a>
                              </li>
                            </ul>
                          </div>

                        </div>
                        <!-- replace these with your preferred icons -->
                        <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                        <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                      </a>
                    </b-card>
                  </b-collapse>

                </b-card>
              </div>
          </div>
          </div>
        </div>
      </div>
    </div>

    <app-deposit-calculator />
    <app-faq-tab />
    <!-- <app-e-m-i-calculator/> -->
    <!-- <app-common-w-h-tab/> -->
    <!-- <app-related-product/> -->

    <app-footer />


  </div>
</template>

<script>
import axios from "axios";


export default {
  metaInfo: {
    title: 'Islamic Deposits',
    meta: [
      { name: 'description', content: 'Islamic Deposits' },
      { name: 'keywords', content: 'Islamic Deposits, IDLC Islamic, Financing Products, Islamic Finance, Interest Rate' },
    ]
  },
  name: 'deposit-products',
  data() {
    return {
      shortcode: 'DepositProducts:',
      relatedProductData: [],
      isMobile: false,
      contentData: "",
      faqTabName: 'Islamic Deposits',
      depositPSR: null,
      depoPrevProfits: null,
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppSlider: () => import('../../incudes/Slider'),
    AppCategorizedProduct: () => import('../../partials/CategorizedProducts'),
    AppEMICalculator: () => import('../../partials/EMICalculator'),
    AppDepositCalculator: () => import("../calculators/DepositCalculator"),
    // AppWHTab: () => import('./WHTab'),
    AppFaqTab: () => import('./TabComponent'),
    AppCommonWHTab: () => import('../../partials/CommonWHTab'),
    AppRelatedProduct: () => import('../../partials/RelatedProduct'),
    AppFooter: () => import('../../incudes/Footer'),


  },
  methods: {
    getRelatedProducts() {
      axios.get('get-related-product', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if (response.status == 200) {
          this.relatedProductData = response.data.details;
        }
      }).catch(error => console.log(error));
    },

    getHeaderContent() {
      axios.get('get-page-content', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if (response.status == 200) {
          this.contentData = response.data.details;
        }
      }).catch(error => console.log(error));
    },
    getDepositPSR() {
      axios.get('deposite-page-asset').then((response) => {
        if (response.status == 200) {
          this.depositPSR = response.data.data.psr_table;
          this.depoPrevProfits = response.data.data.tabs;
          console.log('this.depositPSR', response);
        }
      }).catch(error => console.log(error));
    }
  },
  created() {
    this.getHeaderContent();
    this.getRelatedProducts();
    this.getDepositPSR();

  },
  mounted() {
    var scripts = [
      "https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js",
      "https://code.highcharts.com/stock/modules/data.js"
    ];
    scripts.forEach(script => {
      let tag = document.createElement("script");
      tag.setAttribute("src", script);
      document.head.appendChild(tag);
    });
  },

}
</script>
<style scoped>
.product-description {
  font-size: 14px;
}


.all-report {
  width: 100%;
display: flex;
justify-content: flex-start;
flex-wrap: wrap;
}
.all-report li{
flex-basis: 15% !important;
flex-shrink: 0;
flex-grow: 0;
margin-left: 20px;

}
.all-report_q {
justify-content: center;
}
.all-report_q li {
flex-basis: 10% !important;
}
@media screen and (max-width: 600px){
.all-report {
justify-content: space-around;
flex-wrap: wrap;
}
.all-report li{
flex-basis: 35% !important;
margin-left: 0px;
}
.all-report_q {
justify-content: space-around;
}
.all-report_q li {
flex-basis: 35% !important;
}
}
.all-report_q li:first-child {
margin: 0 !important;
}
.all-report li > a{
display: block;
width: 100%;
}
.all-report li > a .f_icon{
background: #eeeeee;
padding: 15px;
border-radius: 100px;
transition: all 0.3s;
}
.all-report li > a .title{
height: 60px;
overflow: hidden;
}
.all-report li > a .title{
text-align: center;
}
.all-report li > a:hover .f_icon{
background: #8bdce4;
}
.all-report li > a > .f_icon img{
width: 100%;
}
.all-report li > a .d_icon{
height: 30px;
width: 30px;
margin: auto;
background-image: url("./../../../assets/img/financial-report/download-icon-02.png");
background-size: contain;
}
.all-report li > a:hover .d_icon{
background-image: url("./../../../assets/img/financial-report/download-icon-01.png");
}
</style>
