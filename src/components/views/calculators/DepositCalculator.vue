<template>
  <div id="DepositCalculator">
    <div class="container">
      <div class="row">
        <div class="col-md-12">
          <div class="header sectionTitle text-uppercase text-center">
            <h2 class="h2Responsive ">Deposit Calculator</h2>
          </div>
        </div>
      </div>
      <div class="row align-items-streach justify-content-center">
        <div class="col-md-12">
          <div class="calculator">
            <div class="row align-items-streach">
              <div class="col-md-8">
                <form class="calculatorForm">
                  <div class="row">
                    <div class="col-md-6">
                      <div class="DepositInput FDType">
                        <div class="col-md-12 align-items-center  mb-2">
                          <label>Type of Fixed Deposit</label>
                          <select @change="onChangeTypeOfFD($event)">
                            <option value="" disabled selected>Choose One</option>
                            <option v-for="(FDType, index) in FDTypes" :value="FDType" :key="index">{{ FDType }}
                            </option>
                          </select>
                        </div>
                        <div class="col-md-12 align-items-center  mb-2" v-show="isTypeOfFD">
                          <label for=""></label>
                          <select @change="onChangeResultOfFD($event)">
                            <option value="" disabled selected>Choose One</option>
                            <option v-for="(item, index) in resultOfFD" :value="item" :key="index">{{ item }}</option>
                          </select>
                        </div>
                      </div>

                      <div class="DepositInput FDType">
                        <div class="col-md-12 align-items-center">
                          <label for="">Tenure {{ dateType}}</label>
                          <input type="number" min="0" :placeholder="dateType" v-model="tenure" class="tenure">
                          <span style="opacity: .8; font-size: 12px;">{{ note }}</span>
                        </div>
                      </div>
                    </div>

                    <div class="col-md-6">
                      <div class="DepositInput depositAmount">
                        <div class="row align-items-center  mb-2">
                          <div class="col-md-7"><label for="depositAmount">Deposit Amount (BDT)</label></div>
                          <div class="col-md-5">
                            <div class="depositAmountInput">
                              <input min="50000" :max="maxAmount" type="number" id="depositAmount"
                                     v-model.number="depositAmount">
                                     <label for="depositAmount">{{ReplaceNumberWithCommas(depositAmount)}}</label>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <input min="50000" max="20000000" step="500" type="range" id=""
                                   class="rangeValChange rangeslider" v-model.number="depositAmount">
                          </div>
                          <div class="col-md-6"><span class="minMaxValue">50,000 BDT</span></div>
                          <div class="col-md-6 text-right"><span class="minMaxValue">2,00,00,000 BDT</span></div>
                        </div>
                      </div>

                      <div class="DepositInput interestRate">
                        <div class="row align-items-center  mb-2">
                          <div class="col-md-7"><label for="interestRate">Rate of Interest (%)</label></div>
                          <div class="col-md-5">
                            <input min="1" max="20" type="number" id="interestRate" v-model="rateOfInterest">
                          </div>
                          <div class="col-md-12">
                            <input min="1" max="20" type="range" class="rangeValChange rangeslider"
                                   v-model="rateOfInterest">
                          </div>
                          <div class="col-md-6"><span class="minMaxValue">1 %</span></div>
                          <div class="col-md-6 text-right"><span class="minMaxValue">20 %</span></div>
                        </div>
                      </div>
                    </div>
                  </div>


                </form>
              </div>

              <div class="col-md-4">
                <div class="calculatedAmount">
                  <div class="result mb-2 " v-show="isEarnerDeposit">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <h6>Maturity Value</h6>
                      </div>
                      <div class="col-md-6 brandColor text-right">
                        <h6>{{ this.ReplaceNumberWithCommas(total.toFixed(2)) }}</h6>
                      </div>
                    </div>
                  </div>

                  <div class="result  mb-2" v-show="isEarnerDeposit">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <h6>Gross Interest Amount</h6>
                      </div>
                      <div class="col-md-6 text-right">
                        <h6>{{ this.ReplaceNumberWithCommas(grossInterestAmount.toFixed(2)) }} </h6>
                      </div>
                    </div>
                  </div>

                  <div class="result  mb-2" v-show="!isEarnerDeposit">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <h6>Gross {{monthlyOrQuaterly}} Interest Amount</h6>
                      </div>
                      <div class="col-md-6 text-right">
                        <h6>{{ this.ReplaceNumberWithCommas(total.toFixed(2)) }} </h6>
                      </div>
                    </div>
                  </div>


                  <div class="result mb-4 ">
                    <div class="row align-items-center">
                      <div class="col-md-6">
                        <h6>Rate of Interest</h6>
                      </div>
                      <div class="col-md-6 text-right">
                        <h6>{{rateOfInterest}}%</h6>
                      </div>
                    </div>
                  </div>


                  <!--                  <div class="result">-->
                  <!--                    <div class="row align-items-center">-->
                  <!--                      <div class="col-md-12">-->
                  <!--                        <p>(Indicative interest rates for calculation only.)</p>-->
                  <!--                      </div>-->
                  <!--                    </div>-->
                  <!--                  </div>-->

                  <div class="result mt-3">
                    <div class="row align-items-center">
                      <div class="col-md-12 text-center">
                        <router-link to="apply-for-deposit" target="_blank" :class="this.$parent.shortcode"  class="applyNowButton">Apply For Deposit
                        </router-link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EMICalculator',
    data() {
      return {
        customerType: 'normal',
        typeOfFD: 'Reinvestment (Cumulative)',
        currentDate: new Date(),
        tenureRadio: 'YY/MM/DD',
        tenureYear: "0",
        tenure: null,
        tenureDay: "0",
        depositAmount: 50000,
        FDTypes: ['Flexible Term Deposit', 'Days Term Deposit', 'Earners Deposit'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        isTypeOfFD: false,
        resultOfFD: [],
        finalResultOfFD: '',
        dateType: 'Month',
        tenureInDays: 0,
        commonTenure: null,
        note: '',
        rateOfInterest: 6.5,
        maxAmount: 10000000000,
        isEarnerDeposit: true,
        monthlyOrQuaterly: '',

      }
    },
    watch: {
      tenureRadio: function () {
        if (this.tenureRadio != 'YY/MM/DD') {
          this.tenureYear = "0";
          this.tenureMonth = "0";
        }
      }
    },
    methods: {
      ReplaceNumberWithCommas(yourNumber) {
        var components = yourNumber.toString().split(".");
        components [0] = components [0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return components.join(".");
      },

      onChangeTypeOfFD(event) {
        this.isTypeOfFD = true;
        let data = event.target.value;
        if (data === 'Flexible Term Deposit') {
          this.maxAmount = 10000000000;
          this.resultOfFD = [];
          this.resultOfFD = ['Terms greater than or equal to 13 months', 'Less than 13 months'];
          this.dateType = 'Month';
          this.isEarnerDeposit = true;
          this.monthlyOrQuaterly = '';
        } else if (data === 'Days Term Deposit') {
          this.maxAmount = 50000;
          this.resultOfFD = [];
          this.resultOfFD = ['100 Days', '500 Days'];
          this.dateType = 'Days';
          $(".tenure").prop('disabled', true);
          this.tenure = null;
          this.isEarnerDeposit = true;
          this.monthlyOrQuaterly = '';
        } else {
          this.maxAmount = 100000;
          this.resultOfFD = [];
          this.resultOfFD = ['Monthly Earner', 'Quarterly Earner'];
          this.dateType = '';
          $(".tenure").prop('disabled', true);
          this.tenure = null;
          this.isEarnerDeposit = false;
          this.monthlyOrQuaterly = '';
        }
      },
      onChangeResultOfFD(event) {
        this.finalResultOfFD = event.target.value;
        if (this.finalResultOfFD === 'Terms greater than or equal to 13 months') {
          this.commonTenure = 13;
          this.note = 'Please provide greater than or equal to 13 months';
          $(".tenure").prop('disabled', false);
        } else if (this.finalResultOfFD === 'Less than 13 months') {
          this.commonTenure = 12;
          this.note = 'Please provide tenure less than 13 months and greater than 2 months ';
          $(".tenure").prop('disabled', false);
        } else if (this.finalResultOfFD === '100 Days') {
          this.commonTenure = 100;
          this.note = '';
          this.dateType = '100 Days';
          this.tenure = null;
          $(".tenure").prop('disabled', true);
        } else if (this.finalResultOfFD === '500 Days') {
          this.commonTenure = 500;
          this.note = '';
          this.dateType = '500 Days';
          $(".tenure").prop('disabled', true);
          this.tenure = null;
        } else if (this.finalResultOfFD === 'Monthly Earner') {
          this.commonTenure = 30;
          this.note = '';
          this.dateType = 'Monthly Earner';
          $(".tenure").prop('disabled', true);
          this.tenure = null;
          this.monthlyOrQuaterly = 'Monthly';

        } else {
          this.commonTenure = 4;
          this.note = '';
          this.dateType = 'Quarterly Earner';
          $(".tenure").prop('disabled', true);
          this.tenure = null;
          this.monthlyOrQuaterly = 'Quarterly';
        }
      },
    },
    computed: {
      total() {
        let depositAmount = this.depositAmount;
        let interestRate = this.rateOfInterest / 100;
        let tenureInMonths = this.tenure;
        // console.log(tenureInMonths);
        console.log(this.commonTenure);
        if (this.commonTenure === 13 && tenureInMonths >= 13) {
          let convertedTenure = tenureInMonths / 12;
          let BalanceAtMaturity = ((1 + interestRate) ** convertedTenure);
          return BalanceAtMaturity = (depositAmount * BalanceAtMaturity);
        } else if (this.commonTenure === 12 && tenureInMonths < 13 && tenureInMonths > 2) {
          return depositAmount + (depositAmount * interestRate * tenureInMonths / 12);
        } else if (this.commonTenure === 100) {
          tenureInMonths = null;
          return depositAmount + (depositAmount * interestRate * 100 / 360);
        } else if (this.commonTenure === 500) {
          return depositAmount + (depositAmount * interestRate * 500 / 360);
        } else if (this.commonTenure === 30) {
          return (depositAmount * interestRate) / 12;
        } else if (this.commonTenure === 4) {
          return depositAmount * interestRate / 12 * 3;
        } else {
          return 0;
        }
      },
      grossInterestAmount() {
        if (this.total <= 0) {
          return 0;
        } else {
          let result = this.total - this.depositAmount;
          if (result <= 0) {
            return 0;
          } else {
            return result;
          }
        }
      },
    },

  }
</script>

<style scoped>
  .brandColor {
    color: #d62e2f;
  }

  #DepositCalculator {
    margin: 50px 0;
  }

  #DepositCalculator .sectionTitle {
    margin-bottom: 30px;
  }

  #DepositCalculator .calculator {
    padding: 15px;
    border: 1px solid rgba(51, 51, 51, 0.397);
  }

  @media screen and (max-width: 768px) {
    #DepositCalculator .calculator {
      margin-bottom: 15px;
    }
  }

  .calculatorForm .DepositInput {
    margin: 15px 0;
  }

  .calculatorForm .DepositInput label {
    font-weight: bold;
    font-size: 16px;
  }

  .calculatorForm input {
    width: 100%;
  }

  .calculatorForm input[type="text"],
  .calculatorForm select,
  .calculatorForm input[type="number"] {
    margin-bottom: 10px;
    border: 1px solid rgba(51, 51, 51, 0.397);
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    font-size: 14px;
    color: #d62e2f;
    width: 100%;
  }

  .calculatorForm select {
    color: #333;
  }

  .calculatorForm .depositAmountInput {
    position: relative;
    margin-bottom: 10px;
  }

  .calculatorForm .depositAmountInput label {
    margin: 0;
    position: absolute;
    top: 3px;
    left: 5px;
    right: 5px;
    bottom: 5px;
    padding: 0 7px;
    background-color: #fff;
    color: #d62e2f;
  }

  .calculatorForm .depositAmountInput input {
    margin: 0;
  }

  .calculatorForm .depositAmountInput input:focus ~ label {
    display: none;
  }

  .calculatorForm .minMaxValue {
    font-size: 12px;
    color: rgba(102, 102, 102, 0.719);
  }

  #DepositCalculator .calculatedAmount {
    height: 100%;
    justify-content: center;
    background-color: #e1e1e1;
    border-radius: 5px;
    padding: 15px;
    display: flex;
    flex-direction: column;
  }

  #DepositCalculator .calculatedAmount .result:not(:last-child) {
    margin-bottom: 10px;
  }

  #DepositCalculator .calculatedAmount .result .row div:nth-child(2) h6 {
    font-weight: 700;
    font-size: 18px;
  }

  #DepositCalculator .calculatedAmount .totalAmount {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #d62e2f;
  }

  #DepositCalculator .calculatedAmount .applyNowButton {
    color: #fff;
    display: inline-block;
    text-decoration: none;
    background-color: #d62e2f;
    padding: 7px 15px;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in;
  }

  #DepositCalculator .calculatedAmount .applyNowButton:hover {
    background-color: #333;
  }

  #DepositCalculator .graphChart .graphTitle p {
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 15px;
    line-height: 1;
  }

  #DepositCalculator .graphChart .graphTitle p span {
    font-weight: 700;
  }

  #DepositCalculator .graphChart .graph {
    border: 1px solid rgba(51, 51, 51, 0.397);
  }


  .margin {
    margin: 15px auto 10px auto;
  }

  .semi-donut-model-2 {
    width: 250px;
    height: 125px;
    position: relative;
    text-align: center;
    color: #fff;
    font-size: 22px;
    font-weight: 600;
    border-radius: 150px 150px 0 0;
    overflow: hidden;
    color: var(--fill);
    display: flex;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
  }

  .semi-donut-model-2:before, .semi-donut-model-2:after {
    content: "";
    width: 250px;
    height: 125px;
    border: 50px solid var(--fill);
    border-top: none;
    position: absolute;
    transform-origin: 50% 0% 0;
    border-radius: 0 0 300px 300px;
    box-sizing: border-box;
    left: 0;
    top: 100%;
  }

  .semi-donut-model-2:before {
    border-color: rgba(0, 0, 0, 0.25);
    transform: rotate(180deg);
  }

  .semi-donut-model-2:after {
    z-index: 3;
    -webkit-animation: 1s fillGraphAnimation ease-in;
    animation: 1s fillGraphAnimation ease-in;
    transform: rotate(calc(1deg * (var(--percentage) * 1.8)));
  }

  .semi-donut-model-2:hover:after {
    opacity: 0.8;
    cursor: pointer;
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 14px;
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle:not(:last-child) {
    border-bottom: 1px solid rgba(51, 51, 51, 0.397);
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle:first-child .amt {
    color: #d62e2f;
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle .name {
    position: relative;
    padding-left: 20px;
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle:not(:last-child) .name::before {
    content: "";
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    height: 14px;
    width: 14px;
    background-color: rgba(0, 0, 0, 0.25);
  }

  #DepositCalculator .graphChart .graph .graphDetails .detailSingle:first-child .name::before {
    background-color: #d62e2f;
  }

  .radioBtn input:checked,
  .radioBtn input:not(:checked) {
    position: absolute;
    left: -9999px;
  }

  .fdApply {
    margin: 10px 0;
  }

  .radioBtn label {
    font-weight: normal;
  }

  .radioBtn label:last-child,
  .radioBtn.setMrg label:last-child {
    margin: 0 !important;
  }

  .radioBtn input:checked + label,
  .radioBtn input:not(:checked) + label {
    position: relative;
    padding-left: 22px;
    margin: 0 30px 0 0;
    cursor: pointer;
    display: inline-block;
  }

  .radioBtn.setMrg input:checked + label,
  .radioBtn.setMrg input:not(:checked) + label {
    margin: 0 30px;
  }

  .radioBtn input:checked + label:before,
  .radioBtn input:not(:checked) + label:before {
    content: '';
    position: absolute;
    left: 0;
    top: 3px;
    width: 15px;
    height: 15px;
    border: 1px solid #d62e2f;
    border-radius: 100%;
    background: #fff;
  }

  .radioBtn input:checked + label:after,
  .radioBtn input:not(:checked) + label:after {
    content: '';
    width: 9px;
    height: 9px;
    background: #d62e2f;
    position: absolute;
    top: 6px;
    left: 3px;
    border-radius: 100%;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
  }

  .radioBtn input:not(:checked) + label:after {
    opacity: 0;
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  .radioBtn input:checked + label:after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
  }

  .fdNames {
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
  }

  .tenureSelect {
    position: relative;
  }

  @media screen and (max-width: 768px) {
    .tenureSelect {
      margin: 10px;
    }
  }

  .tenureSelect select {
    padding-left: 35px !important;
    margin-bottom: 0 !important;
  }

  .tenureSelect select ~ span {
    position: absolute;
    left: 1px;
    top: 1px;
    bottom: 1px;
    width: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #dfdfdf;
    font-size: 14px;
    padding: 5px;
    border-radius: 5px 0 0 5px;
  }


  @keyframes fillAnimation {
    0% {
      transform: rotate(-45deg);
    }
    50% {
      transform: rotate(135deg);
    }
  }

  @keyframes fillGraphAnimation {
    0% {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(180deg);
    }
  }

</style>
