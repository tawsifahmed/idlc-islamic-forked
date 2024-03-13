<template>
    <div id="EMICalculator">
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="header sectionTitle text-uppercase text-center">
                        <h2 class="h2Responsive ">EMI Calculator</h2>
                    </div>
                </div>
            </div>
            <div class="row align-items-streach">
                <div class="col-md-8">
                    <div class="calculator">
                        <div class="row align-items-streach">
                            <div class="col-md-8">
                                <div>
                                    <form class="calculatorForm">
                                        <div class="EMIInput loanAmount">
                                            <div class="row align-items-center">
                                                <div class="col-md-8"><label for="loanAmount">Loan Amount (BDT)</label></div>
                                                <div class="col-md-4">
                                                    <input min="3000" max="20000000" type="number" id="loanAmount"  v-model.number="loanAmount">
                                                </div>
                                                <div class="col-md-12">
                                                    <input min="3000" max="20000000" step="500" type="range" id="" class="rangeValChange rangeslider" v-model.number="loanAmount">
                                                </div>
                                                <div class="col-md-6"><span class="minMaxValue">3000 BDT</span></div>
                                                <div class="col-md-6 text-right"><span class="minMaxValue">2,00,00,000 BDT</span></div>
                                            </div>
                                        </div>
                                        <div class="EMIInput loanTenure">
                                            <div class="row align-items-center">
                                                <div class="col-md-8"><label for="loanTenure">Loan Tenure ({{ tenureUnit }})</label></div>
                                                <div class="col-md-4">
                                                    <input min="1" max="20" type="number" id="loanTenure" v-model.number="loanTuner">
                                                </div>
                                                <div class="col-md-12">
                                                    <input type="range"  min="1" max="20" id="" class="rangeValChange rangeslider" v-model.number="loanTuner">
                                                </div>
                                                <div class="col-md-6"><span class="minMaxValue">1 Year</span></div>
                                                <div class="col-md-6 text-right"><span class="minMaxValue">20 Years</span></div>
                                            </div>
                                        </div>
                                        <div class="EMIInput interestRate">
                                            <div class="row align-items-center">
                                                <div class="col-md-8"><label for="interestRate">Rate of Interest (%)</label></div>
                                                <div class="col-md-4">
                                                    <input min="1" max="20" type="number" id="interestRate" v-model="rateOfInterest">
                                                </div>
                                                <div class="col-md-12">
                                                    <input min="1" max="20" type="range" id="" class="rangeValChange rangeslider" v-model="rateOfInterest">
                                                </div>
                                                <div class="col-md-6"><span class="minMaxValue">1 %</span></div>
                                                <div class="col-md-6 text-right"><span class="minMaxValue">20 %</span></div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="calculatedAmount">
                                    <h4 class="text">Equated Monthly Installment(EMI)</h4>
                                    <h3 class="totalAmount">{{ReplaceNumberWithCommas(emi.toFixed(0))}} BDT</h3>
                                    <a href="#" class="applyNowButton">Apply Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="col-md-4">
                    <div class="graphChart">
                        <div class="graphTitle">
                            <p><span>Breakdown of </span> Total Payment</p>
                        </div>
                        <div class="graph">
                            <div class="semi-donut-model-2 margin" :style="{'--percentage' : principleAmountPercentageData , '--fill': '#00a6b4'}"></div>
                            <div class="graphDetails">
                                <div class="detailSingle">
                                    <div class="name">Principal Amt</div>
                                    <div class="amt">{{ReplaceNumberWithCommas(loanAmount.toFixed(0))}}</div>
                                </div>
                                <div class="detailSingle">
                                    <div class="name">Interest Amt</div>
                                    <div class="amt">{{ReplaceNumberWithCommas((totalPayableAmount-loanAmount).toFixed(0))}}</div>
                                </div>
                                <div class="detailSingle">
                                    <div class="name">Total Amt Payble</div>
                                    <div class="amt"> {{ReplaceNumberWithCommas(totalPayableAmount.toFixed(0))}}</div>
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
            loanTuner: 1,
            tenureUnit: "Year",
            principleAmountPercentage : 0,
            loanAmount: 3000,
            calculatedAmount: 3000,
            rateOfInterest: 10,
            emiPayable: 0,
        }
    },
    watch: {
       loanTuner: function () {
         if (this.loanTuner > 1 ) {
           this.tenureUnit = 'Years';
         }else {
           this.tenureUnit = 'Year';
         }
       },

    },
  methods: {
    ReplaceNumberWithCommas(yourNumber) {
      //Seperates the components of the number
      var components = yourNumber.toString().split(".");
      //Comma-fies the first part
      components [0] = components [0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      //Combines the two sections
      return components.join(".");
    },
  },
    computed: {
      tenureMonths(){
        return this.loanTuner * 12;
      },
      interestRate(){
        return this.rateOfInterest / 100 / 12;
      },
      emi(){
        var x = Math.pow(1 + this.interestRate, this.tenureMonths);
        var emiPayable =  (this.loanAmount * x * this.interestRate) / (x-1);
        return Number(emiPayable);
      },

      totalPayment(){
        return Number(this.emi * this.tenureMonths);
      },

      totalInterest(){
        return Number(this.totalPayment  - this.loanAmount);
      },
      totalPayableAmount(){
       return  this.emi * this.tenureMonths;
      },

      principleAmountPercentageData(){
        return  this.principleAmountPercentage = (this.loanAmount * 100)/ this.totalPayableAmount;
      }



    }
}
</script>

