<template>
  <div>
    <app-home-page-header />
    <app-header-mobile />
    <app-side-nav />
    <div>
      <div class="topShape" style="">
        <div class="circle" id="circle1" style="left: -220.281px; top: 216.45px"></div>
        <div class="circle" id="circle2" style="left: 770.742px; top: -550.55px"></div>
        <div class="circle" id="circle3" style="left: 160.403px; top: -162.05px"></div>
        <div class="circle" id="circle4" style="left: 725.069px; top: 26.45px"></div>
        <div class="headerSvg">
          <img src="~@/assets/img/home-reverse.svg" height="auto" width="auto" />
        </div>
      </div>
    </div>
    <div class="main_slider">
      <div class="main_slider_bg_part ">
        <div class="container-lg" style="height: 445px" v-show="isPlaceholder">
          <vue-content-loading :width="300" :height="115">
            <!--              <circle cx="30" cy="30" r="30" />-->
            <rect x="0" y="0" rx="1" ry="1" width="180" height="10" />
            <rect x="230" y="0" rx="1" ry="1" width="70" height="10" />
            <rect x="0" y="15" rx="2" ry="2" width="300" height="105" />
          </vue-content-loading>
        </div>

        <!-- <pre>{{slidersTab}}</pre> -->
        <div class="container-lg" v-show="isImageLoaded">
          <div class="slider_top">
            <!--            <h1 class="">Welcome to financing happiness!</h1>-->
            <h1>{{ pageSliderHeader.first_title }}</h1>
            <div class="buttons">
              <a v-for="tab in slidersTab" v-if="slidersTab.length > 0" :href="tab.tab_link" target="_blank" class="home-apply-for-loan-button">
                <h6 class="home-apply-for-loan-button">{{tab.tab_name}}</h6>
              </a>
              <!-- <a href="https://idlc.com/login/login.php" target="_blank" class="home-account-login-button">
                <h6 class="home-account-login-button">Customer Login</h6>
              </a> -->
            </div>
          </div>
          <div class="slider">

            <div v-if="sliders.length > 0">
              <carousel :autoplay="false" :nav="false" :items="1" :dots="true" id="items">
                <a class="item slideItem" v-for="(slideItem, index) in sliders" :key="slideItem.id"
                  :id="'slide_' + index" :href="slideItem.button_link" target="_blank" style="display: none">
                  <div class="item_overlay">
                    <div class="item_tex">
                      <h2 class="animate__animated animate__backInLeft">
                        {{ slideItem.title }}
                      </h2>
                      <p class="animate__animated animate__fadeInUp">
                        {{ slideItem.subtitle }}
                      </p>
                    </div>
                  </div>
                  <picture>
                    <img :src="slideItem.image" @load="onImageLoad" alt="Slider Image" />
                  </picture>
                </a>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container-lg">
      <div class="productPageTitleDetai sectionTitle">
        <h2 style="text-align: center; " class="h2Responsive ">
          {{ pageSliderHeader.second_title }}
        </h2>
        <!-- <h6 class="categoriesTagline">{{ itemData.product_tagline }}</h6> -->
        <span v-if="pageSliderHeader" v-html="pageSliderHeader.description"></span>
      </div>
    </div>

    <div class="whyChose">
      <div class="top_curve"></div>
      <div class="whyChoseBg">
        <div class="container-lg">
          <div class="header">
            <h2 class="h2Responsive">WHY CHOOSE IDLC Islamic?</h2>
          </div>
          <div class="body">
            <div class="reason">
              <img :src="homePageLowerTabContent.why_choose_one_image" alt="" v-if="homePageLowerTabContent" />
              <h5>{{ homePageLowerTabContent.why_choose_one_title }}</h5>
              <div class="line"></div>
              <p>{{ homePageLowerTabContent.why_choose_one_subtitle }}</p>
            </div>
            <div class="reason">
              <img :src="homePageLowerTabContent.why_choose_two_image" alt="" />
              <h5>{{ homePageLowerTabContent.why_choose_two_title }}</h5>
              <div class="line"></div>
              <p>{{ homePageLowerTabContent.why_choose_two_subtitle }}</p>
            </div>
            <div class="reason">
              <img :src="homePageLowerTabContent.why_choose_three_image" alt="" />
              <h5>{{ homePageLowerTabContent.why_choose_three_title }}</h5>
              <div class="line"></div>
              <p>{{ homePageLowerTabContent.why_choose_three_subtitle }}</p>
            </div>
            <div class="reason">
              <img :src="homePageLowerTabContent.why_choose_four_image" alt="" />
              <h5>{{ homePageLowerTabContent.why_choose_four_title }}</h5>
              <div class="line"></div>
              <p>{{ homePageLowerTabContent.why_choose_four_subtitle }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom_curve"></div>
    </div>

    <div class="container-lg productFeatures">
      <div class="tab">
        <button class="tablinks1 active">
          Why Us?
        </button>
      </div>

      <div class="tabcontent1 defaultTableDesign" style="display: block; overflow: auto;">
        <span v-if="homePageData.homePageFeatured" v-html="homePageData.homePageFeatured.why_us"></span>
        <router-link target="_blank" class="tabcontent1Button">Apply Now</router-link>
      </div>
    </div>



    <div v-if="homeKeyFeature" class="container-lg productFeatures mt-3 pt-2 pb-4">
      <h2 class="featuredProductHeading h2Responsive mb-3" style="
          text-align: center;
          margin-top: 30px;
          color: #2d2a29;
          text-transform: uppercase;
        ">
        Key Features
      </h2>
      <div class="featuredProduct">

        <div class="container">
          <div class="row d-flex justify-content-center">
            <div class="col-lg-3 col-md-4 col-sm-6 mb-3"  v-for="keyFeature in homeKeyFeature">
              <div class="serviceBox">
                <div class="icon mb-3">
                  <img width="60px" :src="`${baseUrl}/uploads/${keyFeature.icon_link}`" alt="">
                </div>
                <h3 class="title">{{ keyFeature.title }}</h3>
                <h2 class="description">{{ keyFeature.description }}</h2>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="" >

          <div class="border">
            <div class="featuredProduct_box_inner">
              <div class="icon ">
                <img :src="`${baseUrl}/uploads/${keyFeature.icon_link}`" alt="">
              </div>
              <div class="heading">
                <h1>{{ keyFeature.title }}</h1>
              </div>
              <div class="short_detail">
                <p>
                  {{ keyFeature.description }}
                </p>
              </div>
            </div>
          </div>

        </div> -->

      </div>
    </div>

    <div class="container-lg my-3">
      <h2 class="featuredProductHeading h2Responsive fpt" style="
          text-align: center;
          margin-top: 15px;
          color: #2d2a29;
          text-transform: uppercase;
        ">
        Featured Products
      </h2>
      <div class="featuredProduct">
        <div class="featuredProduct_box">
          <router-link to="/deposit-products">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_1"></div>
              <div class="heading">
                <h1>Mudarabah Islamic Deposits</h1>
              </div>
              <div class="short_detail">
                <p>
                  Experience the tranquility of financial growth with IDLC Islamic Finance's deposit solutions.
                </p>
              </div>
              <button>
                <router-link to="/home-loan">Learn More</router-link>
              </button>
            </div>
          </router-link>
        </div>
        <div class="featuredProduct_box">
          <router-link to="/islamic-sme">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_2"></div>
              <div class="heading">
                <h1>Home Financing (Consumer)</h1>
              </div>
              <div class="short_detail">
                <p>
                  Where dreams of home ownership meet Shariah-compliant solutions.
                </p>
              </div>
              <button>
                <router-link to="/islamic-sme">Learn More</router-link>
              </button>
            </div>
          </router-link>
        </div>
        <div class="featuredProduct_box">
          <router-link to="/islamic-corporate">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_3"></div>
              <div class="heading">
                <h1>SME Financing (Business)</h1>
              </div>
              <div class="short_detail">
                <p>
                  Elevate your business aspirations with IDLC Islamic Finance's SME Term Financing.
                </p>
              </div>
              <button>
                <router-link to="/islamic-corporate">Learn More</router-link>
              </button>
            </div>
          </router-link>
        </div>

      </div>

    </div>


    <app-footer />
  </div>
</template>

<script type="text/javascript">
import VueContentLoading from "vue-content-loading";
import firebase from "firebase/app";

import "firebase/app";
import "firebase/messaging";

import axios from "axios";

export default {
  metaInfo: {
    title: "IDLC Islamic",
    meta: [
      {
        name: "description",
        content:
          "IDLC Islamic is the islamic financing window of IDLC Finance PLC. Objective of IDLC Islamic is to deliver Shariah compliance - in principle, in practice - in the deposit as well financing products it offers to the clients."
      },
      {
        name: "keywords",
        content:
          "idlc, banking, deposit, loan, nbfi, bangladesh, apply loan, nbfi in Bangladesh, Bangladesh, islamic finance"
      }
    ]
  },
  components: {
    VueContentLoading,
    AppHeaderMobile: () => import("../../incudes/HeaderMobile"),
    AppHomePageHeader: () => import("../../incudes/HomePageHeader"),
    AppSideNav: () => import("../../incudes/SideNav"),
    AppFooter: () => import("../../incudes/Footer")
  },
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      shortcode: "Home",
      isImageLoaded: false,
      isPlaceholder: true,
      homePageData: 0,
      sliders: [],
      slidersTab: [],
      pageSliderHeader: "",
      allNews: [],
      homePageLowerTabContent: "",
      mbr: "",
      financialData: "",
      menuVideos: "",
      menuNews: [],
      homeKeyFeature: null,
      shareBase: this.$store.state.shareBaseUrl,
      comments: [],
      baseUrl: axios.defaults.baseURL.replace('/api/v1/', ''),
      get requestPermission() {
        return localStorage.getItem("notificationPref") === null;
      },
      set requestPermission(value) {
        localStorage.setItem("notificationPref", value);
      }
    };
  },
  name: "Index",
  methods: {
    getHomeSliderData() {
      axios
        .get(`homepage-slider?shortcode=Home`)
        .then(res => {

          const sliders = res.data
          // sliders.forEach(slider => {
          //   console.log('slider =>', slider)
          // });
          const newArray = sliders.sort((a, b) => Number(a.order) - Number(b.order))
          this.sliders = res.data
          this.slidersTab = res.data[0].tabs

        })
        .catch(err => {
          console.log(err)
        })

    },
    getHomePageData() {
      axios
        .get("get-home-page-detail")
        .then(response => {
          if (response.status == 200) {
            this.homePageData = response.data.details;
            console.log("homePageData", this.homePageData);
            this.pageSliderHeader = response.data.details.page_data;
            this.allNews = response.data.details.allNews;
            this.homePageLowerTabContent =
              response.data.details.homePageTabContent;
            this.mbr = response.data.details.mbr;
            //this.sliders = response.data.details.slider;
            this.financialData = response.data.details.financialData;
            this.menuVideos = response.data.details.menuVideos;
            this.menuNews = response.data.details.menuNews;
            // console.log(response.data.details.financialData);
          }
        })
        .catch(error => console.log(error));
    },
    getHomePageKeyFeature() {
      axios.get('get-key-feature').then(res => {
        console.log('res =>', res)
        this.homeKeyFeature = res.data.data;
        console.log('homeKeyFeature =>', this.homeKeyFeature)
      }).catch(err => {
        console.log(err);
      })
    },
    onImageLoad() {
      this.isPlaceholder = false;
      this.isImageLoaded = true;
      document.getElementById("slide_0").style.display = "block";
      setTimeout(this.updateSlider, 500);
    },
    updateSlider() {
      document.getElementById("slide_1").style.display = "block";
      document.getElementById("slide_2").style.display = "block";
    },
    async getComments() {
      try {
        await axios.get('homepage-quote').then(res => {
          this.comments = res.data.homeQuote;

        }).catch(err => {
          console.log(err);
        })
      } catch (error) {
        console.log('error =>', error)
      }
    }
  },
  async beforeRouteEnter(to, from, next) {
    next(vm => {
      // <= HERE you execute next
      vm.getHomePageData();
    });
  },

  created() {
    // this.getHomePageData()
    this.getHomeSliderData()
    this.getComments()
    this.getHomePageKeyFeature()
  },

  mounted() {
    var config = {
      apiKey: "AIzaSyBfACkqgIjjTo6G5bQQxrVazyBPzurFgoE",
      authDomain: "idlc-revamp.firebaseapp.com",
      projectId: "idlc-revamp",
      storageBucket: "idlc-revamp.appspot.com",
      messagingSenderId: "586313753410",
      appId: "1:586313753410:web:3d9123f302fb28353a5edb",
      measurementId: "G-MF9S1N718D"
    };
    firebase.initializeApp(config);

    const messaging = firebase.messaging();

    messaging
      .requestPermission()
      .then(() => {
        console.log("Notification permission granted.");
        messaging.getToken().then(token => {
          var topic = "news";
          fetch(
            "https://iid.googleapis.com/iid/v1/" + token + "/rel/topics/news",
            {
              method: "POST",
              headers: new Headers({
                Authorization:
                  "key=AAAAiIMF40I:APA91bHdebX-NaHIhZ7PScNc1yfL3LtxBCKT2s9_Qc7U2o47WfCWJc63WbbguQV4bdsoeE91O5qvhc34mgQaiIiiGuaublbpMR2Viy97UP6AO2RUFutWRU9Vjcppp7bPjXCqIj3rUO78"
              })
            }
          )
            .then(response => {
              if (response.status < 200 || response.status >= 400) {
                throw "Error subscribing to topic: " +
                response.status +
                " - " +
                response.text();
              }
            })
            .catch(error => {
              console.error(error);
            });
        });
      })
      .catch(err => {
        console.log("Unable to get permission to notify.", err);
      });
  }
};
</script>
<style>
.topShape {
  height: 445.4px;
}

