<template>
  <section>
    <div v-if="corporateGovernance.length > 0" class="tabPanel ">
      <div class="categoryDetails" id="categoryFeature1">
        <div class="container-lg"></div>
        <br />
        <div class="container-lg">
          <div class="tab">
            <button
              v-for="(tab, index) in corporateGovernance"
              :key="tab.id"
              class="tablinks1 Annual_Reports_TAb"
              :id="[index == 0 ? 'defaultOpen1' : '']"
              @click="keyFeatureTabOpen(`content_${tab.id}`, $event)"
            >
              {{ tab.name }}
            </button>
          </div>

          <div
            v-for="(content, index) in corporateGovernance"
            :key="`contents_${content.id}`"
            :id="`content_${content.id}`"
            class="tabcontent1 "
            :style="{ display: [index == 0 ? 'block' : 'none'] }"
          >
            <br />
            <div
              class="row filterOptions"
              v-if="content.tab_content.length > 0"
            >
              <div
                class="col-md-12"
                v-for="(tabData, index) in content.tab_content"
                :key="tabData.id"
              >
                <b-card class="product-card">
                  <a
                    v-b-toggle="'annualReportcollapse' + index"
                    block
                    class="d-flex"
                  >
                    <strong
                      class="question_product"
                      style="color:white; font-size: 1.25rem;"
                      >{{ tabData.name }}</strong
                    >
                  </a>
                  <b-collapse v-bind:id="'annualReportcollapse' + index">
                    <b-card class="question-card">
                      <div
                        v-if="tabData.corporate_governance.length > 0"
                        class="row"
                      >
                        <div
                          v-for="file in tabData.corporate_governance"
                          :key="file.id"
                          class="col-md-3"
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
                              <p>{{ file.file_name }}</p>
                            </div>

                            <div class="download-report-btn">
                              <a :href="file.download_file" target="_blank"
                                >Download PDF File</a
                              >
                              <img
                                src="../../../assets/img/report/Download-PDF.png"
                                alt=""
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </b-card>
                  </b-collapse>
                </b-card>
              </div>
            </div>
            <br />
          </div>

          <!-- <div class="footer_button_content ">
            <router-link
              to="/price-sensitive-information-and-notices"
              class="footer_button2"
              >Price-Sensitive Information</router-link
            >
            <router-link
              to="/financial-information-for-investors-and-shareholders"
              class="footer_button2"
              >Financial Information</router-link
            >
            <router-link
              :to="{ name: 'RegulatoryDisclosure', params: { id: 'rd' } }"
              class="footer_button2"
              >Regulatory Disclosures</router-link
            >
          </div> -->
        </div>
      </div>
    </div>
    <div class="container-lg">
      <div class="out_management_btn">
        <a href="https://idlc.com/our-management" target="_blank">Our Management</a>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "TabbedPanel.vue",

  data() {
    return {
      corporateGovernance: []
    };
  },

  methods: {
    keyFeatureTabOpen: function(targetName, event, tabId) {
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
      event.target.className += " active";
    },
    getCorporateGovernanceData() {
      axios
        .get("get-corporate-governance-data")
        .then(response => {
          if (response.status == 200) {
            console.log('response =>', response)
            this.corporateGovernance = response.data.conporateGovernance;
          }
        })
        .catch(error => console.log(error));
    }
  },
  created() {
    this.getCorporateGovernanceData();
  },
  updated() {
    $("#defaultOpen1").trigger("click");
  }
};
</script>

<style scoped>
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
.annual_report_heading {
  font-size: 19px;
  padding-bottom: 10px;
}
.product-card a {
  text-decoration: none;
  color: #000;
}
.annual-report {
  display: inline-block;
}
.annual-report .annual-text-btn {
  padding-left: 150px;
}
.search-pdf {
  border-radius: 40px;
  border: 1px solid #00a6b4;
}
.fa-placholder {
  font-family: "FontAwesome";
}

.annual_report_heading {
  padding-bottom: 5px;
}
.tabPanel {
  padding-top: 30px;
}
.tabPanel .tab {
  overflow: hidden;
  background-color: #f1f1f1;
  border-bottom: 2px solid #00a6b4;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  margin-bottom: 10px;
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

.tabPanel .tab button.active {
  background-color: #00a6b4;
  color: #fff;
}

.tabPanel .tabcontent1 ul {
  margin-bottom: 0px;
}

.tabPanel .tabcontent1 ul li {
  font-size: 14px;
}

.tabPanel .tabcontent1 ul li i {
  margin-right: 10px;
}

/*Sub Tab Panel*/

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

.footer_button_content {
  padding: 20px 0;
  text-align: center;
}

.tabPanel .tabcontent1 .tabcontent1Button {
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
  margin-bottom: 5px;
  margin: auto;
}

.footer_button_content .tabcontent1Button:hover {
  outline: none;
  border: 2px solid #00a6b4;
  padding: 10px 30px;
  font-size: 14px;
  border-radius: 100px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  margin-right: 20px;
  text-decoration: none;
  color: #ffffff;
  background-color: #00a6b4;
  display: inline-block;
  margin: auto;
}

.footer_button2 {
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

.footer_button2:hover {
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
.out_management_btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 60px;
  padding-top: 30px;
  border-top: 2px solid #00a6b4;
}
.out_management_btn a{
  outline: none;
    border: 2px solid #00a6b4;
    padding: 7px 20px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all .3s;
    transition: all .3s;
    margin-right: 20px;
    text-decoration: none;
    color: #333;
    display: inline-block;
    background: #fff;
    text-decoration: none;
}
.out_management_btn a:hover {
  outline: none;
    background: #00a6b4;
    color: #fff;
    text-decoration: none;
    text-decoration: none;
}

@media screen and (max-width: 600px) {
  .footer_button2 {
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
    margin-bottom: 10px;
    margin-right: 10px;
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
    padding: 2px !important;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    font-size: 14px;
    border-right: 1px solid #ddd;
  }

  .text-btn {
    padding: 10px;
    text-align: center;
  }
}

ul {
  list-style: none !important;
}

.m_disscussion {
  text-align: center;
}
@media screen and (max-width: 600px) {
  .m_disscussion img {
    width: 100%;
  }
}
</style>
