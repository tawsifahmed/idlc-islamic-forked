
  <template>
    <section>

      <div class="tabPanel ">
        <div class="categoryDetails"   id="categoryFeature1">
          <div class="container-lg">
          </div>
          <br>
          <div class="container-lg">
            <div class="tab">
              <button :class="this.$route.params.id == 'rd' ? 'tablinks1 active' : 'tablinks1' " @click="keyFeatureTabOpen( 'Scheduled_Fees_and_Charges', $event)"   >Scheduled Fees and Charges</button>
              <button :class="this.$route.params.id == 'nis' ? 'tablinks1 active' : 'tablinks1' " @click="keyFeatureTabOpen( 'Integrity_Service_Box', $event)" >Integrity Service Box (NIS)</button>
              <button :class="this.$route.params.id == 'ed' ? 'tablinks1 active' : 'tablinks1' " @click="keyFeatureTabOpen( 'Excise_Duty', $event)">Excise Duty</button>
              <button :class="this.$route.params.id == 'camd' ? 'tablinks1 active' : 'tablinks1' " @click="keyFeatureTabOpen( 'Disclosures_on_CAMD', $event)">Disclosures on CAMD</button>
              <button class="tablinks1 " @click="keyFeatureTabOpen( 'Useful_Contact_Info', $event)">Government Securities Investment Window</button>
              <button class="tablinks1 " @click="keyFeatureTabOpen( 'monthly_base_rate', $event)">Monthly Base Rate</button>
            </div>

            <div id="Scheduled_Fees_and_Charges" :class="this.$route.params.id == 'rd' ? 'showContent' : 'hideContent' " class="tabcontent1 " >
              <div class="subTab">
                <button class="subTabLink active" @click="openSubTab( 'Consumer', $event)" >Consumer</button>
                <button class="subTabLink " @click="openSubTab( 'SME', $event)">SME</button>
                <button class="subTabLink " @click="openSubTab( 'Corporate', $event)">Corporate</button>
                <button class="subTabLink " @click="openSubTab( 'Capital_Market', $event)">Capital Market</button>
              </div>

                <div  id="Consumer" class=" subTabContent " style="display: block">
                  <h2>Consumer Table</h2>
                  <div v-if="consumerTabContent.length > 0"  v-html="consumerTabContent['0'].description"></div>
                </div>
                <div  id="SME" class=" subTabContent " style="display: none">
                  <h2>SME Table</h2>
                  <div v-if="smeTabContent.length > 0"  v-html="smeTabContent[0].description"></div>
                </div>
                <div  id="Corporate" class=" subTabContent " style="display: none">
                  <h2>Corporate Table</h2>
                  <div v-if="corporateTabContent.length > 0" v-html="corporateTabContent[0].description"></div>

                </div>
                <div  id="Capital_Market" class=" subTabContent " style="display: none">
                  <h2>Capital Market Table</h2>
                  <div v-if="corporateTabContent.length > 0" v-html="capitalTabContent[0].description"></div>
                </div>
            </div>

              <div  id="Integrity_Service_Box" class="tabcontent1 inner_box " :class="this.$route.params.id == 'nis' ? 'showContent' : 'hideContent' "   >
                <div  v-if="nisTabContent.length > 0" v-html="nisTabContent[0].description"></div>
                <hr>
                <div class="row" v-if="nisTabFileContent.length > 0">
                  <div v-for="nisTabFile in nisTabFileContent" :key="nisTabFile.id" class="col-md-4 col-lg-3 pdf_icon">
                    <div class="card-single-pdf">
                        <div class="title-report-pdf">
                              <p></p>
                          </div>
                          <div class="single-report-img">
                            <img src="../../../assets/img/report/PDF-File.png" alt="">
                          </div>
                          <div class="report-name">
                            <p>{{nisTabFile.downloadable_title}}</p>
                          </div>
                          <div class="download-report-btn">
                            <a :href="nisTabFile.downloadable_file" download>Download PDF File</a>
                            <img src="../../../assets/img/report/Download-PDF.png" alt="">
                          </div>
                      </div>
                  </div>
                </div>
                <br>
              </div>
              <div   id="Excise_Duty" class="tabcontent1 inner_box" :class="this.$route.params.id == 'ed' ? 'showContent' : 'hideContent' ">
                <div v-if="exiseDutyTabContent.length > 0"  v-html="exiseDutyTabContent[0].description"></div>
                <hr>
                <div  >
                  <div v-if="exiseDutyTabFileContent.length > 0"   class="row">
                  <div class="col-md-4 col-lg-3 pdf_icon" v-for="exiseDutyTabFile in exiseDutyTabFileContent" :key="exiseDutyTabFile.id">
                    <div class="card-single-pdf">
                        <div class="title-report-pdf">
                              <p></p>
                          </div>
                          <div class="single-report-img">
                            <img src="../../../assets/img/report/PDF-File.png" alt="">
                          </div>
                          <div class="report-name">
                            <p>{{exiseDutyTabFile.downloadable_title}}</p>
                          </div>
                          <div class="download-report-btn">
                            <a :href="exiseDutyTabFile.downloadable_file" download>Download PDF File</a>
                            <img src="../../../assets/img/report/Download-PDF.png" alt="">
                          </div>
                      </div>
                  </div>
                </div>
                </div>

                <br>
              </div>
              <div id="Disclosures_on_CAMD" class="tabcontent1 inner_box"  :class="this.$route.params.id == 'camd' ? 'showContent' : 'hideContent' ">
                <div v-if="camdTabContent.length > 0"  v-html="camdTabContent[0].description"></div>
                <hr>

                <div class="row" v-if="camdTabFileContent.length > 0">
                  <div  v-for="camdTabFile in camdTabFileContent" :key="camdTabFile.id"  class="col-md-4 col-lg-3 pdf_icon">
                    <div class="card-single-pdf">
                        <div class="title-report-pdf">
                              <p></p>
                          </div>
                          <div class="single-report-img">
                            <img src="../../../assets/img/report/PDF-File.png" alt="">
                          </div>
                          <div class="report-name">
                            <p>{{camdTabFile.downloadable_title}}</p>
                          </div>
                          <div class="download-report-btn">
                            <a :href="camdTabFile.downloadable_file" download>Download PDF File</a>
                            <img src="../../../assets/img/report/Download-PDF.png" alt="">
                          </div>
                      </div>
                  </div>
                </div>
                <br>

              </div>