@media (max-width: 1030px) {
  .topShape {
    height: 350.4px;
  }
}

@media (max-width: 600px) {
  .topShape {
    height: 250.4px;
  }
}

.owl-dots {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  position: absolute !important;
  bottom: 80px;
  left: 105px;
}

.featuredProduct_box a:hover {
  color: inherit !important;
}

.news_box_gutter {
  padding: 0 10px;
}

@media screen and (max-width: 600px) {
  .news_box_gutter {
    padding: 0 0px;
    margin-bottom: 2px;
  }
}

.news_box {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 0 0px;
}

.news_box:focus {
  box-shadow: none;
  outline: none;
}

.news_box .news_box_image {
  width: 100%;
  overflow: hidden;
}

.news_box .news_box_image img {
  width: 100%;
  transition: all 0.4s;
}

.news_box:hover .news_box_image img {
  transform: scale(1.2);
}

.news_box .news_box_header {
  width: 100%;
  padding: 15px 20px 10px 20px;
}

.news_box .news_box_header h2,
.news_box .news_box_body p {
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.news_box .news_box_header h2 {
  font-size: 1.25rem;
  -webkit-line-clamp: 3;
  height: 74px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  display: none;
}

.news_box .news_box_body p {
  font-size: 14px;
  -webkit-line-clamp: 3;
}

.news_box .news_box_footer {
  padding: 0 20px 20px 20px;
}

.news_box .news_box_footer .news_box_learnMore_btn {
  display: inline-block;
  border: 1px solid #00a6b4;
  color: #00a6b4;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
}

.news_box .news_box_footer .news_box_learnMore_btn:hover {
  color: #fff;
  background: #00a6b4;
  text-decoration: none;
}

.news_box .news_box_share {
  background: #00a6b4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  padding: 5px 10px;
  transform: rotate(-90deg) translateX(32%);
  transform-origin: right bottom;
  position: absolute;
  top: 0;
  right: -100px;
  transition: all 0.4s;
}

.news_box .news_box_share span,
.news_box .news_box_share a i {
  color: #fff;
  font-size: 20px;
}

.news_box .news_box_share a {
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}

.news_box .news_box_share a:hover {
  transform: rotate(90deg) scale(1.2);
}

.news_box:hover .news_box_share {
  right: 0;
}

.QLMBRTitle {
  cursor: pointer;
}

.QLMBRTitle:hover {
  text-decoration: none;
}

.quickLinks {
  margin-bottom: 20px;
}

.quickLinks .shortDescription {
  font-size: 14px;
  margin: 15px 0 20px 0;
}

.quickLinkBox {
  margin: 0px;
}

.quickLinkBox .blockHeading {
  text-align: center;
}

.quickLinkBox .blockHeading h4 {
  font-size: 1.25rem;
}

.quickLinks_career_box {
  border: 1px solid #ffe4e4;
  border-radius: 1rem;
  padding: 20px 10px 20px 10px;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  display: block;
  background: #f9f9f9;
  color: #000;
  clear: both;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 15px;
  height: 270px;
  overflow: hidden;
}

.quickLinks_career_box:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-decoration: none;
  cursor: default;
}

