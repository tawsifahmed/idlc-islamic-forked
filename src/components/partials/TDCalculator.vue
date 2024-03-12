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
                         v-model.number="principalAmount"
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
                         placeholder="Please input the Principal Amount"
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
                            v-model.number="principalAmount"
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
                      <span class="amtValueBlock">Terms in Years</span>
                    </label>
                    <label class="errorText">Please enter an amount</label>
                  </div>

                  <input type="text"
                         v-model.number="depositTuner"
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
                            v-model.number="depositTuner"
                            class="rangeValChange rangeslider">
                  </div>
                  <div class="row minmaxHide">
                    <div class="col-xs-6 col-md-6  text-left" style="font-size: 14px;">1 <span>Year</span></div>
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
                           v-model.number="rateOfInterest"
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
                           v-model.number="rateOfInterest"
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
                    <span class="editableInput totInvmnt"><span id="emaiAmount">{{ReplaceNumberWithCommas(maturity.toFixed(0))}}  </span> BDT</span>
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

  export default {
    data() {
      return {
        detaiShow: false,
        payAbleAmountPerMonth: 0,
        principalAmount: 0,
        depositTuner: 0,
        rateOfInterest: 0,
        maturityPayable: 0,
        exciseDuty: 150,
        taxRate: 10,
      }

    },
    methods: {

      // showVal(targetDiv, event) {
      //   let amount = event.target.value;
      //   if(targetDiv == "PrincipleAmt"){
      //     $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
      //     $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
      //   }
      //   if(targetDiv == "loanTenure"){
      //     $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
      //     $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
      //   }
      //   if(targetDiv == "RateOfInterest"){
      //     $('#'+targetDiv).val(this.ReplaceNumberWithCommas(amount));
      //     $('#emaiAmount').html(this.ReplaceNumberWithCommas(amount));
      //   }
      // },
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
      // taxAmount(){
      //   return ((this.approximateValue)/this.taxRate);
      // },
      //
      // tenureInMonth(){
      //   return  this.depositTuner *12;
      // },
      //
      // approximateValue(){
      //   return (this.principalAmount * this.interestRate * this.tenureInMonth);
      // },
      // beforeTaxExicseDutyValue(){
      //   return this.principalAmount+this.approximateValue;
      // },
      // beforeExciseDutyValue(){
      //   return this.beforeTaxExicseDutyValue-this.taxAmount;
      // },
      // interestRate(){
      //   return this.rateOfInterest / 100;
      // },
      maturity(){
/*        console.log('Interest Amount Before Tax & Excise Duty :  '+this.approximateValue);
        console.log('Balance Before Tax & Excise Duty :  '+this.beforeTaxExicseDutyValue);
        console.log('Balance Before Excise Duty :  '+this.beforeExciseDutyValue);
        console.log('Tax Amount :  '+this.taxAmount);*/
        let tenureInMonth  = this.depositTuner *12;
        let interestRate  = this.rateOfInterest / 100;
        let approximateValue =  (this.principalAmount * interestRate * tenureInMonth)/12;
        return this.principalAmount + approximateValue;

      },



    },

    mounted() {

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
