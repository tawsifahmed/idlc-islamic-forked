<template>
  <div>
    <form @submit.prevent="checkSmeEligibility"  v-if="!isEligible" class="apply-for-loan-submit">
      <div class="col-md-12 ">
        <h6 class="text-center btn-block bg_color_for_apply_page" >SME Eligibility Checker</h6>
        <hr>
      </div>
<!--      Nearest IDLC Branch-->
        <div class="form-group">
          <label for="branchName">Nearest IDLC Branch</label>
          <select
            :class="{ 'is-invalid': submitted && $v.formData.branchName.$error }"
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
          <div class="error_message" v-if="submitted && !$v.formData.branchName.required">This field is required.</div>
        </div>

<!--      Average Monthly Sales (Revenue)-->
        <div class="form-group">
          <label for="averageMonthlySales">Average Monthly Sales (Revenue)</label>
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formData.averageMonthlySales.$error }"
            placeholder="Enter Monthly Sales Amount"
            v-model="formData.averageMonthlySales"
            min="0"
          >
            <div class="error_message" v-if="submitted && !$v.formData.averageMonthlySales.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.formData.averageMonthlySales.numeric">Should be a valid value.</div>
        </div>

<!--      Average Monthly Expenses-->
        <div class="form-group">
          <label for="averageMonthlyExpenses">Average Monthly Expenses (Rent, Employee Salary, Utility Bills, Transportation, etc.)</label>
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formData.averageMonthlyExpenses.$error }"
            placeholder="Enter Monthly Expenses Amount"
            v-model="formData.averageMonthlyExpenses"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.averageMonthlyExpenses.required">This field is required.</div>
          <div class="error_message" v-if="submitted && !$v.formData.averageMonthlyExpenses.numeric">Should be a valid value.</div>
        </div>

<!--      Monthly Installment Payment-->
        <div class="form-group">
          <label for="monthlyInstallmentPayment">Monthly Installment Payment of Existing Loan (If any)</label>
          <input
            type="number"
            class="form-control"
            placeholder="Monthly Installment Payment Amount"
            v-model="formData.monthlyInstallmentPayment"
            data-placement="right"
            min="0"
          >
        </div>

<!--      CC/Overdraft or Working Capital Loan Amount-->
        <div class="form-group">
          <label for="ccOverdraftLoanAmount">CC/Overdraft or Working Capital Loan Amount (If any)</label>
          <input
            type="number"
            class="form-control"
            placeholder="Enter Overdraft or Working Capital Loan Amount"
            v-model="formData.ccOverdraftLoanAmount"
            data-placement="right"
            min="0"
          >
        </div>

<!--      Term Loans' Current Outstanding Amount-->
        <div class="form-group">
          <label for="TermLoan">Existing Term Loans' Current Outstanding Amount (If any)</label>
          <input
            type="number"
            class="form-control"
            v-model="formData.TermLoan"
            data-placement="right"
            placeholder="Current Outstanding Amount"
            min="0"
          >
        </div>

<!--      Total Investment in The Business-->
        <div class="form-group">
          <label for="totalInvestmentInTheBusiness">Total Investment in The Business</label>
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formData.totalInvestmentInTheBusiness.$error }"
            placeholder="Enter Total Investment in The Business"
            v-model="formData.totalInvestmentInTheBusiness"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.totalInvestmentInTheBusiness.required">This field is required.</div>
          <div class="error_message" v-if="submitted && !$v.formData.totalInvestmentInTheBusiness.numeric">Should be a valid value.</div>
        </div>

<!--      Security offerings-->
        <div class="form-group">
          <label for="securityOfferings">Security offerings</label>
          <select
            :class="{ 'is-invalid': submitted && $v.formData.securityOfferings.$error }"
            class="form-control"
            name="securityOfferings"
            @change="onChangeSecurityOfferings($event)"
            placeholder="Select Security offerings"
          >
            <option value="8.99" >Land</option>
            <option value="8.99">Apartment</option>
            <option value="8.99">Saff-Kabla Possession</option>
            <option value="10.5">FDR</option>
            <option value="12.5">No Security</option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formData.securityOfferings.required">This field is required.</div>
        </div>

