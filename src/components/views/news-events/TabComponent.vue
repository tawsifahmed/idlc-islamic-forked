<template>
  <section>
    <!--CATEGORIZED PORDUCT Part Start-->

    <!-- <div id="topBreak"></div> -->
    <!--CATEGORIZED PORDUCT Part End-->
    <div class="productFeatures">
      <div class="categoryDetails" id="categoryFeature1">
        <div class="container-lg">
          <!-- <div class="productPageTitleDetai sectionTitle">
              <h2 style="text-align: center; " class="h2Responsive ">
                  Lorem ipsum dolor sit.
              </h2>
              <h6 class="categoriesTagline">Sample Tagline</h6>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam vel adipisci eligendi recusandae veritatis vitae. Consequatur suscipit quo atque dignissimos esse aperiam doloribus vitae.</p>
          </div> -->
        </div>
        <br>
        <div class="container-lg commonSpace">
          <div class="tab">
            <button class="tablinks1 active" @click="keyFeatureTabOpen( 'feature',$event)" id="defaultOpen1">News And
              Events
            </button>
            <button class="tablinks1" @click="keyFeatureTabOpen( 'eligibility',$event)">Media Resources</button>
            <button class="tablinks1" @click="keyFeatureTabOpen( 'howCanIUse',$event)">Media Contact</button>
            <button class="tablinks1" @click="keyFeatureTabOpen( 'c_19_poliicy',$event)">Covid-19 Policy</button>
          </div>

          <div id="feature" class="tabcontent">
            <div class="homePageTitleDetails sectionTitle">
              <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                {{this.$parent.contentData.second_title}}
              </h2>
              <!-- <h6>{{ contentData.tagline }}</h6> -->
              <span v-html="this.$parent.contentData.description"></span>
            </div>

            <div class="news-main-content">
              <div class="upper-part">
                <div class="searchable">
                  <div class="container">
                    <div class="col-md-12">
                      <div class="row">
                        <div class="col-md-4 section-1">
                          <select  :options="years" class="form-control"   @change="onChangeYear($event)" >
                            <option   :value="year.value" v-for="year in years" :key="year.text">{{ year.text}}</option>
                          </select>

                        </div>
                        <div class="col-md-4 section-2">
                          <select   class="form-control"  @change="onChangeMonth($event)" >
                            <option  :value="month.value" v-for="month in months" :key="month.text">{{ month.text}}</option>
                          </select>
                        </div>
                        <div class="col-md-3 section-3 custom-field">

                          <b-form-input type="text" v-model="search_data" placeholder="Keyword"></b-form-input>

                        </div>
                        <div class="col-md-1 section-4">
                          <!--                                        <button @click="searchNews()" class="btn  search-btn"><i class="fa fa-search"></i></button>-->
                          <button @click="searchNews()" class="btn  search-btn">Search</button>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

              </div>

              <div class="news-content-list row">
                <div class="col-12 ">
                  <div class="homePageTitleDetails sectionTitle">
                    <h2 style="text-align: center; " class="h2Responsive text-uppercase">
                      Latest News
                    </h2>
                    <p></p>
                  </div>
                  <div class="tab-panel"></div>
                  <div class="latest_news slider multiple-items">
                    <div class="row">
                      <div class="col-md-4  single-news" v-for="newsData in news" :key="newsData.id">
                        <div class="news_box_gutter">
                          <div class="news_box">
                            <div class="news_box_image">
                              <img :src="newsData.image" alt="" @load="onImageLoad">
                            </div>
                            <div class="news_box_header">
                              <h2>{{ newsData.title.substring(0, 105)}}</h2>
                              <p style="font-size: 10px; margin: 10px 0;">Published Date: {{
                                formatDate(newsData.publish_date)}}</p>
                            </div>
                            <div class="news_box_body">
                              <span v-html="newsData.description"></span>
                            </div>
                            <div class="news_box_footer">
                              <router-link class="news_box_learnMore_btn"
                                           :to="{ name: 'News', params: { newsId: newsData.id }}">Read More
                              </router-link>
                            </div>
                            <div class="news_box_share">
                              <!-- <span>Share On</span> -->