.quickLinks_career_box .headPart {
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-bottom: 15px;
}

.quickLinks_career_box .headPart .icon {
  width: 80px;
  height: 80px;
  margin-bottom: 10px;
}

.quickLinks_career_box .heighlightedText {
  font-weight: bold;
  transition: all 0.4s;
}

.quickLinks_career_box:hover .heighlightedText {
  color: #00a6b4;
}

.quickLinks_career_box .headPart .icon img {
  width: 100%;
  margin-bottom: 10px;
  transition: all 0.4s;
}

.quickLinks_career_box:hover .headPart .icon img {
  filter: invert(6%) sepia(100%) saturate(9999%);
}

.quickLinks_career_box .headPart .icon img {
  width: 100%;
}

.quickLinks_career_box .headPart .image {
  width: 100%;
  height: 143px;
  overflow: hidden;
  position: relative;
}

.quickLinks_career_box .headPart .image .bluryImage {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("~@/assets/img/mbr_01.330c1b9 (2).jpg");
  filter: blur(8px);
  -webkit-filter: blur(8px);
}

.quickLinks_career_box .headPart .image img {
  transition: all 0.3s;
  height: 100%;
  width: auto;
  filter: blur(0px);
  -webkit-filter: blur(0px);
}

.quickLinks_career_box .headPart .Text p {
  font-size: 14px;
  color: #000;
  transition: all 0.3s;
}