<!--      Type of Business-->
        <div class="form-group">
          <label for="typeOfBusiness">Type of Business</label>
          <select
            :class="{ 'is-invalid': submitted && $v.formData.typeOfBusiness.$error }"
            class="form-control"
            placeholder="Select Loan"
            @change="onChangeTypeOfBusiness($event)"
            data-placement="right"
            title="Select Business Type"
          >
            <option value="" DISABLED>Select One</option>

            <option  v-for="data in businessType" :value="data.Margin" >{{ data.Sector }}</option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formData.typeOfBusiness.required">This field is required.</div>
        </div>

<!--      Proposed Loan Amount-->
        <div class="form-group">
          <label for="proposedLoanAmount">Proposed Loan Amount</label>
          <input
            type="number"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formData.proposedLoanAmount.$error }"
            v-model="formData.proposedLoanAmount"
            placeholder="Proposed Loan Amount"
            data-placement="right"
            min="0"
            :max="maxProposedLoanAmount"
          >
          <div class="error_message" v-if="submitted && !$v.formData.proposedLoanAmount.required">This field is required.</div>
        </div>

        <div class="form-group">
          <label for="proposedTenure">Proposed Tenure (Years) </label>
          <input
            type="number"
            class="form-control"s
            :class="{ 'is-invalid': submitted && $v.formData.proposedTenure.$error }"
            v-model="formData.proposedTenure"
            data-placement="right"
            min="0"
            :max="this.getMaxTenure"
            placeholder="Enter Tenure"
          >
          <div class="error_message" v-if="submitted && !$v.formData.proposedTenure.required">This field is required.</div>
          <div class="error_message" v-if="submitted && !$v.formData.proposedTenure.between">Maximum Tenure {{  getMaxTenure}} yrs </div>
        </div>
      <div class="mb-3 form-check px-3">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
        <label class="form-check-label" style="font-size: 13px" for="exampleCheck1">
          I do hereby admit that all the above information that I have input is true & correct.
          If any of the above information figured out false or incorrect, I understand & agree that my loan application will be rejected.
          I agree to share my information with IDLC and follow the company policy as required.</label>
      </div>

      <div class="text-center">
        <!--        <p class="error_message" v-if="submitStatus === 'OK'">Thanks for your submission!</p>-->
        <p class="error_message" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <!--        <p class="text-success" v-if="submitStatus === 'PENDING'">Sending...</p> <br>-->
        <button class="button btn" type="submit" >Submit</button>
      </div>
    </form>

    <form @submit.prevent="submitData"  v-if="isEligible">
      <div class="col-md-12 ">
        <h6 class="text-center btn-block bg_color_for_apply_page" >Personal Information </h6>
        <hr>
      </div>

        <div class="form-group">
          <label for="fullName">Full Name (আপনার নাম)</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.fullName.$error }"
            placeholder="Your Name"
            v-model="formDataTwo.fullName"
            data-placement="right"
            title="Enter Your Name"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.fullName.required">This field is required.</div>
        </div>
        <div class="form-group">
          <label for="email">Your Email (আপনার ইমেইল)</label>
          <input
            type="email"
            class="form-control"
            placeholder="Your email address"
            v-model="formDataTwo.email"
            data-placement="right"
          >
        </div>
        <div class="form-group">
          <label for="phone">Contact Number (আপনার ফোন নম্বর)</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.phone.$error }"
            placeholder="Enter Contact Number"
            v-model="formDataTwo.phone"
            data-placement="right"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.phone.required">This field is required.</div>
          <div class="error_message" v-if="submitted && !$v.formDataTwo.phone.numeric">Should be nummeric value.</div>
          <div class="error_message" v-if="submitted && !$v.formDataTwo.phone.minLength">Enter Valid Phone Number</div>
        </div>
        <div class="form-group">
          <label for="address">Your Address (আপনার ঠিকানা)</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.address.$error }"
            placeholder="Enter Your Address"
            v-model="formDataTwo.address"
            data-placement="right"
            title="Enter Your Address"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.address.required">This field is required.</div>
        </div>
        <div class="form-group">
          <label for="businessName">Your Business/Company Name (ব্যবসা প্রতিষ্ঠানের নাম)</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.businessName.$error }"
            placeholder="Enter Your Business Name"
            v-model="formDataTwo.businessName"
            data-placement="right"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.businessName.required">This field is required.</div>
        </div>
        <div class="form-group">
          <label for="businessAddress">Your Business Address (ব্যবসা প্রতিষ্ঠানের ঠিকানা)</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.businessAddress.$error }"
            placeholder="Your Business Address"
            v-model="formDataTwo.businessAddress"
            data-placement="right"
            title="Select Your Address"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.businessAddress.required">This field is required.</div>
        </div>
        <div class="form-group">
          <label for="businessExperience">Business Experience In Years (ব্যবসায়িক অভিজ্ঞতা)</label>
          <input
            type="number"
            min="0"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.businessExperience.$error }"
            placeholder="Business Experience"
            v-model="formDataTwo.businessExperience"
            data-placement="right"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.businessExperience.required">This field is required.</div>
        </div>

        <div class="form-group">
          <label for="dob" class="">Date of Birth  </label>
          <datepicker
            class="custom_datePiker_style"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.dob.$error }"
            placeholder="Date of birth"
            v-model="formDataTwo.dob"
            width="500px"
            :disabledDates="state.disabledDates"
          />
          <div class="error_message" v-if="submitted && !$v.formDataTwo.dob.required">This field is required.</div>
        </div>
        <div class="form-group">
          <label for="ageOfBusiness">Age of Business</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.ageOfBusiness.$error }"
            placeholder="Enter your Age of Business"
            v-model="formDataTwo.ageOfBusiness"
            data-placement="right"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.ageOfBusiness.required">This field is required.</div>
        </div>

        <div class="form-group">
          <label for="areaLocation">Area/Location</label>
          <input
            type="text"
            class="form-control"
            :class="{ 'is-invalid': submitted && $v.formDataTwo.areaLocation.$error }"
            placeholder="Enter your Area/Location"
            v-model="formDataTwo.areaLocation"
            data-placement="right"
          >
          <div class="error_message" v-if="submitted && !$v.formDataTwo.areaLocation.required">This field is required.</div>
        </div>

        <div class="form-group">
          <label for="gender">Gender</label>
          <select
            :class="{ 'is-invalid': submitted && $v.formDataTwo.gender.$error }"
            class="form-control"
            v-model="formDataTwo.gender"
            name="securityOfferings"
            @change="onChangeGender($event)"
          >
            <option value="Male" >Male</option>
            <option value="Female">Female</option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formDataTwo.gender.required">This field is required.</div>
        </div>

      <div class="mb-3 form-check px-3">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
          <label class="form-check-label" style="font-size: 13px" for="exampleCheck1">
            I do hereby admit that all the above information that I have input is true & correct.
            If any of the above information figured out false or incorrect, I understand & agree that my loan application will be rejected.
            I agree to share my information with IDLC and follow the company policy as required.</label>
        </div>

        <div class="text-center">
          <!--        <p class="error_message" v-if="submitStatus === 'OK'">Thanks for your submission!</p>-->
          <p class="error_message" v-if="submitStatus2 === 'ERROR'">Please fill the form correctly.</p>
          <!--        <p class="text-success" v-if="submitStatus === 'PENDING'">Sending...</p> <br>-->
          <button class="button btn apply-for-loan-submit" type="submit" >Submit</button>
        </div>
    </form>
  </div>

