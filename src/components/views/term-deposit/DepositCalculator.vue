<template>
    <!--EMI Calculator Part Start-->
<div class="calculator">
    <div class=""><br></div>
    <div class="calculatorBg">
        <div class="container-lg">
            <div class="calculatorBody ">
                <div class="header" style="padding-bottom: 32px;">
                <div class="header sectionTitle">
                    <h2 class="h2Responsive">DEPOSIT CALCULATOR</h2>
                </div>
                </div>
                <div class="row">
                    <div class=" reason col-md-4">
                            <div class="inputBox invest success error" >
                                <div class="feilds">
                                    <div class="icon_position">
                                        <img src="~@/assets/img/home-loan-page/icons/black/Taka-Icon-02.png" alt="" width="60px">
                                    </div>
                                    <div class="title">
                                        <label class="title2">
                                            <span class="amtValueBlock">Principal Amount (BDT)</span>
                                        </label>
                                        <label class="errorText">Please enter an amount</label>
                                    </div>

                                    <input type="text"
                                           v-model="choosableAmount"
                                           id="PrincipleAmt"
                                           name="principle"
                                           numbers-only=""
                                           required=""
                                           limit-to-max=""
                                           maxlength="11"
                                           tabindex="1"
                                           limit-to-min=""
                                           min="1"
                                           max="20000000"
                                           placeholder="Please input the Deposit amount"
                                           class="wantToMake formatNumber ng-valid-maxlength ng-dirty ng-valid-parse ng-empty ng-invalid ng-invalid-required ng-touched range-slider__value">

                                </div>
                                <div class="rippleseffect"></div>
                            </div>
                        <div class="employeeDetWrap">
                            <div class="rangeSlider">
                                <div class="slidecontainer">
                                    <input  type="range"
                                            min="1"
                                            max="20000000"
                                            class="rangeValChange rangeslider"
                                            v-model="choosableAmount"

                                    >
                                </div>
                                <div class="row minmaxHide">
                                    <div class="col-md-6 col-xs-6 text-left" style="font-size: 14px;">1 <span>BDT</span></div>
                                    <div class="col-md-6 col-xs-6 text-right" style="font-size: 14px;">2,00,00,000 <span>BDT</span></div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div class=" reason col-md-4">
                        <!-- <h5 class="text-dark">I want to invest for</h5> <br> -->
                        <div class="inputBox invest success error" >
                            <div class="feilds">
                                <div class="icon_position">
                                    <img src="~@/assets/img/home-loan-page/icons/black/Calender-02.png" alt="" width="60px">
                                </div>
                                <div class="title">
                                    <label class="title2">
                                        <span class="amtValueBlock">Deposit Tenure(Year)</span>
                                    </label>
                                    <label class="errorText">Please enter an amount</label>
                                </div>

                                <input type="text"
                                       v-model="choosableDuration"
                                       id="loanTenure"
                                       name="principle"
                                       numbers-only=""
                                       required=""
                                       limit-to-max=""
                                       maxlength="11"
                                       tabindex="1"
                                       limit-to-min=""
                                       min="1"
                                       max="20"
                                       placeholder="Please input the Deposit Tenure"
                                       class="wantToMake formatNumber ng-valid-maxlength ng-dirty ng-valid-parse ng-empty ng-invalid ng-invalid-required ng-touched">

                            </div>
                            <div class="rippleseffect"></div>
                        </div>
                        <div class="employeeDetWrap">
                            <div class="rangeSlider">
                                <div class="slidecontainer">
                                    <input  type="range"
                                            min="1"
                                            max="20"

                                            v-model="choosableDuration"
                                            class="rangeValChange rangeslider">
                                </div>
                                <div class="row minmaxHide">
                                    <div class="col-xs-6 col-md-6  text-left" style="font-size: 14px;">1 <span>Years</span></div>
                                    <div class="col-xs-6 col-md-6 col-sm-6 text-right" style="font-size: 14px;">20 Years <span></span></div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class=" reason col-md-4">
                        <!-- <h5 class="text-dark">I want to invest at</h5> <br> -->
                        <div class="inputBox invest success error" >
                            <div class="feilds">
                                <div class="icon_position">
                                    <img src="~@/assets/img/home-loan-page/icons/black/Percent-02.png" alt="" width="60px">
                                </div>
                                <div class="title">
                                    <label class="title2">
                                        <span class="amtValueBlock">Rate of Interest (%)</span>
                                    </label>
                                    <label class="errorText">Please enter an amount</label>
                                </div>

                                <input   type="text"
                                         v-model="choosableRateOfInterest"
                                         id="RateOfInterest"
                                         name="principle"
                                         numbers-only=""
                                         required=""
                                         limit-to-max=""
                                         maxlength="11"
                                         tabindex="1"
                                         limit-to-min=""
                                         min="1"
                                         max="20"
                                         placeholder="Please input the Rate of Interest"
                                         class="wantToMake formatNumber ng-valid-maxlength ng-dirty ng-valid-parse ng-empty ng-invalid ng-invalid-required ng-touched">

                            </div>
                            <div class="rippleseffect"></div>
                        </div>
                        <div class="employeeDetWrap">
                            <div class="rangeSlider">
                                <div class="slidecontainer">
                                    <input type="range"
                                           min="1"
                                           max="20"

                                           v-model="choosableRateOfInterest"
                                           class="rangeValChange rangeslider">
                                </div>
                                <div class="row minmaxHide">
                                    <div class="col-xs-6 col-md-6  text-left " style="font-size: 14px;">1 <span>%</span></div>
                                    <div class="col-xs-6 col-md-6  text-right " style="font-size: 14px;" >20<span> % </span></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div class="row justify-content-md-center">
                    <!-- <div class="col-md-1"></div> -->
                    <div class="col-md-6 align-self-center">
                        <div class="editableFields">
                            <ul class="list-inline">
                                <li>
                                    <label style="font-size: 1.25rem">Maturity Value</label><span class="icon-rupee"></span>
                                    <br>
                                    <span class="editableInput totInvmnt"><span id="emaiAmount">{{ReplaceNumberWithCommas(total.toFixed(2))}}  </span> BDT</span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div class="col-md-6 align-self-center">

                        <div class="row justify-content-md-space-between">
                            <div class="col-md-6 text-right">
                                <router-link to="/apply-for-deposit" target="_blank" class="tabcontent2Button">Apply Now</router-link>
                            </div>
                            <div class="col-md-6 text-left">
                                 <!-- <button class=" tabcontent2Button" >EMI Details</button> -->
                            </div>
                        </div>
                    </div>

                    <!-- <div class="col-md-1"></div> -->
                    <div class="col-md-offset-3 col-md-6 " >
                        <transition name="slide-fade" mode="out-in">
                            <canvas v-show="detaiShow" id="myChart" width="400" height="270" ></canvas>
                        </transition>
                    </div>

                </div>
                <br>

            </div>
        </div>
    </div>
    <div class=""></div>

