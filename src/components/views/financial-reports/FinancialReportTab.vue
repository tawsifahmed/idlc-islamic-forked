
<template>
<section>
   <div class="tabPanel ">
      <div class="categoryDetails"   id="categoryFeature1">
         <div class="container-lg">
         </div>
         <br>
         <div class="container-lg">
            <div class="tab">
               <button class="tablinks1 Annual_Reports_TAb" id="defaultOpen1" @click="keyFeatureTabOpen('Annual_Reports', $event)">Annual and Quarterly Reports</button>
               <button class="tablinks1 " @click="keyFeatureTabOpen('Quarterly_Earnings_Presentations', $event)" >Quarterly Earnings Presentations</button>
               <button class="tablinks1 " @click="keyFeatureTabOpen('Financial_Highlights', $event)">Financial Highlights</button>
               <button class="tablinks1 " @click="keyFeatureTabOpen('Management_Discussion_on_Financials', $event)">Management Discussion on Financials</button>
            </div>
            <!-- <div class="row" style="padding-bottom: -125px;">
               <div class="col-md-3"></div>
               <div class="col-md-3"></div>
               <div class="col-md-3"></div>
               <div class="col-md-3">
                  <input type="text" class="form-control search-pdf" placeholder='Search' >
               </div>
            </div> -->


           <div id="Annual_Reports" class="tabcontent1 " style="display: block">
               <br>
               <div class="row filterOptions"  v-if="annualReportsTabContentData.length > 0">
                   <div class="col-md-12"  v-for="(tabData, index) in annualReportsTabContentData"   :key="tabData.id">
                     <b-card  class="product-card">
                       <a  v-b-toggle="'annualReportcollapse' + index" block class="d-flex">
                         <strong class="question_product" style="color:white; font-size: 1.25rem;">{{tabData.year}}</strong>
                         <!-- replace these with your preferred icons -->
                         <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                         <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                       </a>
                       <b-collapse v-bind:id="'annualReportcollapse' + index">
                         <b-card class="question-card">
                           <a  v-b-toggle.collapse-home-loan-1 block>
                             <div class="row">
                               <div class="col-md-2" >
                                 <img :src="tabData.image" width="100%" alt="" v-if="tabData.report_title">
                               </div>
                               <div class="col-md-2 text-btn"  >
                                 <h6 class="annual_report_heading" v-if="tabData.report_title" >{{tabData.report_title}}</h6>
                                 <a :href="tabData.download_file" class="footer_button2" download target="_blank" v-if="tabData.report_title">Download</a>
                               </div>

                               <div class="col-md-8">
                                 <ul class="all-report float-right">
                                   <li class="" style="" v-if="tabData.report_one_title">
                                     <a :href="tabData.report_one_file" download target="_blank">
                                       <div class="f_icon">
                                         <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                                       </div>
                                       <div class="title">
                                         <h6>{{tabData.report_one_title}}</h6>
                                       </div>
                                       <div class="download-icon" style="padding: 5px 32px;">
                                         <div class="d_icon"></div>
                                       </div>
                                     </a>
                                   </li>
                                   <li class="" style=""  v-if="tabData.report_two_title">
                                     <a :href="tabData.report_two_file" download target="_blank">
                                       <div class="f_icon">
                                         <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                                       </div>
                                       <div class="title">
                                         <h6>{{tabData.report_two_title}}</h6>
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
               <br>
            </div>

           <div id="Quarterly_Earnings_Presentations" class="tabcontent1 inner_box "   >
             <br>
             <div class="row filterOptions ">
               <div class="col-md-12" v-for="(quarterlyData, index) in quarterlyEarningsTabContentData" v-if="quarterlyEarningsTabContentData.length > 0"   :key="quarterlyData.id">
                 <b-card  class="product-card">
                   <a v-b-toggle="'quarterlyEarnings' + index"  block class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">{{quarterlyData.year}}</strong>
                     <!-- replace these with your preferred icons -->
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class=""><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse v-bind:id="'quarterlyEarnings' + index">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="row">
                           <div class="col-md-12">
                             <ul class="all-report all-report_q float-right">
                               <li class="" style="" v-if="quarterlyData.report_one_title" >
                                 <a :href="quarterlyData.report_one_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_one_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_two_title">
                                 <a  :href="quarterlyData.report_two_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_two_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_three_title">
                                 <a   :href="quarterlyData.report_three_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_three_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_four_title" >
                                 <a  :href="quarterlyData.report_four_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_four_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_five_title" >
                                 <a :href="quarterlyData.report_five_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_five_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_six_title" >
                                 <a  :href="quarterlyData.report_six_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_six_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_seven_title">
                                 <a  :href="quarterlyData.report_seven_file"   download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_seven_title}}</h6>
                                   </div>
                                   <div class="download-icon" style="padding: 5px 32px;">
                                     <div class="d_icon"></div>
                                   </div>
                                 </a>
                               </li>
                               <li class="" style="" v-if="quarterlyData.report_eight_title">
                                 <a :href="quarterlyData.report_eight_file"  download target="_blank">
                                   <div class="f_icon">
                                     <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                                   </div>
                                   <div class="title">
                                     <h6>{{quarterlyData.report_eight_title}}</h6>
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
             <br>

           </div>

           <div id="Financial_Highlights" class="tabcontent1 inner_box">

             <div class="row filterOptions ">
               <div class="col-md-12">
                 <b-card  class="product-card">
                   <a  v-b-toggle.financialHighlights  class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">{{ financialHighlightsTabContentData.title }}</strong>
                     <!-- replace these with your preferred icons -->
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse id="financialHighlights">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">

                           <span v-html="financialHighlightsTabContentData.description"></span>
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


           <div id="Management_Discussion_on_Financials" class="tabcontent1 inner_box">
             <div class="row filterOptions ">


               <div class="col-md-12" v-for="discussionData in managementDiscussionData" :key="discussionData.id">
                 <b-card  class="product-card">
                   <a  v-b-toggle="'quarterlyEarnings' + discussionData.id" block class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 14px;">{{discussionData.name}}</strong>
                     <!-- replace these with your preferred icons -->
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse v-bind:id="'quarterlyEarnings' + discussionData.id">

                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="row">
                           <div class="col-md-12" >
                             <div class="m_disscussion" v-html="discussionData.content['0']['content']">

                             </div>
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
           </div>
           <!--            Investor Relations Contact Info-->

