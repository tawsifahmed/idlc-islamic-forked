<template>
  <div>
    <form-wizard @onComplete="checkEligibility"  v-show="!isEligible">
      <tab-content title="SME Eligibility Checker"   :selected="true" class="firsttabcontent1">
        <div class="form-group">
          <label for="branchName">Nearest IDLC Branch</label>
          <select
            :class="hasError('branchName') ? 'is-invalid' : ''"
            class="form-control"
            v-model="formData.branchName"
            placeholder="Select Loan"
            data-placement="right"
            title="Select a Branch"
            @change="onChangeBranchName($event)"
          >
            <option value="" DISABLED>Select One</option>
            <option :value="data.name" v-for="data in branches" :key="data.id">{{ data.name}}</option>

          </select>
          <div v-if="hasError('loanType')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.branchName.required">This field is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="averageMonthlySales">Average Monthly Sales (Revenue)</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('averageMonthlySales') ? 'is-invalid' : ''"
            placeholder="40,000"
            v-model="formData.averageMonthlySales"
            data-placement="right"
            title="Enter Monthly Sales Amount"
            min="0"
          >
          <div v-if="hasError('averageMonthlySales')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.averageMonthlySales.required">This field is required</div>
            <div class="error" v-if="!$v.formData.averageMonthlySales.numeric">Should be a valid value</div>
          </div>
        </div>

        <div class="form-group">
          <label for="averageMonthlyExpenses">Average Monthly Expenses (Rent, Employee Salary, Utility Bills, Transportation, etc.)</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('averageMonthlyExpenses') ? 'is-invalid' : ''"
            placeholder="56,000"
            v-model="formData.averageMonthlyExpenses"
            data-placement="right"
            title="Enter Monthly Expenses Amount"
            min="0"
          >
          <div v-if="hasError('averageMonthlyExpenses')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.averageMonthlyExpenses.required">This field is required.</div>
          </div>
        </div>


        <div class="form-group">
          <label for="monthlyInstallmentPayment">Monthly Installment Payment (If any)</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('monthlyInstallmentPayment') ? 'is-invalid' : ''"
            placeholder="3,000,000"
            v-model="formData.monthlyInstallmentPayment"
            data-placement="right"
            title="Enter Monthly Installment Amount"
            min="0"

          >
          <div v-if="hasError('monthlyInstallmentPayment')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.monthlyInstallmentPayment.required">This field is required.</div>
            <div class="error" v-if="!$v.formData.monthlyInstallmentPayment.numeric">Should be a valid value</div>

          </div>
        </div>

        <div class="form-group">
          <label for="ccOverdraftLoanAmount">CC/Overdraft or Working Capital Loan Amount (If any)</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('ccOverdraftLoanAmount') ? 'is-invalid' : ''"
            placeholder="4,000,000"
            v-model="formData.ccOverdraftLoanAmount"
            data-placement="right"
            title="Enter Overdraft or Working Capital Loan Amount"
            min="0"
          >
          <div v-if="hasError('ccOverdraftLoanAmount')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.ccOverdraftLoanAmount.required">This field is required.</div>
            <div class="error" v-if="!$v.formData.ccOverdraftLoanAmount.numeric">Should be a valid value</div>
          </div>
        </div>

        <div class="form-group">
          <label for="TermLoan">Term Loans' Current Outstanding Amount (If any)</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('TermLoan') ? 'is-invalid' : ''"
            v-model="formData.TermLoan"
            data-placement="right"
            title="Loans Current Outstanding Amount"
            min="0"
          >
          <div v-if="hasError('TermLoan')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.TermLoan.required">This field is required.</div>
            <div class="error" v-if="!$v.formData.TermLoan.numeric">Should be a valid value</div>
          </div>
        </div>

        <div class="form-group">
          <label for="totalInvestmentInTheBusiness">Total Investment in The Business</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('totalInvestmentInTheBusiness') ? 'is-invalid' : ''"
            placeholder=""
            v-model="formData.totalInvestmentInTheBusiness"
            data-placement="right"
            title="Enter Total Investment in The Business"
            min="0"
          >
          <div v-if="hasError('totalInvestmentInTheBusiness')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.totalInvestmentInTheBusiness.required">This field is required.</div>
            <div class="error" v-if="!$v.formData.totalInvestmentInTheBusiness.numeric">Should be a valid value</div>
          </div>
        </div>

        <div class="form-group">
          <label for="securityOfferings">Security offerings</label>
          <select
            :class="hasError('securityOfferings') ? 'is-invalid' : ''"
            class="form-control"
            v-model="formData.securityOfferings"
            name="securityOfferings"
            @change="onChangeSecurityOfferings($event)"
            placeholder="Select Security offerings"
          >
            <option value="12" >Land</option>
            <option value="12">Apartment</option>
            <option value="12">Saff-Kabla Possession</option>
            <option value="13">FDR</option>
            <option value="14">No Security</option>
          </select>
          <div v-if="hasError('securityOfferings')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.securityOfferings.required">This field is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="">Type of Business</label>
          <select
            :class="hasError('typeOfBusiness') ? 'is-invalid' : ''"
            class="form-control"
            v-model="formData.typeOfBusiness"
            @change="onChangeTypeOfBusiness($event)"
            title="Select Business Type"
          >
            <option value="" DISABLED>Select One</option>
            <option value="" >Select One</option>
            <option value="" >Select One</option>