<!--                              <ShareNetwork-->
<!--                                href="news-and-events"-->
<!--                                title=""-->
<!--                                network="facebook"-->
<!--                                :url="shareBase+newsData.id"-->
<!--                              ><span class="icon-facebook-f"></span></ShareNetwork>-->
<!--                              <ShareNetwork-->
<!--                                href="news-and-events"-->
<!--                                title=""-->
<!--                                network="linkedin"-->
<!--                                :url="shareBase+newsData.id"-->
<!--                              ><span class="icon-linkedin"></span></ShareNetwork>-->

                              <a class=""  title="Share on Facebook" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://idlc-islamic.netlify.app/news/'+newsData.id">
                                <span class="icon-facebook-f"></span>

                              </a>
                              <a title="Share on Linked In" target="_blank" :href="'https://www.linkedin.com/sharer/sharer.php?u=https://idlc-islamic.netlify.app/news/'+newsData.id">
                                <span class="icon-linkedin"></span>
                              </a>



                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container text-center"><a class="tabcontent2Button" @click="getAllNewsContents()" style="cursor: pointer;">See More</a>
            </div>
          </div>

          <div id="eligibility" class="tabcontent">
            <div class="homePageTitleDetails sectionTitle">
              <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                LOGOS
              </h2>
              <!-- <h6>{{ contentData.tagline }}</h6> -->
              <p>IDLC Islamic logo packages for print (.EPS), broadcast and web (.SVG and .PNG) use. For more
                information, view logo usage guidelines.</p>
              <p>IDLC Islamic grants you a limited license to download and use the logos and imagery solely for
                editorial use.</p>
              <div class="logo">
                <!-- <img src="../../../assets/img/logo.png" height="200px" width="300px"> -->
                <!-- <img src="../../../assets/img/logo/IDLC_NEW_PLC.png" height="200px" width="300px"> -->
                <img src="../../../assets/img/logo/IDLC_NEW2.png" width="300px">
              </div>
            </div>
            <div class="footer_button">
              <!-- <a href="/static/IDLC_NEW.png" class="tabcontent1Button" download>Download (.PNG) File</a>
              <a href="/static/IDLC_PLC_newlogo.ai" class="tabcontent1Button" download>Download (.AI) File</a> -->
              <a href="/static/IDLC_NEW2.png" class="tabcontent1Button" download>Download (.PNG) File</a>
              <a href="/static/IF_Logo_Final.ai" class="tabcontent1Button" download>Download (.AI) File</a>
            </div>
          </div>

          <div id="howCanIUse" class="tabcontent">
            <div class="homePageTitleDetails sectionTitle"
                 style="background: #f2f2f2; margin-top: 20px; border-radius: 5px">
              <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                Media Contact
              </h2>
              <!-- <h6>{{ contentData.tagline }}</h6> -->
              <div v-for="mediaContactItem in mediaContact" :key="mediaContactItem.id">
                <p>{{mediaContactItem.branch_name}}, {{mediaContactItem.branch_address}},
                  {{mediaContactItem.branch_phone}}
                  , {{mediaContactItem.branch_email}},
                  {{mediaContactItem.branch_fax}}</p>
              </div>
            </div>
          </div>

          <div id="c_19_poliicy" class="tabcontent">
            <div class=" sectionTitle text-center" style="background: #f2f2f2; border-radius: 5px; padding: 15px;">
              <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                IDLC Group Operation Guideline during Covid-19
              </h2>
              <br>
              <!--                    <a href="~@/assets/pdf/IDLC_Operation_Plan_During_Covid_19.pdf" target="_blank" class="tabcontent1Button" download>Download</a>-->
              <a href="/static/IDLC_Operation_Plan_During_Covid_19.pdf" class="tabcontent1Button" target="_blank" download>Download Now</a>

              <!-- <h5 class="text-center">COVID-19 Pandemic Steering Committee:</h5>
              <p class="text-center">The above committee consisting of the following members have been formed to centrally coordinate regarding all concerns and action related to COVID-19 within IDLC:</p>
              <p class="text-center">Akhteruddin Mahmood, Group Head of Human Resources <br>
            Syed Javed Noor, General Manager & Head of Consumer Division<br>
            M Maksudul Hoque, Head of Administration<br>
            Jobayer Alam, Head of SME & Strategic Planning<br>
            Jane Alam Romel, Group Chief Marketing Officer
            </p> -->
            </div>
          </div>
        </div>


        <br>


      </div>
    </div>

    <!-- Modal -->
    <div class="customPopUp" @click.stop="modalShow = !modalShow" v-if="modalShow" newsData="newsData">
      <div class="customModalBody" @click.stop="">
        <div class="customModalHeader">
          <button class="closeCustomModal" @click.stop="modalShow = !modalShow"><span class="icon-times"></span>
          </button>
          <h5>{{newsData.title}}</h5>
        </div>
        <div class="customModalContent">
          <div class="image">
            <img :src="newsData.image" width="100%" alt="">

          </div>
          <br>
          <div class="details">
            <p><span v-html="newsData.description"></span></p>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>