.quickLinks_career_box .headPart .Text a:hover p {
  font-size: 14px;
  color: #00a6b4;
  text-decoration: none;
}

.quickLinks_career_box:hover .headPart .Text a {
  text-decoration: none;
}

.quickLinks_career_box .jobs {
  display: flex;
  justify-content: center;
  width: 100%;
}

.quickLinks_career_box .jobs a {
  color: #333;
  transition: all 0.3s;
  margin-bottom: 15px;
  display: block;
  text-align: center;
  /* flex-basis: 50%; */
  padding: 0 5px;
}

.quickLinks_career_box .jobs a:not(:last-child) {
  border-right: 1px solid #333;
}

.quickLinks_career_box .jobs a h6 {
  font-size: 14px;
}

.quickLinks_career_box .jobs a:hover {
  color: #00a6b4;
  text-decoration: none;
}

.quickLinks_career_box.review {
  padding: 0px;
}

@media screen and (max-width: 600px) {
  .quickLinkBox {
    margin-bottom: 20px;
  }

  .quickLinks_career_box {
    height: auto;
  }

  .quickLinks_career_box.review {
    padding-bottom: 20px;
  }

  .displayNone {
    display: none;
  }
}

.fundCard {
  overflow: hidden;
  border-radius: 1rem;
  border: solid 1px #ffe4e4;
  /* margin-bottom: 3rem; */
}