<!--            <option  v-for="data in businessType" :value="1" :key="data.id">{{ data.Sector }}</option>-->
          </select>
          <div v-if="hasError('typeOfBusiness')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.typeOfBusiness.required">This field is required.</div>
          </div>
        </div>

        <div class="form-group">
          <label for="proposedLoanAmount">Proposed Loan Amount</label>
          <input
            type="number"
            class="form-control"
            :class="hasError('proposedLoanAmount') ? 'is-invalid' : ''"
            v-model="formData.proposedLoanAmount"
            placeholder="Interest Amount"
            data-placement="right"
            title="Proposed Loan Amount"
            min="0"
          >

          <div v-if="hasError('proposedLoanAmount')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.proposedLoanAmount.required">This field is required.</div>
            <div class="error" v-if="!$v.formData.proposedLoanAmount.numeric">Should be a valid value.</div>
            <div class="error" v-if="!$v.formData.proposedLoanAmount.between">Won't accept any amount less than BDT 500,000/- </div>
          </div>
        </div>

        <div class="form-group">
          <label for="proposedTenure">Proposed Tenure (Years)  </label>
          <input
            type="number"
            class="form-control"
            :class="hasError('proposedTenure') ? 'is-invalid' : ''"
            v-model="formData.proposedTenure"
            data-placement="right"
            placeholder="1"
            min="1"
            max="5"
          >
          <div v-if="hasError('typeOfBusiness')" class="invalid-feedback">
            <div class="error" v-if="!$v.formData.proposedTenure.between">Should be a valid value</div>
          </div>
        </div>

      </tab-content>
    </form-wizard>

    <form-wizard @onComplete="submitData"  v-show="isEligible">
      <tab-content title="Submit Information" >
            <div class="form-group">
              <label for="fullName">Full Name (আপনার নাম)</label>
              <input
                type="text"
                class="form-control"
                :class="hasError('fullName') ? 'is-invalid' : ''"
                placeholder="Your Name"
                v-model="formData.fullName"
                data-placement="right"
                title="Enter Your Name"
              >
              <div v-if="hasError('fullName')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.fullName.required">This field is required.</div>
              </div>
            </div>
            <div class="form-group">
              <label for="email">Your Email (আপনার ইমেইল)</label>
              <input
                type="email"
                class="form-control"
                :class="hasError('email') ? 'is-invalid' : ''"
                placeholder="example@gmail.com"
                v-model="formData.email"
                data-placement="right"
                title="Enter Your Email"

              >
              <div v-if="hasError('email')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.email.required">Email field is required</div>
                <div class="error" v-if="!$v.formData.email.email">Should be in email format</div>
              </div>
            </div>
            <div class="form-group">
              <label for="phone">Contact Number (আপনার ফোন নম্বর)</label>
              <input
                type="number"
                class="form-control"
                :class="hasError('phone') ? 'is-invalid' : ''"
                placeholder="01710000000"
                v-model="formData.phone"
                data-placement="right"
                title="Enter Your Phone"
              >
              <div v-if="hasError('phone')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.phone.required">This field is required.</div>
              </div>
            </div>
            <div class="form-group">
              <label for="address">Your Address (আপনার ঠিকানা)</label>
              <input
                type="text"
                class="form-control"
                :class="hasError('address') ? 'is-invalid' : ''"
                placeholder="Dhaka, Bangladesh"
                v-model="formData.address"
                data-placement="right"
                title="Enter Your Address"
              >
              <div v-if="hasError('address')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.address.required">Please provide your address.</div>
              </div>
            </div>


            <div class="form-group">
              <label for="businessName">Your Business/Company Name (ব্যবসা প্রতিষ্ঠানের নাম)</label>
              <input
                type="text"
                class="form-control"
                :class="hasError('businessName') ? 'is-invalid' : ''"
                placeholder="Dhaka, Bangladesh"
                v-model="formData.businessName"
                data-placement="right"
                title="Enter Your Business Name"
              >
              <div v-if="hasError('businessName')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.businessName.required">Please provide your address.</div>
              </div>
            </div>
            <div class="form-group">
              <label for="businessAddress">Your Business Address (ব্যবসা প্রতিষ্ঠানের ঠিকানা)</label>
              <input
                type="text"
                class="form-control"
                :class="hasError('businessAddress') ? 'is-invalid' : ''"
                placeholder="Dhaka, Bangladesh"
                v-model="formData.businessAddress"
                data-placement="right"
                title="Select Your Address"
              >
              <div v-if="hasError('businessAddress')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.businessAddress.required">Please provide your address.</div>
              </div>
            </div>
            <div class="form-group">
              <label for="businessExperience">Business Experience (ব্যবসায়িক অভিজ্ঞতা)</label>
              <input
                type="text"
                class="form-control"
                :class="hasError('businessExperience') ? 'is-invalid' : ''"
                placeholder="Dhaka, Bangladesh"
                v-model="formData.businessExperience"
                data-placement="right"
                title="Enter Your Business Experience"
              >
              <div v-if="hasError('businessExperience')" class="invalid-feedback">
                <div class="error" v-if="!$v.formData.businessExperience.required">Please provide your address.</div>
              </div>
            </div>
      </tab-content>
    </form-wizard>


  </div>

