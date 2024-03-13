<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <!-- <app-static-image /> -->

    <div class="promotion-header">
      <div class="homePageTitleDetails sectionTitle dFTagline">
          <div class="page_heading">
            <h2 style="text-align: center; " class="h2Responsive textUpperCase">
              {{ this.contentData.second_title }}
            </h2>
          </div>

        <span v-html="this.contentData.description"></span>      </div>
    </div>

    <section>
      <div class="productFeatures">
        <div class="categoryDetails"   id="categoryFeature1">
          <div class="container-lg">
              <div class="news-content-list row">
                <div class="col-12 ">
                  <div class="homePageTitleDetails sectionTitle">
                      <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                          Information and Notice Section
                      </h2>
                      <!-- <h6>{{ contentData.tagline }}</h6> -->
                      <p></p>
                  </div>
                  <!-- <div class="searchable">
                      <div class="container">
                          <div class="col-md-12">
                              <div class="row">
                                  <div class="col-md-4 section-1">
                                    <v-select label="text"  placeholder="Year" v-model="yearSearch" :options="years"></v-select>

                                  </div>
                                  <div class="col-md-4 section-2">
                                    <v-select label="text"  placeholder="Month" v-model="monthSearch"  :options="months"></v-select>

                                  </div>
                                  <div class="col-md-3 section-3 custom-field">

                                    <b-form-input v-model="search"  placeholder="Keyword"></b-form-input>

                                  </div>
                                  <div class="col-md-1 section-4">
                                  <button @click="searchFile()" class="btn  search-btn"><i class="fa fa-search"></i></button>
                                  </div>
                              </div>

                          </div>
                      </div>
                  </div> -->
                        <br><br>
                    <div class="tab-panel">
                      <div class="tab">
                        <button class="tablinks1 active" @click="keyFeatureTabOpen( 'psi', $event)">Price-Sensitive Information</button>
                        <button class="tablinks1 " @click="keyFeatureTabOpen( 'infs', $event)" >Information/Notice for Shareholders</button>
                      </div>
                      <div id="psi" class="tabcontent1 " style="display: block">
                          <div class="row">
                            <div class="col-md-12" v-for="fileItems in downloadFileData" :key="fileItems" v-if="fileItems.tab_name == 'psi'">

                              <div class="pdfDownloadItem">
                                <p>{{fileItems.downloadable_title}}</p>
                                <a class="d_button"  :href="fileItems.downloadable_file" download>
                                  <img src="../../../assets/img/report/Download-PDF.png" alt="">
                                  <span>Download</span>
                                </a>
                              </div>
                            </div>
                          </div>

                      </div>
                      <div id="infs" class="tabcontent1 ">
                          <div class="row">
                            <div class="col-md-12" v-for="item in insData" :key="item" >
                              <div class="pdfDownloadItem">
                                <p>{{item.downloadable_title}}</p>
                                <a class="d_button"  :href="item.downloadable_file" download>
                                  <img src="../../../assets/img/report/Download-PDF.png" alt="">
                                  <span>Download</span>
                                </a>
                              </div>
                            </div>
                          </div>

                      </div>


                    </div>

                    <br><br>
                    <!-- <div class="latest_news slider multiple-items" >
                        <div class="row">
                          <div class="col-md-12" v-for="fileItems in downloadFileData" :key="fileItems">
                            <div class="pdfDownloadItem">
                              <p>{{fileItems.downloadable_title}}</p>
                              <a class="d_button"  :href="fileItems.downloadable_file" download>
                                <img src="../../../assets/img/report/Download-PDF.png" alt="">
                                <span>Download</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      <br>
                    </div> -->



                  <div class="footer_button_content ">
                    <router-link to="/financial-reports" class="footer_button2">Financial Reports</router-link>
                    <router-link :to="{ name: 'RegulatoryDisclosure', params: { id : 'rd'}}" class="footer_button2">Regulatory Disclosures</router-link>

                  </div>



                </div>
              </div>
          </div>
        </div>
      </div>
    </section>
    <app-footer />


  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Price-sensitive-information-and-notices',
  data() {
            return {
              shortcode: 'PriceSensitive',
              selectedTabName: 'psi',
              contentData: "",
              downloadFileData: "",
              perPage: 3,
              search: '',
              yearSearch:'',
              monthSearch:'',
              currentPage: 1,
              selected: null,
              insData: [],
              years: [
                { value: '', text: 'All' },
                { value: 2020, text: '2020' },
                { value: 2019, text: '2019' },
                { value: 2018, text: '2018' },
                { value: 2017, text: '2017' },
                { value: 2016, text: '2016' },
                { value: 2015, text: '2015' },
                { value: 2014, text: '2014' },
                { value: 2013, text: '2013' },
                { value: 2012, text: '2012' },
                { value: 2011, text: '2011' },
                { value: 2010, text: '2010' },
                { value: 2009, text: '2009' },
                { value: 2008, text: '2008' },
                { value: 2007, text: '2007' },
                { value: 2006, text: '2006' },
                { value: 2005, text: '2005' },
                { value: 2004, text: '2004' },
                { value: 2003, text: '2003' }
              ],
              months: [
                { value: '', text: 'All' },
                { value: 'January', text: 'January' },
                { value: 'February', text: 'February' },
                { value: 'March', text: 'March' },
                { value: 'April', text: 'April' },
                { value: 'May', text: 'May' },
                { value: 'June', text: 'June' },
                { value: 'July', text: 'July' },
                { value: 'August', text: 'August' },
                { value: 'September', text: 'September' },
                { value: 'October', text: 'October' },
                { value: 'November', text: 'November' },
                { value: 'December', text: 'December' },
              ]
            }
        },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/SlimTopCurve'),
    AppFooter: () => import('../../incudes/Footer'),

    // AppStaticImage: () => import('../../views/PriceSensitiveInformationAndNotices/StaticImage'),
  },
  methods: {
    keyFeatureTabOpen: function(targetName,event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(targetName).style.display = "block";
        var newElement = document.getElementById(targetName);
     // console.log(newElement.id);
        this.selectedTabName = newElement.id;
        event.target.className += " active";

      },
    searchFile:function () {

      axios.get('get-downloadable-file', {
        params: {
          shortcode: this.shortcode,
          year: this.yearSearch.value,
          month: this.monthSearch.value,
          keyword: this.search,
          type: 'search',
        }
      }).then((response) => {
        if(response.status == 200){
          this.downloadFileData = response.data.details;

        }
      })
        .catch(error => console.log(error));
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

    },
    getDownloadFileContent(){
      axios.get('get-downloadable-file', {
        params: {
          tab_name: 'psi'
        }
      }).then((response) => {
        if(response.status == 200){
          this.downloadFileData = response.data.details.reverse();
        }
      }).catch(error => console.log(error));

    },
    getInsContent(){
      axios.get('get-downloadable-file', {
        params: {
          tab_name: 'ins'
        }
      }).then((response) => {
        if(response.status == 200){
          this.insData = response.data.details.reverse();
        }
      }).catch(error => console.log(error));

    }

  },
  created() {
    this.getHeaderContent();
    this.getDownloadFileContent();
    this.getInsContent();
  },
  mounted() {
    // this.$store.state.isLoading =false;
  },
}
</script>
<style lang="" scoped>
  .tabPanel .tab {
    overflow: hidden;
    background-color: #f1f1f1;
    border-bottom: 2px solid #00a6b4;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .tabPanel .tabcontent1 {
    display: none;
    padding: 5px 0px;
    border-top: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    -webkit-animation: fadebottomToTop 0.5s ease-in-out forwards;
    animation: fadebottomToTop 0.5s ease-in-out forwards;
  }

  .tabPanel .tab .tablinks1 {
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
  @media screen and (max-width: 600px){
    .tabPanel .tab {
      flex-wrap: wrap;
    }
    .tabPanel .tab .tablinks1 {
      flex-basis: 50%;
    }
  }

  .tabPanel .tab button.active {
    background-color: #00a6b4;
    color: #fff;
  }
    .vs__dropdown-toggle{
    padding: 0 0 9px !important;
  }
  .vs__clear{
    display: none !important;
  }
  .v-select  {
    font-size: 14px !important;
    margin: -11px !important;
    padding-top: 11px !important;
  }



  .footer_button_content{
    padding: 20px 0;
    text-align: center;
  }
  .footer_button_content .footer_button2 {
    outline: none;
    border: 2px solid #00a6b4;
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

  .footer_button_content .footer_button2:hover {
    outline: none;
    border: 2px solid #00a6b4;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-decoration: none;
    color: #ffffff;
    background-color: #00a6b4;
    display: inline-block;
    margin: auto;
    margin-right: 10px;
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
        display: block;
    }
    .mcategory {
        display: none;
    }


    .categoryDetails .tabcontent1 {
        border: none;
    }
    @media screen and (max-width: 600px){
       .footer_button_content .footer_button2 {
          margin-bottom: 10px;

        }
        .categories {
            display: none;
        }
        .mcategory {
            display: block;
        }

      .homePageTitleDetails p{
        padding: 10px!important;
      }

      .footer_button_content .footer_button2[data-v-3b5263a2] {
        outline: none;
        border: 2px solid #00a6b4;
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
        margin-bottom: 10px!important;
      }
    }

    /* News CSS  */
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
  padding: 15px 20px 10px 20px;;
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
  display: none;
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

/* Custom CSS  */
.custom-select {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}
.keyword-field {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}
.homePageTitleDetails p {
    font-size: 14px;
    padding: 20px 250px 20px 250px;
}
.latest {
    margin: 20px;
}
.logo {
    text-align: center;
}
.single-news {
    padding-bottom: 10px;
}
/* #feature {
    display: block;
} */

/* Report Grid Section  */
  .tabcontent112 .files{
    height: 175px;
    border: 1px solid #ffe4e4;
    position: relative;
    margin-bottom: 20px;
  }

  .download-item {
    border: 1px solid #ffe7e7;
    position: relative;
    margin-bottom: 20px;
    height: 175px;
  }

  .download-item:hover {
    border: 1px solid #ffe4e4;
  }
  .download-item p, .download-item h5 {
    padding: 0px 20px;
  }

  p.tag span {
     position: absolute;
    right: 0px;
    background: #ffe4e4;
    line-height: 22px;
    padding: 0px 16px;
    color: #fff;
    border-bottom-left-radius: 6px;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    float: right;
  }


  .down-link {
    padding: 15px;
    position: absolute;
    bottom: 0;
    background: #ffe4e4;
    font-size: 14px;
    font-weight: 100%;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  .download-item h5 {
    padding-top: 30px;
    margin: auto;
  }

  .down-link:hover {
    padding: 15px;
    position: absolute;
    bottom: 0;
    background: #00a6b4;
    font-size: 14px;
    font-weight: 100%;
    width: 100%;
    color: #ffffff;
    text-decoration: none;
  }

  .inner_box h4  {
    text-align: center;
    padding: 20px;
  }


</style>
