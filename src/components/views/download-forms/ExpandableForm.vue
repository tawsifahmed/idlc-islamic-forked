<template>
  <div class="container filterOptions commonSpace">
    <div class="row">
      <div class="col-md-12">
        <b-card
          class="product-card"
          v-for="(baseCategory, index) in downloadableDocuments"
          :key="index"
          v-if="
            baseCategory.subcategory.length ||
              baseCategory.basedownloadform.length > 0
          "
        >
          <a v-b-toggle="'baseCategory' + index" block class="d-flex">
            <strong class="question_product">{{ baseCategory.name }}</strong>
            <!-- replace these with your preferred icons -->
            <strong v-if="isVisible" aria-hidden="true" class="ml-auto"
              >-</strong
            >
            <strong v-else aria-hidden="true" class="ml-auto">+</strong>
          </a>

          <b-collapse :id="'baseCategory' + index">
            <b-card class="question-card">
              <div class="row  inner_box">
                <div class="col-md-12">
                  <div class="col-md-12">
                    <br />
                    <b-card
                      class="product-card"
                      v-for="(subCategory, index) in baseCategory.subcategory"
                      :key="subCategory.index"
                      v-if="subCategory.downloadform.length > 0"
                    >
                      <a
                        v-b-toggle="'subCategory' + index"
                        block
                        class="d-flex"
                      >
                        <strong class="question_product"
                          >{{ subCategory.name }}
                        </strong>
                        <!-- replace these with your preferred icons -->
                        <strong
                          v-if="isVisible"
                          aria-hidden="true"
                          class="ml-auto"
                          >-</strong
                        >
                        <strong v-else aria-hidden="true" class="ml-auto"
                          >+</strong
                        >
                      </a>

                      <b-collapse :id="'subCategory' + index">
                        <b-card class="question-card">
                          <div class="row  inner_box">
                            <div
                              class="col-md-5 col-lg-3 pdf_icon"
                              v-for="(downloadForm,
                              index) in subCategory.downloadform"
                              :key="index"
                              v-if="subCategory.downloadform.length > 0"
                            >
                              <div
                                class="card-single-pdf"
                                v-if="downloadForm.downloadable_title"
                              >
                                <div class="title-report-pdf">
                                  <p></p>
                                </div>
                                <div class="single-report-img">
                                  <img
                                    src="../../../assets/img/report/PDF-File.png"
                                    alt=""
                                  />
                                </div>
                                <div class="report-name">
                                  <p>{{ downloadForm.downloadable_title }}</p>
                                </div>

                                <a :href="downloadForm.downloadable_file"
                                target="_blank" class="download-report-btn d-flex justify-content-center align-items-center py-2">

                                  <img style="height: 25px;"
                                    src="../../../assets/img/report/Download-PDF.png"
                                    alt=""
                                  />
                                </a>
                              </div>
                            </div>
                          </div>
                        </b-card>
                      </b-collapse>
                    </b-card>

                    <b-card
                      class="question-card"
                      v-if="
                        baseCategory.basedownloadform.length > 0 &&
                          baseCategory.subcategory.length <= 0
                      "
                    >
                      <div class="row  inner_box">
                        <div
                          class="col-md-5 col-lg-3 pdf_icon"
                          v-for="(baseDownloadData,
                          index) in baseCategory.basedownloadform"
                          :key="index"
                        >
                          <div class="card-single-pdf">
                            <div class="title-report-pdf">
                              <p></p>
                            </div>
                            <div class="single-report-img">
                              <img
                                src="../../../assets/img/report/PDF-File.png"
                                alt=""
                              />
                            </div>
                            <div class="report-name">
                              <p>{{ baseDownloadData.downloadable_title }}</p>
                            </div>
                            <a :href="baseDownloadData.downloadable_file"
                            target="_blank" class="download-report-btn d-flex justify-content-center align-items-center py-2">

                              <img style="height: 25px;"
                                src="../../../assets/img/report/Download-PDF.png"
                                alt=""
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </b-card>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'baseCategory_new_01'" block class="d-flex">
            <strong class="question_product"
              >Islamic Service Request Form Deposit</strong
            >

            <strong v-if="isVisible" aria-hidden="true" class="ml-auto"
              >-</strong
            >
            <strong v-else aria-hidden="true" class="ml-auto">+</strong>
          </a>

          <b-collapse id="baseCategory_new_01">
            <b-card class="question-card">
              <div class="row  inner_box">
                <div class="col-md-5 col-lg-3 pdf_icon">
                  <div class="card-single-pdf">
                    <div class="title-report-pdf">
                      <p></p>
                    </div>
                    <div class="single-report-img">
                      <img
                        src="../../../assets/img/report/PDF-File.png"
                        alt=""
                      />
                    </div>
                    <div class="report-name">
                      <p>Islamic Service Request Form Deposit</p>
                    </div>

                    <a href="./static/Islamic_Service_Request_Form_Deposit.pdf"
                    target="_blank" class="download-report-btn d-flex justify-content-center align-items-center py-2">

                      <img style="height: 25px;"
                        src="../../../assets/img/report/Download-PDF.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <b-card class="product-card">
          <a v-b-toggle="'baseCategory_new_02'" block class="d-flex">
            <strong class="question_product"
              >Islamic Service Request Form Financing</strong
            >

            <strong v-if="isVisible" aria-hidden="true" class="ml-auto"
              >-</strong
            >
            <strong v-else aria-hidden="true" class="ml-auto">+</strong>
          </a>

          <b-collapse id="baseCategory_new_02">
            <b-card class="question-card">
              <div class="row  inner_box">
                <div class="col-md-5 col-lg-3 pdf_icon">
                  <div class="card-single-pdf">
                    <div class="title-report-pdf">
                      <p></p>
                    </div>
                    <div class="single-report-img">
                      <img
                        src="../../../assets/img/report/PDF-File.png"
                        alt=""
                      />
                    </div>
                    <div class="report-name">
                      <p>Islamic Service Request Form Financing</p>
                    </div>

                    <a href="./static/Islamic_Service_Request_Form_Financing.pdf"
                    target="_blank" class="download-report-btn d-flex justify-content-center align-items-center py-2">

                      <img style="height: 25px;"
                        src="../../../assets/img/report/Download-PDF.png"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            </b-card>
          </b-collapse>
        </b-card>
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExpandableForm",
  data() {
    return {
      downloadableDocuments: []
    };
  },
  methods: {
    getDownloadableDocuments() {
      axios
        .get("get-download-form-files", {
          params: {
            shortcode: this.$parent.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.downloadableDocuments = response.data.details;
            // console.log(this.downloadableDocuments);
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getDownloadableDocuments();
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
.card-body a {
  font-size: 14px;
  color: inherit !important;
  text-decoration: none;
  padding: 2px 6px 9px 7px;
}
.card-body p {
  padding: 6px !important;
}

.product-card {
  color: #333 !important;
  border: 1px solid rgba(0, 0, 0, 0.125) !important;
  background-color: #f2f2f2;
  margin-bottom: 20px;
}
.product-card .card-body {
  padding: 0.25rem 0 0 0 !important;
}
.product-card .card-body .inner_box {
  padding: 0 20px !important;
}
.question_product {
  color: #333 !important;
}

.pdf_icon .files {
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
  background: #d62e2f;
  font-size: 14px;
  font-weight: 100%;
  width: 100%;
  color: #ffffff !important;
  text-decoration: none;
}

.inner_box h4 {
  text-align: center;
  padding: 20px;
}

.inner_box p {
  text-align: center;
  font-size: 14px;
  padding: 0 40px 20px 40px;
}

.pdf_icon {
  padding: 20px;
}
</style>
