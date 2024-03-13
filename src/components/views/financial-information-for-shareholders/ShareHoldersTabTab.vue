
<template>
  <section>
    <div class="tabPanel ">
      <div class="categoryDetails"   id="categoryFeature1">
        <div class="container-lg">
        </div>
        <br>
        <div class="container-lg">
          <div class="tab">
            <button class="tablinks1 active" @click="keyFeatureTabOpen( 'IDLC_Stock_Information', $event)"   >IDLC Stock Information</button>
            <button class="tablinks1 " @click="keyFeatureTabOpen( 'Shareholding_Composition', $event)" >Shareholding Composition</button>
            <button v-if="currentRouteName !== 'FinancialInfoForShareholders'" class="tablinks1 " @click="keyFeatureTabOpen( 'Others', $event)">Others</button>
            <button class="tablinks1 " @click="keyFeatureTabOpen( 'Credit_Rating', $event)">Credit Rating</button>
          </div>

          <div id="IDLC_Stock_Information" class="tabcontent1 " style="display: block">

            <div id="container" style="height: 400px; min-width: 310px"></div>
             <div id="container-lg" style="margin: 30px 0">
               <div class="text-center" style="text-transform: uppercase; margin-bottom: 30px;">
                 <h2>Investor Calculator</h2>
               </div>
              <form action="">
                <div class="row">
                  <div class="col-md-3">
                    <div>
                      <div class="margin-bottom-30px">
                        <b-form-input v-model="investmentAmount" placeholder="Enter investment amount"></b-form-input>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div class="margin-bottom-30px">
                      <!-- <label for="example-datepicker">Choose a date</label> -->
                      <b-form-datepicker id="example-datepicker" v-model="dateValue" class="mb-2" :date-disabled-fn="dateDisabled"></b-form-datepicker>
                    </div>
                  </div>

                  <div class="col-md-3">
                    <div class="margin-bottom-30px">
                      <!-- <label for="example-datepicker">Choose a date</label> -->
                      <b-form-datepicker id="example-datepicker1" v-model="dateValue1" class="mb-2" :date-disabled-fn="dateDisabled"></b-form-datepicker>
                    </div>
                  </div>
                  <div class="col-md-3">
                    <div>
                      <input v-on:click="getInvestorCalculation()" type="button" class="tabcontent1Button" value="Calculate" style="width: 100%; padding: 5px; background: #00a6b4; color: #fff;">

                    </div>
                  </div>
                </div>
                <br>
                <div class="row">
                  <div class="col-md-1"></div>
                  <div class="col-md-5">
                    <div class="calculatedValu text-center">
                      <h5>Total Return</h5>
                      <h2>{{this.totalReturn}}%</h2>
                    </div>
                  </div>
                  <div class="col-md-5">
                    <div class="calculatedValu text-center">
                      <h5>Total Investment Return</h5>
                      <h2>{{this.totalInvestmentReturn}} BDT</h2>
                    </div>
                  </div>
                  <div class="col-md-1"></div>
                </div>
              </form>
            </div>
            <br>
            <div class="row" v-if="stockTabContent.length > 0">
              <div v-for="stockTabItem in stockTabContent" :key="stockTabItem.id" class="col-md-3 pdf_icon">

                </div>

            </div>

          </div>

          <div id="Shareholding_Composition" class="tabcontent1 inner_box "   >
            <br>
            <div class="row">
              <div class="col-md-12 ">
                <pie-chart ></pie-chart>
              </div>


              <div class="col-md-12 mt-4" style="overflow: auto;" >
                <div v-html="shareholdingComposition"></div>
              </div>
            </div>
            <br>


            <br>
            <div class="row text-center">
              <router-link to="/financial-reports" class="tabcontent1Button1" >Financial Disclosure</router-link>
            </div>





          </div>

          <div id="Others" class="tabcontent1 inner_box">
            <br>
            <div class="row ">
               <div class="col-md-12">
                 <b-card  class="product-card">
                   <a  v-b-toggle.otheers01  class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">Dividend History</strong>
                     <!-- replace these with your preferred icons -->
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse id="otheers01">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">
                           <table>
                             <tbody>
                               <tr>
                                 <td></td>
                                 <td>Stock Dividend (%)</td>
                                 <td>Cash Dividend (%)</td>
                               </tr>
                               <tr>
                                 <td>2019</td>
                                 <td>-</td>
                                 <td>35</td>
                               </tr>
                               <tr>
                                 <td>2018</td>
                                 <td>-</td>
                                 <td>35</td>
                               </tr>
                               <tr>
                                 <td>2017</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                               <tr>
                                 <td>2016</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                               <tr>
                                 <td>2015</td>
                                 <td>-</td>
                                 <td>25</td>
                               </tr>
                               <tr>
                                 <td>2014</td>
                                 <td>25</td>
                                 <td>10</td>
                               </tr>
                               <tr>
                                 <td>2013</td>
                                 <td>25</td>
                                 <td>5</td>
                               </tr>
                               <tr>
                                 <td>2012</td>
                                 <td>30</td>
                                 <td>-</td>
                               </tr>
                               <tr>
                                 <td>2011</td>
                                 <td>25</td>
                                 <td>-</td>
                               </tr>
                               <tr>
                                 <td>2010</td>
                                 <td>65</td>
                                 <td>35</td>
                               </tr>
                               <tr>
                                 <td>2009</td>
                                 <td>100</td>
                                 <td>10</td>
                               </tr>
                               <tr>
                                 <td>2008</td>
                                 <td>20</td>
                                 <td>15</td>
                               </tr>
                               <tr>
                                 <td>2007</td>
                                 <td>25</td>
                                 <td>15</td>
                               </tr>
                               <tr>
                                 <td>2006</td>
                                 <td>33.33</td>
                                 <td>5</td>
                               </tr>
                               <tr>
                                 <td>2005</td>
                                 <td>-</td>
                                 <td>37.5</td>
                               </tr>
                               <tr>
                                 <td>2004</td>
                                 <td>-</td>
                                 <td>35</td>
                               </tr>
                               <tr>
                                 <td>2003</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                               <tr>
                                 <td>2002</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                               <tr>
                                 <td>2001</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                               <tr>
                                 <td>2000</td>
                                 <td>-</td>
                                 <td>30</td>
                               </tr>
                             </tbody>
                           </table>
                         </div>
                         <!-- replace these with your preferred icons -->
                         <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-" style="color: #fff; font-size: 18px;"></span></span></strong>
                         <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                       </a>
                     </b-card>
                   </b-collapse>
                 </b-card>
               </div>
               <div class="col-md-12">
                 <b-card  class="product-card">
                   <a  v-b-toggle.otheers02  class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">Right Issue History</strong>
                     <!-- replace these with your preferred icons -->
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse id="otheers02">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">

                           <h4>IDLC’s Rights Offer 2016</h4>
                           <p>Rights Offer of <strong>125,683,593</strong> Ordinary Shares of <strong>BDT 10 each</strong> issuing at <strong>BDT 20 each</strong>, including a premium of BDT 10 per share, amounting to <strong>BDT 2,513,671,860</strong> offered on the basis of <strong>1R:2</strong> (i.e. one rights share against two existing shares held on the record date)</p>
                         </div>
                         <!-- replace these with your preferred icons -->
                         <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                         <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                       </a>
                     </b-card>
                   </b-collapse>
                 </b-card>
               </div>
               <!-- <div class="col-md-12">
                 <b-card  class="product-card">
                   <a  v-b-toggle.otheers03  class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">Stock Split History</strong>
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse id="otheers03">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">

                           <p>Tab Content </p>
                         </div>
                         <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                         <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                       </a>
                     </b-card>
                   </b-collapse>
                 </b-card>
               </div>
               <div class="col-md-12">
                 <b-card  class="product-card">
                   <a  v-b-toggle.otheers04  class="d-flex">
                     <strong class="question_product" style="color:white; font-size: 1.25rem;">Unclaimed Dividend</strong>
                     <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                     <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
                   </a>
                   <b-collapse id="otheers04">
                     <b-card class="question-card">
                       <a  v-b-toggle.collapse-home-loan-1 block>
                         <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">

                           <p>Tab Content </p>
                         </div>
                         <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                         <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                       </a>
                     </b-card>
                   </b-collapse>
                 </b-card>
               </div> -->


             </div>
          </div>

          <div id="Credit_Rating" class="tabcontent1 inner_box" >
            <div class="row">
              <div class="container" style="overflow: auto;">
                <div v-html="creditRatingTable"></div>
              </div>
            </div>
          </div>
          <hr>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  // import VueCharts from 'vue-chartjs';
  import PieChart from "./PieChart.vue";
  import axios from "axios";

  // import PieChart from '@/components/PieChart'

  export default {
    name: "ShareHoldersTabTab.vue",
    components:{
      PieChart
    },

    data() {
      return {
        active_tab: true,
        loaded: false,
        stockTabContent:[],
        otherTabContent:[],
        creditTabContent:'',
        shortcode: 'FinancialInformation',
        dateValue: "",
        dateValue1: "",
        investmentAmount: "",
        totalReturn:0,
        shareholdingComposition: '',
        creditRatingTable: '',
        totalInvestmentReturn: 0,
        isVisible:false



      }
    },


    methods: {
      dateDisabled(ymd, date) {
        // Disable weekends (Sunday = `0`, Saturday = `6`) and
        // disable days that fall on the 13th of the month
        const weekday = date.getDay()
        const day = date.getDate()
        // Return `true` if the date should be disabled
        return weekday === 5 || weekday === 6
      },
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
        event.target.className += " active";

      },
      getStockTabContent(){
        axios.get('get-downloadable-file', {
          params: {
            shortcode: this.$parent.shortcode,
            tab_name: 'IDLC Stock Information',
          }
        }).then((response) => {
          if(response.status == 200){
            this.stockTabContent = response.data.details;
          }
        }).catch(error => console.log(error));

      },
      getOtherTabContent(){
        axios.get('get-downloadable-file', {
          params: {
            shortcode: this.$parent.shortcode,
            tab_name: 'other',
          }
        }).then((response) => {
          if(response.status == 200){
            this.otherTabContent = response.data.details;
          }
        }).catch(error => console.log(error));

      },
      getCreditTabContent(){
        axios.get('get-table', {
          params: {
            shortcode: this.$parent.shortcode,
            tab_name: 'Credit-Rating',
          }
        }).then((response) => {
          if(response.status == 200){
            this.creditRatingTable = response.data.details['0'].description;
          }
        }).catch(error => console.log(error));

      },
      getInvestorCalculation(){
        axios.get('get-financial-calculate-data', {
          params: {
            start_date: this.dateValue,
            end_date: this.dateValue1,
            amount: this.investmentAmount,
          }
        }).then((response) => {
          if(response.status == 200){
            this.totalReturn = response.data.totalReturn;
            this.totalInvestmentReturn = response.data.investmentReturn;
          }
        }).catch(error => console.log(error));

      },
      getShareholdingCompositionTable(){
        axios.get('get-table', {
          params: {
            shortcode:this.$parent.shortcode,
            tab_name: 'Shareholding-Composition',
          }
        }).then((response) => {
          if(response.status == 200){
            this.shareholdingComposition = response.data.details['0'].description;
          }
        }).catch(error => console.log(error));
      },
    },

    mounted() {
      var scripts = [
        "https://code.highcharts.com/stock/highstock.js",
        "https://code.highcharts.com/stock/modules/data.js"
      ];
      scripts.forEach(script => {
        let tag = document.createElement("script");
        tag.setAttribute("src", script);
        document.head.appendChild(tag);
      });
    },


    created() {

    this.getStockTabContent();
    this.getOtherTabContent();
    this.getShareholdingCompositionTable();
    this.getCreditTabContent();
      $.getJSON(axios.defaults.baseURL+'get-historical-data', function (data) {
      // Create the chart
      Highcharts.stockChart('container', {


        rangeSelector: {
          selected: 1
        },

        title: {
          text: 'IDLC Stock Price'
        },

        series: [{
          name: 'IDLC',
          data: data,
          tooltip: {
            valueDecimals: 2
          }
        }]
      });
    });

  },

  computed: {
    currentRouteName() {
        return this.$route.name;
    }
  }

  }