<script>
  import axios from "axios";
  export default {
    name: "CategorizedProduct",
    data() {
      return {
        search_data: '',
        yearSearch: '',
        monthSearch: '',
        shortcode: 'NewsAndEvent',
        news: "",
        mediaContact: "",
        shareBase: this.$store.state.shareBaseUrl,
        perPage: 3,
        modalShow: false,
        currentPage: 1,
        limit: 9,
        // covid_19_pdf: {file: require('../../../assets/pdf/IDLC_Operation_Plan_During_Covid_19.pdf')},
        selected: null,
        years: [
          {value: '', text: 'All'},
          {value: 2024, text: '2024'},
          {value: 2023, text: '2023'},
          {value: 2022, text: '2022'},
          {value: 2021, text: '2021'},
          {value: 2020, text: '2020'},
          {value: 2019, text: '2019'},
          {value: 2018, text: '2018'},
          {value: 2017, text: '2017'},
          {value: 2016, text: '2016'},
          {value: 2015, text: '2015'},
          {value: 2014, text: '2014'},
          {value: 2013, text: '2013'},
          {value: 2012, text: '2012'},
          {value: 2011, text: '2011'},
          {value: 2010, text: '2010'},
          {value: 2009, text: '2009'},
          {value: 2008, text: '2008'},
          {value: 2007, text: '2007'},
          {value: 2006, text: '2006'},
          {value: 2005, text: '2005'},
          {value: 2004, text: '2004'},
          {value: 2003, text: '2003'}
        ],
        months: [
          {value: '', text: 'All'},
          {value: 'January', text: 'January'},
          {value: 'February', text: 'February'},
          {value: 'March', text: 'March'},
          {value: 'April', text: 'April'},
          {value: 'May', text: 'May'},
          {value: 'June', text: 'June'},
          {value: 'July', text: 'July'},
          {value: 'August', text: 'August'},
          {value: 'September', text: 'September'},
          {value: 'October', text: 'October'},
          {value: 'November', text: 'November'},
          {value: 'December', text: 'December'},
        ]
      }
    },
    methods: {
      forceFileDownload(response, title) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', title);
        document.body.appendChild(link);
        link.click()
      },
      keyFeatureTabOpen: function (cityName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
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
      getNewsContents: function () {
        this.$store.state.isLoading = true;
        axios.get('get-news', {
          params: {
            search_type: 'search_data',
            limit: this.limit,
          }
        }).then((response) => {
          if (response.status == 200) {
            this.news = response.data.details;

          }
        })
          .catch(error => console.log(error));
      },

      getAllNewsContents() {
        this.$store.state.isLoading = true;
        axios.get('get-news', {
          params: {
            search_type: 'search_data',
          }
        }).then((response) => {
          if (response.status == 200) {
            this.news = response.data.details;

          }
        })
          .catch(error => console.log(error));
      },
      getMediaContact: function () {
        axios.get('media-contact').then((response) => {
          if (response.status == 200) {
            this.mediaContact = response.data.details;
          }
        })
          .catch(error => console.log(error));
      },
      searchNews: function () {
        axios.get('get-news', {
          params: {
            year: this.yearSearch,
            month: this.monthSearch,
            key_search: this.search_data,
            search_type: 'search_data',
          }
        }).then((response) => {
          if (response.status == 200) {
            this.news = response.data.details;
          }
        })
          .catch(error => console.log(error));
      },

      openModal(newsItem) {
        this.modalShow = true;
        this.newsData = newsItem;
      },
      formatDate(input) {
        var datePart = input.match(/\d+/g),
          year = datePart[0].substring(0), // get only two digits
          month = datePart[1],
          day = datePart[2];
        const monthNames = ["January", "February", "March", "April", "May", "June",
          "July", "August", "September", "October", "November", "December"
        ];
        return day + ' ' + monthNames[month - 1] + ' ' + year;
      },
      onImageLoad() {
        // this.$store.state.isLoading =false;
      },

      onChangeYear(event){
        this.yearSearch = event.target.value;
      },
      onChangeMonth(event){
        this.monthSearch = event.target.value;
      }


    },
    created() {
      this.getNewsContents();
      this.getMediaContact();
    }

  }
