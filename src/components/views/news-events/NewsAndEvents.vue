<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image/>

    <div class="container homePageTitleDetails sectionTitle">
      <!-- <h2 style="text-align: center; " class="h2Responsive ">
        {{ contentData.second_title }}
      </h2> -->
      <h6 style="margin-top: unset;">{{ contentData.tagline }}</h6>
      <span v-html="contentData.description"></span>
    </div>
    <!--    //page heading end-->
    <app-tab-content/>
    <app-footer />



  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'news-and-events',
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppStaticImage: () => import('./StaticImage'),
    AppTabContent: () => import('../../views/news-events/TabComponent'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  data() {
    return {
      shortcode: 'NewsAndEvent',
      contentData: "",
    }
  },
  methods: {
    keyFeatureTabOpen: function(cityName,event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        var newElement = document.getElementById(cityName);
        event.target.className += " active";

    },
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
    }
  },
  created() {
    this.getHeaderContent();
  },
  mounted() {

  },
  updated() {
    //this.loadsOff();
  },
}
</script>


<style scoped>
.news_box_gutter {
  padding: 0 10px;
}
@media screen and (max-width: 600px){
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
.news_box .news_box_image{
  width: 100%;
  overflow: hidden;
}
.news_box .news_box_image img{
  width: 100%;
  transition: all 0.4s;
}
.news_box:hover .news_box_image img{
  transform: scale(1.2);
}
.news_box .news_box_header {
  width: 100%;
  padding: 15px 20px 0px 20px;;
}
.news_box .news_box_header h2,
.news_box .news_box_body p{
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.news_box .news_box_header h2{
  font-size: 1rem;
  -webkit-line-clamp: 3;
  height: 65px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  /* display: none; */
}
.news_box .news_box_body p{
  font-size: 14px;
  -webkit-line-clamp: 3;
}
.news_box .news_box_footer {
  padding: 0 20px 20px 20px;
}
.news_box .news_box_footer .news_box_learnMore_btn{
  display: inline-block;
  border: 1px solid #00a6b4;
  color: #00a6b4;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
}
.news_box .news_box_footer .news_box_learnMore_btn:hover{
  color: #fff;
  background: #00a6b4;
  text-decoration: none;
}
.news_box .news_box_share{
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
.news_box .news_box_share a i{
  color: #fff;
  font-size: 20px;
}
.news_box .news_box_share a{
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}
.news_box .news_box_share a:hover{
  transform: rotate(90deg) scale(1.2);
}
.news_box:hover .news_box_share{
  right: 0;
}

.news-content-list {
  padding-bottom: 25px;
}
.news-main-content {
  padding-bottom: 20px;
}
.latest {
  padding-left: 10px;
  padding-bottom: 15px;
}
.searchable {
  padding-top: 40px;
  /* padding-left: 135px; */
  text-align: right;
}
.search-result {
   padding-top: 40px;
   padding-left: 60px;
}
.custom-select {
  padding-left: 8px;
}
.keyword-field {
  border-radius: 0;
}

.custom-select {
  border-radius: 0;
}

hr {
  border: 0;
  clear:both;
  display:block;
  width: 96%;
  background-color:#000;
  height: 1px;
  margin-left: 80px;
  margin-right: 80px;
}

.latest-heading {
  padding-left: 84px;
  padding-top: 30px;
}
.days p {
  font-size: 17px;
  padding-left: 84px;
  padding-bottom: 15px;
}

.news-search-result p {
  font-size: 17px;
  padding-left: 84px;
  padding-bottom: 25px;
}
.tab-content {
  margin-top: 25px;
}
.nav-pills .nav-link.active, .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #CF2829;
}

.nav-pills .nav-link {
    border-radius: .6em 0 0 .6em;
    font-size: 15px;
    padding: 10px 20px;
}

.productFeatures .tablinks1 {
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

/* Tab content CSS  */
.categoryBody .mcategory .reason {
        flex-basis: 23%;
        background: rgba(255, 255, 255, 0.15);
        background: #00a6b4;
        margin: 10px;
        color: #fff;
        padding: 15px;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .categoryBody .mcategory .reason:hover {
        background: #00a6b4;
    }
    .categoryBody .mcategory .reason a {
        display: block;
        text-align: center;
    }
    .categoryBody .mcategory .reason a h6 {
        color: #fff;
    }
    .categoryBody .mcategory .reason a img {
        transition: all 0.3s;
        height: 80px;
        width: 80px;
        display: inline-block;
    }
    .categoryBody .mcategory .owl-buttons{
        padding-top: 15px !important;
        position: absolute;
        left: 50%;
        /* padding-right: 45px !important; */
    }
    .categoriesTagline {
        margin-top: 13px;
        font-size: 1.25rem;
    }
    .categories {
        display: block;
    }
    .mcategory {
        display: none;
    }
    @media screen and (max-width: 600px){
        .categories {
            display: none;
        }
        .mcategory {
            display: block;
        }
    }



@media screen and (max-width: 600px){
  .searchable {
    padding-top: 20px;
    padding-left: 10px;
  }
  .custom-select {
    margin-bottom: 5px;
  }
  .latest-heading {
    padding-left: 18px;
  }
  .days p {
    font-size: 17px;
    padding-left: 18px;
    padding-bottom: 15px;
  }
  .news-search-result p {
    font-size: 17px;
    padding-left: 16px;
    padding-bottom: 25px;
  }

  hr {
  border: 0;
  clear:both;
  display:block;
  width: 30%;
  background-color:#000;
  height: 1px;
  margin-left: 80px;
  margin-right: 80px;
}
.search-result {
  padding-top: 40px;
  padding-left: 60px;
  padding-left: 20px;
}
}


.custom-select select {
    display: block;
}
    .categoryBody .mcategory .reason {
        flex-basis: 23%;
        background: rgba(255, 255, 255, 0.15);
        background: #00a6b4;
        margin: 10px;
        color: #fff;
        padding: 15px;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .categoryBody .mcategory .reason:hover {
        background: #00a6b4;
    }
    .categoryBody .mcategory .reason a {
        display: block;
        text-align: center;
    }
    .categoryBody .mcategory .reason a h6 {
        color: #fff;
    }
    .categoryBody .mcategory .reason a img {
        transition: all 0.3s;
        height: 80px;
        width: 80px;
        display: inline-block;
    }
    .categoryBody .mcategory .owl-buttons{
        padding-top: 15px !important;
        position: absolute;
        left: 50%;
        /* padding-right: 45px !important; */
    }
    .categoriesTagline {
        margin-top: 13px;
        font-size: 1.25rem;
    }
    .categories {
        display: flex;
    }
    .mcategory {
        display: none;
    }
    @media screen and (max-width: 600px){
        .categories {
            display: none;
        }
        .mcategory {
            display: block;
        }
    }
    @media screen and (max-width: 600px){
      .topShape {
          max-height: 170px;
      }
    }
</style>