</script>

<style scoped>

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
  .product-card a {
    text-decoration: none;
    color: #000;
  }

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
  .tabPanel .tabcontent1 .tabcontent1Button:hover {
    background: #00a6b4;
    color: #fff;

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
    /* padding: 0 40px 20px 40px; */
  }

  #Useful_Contact_Info .item{
    padding: 20px;
  }

  #Useful_Contact_Info .item p{
    font-size: 14px;
  }


  .footer_button{
    padding: 20px 0;
    text-align: center;
  }


  .inner_box .text_box{
    text-align: center;
    margin: 20px 0;

  }

  .inner_box .text_box img{
    margin-bottom: 20px;
    width: 500px;
    max-width: 100%;
  }

  .inner_box .text_box p{
    padding: 0 50px;
  }

  .tabcontent1Button1 {
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
  }

  .tabcontent1Button1:hover {
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
    margin: auto;
  }


.productPageTitleDetai {
    text-align: center;
    padding: 20px 0 20px 0;
}


@media screen and (max-width: 770px) {
  .card-single-pdf {
      margin-bottom: 50px;
  }
}

.calculatedValu {
  border: 1px solid #00a6b480;
  border-radius: 7px;
  margin-top: 20px;
  padding: 10px;
}
.calculatedValu h5{
  margin-bottom: 10px;
}
.calculatedValu h2{
  color: #00a6b4
}
.btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled):active, .btn-primary:not(:disabled):not(.disabled).active, .show > .btn-primary.dropdown-toggle {
    color: #fff;
    background-color: #00a6b4 !important;
    border-color: rgba(214, 46, 46, 0.664) !important;
}

</style>