</div>
<!--EMI Calculator Part End-->
</template>

<script>
import lineChartData from '../../../assets/js/chart-data';
export default {
    data() {
        return {
          lineChartData: lineChartData,
          detaiShow: false,
          choosableAmount:2000000,
          choosableDuration: 7,
          choosableRateOfInterest: 11,
          payAbleAmountPerMonth: 0,
        }

    },
    methods: {
        createChart(chartId, chartData) {
            const ctx = document.getElementById(chartId);
            const myChart = new Chart(ctx, {
            type: chartData.type,
            data: chartData.data,
            options: chartData.options,
            });
        },
        showVal(targetDiv, event) {
            let amount = event.target.value;
            if(targetDiv == "PrincipleAmt"){
                    $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
                    $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
              }
              if(targetDiv == "loanTenure"){
                  $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
                  $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
              }
              if(targetDiv == "RateOfInterest"){
                  $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
                  $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
              }
        },
        ReplaceNumberWithCommas(yourNumber) {
        //Seperates the components of the number
        var components = yourNumber.toString().split(".");
        //Comma-fies the first part
        components [0] = components [0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //Combines the two sections
        return components.join(".");
      }
    },

  computed:{
    total() {
      let tenureInMonths = this.choosableDuration*12;
      let covertedRoi = this.choosableRateOfInterest/100;
      let finalRoi = (1+ covertedRoi/12);
      let finalTenure = ((finalRoi ** (tenureInMonths))-1)/ (covertedRoi/12);
      let calculatedTotal = (finalRoi * this.choosableAmount * finalTenure);
      return  this.payAbleAmountPerMonth = calculatedTotal;
      // return calculatedTotal.toFixed(2);
    }



    },

    mounted() {
        this.createChart('myChart', this.lineChartData);
    }
}
</script>
<style scoped>
    /* Enter and leave animations can use different */
    /* durations and timing functions.              */
    .slide-fade-enter-active {
        transition: all .3s ease;
    }
    .slide-fade-leave-active {
        transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }
    .slide-fade-enter, .slide-fade-leave-to
        /* .slide-fade-leave-active below version 2.1.8 */ {
        transform: translateX(10px);
        opacity: 0;
    }
    .inputBox {
        border: solid 0.1rem #b6aeab;
    }
    .tabcontent2Button {
        border: 2px solid #333;
    }
    .tabcontent2Button:hover {
        background: #333;
    }
      .icon_position {
        padding: 10px;
        width: 65px;
    }
    .icon_position > img{
        width: 100%;
    }
</style>