<style scoped>
#EMICalculator {
    margin: 50px 0;
}
#EMICalculator .sectionTitle{
    margin-bottom: 30px;
}
#EMICalculator .calculator {
    padding: 15px;
    border: 1px solid rgba(51, 51, 51, 0.397);
}
.calculatorForm .EMIInput {
    margin: 15px 0;
}
.calculatorForm .EMIInput label{
    font-weight: bold;
    font-size: 16px;
}
.calculatorForm input {
    width: 100%;
}
.calculatorForm input[type="text"],
.calculatorForm input[type="number"] {
    margin-bottom: 10px;
    border: 1px solid rgba(51, 51, 51, 0.397);
    border-radius: 5px;
    outline: none;
    padding: 5px 10px;
    font-size: 14px;
    color: #00a6b4
}
.calculatorForm .minMaxValue {
    font-size: 12px;
    color: rgba(102, 102, 102, 0.719);
}
#EMICalculator .calculatedAmount {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e1e1e1;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
}
#EMICalculator .calculatedAmount {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #e1e4e9;
    border-radius: 5px;
    padding: 15px;
    text-align: center;
}
#EMICalculator .calculatedAmount .text {
    font-size: 1.25rem;
    margin-bottom: 15px;
}
#EMICalculator .calculatedAmount .totalAmount {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #00a6b4;
}
#EMICalculator .calculatedAmount .applyNowButton {
    color: #fff;
    text-decoration: none;
    background-color: #00a6b4;
    padding: 7px 15px;
    font-size: 14px;
    border-radius: 5px;
    transition: background-color 0.3s ease-in;
}
#EMICalculator .calculatedAmount .applyNowButton:hover {
    background-color: #333;
}

#EMICalculator .graphChart .graphTitle p{
    font-size: 1.5rem;
    font-weight: 300;
    margin-bottom: 15px;
    line-height: 1;
}
#EMICalculator .graphChart .graphTitle p span {
    font-weight: 700;
}
#EMICalculator .graphChart .graph {
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
  transform: rotate(calc( 1deg * ( var(--percentage) * 1.8 ) ));
}
.semi-donut-model-2:hover:after {
  opacity: 0.8;
  cursor: pointer;
}

#EMICalculator .graphChart .graph .graphDetails .detailSingle {
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    font-size: 14px;
}
#EMICalculator .graphChart .graph .graphDetails .detailSingle:not(:last-child) {
    border-bottom: 1px solid rgba(51, 51, 51, 0.397);
}
#EMICalculator .graphChart .graph .graphDetails .detailSingle:first-child .amt {
    color: #00a6b4;
}
#EMICalculator .graphChart .graph .graphDetails .detailSingle .name {
    position: relative; padding-left: 20px;
}
#EMICalculator .graphChart .graph .graphDetails .detailSingle:not(:last-child) .name::before {
    content: ""; position: absolute; left: 0; top: 50%; transform: translateY(-50%); height: 14px; width: 14px; background-color: rgba(0, 0, 0, 0.25);
}
#EMICalculator .graphChart .graph .graphDetails .detailSingle:first-child .name::before {
    background-color: #00a6b4;
}

@keyframes fillAnimation{
  0%{transform : rotate(-45deg);}
  50%{transform: rotate(135deg);}
}

@keyframes fillGraphAnimation{
  0%{transform: rotate(0deg);}
  50%{transform: rotate(180deg);}
}

</style>
