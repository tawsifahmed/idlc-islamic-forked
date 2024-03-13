<template>
  <div class="container">
    <div class="row filterOptions gReport">
      <div class="col-md-12">
        <!--          Green Finance Reports-->
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 1" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Green and Sustainable Finance Reports</strong
            >

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 1">
            <b-card class="question-card">
              <div class="row">
                <div class="latest_news slider multiple-items col-md-12">
                  <div class="row">
                    <!-- <div > -->

                    <div
                      class="col-md-4 col-lg-3"
                      v-for="fileData in tabOne"
                      :key="fileData.id"
                    >
                      <div class="card-single-pdf">
                        <div class="title-report-pdf"></div>
                        <div class="single-report-img">
                          <img
                            src="../../../assets/img/report/PDF-File.png"
                            alt=""
                          />
                        </div>
                        <div class="report-name">
                          <p>{{ fileData.downloadable_title }}</p>
                        </div>
                        <div class="download-report-btn">
                          <a
                            :href="fileData.downloadable_file"
                            target="_blank"
                            download
                            >Download PDF File</a
                          >
                          <img
                            src="../../../assets/img/report/Download-PDF.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 2" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Low Cost Fund Opportunities</strong
            >

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 2">
            <b-card class="question-card">
              <div class="row">
                <div class="latest_news slider multiple-items col-md-12">
                  <div class="row">
                    <!-- <div > -->

                    <div
                      class="col-md-4 col-lg-3"
                      v-for="fileData in tabTwo"
                      :key="fileData.id"
                    >
                      <div class="card-single-pdf">
                        <div class="title-report-pdf"></div>
                        <div class="single-report-img">
                          <img
                            src="../../../assets/img/report/PDF-File.png"
                            alt=""
                          />
                        </div>
                        <div class="report-name">
                          <p>{{ fileData.downloadable_title }}</p>
                        </div>
                        <div class="download-report-btn">
                          <a
                            :href="fileData.downloadable_file"
                            target="_blank"
                            download
                            >Download PDF File</a
                          >
                          <img
                            src="../../../assets/img/report/Download-PDF.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>
                  </div>
                  <br />

                  <br />
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 3" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Event & Activities</strong
            >

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 3">
            <b-card class="question-card">
              <div class="row">
                <div class="latest_news slider multiple-items col-md-12">
                  <div class="row">
                    <!-- <div > -->

                    <div
                      class="col-md-4 col-lg-3"
                      v-for="fileData in tabThree"
                      :key="fileData.id"
                    >
                      <div class="card-single-pdf">
                        <div class="title-report-pdf"></div>
                        <div class="single-report-img">
                          <img
                            src="../../../assets/img/report/PDF-File.png"
                            alt=""
                          />
                        </div>
                        <div class="report-name">
                          <p>{{ fileData.downloadable_title }}</p>
                        </div>
                        <div class="download-report-btn">
                          <a
                            :href="fileData.downloadable_file"
                            target="_blank"
                            download
                            >Download PDF File</a
                          >
                          <img
                            src="../../../assets/img/report/Download-PDF.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 4" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Client’s Environmental Activities</strong
            >

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 4">
            <b-card class="question-card">
              <div class="row">
                <div class="latest_news slider multiple-items col-md-12">
                  <div class="row">
                    <!-- <div > -->

                    <div
                      class="col-md-4 col-lg-3"
                      v-for="fileData in tabFour"
                      :key="fileData.id"
                    >
                      <div class="card-single-pdf">
                        <div class="title-report-pdf"></div>
                        <div class="single-report-img">
                          <img
                            src="../../../assets/img/report/PDF-File.png"
                            alt=""
                          />
                        </div>
                        <div class="report-name">
                          <p>{{ fileData.downloadable_title }}</p>
                        </div>
                        <div class="download-report-btn">
                          <a
                            :href="fileData.downloadable_file"
                            target="_blank"
                            download
                            >Download PDF File</a
                          >
                          <img
                            src="../../../assets/img/report/Download-PDF.png"
                            alt=""
                          />
                        </div>
                      </div>
                      <!-- </div> -->
                    </div>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>

        <!--          Partnerships-->
        <!--          <b-card  class="product-card">-->
        <!--            <a  v-b-toggle="'annualReportcollapse' + 2" block class="d-flex">-->
        <!--              <strong class="question_product" style="color:white; font-size: 1.25rem;">Partnerships</strong>-->
        <!--              &lt;!&ndash; replace these with your preferred icons &ndash;&gt;-->
        <!--              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>-->
        <!--              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>-->
        <!--            </a>-->
        <!--            <b-collapse v-bind:id="'annualReportcollapse' + 2">-->
        <!--              <b-card class="question-card">-->
        <!--                <a  v-b-toggle.collapse-home-loan-1 block>-->
        <!--                  <div class="row" >-->
        <!--                    <div class="latest_news slider multiple-items col-md-12" >-->
        <!--                        <div class="row">-->
        <!--                          <div class="container" v-html="partnershipData['0'].description"></div>-->
        <!--                        </div>-->
        <!--                    </div>-->
        <!--                </div>-->
        <!--                  &lt;!&ndash; replace these with your preferred icons &ndash;&gt;-->
        <!--                  <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>-->
        <!--                  <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>-->
        <!--                </a>-->
        <!--              </b-card>-->
        <!--            </b-collapse>-->
        <!--          </b-card>-->

        <!--          Green Finance Contact Details-->
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 6" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Green and Sustainable Finance Contact Details</strong
            >

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 6">
            <b-card class="question-card">
              <a v-b-toggle.collapse-home-loan-1 block>
                <div class="row">
                  <div class="latest_news slider multiple-items col-md-12">
                    <div v-if="contactDetails.length > 0" class="row">
                      <div
                        class="container"
                        v-html="contactDetails['0'].description"
                      ></div>
                    </div>
                  </div>
                </div>
                <!-- replace these with your preferred icons -->

                <strong aria-hidden="true" class="ml-auto"
                  ><span class="icon"
                    ><span
                      class="icon-caret-down"
                      style="color: #fff; font-size: 18px;"
                    ></span></span
                ></strong>
              </a>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'annualReportcollapse' + 7" block class="d-flex">
            <strong
              class="question_product"
              style="color:white; font-size: 1.25rem;"
              >Customer Feedback on Green and Sustainable Finance</strong
            >
            <!-- replace these with your preferred icons -->

            <strong aria-hidden="true" class="ml-auto"
              ><span
                class="icon-caret-down"
                style="color: #fff; font-size: 18px;"
              ></span
            ></strong>
          </a>
          <b-collapse v-bind:id="'annualReportcollapse' + 7">
            <b-card class="question-card">
              <a v-b-toggle.collapse-home-loan-1 block>
                <div class="row">
                  <div class="latest_news slider multiple-items col-md-12">
                    <div class="row justify-content-center">
                      <div class="col-md-8">
                        <form
                          class="form feedback_form"
                          method="POST"
                          @submit.prevent="feedbackFormSubmit"
                        >
                          <h3 class="form-title">Customer Feedback</h3>
                          <div class="form-group">
                            <label for="name">Your Name</label>
                            <input
                              type="text"
                              class="form-control"
                              id="name"
                              v-model="form.name"
                              placeholder="Type your name"
                              autocomplete="off"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="name">Phone Number</label>
                            <input
                              type="text"
                              class="form-control"
                              id="phone"
                              v-model="form.phone"
                              placeholder="Type your phone number"
                              required
                            />
                          </div>
                          <div class="form-group">
                            <label for="email">Email address</label>
                            <input
                              type="email"
                              class="form-control"
                              id="email"
                              v-model="form.email"
                              aria-describedby="emailHelp"
                              placeholder="Email Address"
                            />
                          </div>
                          <div class="form-group">
                            <label for="feedback">Feedback</label>
                            <textarea
                              class="form-control"
                              id="feedback"
                              rows="4"
                              v-model="form.feedback"
                              placeholder="Type your feedback.."
                            ></textarea>
                          </div>
                          <div class="text-center">
                            <button type="submit" class="submit-btn">
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </b-card>
          </b-collapse>
        </b-card>
      </div>
    </div>
    <br />
    <br />
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "CategorizedProduct",
  data() {
    return {
      shortcode: "green_finance",
      modalShow: false,
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      perPage: 3,
      currentPage: 1,
      downloadFiles: [],
      newsData: {},
      contactDetails: [],
      partnershipData: [],

      news: "",
      selected: null,
      form: {
        name: "",
        email: "",
        phone: "",
        feedback: ""
      }
    };
  },
  computed: {
    tabOne() {
      return this.downloadFiles.filter(function(item) {
        return item.tab_name == "Green And Sustainable Finance Report";
      });
    },
    tabTwo() {
      return this.downloadFiles.filter(function(item) {
        return item.tab_name == "Low Cost Fund Opportunities";
      });
    },
    tabThree() {
      return this.downloadFiles.filter(function(item) {
        return item.tab_name == "Event & Activities";
      });
    },
    tabFour() {
      return this.downloadFiles.filter(function(item) {
        return item.tab_name == "Client's Environmental Activities";
      });
    }
  },
  methods: {
    filterTabData(fileData, tabName) {
      fileData.filter(function(item) {
        return item.tab_name == tabName;
      });
    },
    keyFeatureTabOpen: function(cityName, event) {
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
    getPageContents: function() {
      axios
        .get("get-news", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.news = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },
    getDownloadableFiles: function() {
      axios
        .get("get-downloadable-file", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.downloadFiles = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    getContactDetails() {
      axios
        .get("investor-relation-contact", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.contactDetails = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    getPartnershipData() {
      axios
        .get("get-table", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.partnershipData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    downloadItem({ url, label }) {
      axios
        .get(url, { responseType: "blob" })
        .then(response => {
          const blob = new Blob([response.data], { type: "application/pdf" });
          const link = document.createElement("a");
          link.href = URL.createObjectURL(blob);
          link.download = label;
          link.click();
          URL.revokeObjectURL(link.href);
        })
        .catch(console.error);
    },
    openModal(newsItem) {
      console.log(this.modalShow);
      this.modalShow = true;
      this.newsData = newsItem;
    },
    feedbackFormSubmit() {
      // green-finance-customer_feedbacks
      axios
        .post("green-finance-customer_feedbacks", this.form, {
          credentials: true
        })
        .then(res => {
          console.log(res);
          resolve(res);
        })
        .catch(err => {
          console.log(err);
          reject(error);
        });
    }
  },
  created() {
    this.getPageContents();
    this.getDownloadableFiles();
    this.getContactDetails();
    this.getPartnershipData();
  }
};
</script>
<style lang="" scoped>
.gReport {
  margin-top: 40px;
}
.customPagination .page-item {
  background: #000 !important;
}

.productFeatures .tabcontent ul li .page-link {
  font-size: 14px;
  padding: 10px 0;
  background-color: red !important;
}

.customPagination > li.active > a,
.customPagination > li > a:hover {
  color: white !important;
  background-color: green !important;
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
  border: 2px solid red;
  border-radius: 20px;
}

.categoryDetails .tabcontent {
  border: none;
}
@media screen and (max-width: 600px) {
  .categories {
    display: none;
  }
  .mcategory {
    display: block;
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
  height: 50px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  font-size: 14px;
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
  cursor: pointer;
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
  padding-bottom: 34px;
  padding-left: 0;
}
#feature {
  display: block;
}

.tabcontent .pdf_icon .files {
  /*padding: 20px;*/
  height: 175px;
  /*background-color: red;*/

  border: 1px solid #ffe4e4;
  position: relative;
  margin-bottom: 20px;
}

.download-item {
  border: 1px solid #ffe7e7;
  position: relative;
  margin-bottom: 20px;
}

.download-item:hover {
  border: 1px solid #ffe4e4;
}
.download-item p,
.download-item h4 {
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

.download-item h4 {
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

.inner_box h4 {
  text-align: center;
  padding: 20px;
}

.custom-field {
  padding-bottom: 20px;
}
/* .section-4 {
      margin-bottom: 10px;
      display: block;
      text-align: right;
    } */

.product-card {
  background: #00a6b4;
  color: #fff;
  margin-bottom: 5px;
}
.product-card .card-body {
  padding: 0rem;
}
.product-card .question-card {
  padding: 10px;
}
.product-card .card-body .d-flex {
  padding: 10px;
}
.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}
.card-single-pdf {
  margin: 15px auto;
}
@media screen and (max-width: 600px) {
  .card-single-pdf {
    margin: 25px auto;
  }
}

.feedback_form {
  padding: 30px 0 50px 0;
}
.feedback_form .form-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
}
.feedback_form .form-group {
}
.feedback_form .form-group label {
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  text-align: justify;
  color: #333333;
}
.feedback_form .form-group .form-control {
  background: #fafafa;
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  padding: 13px 18px;
  height: auto;
}
.feedback_form .form-group .form-control:focus {
  outline: none;
  box-shadow: none;
}
.feedback_form .submit-btn {
  padding: 10px 32px;
  background: #ffffff;
  border: 2px solid #d8393a;
  border-radius: 100px;
  font-size: 16px;
  line-height: 148%;
  color: #333333;
  margin-top: 20px;
  transition: all 300ms;
}
.feedback_form .submit-btn:hover {
  background: #d8393a;
  color: #ffffff;
}
</style>
