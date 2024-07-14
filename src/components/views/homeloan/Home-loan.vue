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
                <b-card  class="product-card" style="background-color: #00a6b4;">
                  <a  v-b-toggle="'annualReportcollapse' + index" block class="d-flex">
                    <strong class="question_product" style="color:white; font-size: 1.25rem;">2024</strong>
                    <!-- replace these with your preferred icons -->
                    <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                    <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                  </a>
                  <b-collapse v-bind:id="'annualReportcollapse' + index">
                    <b-card class="question-card">
                      <a  v-b-toggle.collapse-home-loan-1 block>
                        <div class="row">
                          <div class="col-md-2" >
                            <img :src="tabData.image" width="100%" alt="" v-if="tabData">
                          </div>
                          <div class="col-md-2 text-btn"  >
                            <h6 class="annual_report_heading" v-if="tabData.title" >{{tabData.title}}</h6>
                            <a :href="tabData.file" class="footer_button2" download target="_blank" v-if="tabData.title">Download</a>
                          </div>

                          <div class="col-md-8">
                            <ul class="all-report float-right">
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
                              <li class="" style=""  v-if="tabData.title">
                                <a :href="tabData.file" download target="_blank">
                                  <div class="f_icon">
                                    <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                                  </div>
                                  <div class="title">
                                    <h6>{{tabData.title}}</h6>
                                  </div>
                                  <div class="download-icon" style="padding: 5px 32px;">
                                    <div class="d_icon"></div>
                                  </div>
                                </a>
                              </li>
                              <li class="" style="" v-if="tabData.report_three_title">
                                <a :href="tabData.report_three_file" download target="_blank">
                                  <div class="f_icon">
                                    <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                                  </div>
                                  <div class="title">
                                    <h6>{{tabData.report_three_title}}</h6>
                                  </div>
                                  <div class="download-icon" style="padding: 5px 32px;">
                                    <div class="d_icon"></div>
                                  </div>
                                </a>
                              </li>
                              <li class="" style="" v-if="tabData.report_four_title">
                                <a :href="tabData.report_four_file" download target="_blank">
                                  <div class="f_icon">
                                    <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                                  </div>
                                  <div class="title">
                                    <h6>{{tabData.report_four_title}}</h6>
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
    title: 'Deposit Products',
    meta: [
      { name: 'description', content: 'Deposit Products' },
      { name: 'keywords', content: 'Deposit Products, IDLC Islamic, Financing Products, Islamic Finance, Interest Rate' },
    ]
  },
  name: 'deposit-products',
  data() {
    return {
      shortcode: 'DepositProducts:',
      relatedProductData: [],
      isMobile: false,
      contentData: "",
      faqTabName: 'Deposit Products',
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
</style>