.fundCard .cardTop {
  padding: 1rem 1rem 0rem 1rem;
  background-color: #f0f8ff;
  position: relative;
}

.fundCard .cardMiddle {
  padding: 2rem 0.5rem 1rem 0.5rem;
}

.fundCard .cardBottom {
  padding: 1rem 2rem;
  border-top: solid 1px #dcdcdc;
  font-size: 14px;
}

.fundCard .cardTop .cart {
  display: inline-block;
  font-size: 2.6rem;
  line-height: 2.6rem;
  color: #00a6b4;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.fundCard .cardTop .toolTipHover .nextButton {
  display: inline-block;
  position: relative;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
  background: #fff;
  padding: 4px 10px;
  border: 2px solid #00a6b4;
  border-radius: 30px;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  color: #00a6b4;
}

.cardTop h2 {
  padding-bottom: 1.25rem;
}

.cardTop h2 a {
  font-size: 1.25rem;
  color: #000000;
}

.cardTop h2 a:hover {
  text-decoration: none;
}

.cardTop h2 a:before {
  font-size: 1.3rem;
  color: #ffffff !important;
  z-index: 9;
}

.fundCard .cardMiddle {
  /* padding: 3rem 2rem 3rem 2rem; */
  background: #f9f9f9;
  transition: all 0.3s;
}

.fundCard:hover .cardMiddle {
  background: #fff;
}

.fundCard.insideCardBox .cardMiddle .cardBox {
  border: none;
  float: left;
  width: 50%;
  padding: 0 0 0 1.5rem;
}

.fundCard.insideCardBox .cardMiddle .cardBox {
  border: none;
  float: left;
  width: 33%;
  padding: 0 0 0 0.25rem;
  text-align: center;
}

.cardBox .amount.arrow {
  position: relative;
}

.fundCard.insideCardBox .cardMiddle .cardBox .descrpi {
  font-size: 0.9rem;
  color: #5e6977;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.title .Name {
  font-size: 12px;
}

.fundCard.insideCardBox .cardMiddle .cardBox .amount {
  font-size: 1.25rem;
}

.fundCard.insideCardBox .suitableFor {
  color: #000;
  margin-bottom: 0.5rem;
  /* min-height: 8.6rem; */
}

.fundCard .cardTop:before {
  content: "";
  position: absolute;
  background: #00a6b4;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  opacity: 1;
  top: -20px;
  bottom: -0.6rem;
  left: -7rem;
  right: -7rem;
  border-radius: 50%;
  z-index: -10;
  color: #ffffff;
}

.fundCard .cardTop h2 a {
  color: #ffffff !important;
}

.fundCard:hover .cardTop .subTitle {
  color: #ffffff !important;
}

.fundCard:hover .cardTop .equityCap {
  color: #ffffff !important;
}

.fundCard .cardBottom {
  padding: 1rem 1rem;
  border-top: solid 1px #dcdcdc;
  background-color: #00a6b4;
  width: 100%;
  transition: all 0.3s;
}

.fundCard .cardBottom:hover {
  border-top: solid 1px #dcdcdc;
  background-color: #2a2626;
  width: 100%;
}

.quickLinksButton {
  padding: 5px 7px !important;
  font-size: 12px;
}

.fundCard {
  transition: all 0.3s;
}

.fundCard:hover {
  box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.1);
  background: #fff;
  text-decoration: none;
  cursor: default;
}

.main_slider {
  position: relative;
  width: 100%;
  /* z-index: -1; */
}

.main_slider .main_slider_bg_part {
  border-radius: 0 0 50% 50%;
  z-index: 1;
  margin-top: 75px;
}

.main_slider .main_slider_bg_part .slider_top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 10;
}

.main_slider .main_slider_bg_part .slider_top h1 {
  font-size: 35px !important;
  color: #fff;
  margin-bottom: 10px;
}

.main_slider .main_slider_bg_part .slider_top .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: flex-end;
  gap: 10px;
}