</script>
<style lang="" scoped>
  .vs__dropdown-toggle {
    padding: 0 0 9px !important;
  }

  .vs__clear {
    display: none !important;
  }

  .v-select {
    font-size: 14px !important;
    margin: -11px !important;
    padding-top: 11px !important;
  }

  .categoryBody .mcategory .reason {
    flex-basis: 23%;
    background: rgba(255, 255, 255, 0.15);
    background: rgba(214, 46, 47, 0.95);
    margin: 10px;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .categoryBody .mcategory .reason:hover {
    background: rgba(214, 46, 47, 1);
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

  .categoryBody .mcategory .owl-buttons {
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

  .container-lg .tab {
    border-bottom: 2px solid #00a6b4;
  }

  .categoryDetails .tabcontent1 {
    border: none;
  }

  @media screen and (max-width: 600px) {
    .container-lg .tab {
      border-bottom: none;
    }

    .tablinks1 {
      border: 2px solid #00a6b4 !important;
    }

    .tablinks1.active {
      border: 2px solid #fff !important;
    }

    .categories {
      display: none;
    }

    .mcategory {
      display: block;
    }

    .tab .tablinks1 {
      margin-bottom: 5px;
    }
  }

  /* News CSS  */
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
    padding: 15px 20px 10px 20px;;
  }

  .news_box .news_box_header h2,
  .news_box .news_box_body p {
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .news_box .news_box_header h2 {
    font-size: 1rem;
    -webkit-line-clamp: 3;
    height: 65px;
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

  /* Custom CSS  */

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
    padding-bottom: 34px;
    padding-left: 0;
  }

  #feature {
    display: block;
  }


  .tab button.active {
    background-color: #00a6b4 !important;
    color: #fff !important;
  }

  .tab .tablinks1 {
    margin-right: 1px;

    align-items: center;
    color: #333 !important;
    border-right: 1px solid #ddd;
    background: #f2f2f2;
  }

  .tab .tablinks1:hover {
    background: #ddd;
  }

  .tab {
    background-color: unset !important;
  }


  @media screen and (max-width: 600px) {
    .homePageTitleDetails p {
      font-size: 14px;
      padding: 5px;
    }

    .homePageTitleDetails h2 {
      padding-bottom: 20px;
    }

    .homePageTitleDetails {
      padding-bottom: 20px;
    }

    .single-news {
      padding-left: 15px;
    }
  }

  .footer_button {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }

  .footer_button .tabcontent1Button {
    margin: 20px 10px;
  }

  .footer_button .tabcontent1Button {
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
  }

  .footer_button .tabcontent1Button:hover {
    outline: none;
    border: 2px solid #ffffff;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-decoration: none;
    color: #ffffff;
    background-color: #00a6b4;
    display: inline-block;
  }

  .tabcontent1Button {
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

  .tabcontent1Button:hover {
    border: 2px solid #00a6b4;
    background: #00a6b4;
    color: #fff;
  }

</style>