</template>

<script>
  import "vue-step-wizard/dist/vue-step-wizard.css";
  // import { required, email, numeric} from "vuelidate/lib/validators";
  import { required, minLength, maxLength, email, numeric, between  } from 'vuelidate/lib/validators'
  import Datepicker from 'vuejs-datepicker';
  import axios from "axios";

  export default {
    name: "SmeEligibilityForm",
    components: {
      Datepicker,
    },
    data() {
      return {
        formData: {
          // min_avg_sales: 455,
          // avg_monthly_sales: '',
          respectMinSales: false,
          branchName: "",
          averageMonthlySales: null,
          averageMonthlyExpenses: null,
          monthlyInstallmentPayment:'',
          ccOverdraftLoanAmount: '',
          TermLoan: '',
          totalInvestmentInTheBusiness: null,
          totalLoanAmount: 0,
          securityOfferings: "",
          typeOfBusiness: "",
          proposedLoanAmount: null,
          proposedTenure: null,
          emi: 0,
        },
        formDataTwo:{
          fullName: null,
          email: null,
          phone: null,
          address: null,
          companyName: null,
          businessAddress: null,
          businessName: null,
          businessExperience: null,
          terms: false,
          dob: null,
          ageOfBusiness: null,
          areaLocation: null,
          gender: null,
        },
        isEligible: false,
        finalSecurityOfferings: 1.5,
        submitted: false,
        businessType: [],
        branches: [],
        pbetween: 3,
        submitStatus: null,
        submitStatus2: null,

        maxProposedLoanAmount: 1000000000000000000,
        state : {
          disabledDates: {
            from: new Date(),
          }
        }
      }
    },

    validations: {
      formData: {
        branchName: { required },
        averageMonthlySales: { required, numeric },
        averageMonthlyExpenses: { required, numeric },
        totalInvestmentInTheBusiness: { required, numeric },
        totalLoanAmount: { required },
        securityOfferings: { required },
        typeOfBusiness: { required },
        proposedLoanAmount: { required },
        proposedTenure: {required, between: between(1, 5) },
      },
      formDataTwo:{
        fullName: { required },
        phone: { required, numeric, minLength:minLength(10, 11)},
        address: { required},
        businessName: { required},
        businessAddress: { required},
        businessExperience: { required},
        dob: { required},
        ageOfBusiness: {required},
        areaLocation: {required},
        gender: {required},
      }
    },
    methods: {
      checkSmeEligibility() {
        this.submitted = true;
        this.$v.formData.$touch();
        if (this.$v.formData.$invalid) {
          this.submitStatus = 'ERROR';
        }else{
          if (this.formData.monthlyInstallmentPayment == ''){
            this.formData.monthlyInstallmentPayment = 0;
          }

          if (this.formData.ccOverdraftLoanAmount == ''){
            this.formData.ccOverdraftLoanAmount = 0;
          }

          if (this.formData.TermLoan == ''){
            this.formData.TermLoan = 0;
          }

          let tenureInMonth = this.formData.proposedTenure * 12;
          let rateOfInterest  = this.formData.securityOfferings/100/12;
          let proposedLoanAmount = parseInt(this.formData.proposedLoanAmount);
          let x = Math.pow(1 + rateOfInterest, tenureInMonth);
          let emiPayable =  (proposedLoanAmount * x * rateOfInterest) / (x-1);

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

          let totalInvestmentInTheBusiness = parseInt(this.formData.totalInvestmentInTheBusiness);
          let ccOverdraftLoanAmountAndTermLoan = parseInt(this.formData.ccOverdraftLoanAmount) + parseInt(this.formData.TermLoan);
          let totalLoanAmount =  ccOverdraftLoanAmountAndTermLoan + parseInt(this.formData.proposedLoanAmount);
          let debtEquityRatio = totalLoanAmount/(totalInvestmentInTheBusiness - totalLoanAmount);

          this.finalCheck(dscr, debtEquityRatio, this.finalSecurityOfferings);
        }



        // console.log(dscr);
        // console.log(debtEquityRatio);
      },

      finalCheck(dscr, debtEquityRatio, finalSecurityOfferings){
        if (dscr >= finalSecurityOfferings  && debtEquityRatio < 1  ){
          this.$fire({
            title: "As per online loan eligibility checker, your loan application found eligible for next level of assessment having considered all the information you have entered are correct. Your application will now be forwarded to the nearest branch of IDLC. Member of our business units will communicate with you in 72 working hours for initiating further credit evaluation of your proposal. Final approval of your loan will depend" +
              " on the completion of existing credit evaluation processes as per IDLC’s credit policy. For any queries you can call 16409.",
            type: "success",
            timer: 70000
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
          title: "As per online loan eligibility checker, your loan application found ineligible for next level of assessment. However, you can visit nearest IDLC’s branch or call at 16409 for more information about loans or other services of IDLC that you may require.",
          type: "warning",
          timer: 70000
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

        if (securityOfferings == 8.99){
          console.log(securityOfferings);
          this.finalSecurityOfferings = 1.5;
          this.maxProposedLoanAmount = 1000000000000000000;
          this.formData.securityOfferings = securityOfferings;
        }else if(securityOfferings == 10.5){
          console.log(securityOfferings);
          this.maxProposedLoanAmount = 3500000;
          this.finalSecurityOfferings = 1.75;
          this.formData.securityOfferings = securityOfferings;
        }else if(securityOfferings == 12.5){
          console.log(securityOfferings);
          this.maxProposedLoanAmount = 10000000;
          this.finalSecurityOfferings = 1.75;
          this.formData.securityOfferings = securityOfferings;
        }
      },

      onChangeTypeOfBusiness(event){
        this.formData.typeOfBusiness = event.target.value;
        // alert(this.formData.typeOfBusiness);
        // let typeOfBusinessName = event.target.value;
        // if (
        //   typeOfBusinessName == 'Accessories' ||
        //   typeOfBusinessName == 'Agro Based Industries' ||
        //   typeOfBusinessName == 'Building & Construction Materials' ||
        //   typeOfBusinessName == 'Food & Beverage'||
        //   typeOfBusinessName == 'Home Appliances and House Hold Items'||
        //   typeOfBusinessName == 'Leather & Leather Products'||
        //   typeOfBusinessName == 'Others (Trading)'||
        //   typeOfBusinessName == 'Plastic Industries'||
        //   typeOfBusinessName == 'Power & Energy'||
        //   typeOfBusinessName == 'Store & Trader (Wholesale)'
        // ){
        //   this.formData.typeOfBusiness = 10;
        // }else if(
        //   typeOfBusinessName == 'Equipment'||
        //   typeOfBusinessName == 'Pharmaceutical & Healthcare products'||
        //   typeOfBusinessName == 'Store & Trader (Retail)'||
        //   typeOfBusinessName == 'Telecommunication Service'||
        //   typeOfBusinessName == 'Wood Processing & Furniture'
        // ){
        //   this.formData.typeOfBusiness = 15;
        // }else if(
        //   typeOfBusinessName == 'Apparel'||
        //   typeOfBusinessName == 'Chemicals'||
        //   typeOfBusinessName == 'Iron, Steel & Engineering'
        // ){
        //   this.formData.typeOfBusiness = 5;
        // }else if(
        //   typeOfBusinessName == 'Healthcare, Beauty care & Fitness'||
        //   typeOfBusinessName == 'Other Service'
        // ){
        //   this.formData.typeOfBusiness = 30;
        // }else if(typeOfBusinessName == 'Abashan'){
        //   this.formData.typeOfBusiness = 100;
        // }else if(typeOfBusinessName == 'Professional Services'){
        //   this.formData.typeOfBusiness = 40;
        // }else if(typeOfBusinessName == 'Textile'){
        //   this.formData.typeOfBusiness = 7;
        // }else if(typeOfBusinessName == 'Transport'){
        //   this.formData.typeOfBusiness = 25;
        // }
        // alert(this.formData.typeOfBusiness);


      },

      onChangeBranchName(event){
        this.formData.branchName = event.target.value;
      },

      onChangeGender(event){
        this.formDataTwo.gender = event.target.value;
      },


      submitData(){
        if (this.isEligible == false){
           this.isEligible = true;
        }else{
          this.submitted = true;
          this.$v.formDataTwo.$touch();
          if (this.$v.formDataTwo.$invalid) {
            this.submitStatus2 = 'ERROR';
          }else {
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

            // Personal Information
            data.append('fullName', this.formDataTwo.fullName);
            data.append('email', this.formDataTwo.email);
            data.append('phone', this.formDataTwo.phone);
            data.append('address', this.formDataTwo.address);
            data.append('businessName', this.formDataTwo.businessName);
            data.append('businessAddress', this.formDataTwo.businessAddress);
            data.append('businessExperience', this.formDataTwo.businessExperience);
            data.append('dob', this.convertedData);
            data.append('ageOfBusiness', this.formDataTwo.ageOfBusiness);
            data.append('areaLocation', this.formDataTwo.areaLocation);
            data.append('gender', this.formDataTwo.gender);
            this.$store.dispatch("submitForSME", data)
              .then(response => {
                console.log(response);
                this.$fire({
                  title: 'Thank you for your submission! Our representative will get in touch with you within 2 working days.',
                  type: "success",
                  timer: 10000
                }).then(r => {
                  this.submitDataForHomeLoan();
                  console.log(r.value);
                });
              })
              .catch(error => {
                console.log(error);
              });
          }

        }


      },







    },
    computed: {
      totalLoanAmount(){
        if (this.formData.ccOverdraftLoanAmount === null){
          this.formData.ccOverdraftLoanAmount = 0;
        }
        return this.formData.totalLoanAmount = parseInt(this.formData.ccOverdraftLoanAmount) + parseInt(this.formData.TermLoan);
      },

      getMaxTenure(){
        if (this.formData.proposedLoanAmount <= 1500000){
          return 2;
        }else if(this.formData.proposedLoanAmount <= 3500000){
          return 3;
        }else{
          return 5;
        }
      },

      convertedData() {
        var date = new Date(this.formDataTwo.dob),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        return  [date.getFullYear(), mnth, day].join("-");
      },



    },
    created() {
      this.getBusinessType();
      this.getBranch();
    },
  };
</script>
<style scoped>

  .error_message{
    color: #d62e2f;
    font-size: 14px;
  }
  .form-group--error{
    color: #d62e2d;

  }

  .tabStatus{
    display: none!important;
  }
  .error{
    font-size: 14px;
  }
  .firsttabcontent1 .nav-pills.nav-wizard>li.active a {
    background-color: #d62e2f;
    color: #fff;
  }
  .nav .nav-pills.nav-wizard>li.active a {
    position: relative;
  }
  .nav-item {
    background: #d62e2f;
  }
  .btn-warning {
    background-color: #d62e2f;
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
      background-color: #d62e2f;
      color: #fff;
  } */
  select option:hover, option:focus{
    background: #d62e2f;
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
    border: 2px solid #d62e2f !important;
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
  button.btn {
    outline: none;
    border: 2px solid #d62e2f !important;
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
  button.btn:hover {
    outline: none;
    border: 2px solid #d62e2f !important;
    padding: 10px 30px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-decoration: none;
    color: #ffffff;
    display: inline-block;
    margin: auto;
    margin-right: 10px;
    background: #d62e2d;
  }
</style>