.main_slider .main_slider_bg_part .slider_top .buttons a {
  background: #00a6b4;
  padding: 10px 15px;
  border-radius: 10px 10px 0 0;
  color: #fff;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:nth-child(odd) {
  background: #fff;
  color: black;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:nth-child(even) {
  background: #00a6b4;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:hover {
  -webkit-transform: scaleY(1) translateY(0px);
  transform: scaleY(1) translateY(0px);
  -webkit-box-shadow: 0 0px 20px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 20px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  background: linear-gradient(45deg, #437a7f, #00a6b4);
  color: #fff;
}

.main_slider .main_slider_bg_part .slider {
  -webkit-box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.main_slider .main_slider_bg_part .slider img {
  width: 100%;
}

.main_slider .main_slider_bg_part .slider .item {
  position: relative;
}

.main_slider .main_slider_bg_part .slider .item .item_tex {
  position: absolute;
  bottom: 50px;
  right: 30px;
  color: #fff;
  text-align: right;
  padding: 15px 7px;
  opacity: 0;
  border-radius: 5px;
  -webkit-animation: slidetext 0.4s ease-in-out 0.5s forwards;
  animation: slidetext 0.4s ease-in-out 0.5s forwards;
}

.main_slider .main_slider_bg_part .slider .item .item_tex h2 {
  font-size: 2rem;
}

.main_slider .main_slider_bg_part .slider .item .item_tex p {
  font-size: 1.25rem;
}

.item_overlay {
  /*background-color: rgba(0, 0, 0, 0.34);*/
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

@media screen and (max-width: 770px) {
  .main_slider .main_slider_bg_part {
    margin-top: 15px;
  }

  .main_slider .main_slider_bg_part .slider_top {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .main_slider .main_slider_bg_part .slider_top h1 {
    font-size: 25px !important;
  }

  .main_slider .main_slider_bg_part .slider_top .buttons {
    -ms-flex-item-align: end;
    align-self: flex-end;
  }

  .main_slider .main_slider_bg_part .slider #owl-demo .item img {
    height: 200px !important;
  }

  .main_slider .main_slider_bg_part .slider .item .item_tex {
    width: 100%;
    bottom: 15px;
    right: 8px;
  }

  .main_slider .main_slider_bg_part .slider .item .item_tex h2 {
    font-size: 20px;
  }

  .main_slider .main_slider_bg_part .slider .item .item_tex p {
    font-size: 1rem;
  }
}

@-webkit-keyframes slidetext {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

@keyframes slidetext {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.owl-dots {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  position: absolute !important;
  bottom: 80px;
  left: 105px;
}

.featuredProduct {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: center;
  padding: 20px 0 15px 0;
}

@media (min-width: 768px) {
  .featuredProduct {
    margin: 0 auto;
    width: 95%;
  }
}

.featuredProduct_box {
  -ms-flex-preferred-size: 32%;
  flex-basis: 32%;
  padding: 3px;
  position: relative;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box a {
  color: inherit;
}

.featuredProduct_box a:hover {
  text-decoration: none;
}

.featuredProduct_box::after,
.featuredProduct_box::before {
  content: "";
  height: 0%;
  width: 0%;
  background: #00a6b4;
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box::before {
  top: 0;
  right: 0;
}

.featuredProduct_box::after {
  bottom: 0;
  left: 0;
}

.featuredProduct_box:hover::before,
.featuredProduct_box:hover::after {
  height: 100%;
  width: 100%;
}

.featuredProduct_box_inner {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px 30px 50px 30px;
  text-align: center;
  position: relative;
}

.featuredProduct_box_inner .icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px auto;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box_inner .icon img {
  width: 100%;
}

.featuredProduct_box_inner .icon_1 {
  background-image: url("~@/assets/img/menuIcons/deposit/Deposits-Icon.png");
}

.featuredProduct_box_inner .icon_2 {
  background-image: url("~@/assets/img/menuIcons/SME/Small-Business.png");
}

.featuredProduct_box_inner .icon_3 {
  background-image: url("~@/assets/img/menuIcons/SME/Medium-Business.png");
}

.featuredProduct_box_inner .icon_4 {
  background-image: url("~@/assets/img/menuIcons/deposit/Corporate-Loan-01.png");
  background-size: 100% 100%;
}

.featuredProduct_box_inner .heading {
  margin-bottom: 10px;
}

.featuredProduct_box_inner .heading h1 {
  font-size: 1.25rem;
}

.featuredProduct_box_inner .short_detail p {
  font-size: 14px;
}

.featuredProduct_box_inner button {
  width: 100%;
  border: 2px solid #00a6b4 !important;
  color: #fff;
  background: #00a6b4;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 7px;
  margin-top: 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  opacity: 0.5;
  -webkit-transition: all 0.4s;
  transition: all 0.3s;
}

.featuredProduct_box:hover .featuredProduct_box_inner>button {
  visibility: visible;
  opacity: 1;
}

.featuredProduct_box:hover .featuredProduct_box_inner>.icon_1 {
  background-image: url("~@/assets/img/menuIcons/deposit/Deposits-Icon.png");
}

.featuredProduct_box:hover .featuredProduct_box_inner>.icon_2 {
  background-image: url("~@/assets/img/menuIcons/SME/Small-Business.png");
}

.featuredProduct_box:hover .featuredProduct_box_inner>.icon_3 {
  background-image: url("~@/assets/img/menuIcons/SME/Medium-Business.png");
}

.featuredProduct_box:hover .featuredProduct_box_inner>.icon_4 {
  background-image: url("~@/assets/img/menuIcons/deposit/Corporate-Loan-02.png");
}

@media screen and (max-width: 600px) {
  .featuredProductHeading {
    font-size: 25px;
  }

  .featuredProduct {
    margin-top: 15px;
    padding: 0px 0 35px 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  .featuredProduct_box {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    /* z-index: -1; */
  }

  .featuredProduct_box_inner {
    padding: 20px;
    padding: 15px 30px 50px 30px;
  }

  .featuredProduct_box_inner .heading {
    margin-bottom: 10px;
  }

  .featuredProduct_box_inner .heading h1 {
    font-size: 1.4rem;
  }

  .featuredProduct_box_inner button {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
}

.whyChose {
  /* height: 530px; */
  /* background-image: url("~@/assets/img/whyChoose.jpg"); */
  background-attachment: fixed;
  background-size: 100% auto;
  position: relative;
}

.whyChose .top_curve {
  background: url("~@/assets/img/curveShapeWhite.png") top center;
  top: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.whyChose .bottom_curve {
  background: url("~@/assets/img/curveShapeWhiteUp.png") top center;
  bottom: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 0;
}

.whyChose .whyChoseBg {
  background: #00a6b4;
  height: 100%;
  padding: 100px 0px 70px 0px;
  margin: 0 auto;
  color: #fff;
}

.whyChose .whyChoseBg .header {
  font-size: 2rem;
}

.whyChose .whyChoseBg .header h2 {
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.whyChose .whyChoseBg .body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  margin: 20px 0 50px 0;
  text-align: center;
}

.whyChose .whyChoseBg .body .reason {
  -ms-flex-preferred-size: 23%;
  flex-basis: 23%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.whyChose .whyChoseBg .body .reason img {
  width: 65px;
  margin-bottom: 15px;
}

.whyChose .whyChoseBg .body .reason .line {
  margin: 10px 30px;
  height: 1px;
  background: #fff;
}

.whyChose .whyChoseBg .body .reason p {
  font-size: 14px;
}

.whyChose .whyChoseBg .body .reason:hover {
  background: rgba(255, 255, 255, 0.25);
}

@media screen and (max-width: 770px) {
  .whyChose {
    height: auto;
  }

  .whyChose .top_curve {
    top: -0.1rem;
  }

  .whyChose .bottom_curve {
    bottom: -0.1rem;
  }

  .whyChose .whyChoseBg {
    padding: 100px 0px;
  }

  .whyChose .whyChoseBg .header h2 {
    width: unset;
    font-size: 25px;
  }

  .whyChose .whyChoseBg .body {
    margin: 25px 0 25px 0;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .whyChose .whyChoseBg .body .reason {
    -ms-flex-preferred-size: 49%;
    flex-basis: 49%;
    margin-bottom: 7px;
    padding: 10px;
  }

  .whyChose .whyChoseBg .body .reason img {
    width: 50px;
    margin-bottom: 10px;
  }
}

.comment_section {
  margin: 60px 0;
}

.comment_section .comment_gap {}

.comment_section .comment_gap .card_body {
  background-image: url('~@/assets/img/comment_bg.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;
  border-radius: 14.2963px;
  overflow: hidden;
}

.comment_section .comment_gap .card_body .main_img {
  width: 50%;
  height: 100%;
}

.comment_section .comment_gap .card_body .main_img img {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center;
}

.comment_section .comment_gap .card_body .content {
  width: 50%;
  height: 100%;
}

.comment_section .comment_gap .card_body .content p {
  font-weight: 400;
  font-size: 12.0148px;
  line-height: 21px;
  color: #1F2221;
  margin-top: 14px;
  width: 234px;
}

.comment_section .comment_gap .card_body .content h3 {
  font-weight: 700;
  font-size: 15.0148px;
  line-height: 21px;
  color: #2E2F2F;
  margin-top: 12px;
}

.comment_section .comment_gap .card_body .content div {
  font-weight: 500;
  font-size: 14.0148px;
  line-height: 21px;
  color: #2E2F2F;
}

.comment_section .comment_gap .card_body .content img {
  width: 40px;
}

.for_mobile {
  display: none;
}

@media (max-width: 1199.99px) {
  .comment_section .comment_gap .card_body .main_img img {
    height: 255px;
  }

  .comment_section .comment_gap .card_body .content p {
    font-size: 11.0148px;
    line-height: 15px;
  }
}

@media (max-width: 499.99px) {
  .comment_gap {
    display: none !important;
  }

  .for_mobile {
    display: block;
    background-image: url('~@/assets/img/comment_bg.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    overflow: hidden;
  }

  .for_mobile .card_wrapper {
    width: 100%;
    height: 100%;
  }

  .for_mobile .card_wrapper .comment img {
    width: 40px
  }

  .for_mobile .card_wrapper .name_img {
    display: flex;
    align-items: end;
  }

  .for_mobile .card_wrapper .name_img img {
    width: 50%;
  }

  .for_mobile .card_wrapper .name_img .name {
    width: 50%;
  }

  .for_mobile .card_wrapper .name_img .name h3 {
    font-weight: 700;
    font-size: 15.6429px;
    line-height: 22px;
    color: #2E2F2F;
  }

  .for_mobile .card_wrapper .name_img .name div {
    font-weight: 400;
    font-size: 14.6429px;
    line-height: 22px;
    color: #2E2F2F;
  }
}

.categoriesTagline {
  margin-top: 13px;
  font-size: 1.25rem;
}


.productFeatures {
  margin-bottom: 10px;
}

@media(min-width: 768px) {
  .productFeatures {
    margin-top: 30px;
  }
}

.productFeatures .tab {
  overflow: hidden;
  background-color: #f1f1f1;
  border-bottom: 2px solid #00a6b4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.productFeatures .tab .tablinks1 {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-size: 14px;
  border-right: 1px solid #ddd;
}

.productFeatures .tab button:hover {
  background-color: #ddd;
}

.productFeatures .tab button.active {
  background-color: #00a6b4;
  color: #fff;
}

.productFeatures .tabcontent1 {
  display: none;
  padding: 6px 12px;
  border: 1px solid #ccc;
  border-top: none;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  -webkit-animation: fadebottomToTop 0.5s ease-in-out forwards;
  animation: fadebottomToTop 0.5s ease-in-out forwards;
  padding: 30px;
}

.productFeatures .tabcontent1 ul {
  margin-bottom: 20px;
}

.productFeatures .tabcontent1 ul li {
  font-size: 14px;
  padding: 10px 0;
}

.productFeatures .tabcontent1 ul li i {
  margin-right: 10px;
}

.productFeatures .tabcontent1 .tabcontent1Button {
  outline: none;
  border: 2px solid #00a6b4;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 100px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-right: 20px;
  text-decoration: none;
  color: inherit;
  display: inline-block;
}

@media screen and (max-width: 600px) {
  .productFeatures .tabcontent1 .tabcontent1Button {
    margin-bottom: 15px;
  }
}

.productFeatures .tabcontent1 .tabcontent1Button:hover {
  background: #00a6b4;
  color: #fff;
}

@media screen and (max-width: 600px) {
  .productFeatures .tab {
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
  }

  .productFeatures .tab .tablinks1 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
  }

  .productFeatures .tab .tablinks1:nth-child(1),
  .productFeatures .tab .tablinks1:nth-child(3) {
    border-right: 1px solid #00a6b4;
  }

  .productFeatures .tab .tablinks1:nth-child(1),
  .productFeatures .tab .tablinks1:nth-child(2) {
    border-bottom: 1px solid #00a6b4;
  }
}

.serviceBox {
  color: var(--main-color);
  background: #fff;
  font-family: 'Raleway', sans-serif;
  text-align: center;
  padding: 50px 15px;
  border-radius: 30px 30px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;
  margin: 0 auto;
  height: 100%;
}

.serviceBox:before,
.serviceBox:after {
  content: "";
  background: var(--main-color);
  width: 150px;
  height: 150px;
  box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.15);
  transform: rotate(45deg);
  position: absolute;
  top: -85px;
  left: -85px;
  background: #00a6b4;
}

.serviceBox:after {
  top: auto;
  bottom: -85px;
  left: auto;
  right: -85px;
  box-shadow: -5px -5px 5px 0px rgba(0, 0, 0, 0.15);
  background: #00a6b4;
}

.serviceBox .service-icon {
  color: var(--main-color);
  font-size: 45px;
  line-height: 45px;
  margin: 0 0 15px;
}

.serviceBox .title {
  font-size: 20px;
  font-weight: 600;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  margin: 0 0 10px;
}

.serviceBox .description {
  color: #000000;
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 15px;
  font-weight: 400;
}

.serviceBox.red {
  --main-color: #F12945;
}

.serviceBox.yellow {
  --main-color: #F3B202;
}

.serviceBox.grey {
  --main-color: #2F5560;
}

@media only screen and (max-width: 1199px) {
  .serviceBox {
    margin: 0 0 30px;
  }
}

@media (max-width: 768px){
  .fpt{
    margin-top: -15px !important;
  }
}

@media (max-width: 450px){
  .fpt{
    margin-top: -20px !important;
  }
}
</style>