</template>

<script>
import { FormWizard, TabContent, ValidationHelper } from "vue-step-wizard";
import "vue-step-wizard/dist/vue-step-wizard.css";
import { required, email, numeric, between} from "vuelidate/lib/validators";
import axios from "axios";



export default {
  name: "SmeLoan",
  components: {
    FormWizard,
    TabContent
  },
  mixins: [ValidationHelper],
  data() {
    return {

      businessType: [],
      branches: [],
      pbetween: 3,
      formData: {
        // min_avg_sales: 455,
        // avg_monthly_sales: '',
        respectMinSales: false,
        branchName: "",
        averageMonthlySales: null,
        averageMonthlyExpenses: null,
        monthlyInstallmentPayment: 0,
        ccOverdraftLoanAmount: 0,
        TermLoan: 0,
        totalInvestmentInTheBusiness: null,
        totalLoanAmount: 0,
        securityOfferings: "",
        typeOfBusiness: "",
        proposedLoanAmount: null,
        proposedTenure: null,
        emi: 0,

        fullName: null,
        email: null,
        phone: null,
        address: null,
        companyName: null,
        businessAddress: null,
        businessName: null,
        businessExperience: null,
        terms: false,

      },
      isEligible: false,
      finalSecurityOfferings: 1.5,

      validationRules: [
        {
          branchName: { required },
          averageMonthlySales: { required, numeric },
          averageMonthlyExpenses: { required, numeric },
          monthlyInstallmentPayment: { required, numeric },
          ccOverdraftLoanAmount: { required, numeric },
          TermLoan: { required, numeric },
          totalInvestmentInTheBusiness: { required, numeric },
          totalLoanAmount: { required },
          securityOfferings: { required },
          typeOfBusiness: { required },
          proposedLoanAmount: { required, numeric, between: between(500000, 1000000000000000000)  },
          proposedTenure: { between: between(1, 5) },
        },


        {
          fullName: { required },
          email: { required, email},
          phone: { required, numeric},
          address: { required},
          businessName: { required},
          businessAddress: { required},
          businessExperience: { required},
        },

        {
          terms: { required }
        }
      ],
    }
  },
  methods: {
    checkEligibility() {
      let tenureInMonth = this.formData.proposedTenure * 12;
      console.log(tenureInMonth);
      let rateOfInterest  = this.formData.securityOfferings/100/12;
      console.log(rateOfInterest);
      let proposedLoanAmount = parseInt(this.formData.proposedLoanAmount);
      let x = Math.pow(1 + rateOfInterest, tenureInMonth);
      let emiPayable =  (proposedLoanAmount * x * rateOfInterest) / (x-1);
      console.log(emiPayable);
      this.formData.emi = Number(emiPayable);

      let AverageYearlySales = this.formData.averageMonthlySales * 12;
      let cogs = ((100 - this.formData.typeOfBusiness)/100) * AverageYearlySales;
      let grossProfit = AverageYearlySales- cogs;
      let actualAverageMonthlyExpenses = parseInt(this.formData.averageMonthlyExpenses)+50000;
      let actualAverageYearlyExpenses = actualAverageMonthlyExpenses * 12;
      let operatingProfit = grossProfit - actualAverageYearlyExpenses;
      let ccOverdrafInMonth = parseInt(this.formData.ccOverdraftLoanAmount)*9/100;
      let ccOverdrafInYear = ccOverdrafInMonth/12;
      let ccOverdrafInRate = ccOverdrafInYear * 0.9;
      let monthlyLoanBurden = parseInt(this.formData.monthlyInstallmentPayment) + ccOverdrafInRate + emiPayable ;
      let yearlyLoanBurden = monthlyLoanBurden * 12;
      let dscr = operatingProfit/ yearlyLoanBurden;
      console.log(dscr);


      let totalInvestmentInTheBusiness = parseInt(this.formData.totalInvestmentInTheBusiness);
      let ccOverdraftLoanAmountAndTermLoan = parseInt(this.formData.ccOverdraftLoanAmount) + parseInt(this.formData.TermLoan);
      let totalLoanAmount =  ccOverdraftLoanAmountAndTermLoan + parseInt(this.formData.proposedLoanAmount);
      let debtEquityRatio = totalLoanAmount/(totalInvestmentInTheBusiness - totalLoanAmount);
      console.log(debtEquityRatio);
      console.log( this.finalSecurityOfferings);


      if (proposedLoanAmount <= 1500000){
        if(this.formData.proposedTenure <= 2){
          this.finalCheck(dscr, debtEquityRatio, this.finalSecurityOfferings);
        }else{
          this.notEligibleWarning();
        }
      }else if(proposedLoanAmount <= 3500000){
        if(this.formData.proposedTenure <= 3){
          this.finalCheck(dscr, debtEquityRatio, this.finalSecurityOfferings);
        }else{
          this.notEligibleWarning();
        }
      }else{
        if(this.formData.proposedTenure <= 5){
          this.finalCheck(dscr, debtEquityRatio);
        }else{
          this.notEligibleWarning();
        }
      }
      // console.log(dscr);
      // console.log(debtEquityRatio);

    },

    finalCheck(dscr, debtEquityRatio, finalSecurityOfferings){
      if (dscr >= finalSecurityOfferings  && debtEquityRatio < 1  ){
        this.$fire({
          title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
          type: "success",
          timer: 5000
        }).then(r => {
          console.log(r.value);
          this.submitData();
          return true;

        });

      }else{
        this.notEligibleWarning();

      }
    },

    notEligibleWarning(){
      this.$fire({
        title: "You are not eligible please try again!",
        type: "warning",
        timer: 5000
      }).then(r => {
        console.log(r.value);
      });
    },

    getBusinessType(){
      axios.get('get-business-type').then((response) => {
        if (response.status == 200) {
          this.businessType = response.data.details;
        }
      }).catch(error => console.log(error));

    },

    getBranch(){
      axios.get('get-branch',{
        params: {
        idlc_category: 'idlc'
      }
    }).then((response) => {
        if (response.status == 200) {
          this.branches = response.data.details;
        }
      }).catch(error => console.log(error));
    },

    onChangeSecurityOfferings(event){
      let securityOfferings = event.target.value;
      this.formData.securityOfferings = securityOfferings
      if (securityOfferings === 12){
        this.finalSecurityOfferings = 1.5
      }else{
        this.finalSecurityOfferings = 1.75
      }
    },

    onChangeTypeOfBusiness(event){
      alert('df');
      this.formData.typeOfBusiness = event.target.value;
    },

    onChangeBranchName(event){
      this.formData.branchName = event.target.value;
    },


    submitData(){
      this.isEligible = true;
      const data = new FormData();
      data.append('branchName', this.formData.branchName);
      data.append('averageMonthlySales', this.formData.averageMonthlySales);
      data.append('averageMonthlyExpenses', this.formData.averageMonthlyExpenses);
      data.append('monthlyInstallmentPayment', this.formData.monthlyInstallmentPayment);
      data.append('ccOverdraftLoanAmount', this.formData.ccOverdraftLoanAmount);
      data.append('TermLoan', this.formData.TermLoan);
      data.append('totalInvestmentInTheBusiness', this.formData.totalInvestmentInTheBusiness);
      data.append('securityOfferings', this.formData.securityOfferings);
      data.append('typeOfBusiness', this.formData.typeOfBusiness);
      data.append('proposedLoanAmount', this.formData.proposedLoanAmount);
      data.append('proposedTenure', this.formData.proposedTenure);
      data.append('fullName', this.formData.fullName);
      data.append('email', this.formData.email);
      data.append('phone', this.formData.phone);
      data.append('address', this.formData.address);
      data.append('businessName', this.formData.businessName);
      data.append('businessAddress', this.formData.businessAddress);
      data.append('businessExperience', this.formData.businessExperience);

      this.$store.dispatch("submitForSME", data)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }





  },
  computed: {
    totalLoanAmount(){
      return this.formData.totalLoanAmount = parseInt(this.formData.ccOverdraftLoanAmount) + parseInt(this.formData.TermLoan);
    },



  },
  created() {
    this.getBusinessType();
    this.getBranch();
  },
};
</script>
<style scoped>

  .tabStatus{
    display: none!important;
  }
  .error{
    font-size: 14px;
  }
   .firsttabcontent1 .nav-pills.nav-wizard>li.active a {
      background-color: #00a6b4;
      color: #fff;
  }
  .nav .nav-pills.nav-wizard>li.active a {
      position: relative;
  }
  .nav-item {
    background: #00a6b4;
  }
  .btn-warning {
    background-color: #00a6b4;
      color: #fff;
  }
  .loan-select {
    padding: 10px 12px 0 12px;
  }
  .loan-select option {
    padding: 10px 12px 0 12px;
  }
  .district-select {
    padding: 10px 12px 0 12px;
  }
  .vs__selected-options {
    padding: 10px 12px 0 12px;
  }
  .form-group label {
    font-size: 14px;
  }
  /* select option[selected]{
      background-color: #00a6b4;
      color: #fff;
  } */
  select option:hover, option:focus{
      background: #00a6b4;
      color: #fff;
  }
  .term-condition {
    font-size: 14px;
  }
  .condition-check {
    padding-left: 20px;
    padding-top: 10px;
  }
  .card-footer > .btn-group > button.btn {
    outline: none;
    border: 2px solid #00a6b4 !important;
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
  .nav-pills.nav-wizard>li a {
    position: relative;
  }
</style>