<!--            Government Securities Investment Window-->
              <div id="Useful_Contact_Info" class="tabcontent1" >
                <div class="row">
                  <div class="container" v-html="govermentSecuriesInvestmentData['0'].description">

                  </div>
                </div>
              </div>


              <div id="monthly_base_rate" class="tabcontent1" >
                <div v-if="monthlyBaseRate.length > 0"  v-html="monthlyBaseRate['0'].description"></div>

              </div>
            <hr>
            <br><br>
              <div class="container   ">
                <div class="row filterOptions"  >
                  <div class="col-md-12">
                    <b-card  class="product-card">
                      <a  v-b-toggle="'annualReportcollapse' + 1" block class="d-flex">
                        <strong class="question_product" style="color:white; font-size: 1.25rem;">IDLC Code of Conduct</strong>
                        <!-- replace these with your preferred icons -->
                        <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                        <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                      </a>
                      <b-collapse v-bind:id="'annualReportcollapse' + 1">
                        <b-card class="question-card">
                          <a  v-b-toggle.collapse-home-loan-1 block>
                            <div class="row" >
                            <div class="col-md-12">
                              <ul style="font-size: 14px;">
                                <li>Explore our code of conduct that empowers business growth and equal growth opportunities for all our employees. We take pride in our culture that drives performance all across the functions.</li>
                              </ul>
                            <!-- <a href="#" class="tabcontent1Button">Apply Now</a> -->
                            <br>
                            <a href="/static/IDLC_Code_of_Conduct_2019.pdf" target="_blank" class="tabcontent1Button" download>Download</a>
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
                <br>
                <br>
              </div>
              <div class="container" v-if="investorContactDetail">
                <div class="row filterOptions"  >
                  <div class="col-md-12">
                    <b-card  class="product-card">
                      <a  v-b-toggle="'annualReportcollapse' + 1111" block class="d-flex">
                        <strong class="question_product" style="color:white; font-size: 1.25rem;">{{investorContactDetail.title}}</strong>
                        <!-- replace these with your preferred icons -->
                        <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                        <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                      </a>
                      <b-collapse v-bind:id="'annualReportcollapse' + 1111">
                        <b-card class="question-card">
                          <a  v-b-toggle.collapse-home-loan-1 block>
                            <div class="row" >
                            <div class="col-md-12">
                              <ul style="font-size: 14px;">
<!--                                <li><strong>Phone:</strong> {{investorContactDetail.phone}},</li>-->
<!--                                <li><strong>Email:</strong> {{investorContactDetail.email}},</li>-->
                                <li><span v-html="investorContactDetail.description"></span></li>
                              </ul>
                            <!-- <a href="#" class="tabcontent1Button">Apply Now</a> -->
                            <!-- <br> -->
                            <!-- <a href="~@/assets/pdf/IDLC_Code_of_Conduct2019.pdf" class="tabcontent1Button" download>Download</a> -->
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
                <br>
                <br>
              </div>





            <div class="footer_button">
              <router-link :to="{ name: 'FeedbackAndComplaintCell', params: { id : 'Feedback'}}" class="tabcontent1Button">Feedback</router-link>
              <router-link :to="{ name: 'FeedbackAndComplaintCell', params: { id : 'Complaint'}}" class="tabcontent1Button">Complaint</router-link>
            </div>




          </div>
        </div>
      </div>
    </section>
  </template>