<!--           <div class="investor_relation  sectionTitle" v-if="investorContactDetail" >-->
<!--&lt;!&ndash;             <h2 class="h2Responsive text-uppercase" >{{investorContactDetail.title}}</h2>&ndash;&gt;-->
<!--&lt;!&ndash;             <h6>Phone: {{investorContactDetail.phone}}, Email: {{investorContactDetail.email}}</h6>&ndash;&gt;-->
<!--             <p><span v-html="investorContactDetail.description"></span></p>-->
<!--           </div>-->

           <app-investor-relations-contact-info/>

           <div class="footer_button_content ">
               <router-link to="/price-sensitive-information-and-notices"   class="footer_button2">Price-Sensitive Information</router-link>
               <router-link to="/financial-information-for-investors-and-shareholders"  class="footer_button2">Financial Information</router-link>
               <router-link :to="{ name: 'RegulatoryDisclosure', params: { id : 'rd'}}"  class="footer_button2">Regulatory Disclosures</router-link>
            </div>
          </div>
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
        active_tab: true,
        annualReportsTabContentData:[],
        quarterlyEarningsTabContentData:[],
        financialHighlightsTabContentData:'',
        isVisible : true,
        investorContactDetail:'',
        managementDiscussionData: [],
      }
    },
    components: {
      AppInvestorRelationsContactInfo: () => import('./InvestorRelationsContactInfo'),
    },
    methods: {
      keyFeatureTabOpen: function(targetName,event,tabId) {
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
      getAnnualReportsTabContentData(){

        axios.get('financial-report-tab-content',{
          params: {
            financial_tab_id: 1
          }
        }).then((response) => {
          if(response.status == 200){
            this.annualReportsTabContentData = response.data.details;
            // console.log(  this.annualReportsTabContentData);
          }
        }).catch(error => console.log(error));
      },
      getQuarterlyEarningsTabContentDataItem(){
        axios.get('financial-report-tab-content',{
          params: {
            financial_tab_id: 2
          }
        }).then((response) => {
          if(response.status == 200){
            this.quarterlyEarningsTabContentData = response.data.details;
            // console.log(this.quarterlyEarningsTabContentData);
          }
        }).catch(error => console.log(error));
      },

      getFinancialHighlightsTabContentDataItem(){
        axios.get('financial-tab-table').then((response) => {
          if(response.status == 200){
            this.financialHighlightsTabContentData = response.data.details['0'];
          }
        }).catch(error => console.log(error));
      },

      getManagementDiscussionData(){
        axios.get('get-management-discussion-financial-category').then((response) => {
          if(response.status == 200){
            this.managementDiscussionData = response.data.details;
            console.log(this.managementDiscussionData);
          }
        }).catch(error => console.log(error));
      },
      // getInvestorRelation(){
      //   axios.get('investor-relation-contact',{
      //     params: {
      //       shortcode: this.$parent.shortcode,
      //     }
      //   }).then((response) => {
      //     if(response.status == 200){
      //       this.investorContactDetail = response.data.details['0'];
      //     }
      //   }).catch(error => console.log(error));
      // },

    },
    created() {
      this.getAnnualReportsTabContentData();
      this.getQuarterlyEarningsTabContentDataItem();
      this.getFinancialHighlightsTabContentDataItem();
      this.getManagementDiscussionData();
      // this.getInvestorRelation();
    },
    updated() {
       $( "#defaultOpen1" ).trigger( "click" );
    }
  }