<script>
    import axios from "axios";

    export default {
      name: "TabbedPanel",
      data() {
        return {
          active_tab: true,
          consumerTabContent:[],
          smeTabContent:"",
          corporateTabContent:"",
          capitalTabContent:"",
          nisTabContent:"",
          exiseDutyTabContent:"",
          nisTabFileContent:[],
          exiseDutyTabFileContent:"",
          camdTabContent:"",
          camdTabFileContent:"",
          importantContactContent:"",
          investorRelationData:"",
          monthlyBaseRate: "",
          investorContactDetail: '',
          govermentSecuriesInvestmentData: '',
        }
      },
      components: {
        AppInvestorRelationsContactInfo: () => import('../../views/regulatory-disclosure/InvestorRelationsContactInfo'),
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

        openSubTab: function(targetName, event) {
          var j, subTabContent, subTabLink;
          subTabContent = document.getElementsByClassName("subTabContent");
          for (j = 0; j < subTabContent.length; j++) {
            subTabContent[j].style.display = "none";
          }
          subTabLink = document.getElementsByClassName("subTabLink");
          for (j = 0; j < subTabLink.length; j++) {
            subTabLink[j].className = subTabLink[j].className.replace(" active", "");
          }
          document.getElementById(targetName).style.display = "block";
          var newSubElement = document.getElementById(targetName);
          event.target.className += " active";

        },
        getConsumerTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'consumer',
            }
          }).then((response) => {
            if(response.status == 200){
              this.consumerTabContent = response.data.details;
              console.log( this.consumerTabContent['0']);
            }
          }).catch(error => console.log(error));

        },
        getSmeTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'sme',
            }
          }).then((response) => {
            if(response.status == 200){
              this.smeTabContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getCorporateTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'corporate',
            }
          }).then((response) => {
            if(response.status == 200){
              this.corporateTabContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getCapitalTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'capital',
            }
          }).then((response) => {
            if(response.status == 200){
              this.capitalTabContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getNisTabContent(){
          axios.get('get-downloadable-file', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'nis',
            }
          }).then((response) => {
            if(response.status == 200){
              this.nisTabContent = response.data.details;
              console.log(response.data.details);
            }
          }).catch(error => console.log(error));

        },
        getExiseDutyTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'exise_duty',
            }
          }).then((response) => {
            if(response.status == 200){
              this.exiseDutyTabContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getExiseDutyTabFileContent(){
          axios.get('get-downloadable-file', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'exise_duty',
            }
          }).then((response) => {
            if(response.status == 200){
              this.exiseDutyTabFileContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getNisTabFileContent(){
          axios.get('get-downloadable-file', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'nis',
            }
          }).then((response) => {
            if(response.status == 200){
              this.nisTabFileContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getCamdTabContent(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'camd',
            }
          }).then((response) => {
            if(response.status == 200){
              this.camdTabContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getMonthlyBaseRate(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'Monthly Base Rate',
            }
          }).then((response) => {
            if(response.status == 200){
              this.monthlyBaseRate = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getCamdTabFileContent(){
          axios.get('get-downloadable-file', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'camd',
            }
          }).then((response) => {
            if(response.status == 200){
              this.camdTabFileContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getImportantContContent(){
          axios.get('important-contact').then((response) => {
            if(response.status == 200){
              this.importantContactContent = response.data.details;
            }
          }).catch(error => console.log(error));

        },
        getInvestorRelation(){
          axios.get('investor-relation-contact',{
            params: {
              shortcode: this.$parent.shortcode
            }
          }).then((response) => {
            if(response.status == 200){
              this.investorContactDetail = response.data.details['0'];
            }
          }).catch(error => console.log(error));
        },

        getGovermentSecuriesInvestmentData(){
          axios.get('get-table', {
            params: {
              shortcode: this.$parent.shortcode,
              tab_name: 'Government_Securities_Investment_Window',
            }
          }).then((response) => {
            if(response.status == 200){
              this.govermentSecuriesInvestmentData = response.data.details;
            }
          }).catch(error => console.log(error));

        },
      },
      created() {
        this.getConsumerTabContent();
        this.getSmeTabContent();
        this.getCorporateTabContent();
        this.getCapitalTabContent();
        this.getNisTabContent();
        this.getNisTabFileContent();
        this.getExiseDutyTabContent();
        this.getExiseDutyTabFileContent();

        this.getCamdTabContent();
        this.getCamdTabFileContent();
        this.getImportantContContent();
        this.getInvestorRelation();
        this.getMonthlyBaseRate();
        this.getGovermentSecuriesInvestmentData();
      },
    }
</script>

<style scoped>

  .tabPanel .tab {
    overflow: hidden;
    background-color: #f1f1f1;
    border-bottom: 2px solid #d62e2f;
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

  .tabPanel .tab button.active {
    background-color: #d62e2f;
    color: #fff;
  }

  .tabPanel .tabcontent1 ul {
    margin-bottom: 20px;
  }

  .tabPanel .tabcontent1 ul li {
    font-size: 14px;
    padding: 10px 0;
  }

  .tabPanel .tabcontent1 ul li i {
    margin-right: 10px;
  }

  .tabPanel .tabcontent1 .tabcontent1Button {
    outline: none;
    border: 2px solid #d62e2f;
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

  /*Sub Tab Panel*/

  .tabPanel .subTab {
    overflow: hidden;
    background-color: #f1f1f1;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    flex-direction: column;
    width: 16.5%;
    position: relative;
    height: 600px;
  }



  .tabPanel .subTab .subTabLink {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    background-color: inherit;
    float: left;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    font-size: 14px;
    border-right: 0;
    border-left: 0;
    border-top: 0;
    border-bottom: 1px solid #ddd;
  }

  .tabPanel  .subTabContent {
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
    display: block;
    position: absolute;
    left: 18%;
    top: 2%;
    width: 82%;
    height: 100%;
    overflow: auto;
  }

  .tabPanel .subTab button.active {
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    -webkit-transition: 0.3s;
    transition: 0.3s;
    font-size: 14px;
    background-color:#d62e2f;
    color: #fff;
  }
@media screen and (max-width: 600px){
  .tabPanel .tab {
    flex-wrap: wrap;
  }
   .tabPanel .subTab .subTabLink {
    transform: rotate(-90deg);
  }
  .tabPanel .subTab button.active {
    background-color: #f2f2f2;
    color: #d62e2f;
  }
  .tabPanel  .subTabContent {
    overflow-x: scroll;
  }
 }

  .tabcontent1 .pdf_icon {

  }

  .tabcontent1 .pdf_icon .files{
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
  .download-item p, .download-item h4 {
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
    background: #d62e2f;
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

  .inner_box p  {
    text-align: center;
    font-size: 14px;
  }

  #Useful_Contact_Info .item{
    padding: 20px;
  }

  #Useful_Contact_Info .item p{
    font-size: 14px;
  }

  .investor_relation  {
    margin-top: 50px;
    padding: 0px 0 0px 0;
    padding: 20px;
    border: 1px solid rgba(151, 137, 137, 0.569);
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  }

  .investor_relation  p{
    text-align: center;
    font-size: 14px;
  }
  .footer_button{
    padding: 20px 0;
    text-align: center;
  }

  .footer_button .tabcontent1Button{
    outline: none;
    border: 2px solid #d62e2f;
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
   .tabcontent1Button{
    outline: none;
    border: 2px solid #d62e2f;
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

  .footer_button .tabcontent1Button:hover{
    outline: none;
    border: 2px solid #ffffff;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    margin-right: 20px;
    text-decoration: none;
    color: #ffffff;
    background-color: #d62e2f;
    display: inline-block;
  }

  .h2Responsive{
    text-transform: uppercase;
  }


.tabcontent1Button:hover {
  background-color: #d62e2f;
  color: #fff !important;
}


  .product-card {
  background: #d62e2f;
  color: #fff;
  margin-bottom: 5px;
}
.product-card .card-body{
  padding: 0rem;
}
.product-card .question-card{
  padding: 10px;
}
.product-card .card-body .d-flex{
  padding: 10px;
}
.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}
.icon i {
  /* background: #fff; */
  color: #fff;
  font-size: 20px;
}

.fa-placholder {
    font-family: "FontAwesome";
}

ul{
  list-style: none !important;
}

.m_disscussion {
  text-align: center;
}
@media screen and (max-width: 600px){
  .m_disscussion img{
    width: 100%;
  }
  #Useful_Contact_Info .editablesTable {
    overflow-x: scroll;
  }

}


 .tabPanel .hideContent{
    display: none;
  }
  .tabPanel .showContent{
    display: block;
  }
  table tbody tr:first-child td {
    background: transparent !important;
  }


</style>