</script>

<style scoped>

/* <img src="./../../../assets/img/financial-report/download-icon-02.png" alt="" height="30px" width="30px"> */
.product-card {
  background: #00a6b4;
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
.annual_report_heading {
  font-size: 19px;
  padding-bottom: 10px;
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
.all-report {
      width: 100%;
  display: flex;
  justify-content: flex-end;
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
  background: rgba(214, 46, 46, 0.199);
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
    /* padding: 10px 0; */
  }

  .tabPanel .tabcontent1 ul li i {
    margin-right: 10px;
  }



  /*Sub Tab Panel*/


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

  .inner_box p  {
    text-align: center;
    font-size: 14px;
    padding: 0 40px 20px 40px;
  }

  #Useful_Contact_Info .item{
    padding: 20px;
  }

  #Useful_Contact_Info .item p{
    font-size: 14px;
  }

  .investor_relation  {
    text-align: center;
    margin-top: 50px !important;
    padding: 20px;
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  }

  .investor_relation  h6{
    text-align: center;
    padding: 15px;
    font-size: 1.25rem;
  }

  .investor_relation  p{
    text-align: center;
    font-size: 14px;
    padding-bottom: 10px;
  }
  .footer_button_content{
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



  .footer_button_content .tabcontent1Button:hover{
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

  .inner_box .text_box{
    text-align: center;
    margin: 20px 0;

  }

  .inner_box .text_box img{
    margin-bottom: 20px;
    width: 500px;
  }

  .inner_box .text_box p{
    padding: 0 50px;
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

  @media screen and (max-width: 600px){
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

    .tabPanel .tab .tablinks1{
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
      background-color: inherit;
      float: left;
      border: none;
      outline: none;
      cursor: pointer;
      padding: 2px!important;
      -webkit-transition: 0.3s;
      transition: 0.3s;
      font-size: 14px;
      border-right: 1px solid #ddd;
    }

    .inner_box .text_box img {
      margin-bottom: 20px;
      width: 250px;
    }
    .text-btn {
        padding: 10px;
        text-align: center;
    }
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
}








</style>
