<template>
  <div>
    <form ref="anyName" @submit.prevent="checkCarEligibility" class="apply-for-loan-submit">

      <div class="col-md-12 ">
        <h6 class="text-center btn-block bg_color_for_apply_page">Personal Loan</h6>
        <hr>
      </div>

      <!--      Name of the Applicant-->
      <div class="form-group">
        <label for="fullName">Full Name</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.fullName.$error }"
          placeholder="Enter Your Name"
          v-model.trim="formData.fullName"
          data-placement="right"
        >
        <div class="error_message" v-if="submitted && !$v.formData.fullName.required">This field is required.</div>
      </div>

      <!--      Date of Birth-->
      <div class="form-group">
        <label for="dob" class="">Date of Birth</label>
        <datepicker
          class="custom_datePiker_style"
          :class="{ 'is-invalid': submitted && $v.formData.dob.$error }"
          placeholder="Date of birth"
          v-model="formData.dob"
          width="500px"
        />
        <div class="error_message" v-if="submitted && !$v.formData.dob.required">This field is required.</div>
      </div>

      <!--      Apartment/House No.-->
      <div class="form-group">
        <label for="houseNo">Apartment/House No.:</label>

        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.houseNo.$error }"
          placeholder="Apt & House No"
          v-model="formData.houseNo"
          data-placement="right"
          title="Enter Your Apt & House"
        >
        <div class="error_message" v-if="submitted && !$v.formData.houseNo.required">This field is required.</div>
      </div>

      <!--      Road No.-->
      <div class="form-group">
        <label for="roadNo">Road No.:</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.roadNo.$error }"
          placeholder="Road No"
          v-model="formData.roadNo"
          data-placement="right"
        >
        <div class="error_message" v-if="submitted && !$v.formData.roadNo.required">This field is required.</div>

      </div>

      <!--      Area / Location -->
      <div class="form-group">
        <label for="areaLocation">Area / Location :</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.areaLocation.$error }"
          placeholder="Enter Your Area / Location"
          v-model="formData.areaLocation"
          data-placement="right"
        >
        <div class="error_message" v-if="submitted && !$v.formData.areaLocation.required">This field is required.</div>

      </div>

      <!--      City-->
      <div class="form-group">
        <label for="city">City :</label>
        <input
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.city.$error }"
          placeholder="Enter Your City"
          v-model="formData.city"
          data-placement="right"
        >
        <div class="error_message" v-if="submitted && !$v.formData.city.required">This field is required.</div>
      </div>

      <!--    Country: drop down-->
      <div class="form-group">
        <label for="country">Country :</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.country.$error }"
          v-model="formData.country"
          data-placement="right"
          @change="onChangeCountryName($event)"
        >
          <option value="" disabled selected> Select Your Country</option>
          <option :value="data.country_name" v-for="data in countries" :key="data.id">{{ data.country_name}}</option>
        </select>
        <div class="error_message" v-if="submitted && !$v.formData.country.required">This field is required.</div>
      </div>
      <!--   Name of IDLC branches in drop down-->
      <div class="form-group">
        <label for="branchName">Nearest IDLC Branch</label>
        <select
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.branchName.$error }"
          v-model="formData.branchName"
          placeholder="Select Loan"
          data-placement="right"
          title="Select a Branch"
          @change="onChangeBranchName($event)"

        >
          <option value="" disabled selected>Select Your Nearest Branch</option>
          <option :value="data.name" v-for="data in branches" :key="data.id">{{ data.name}}</option>

        </select>
        <div class="error_message" v-if="submitted && !$v.formData.branchName.required">This field is required.</div>
      </div>

      <!--      Contact Number-->
      <div class="form-group">
        <label for="phone">Contact Number </label>
        <input
          type="number"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.phone.$error }"
          placeholder="01710000000"
          v-model="formData.phone"
          data-placement="right"
        >
        <div class="error_message" v-if="submitted && !$v.formData.phone.required">This field is required.</div>
        <div class="error_message" v-if="submitted && !$v.formData.phone.minLength">Should be a valid phone number.
        </div>
        <div class="error_message" v-if="submitted && !$v.formData.phone.maxLength">Should be a valid phone number.
        </div>
      </div>

      <!--      Email ID-->
      <div class="form-group">
        <label for="email">Your Email</label>
        <input
          type="email"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.email.$error }"
          placeholder="example@gmail.com"
          v-model="formData.email"
          data-placement="right"
          title="Enter Your Email"

        >
        <div class="error_message" v-if="submitted && !$v.formData.email.required">This field is required.</div>
        <div class="error_message" v-if="submitted && !$v.formData.email.email">Email is invalid.</div>
      </div>


      <!-- Profession  drop down-->
      <div class="form-group">
        <label for="profession">Profession</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.profession.$error }"
          v-model="formData.profession"
          data-placement="right"
          @change="onChangeProfession($event)"
        >
          <option value="" disabled selected> Select Your Profession</option>
          <option value="Salaried">Salaried</option>
          <option value="Non-salaried">Non-salaried</option>
          <!--          <option value="Businessman" >Businessman</option>-->
          <!--          <option value="Independent-Professionals" >Independent Professionals (Freelancer, Architect, Auditor, Doctor, Engineer, etc.</option>-->
          <!--          <option value="NRB" >NRB (Non Resident Bangladeshi)</option>-->
          <!--          <option value="Landlord" >Landlord</option>-->
        </select>
        <div class="error_message" v-if="submitted && !$v.formData.profession.required">This field is required.</div>
      </div>

      <!-- Hidden Field Form isServiceHolder -->
      <div v-if="isServiceHolder">
        <div class="form-group">
          <label for="officeName">Name of my Office </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Office Name"
            v-model="formData.officeName"
            data-placement="right"
          >
        </div>

        <div class="form-group">
          <label for="experienceWithCurrentEmployer"> No. of years of experience</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.experienceWithCurrentEmployer.$error }"
            class="form-control"
            placeholder="Experience with current employer"
            v-model="formData.experienceWithCurrentEmployer"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.experienceWithCurrentEmployer.numeric">Should be a
            valid value.
          </div>
        </div>


        <div class="form-group">
          <label for="netSalaryMonthly">Net Salary [monthly]</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.netSalaryMonthly.$error }"
            class="form-control"
            placeholder="Net Monthly Income Amount"
            v-model="formData.netSalaryMonthly"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.netSalaryMonthly.numeric">Should be a valid
            value.
          </div>
        </div>
      </div>


      <div class="form-group">
        <label for="isSalaryBankReflected"> Is Salary/Income Bank Reflected?</label>
        <select
          type="text"
          class="form-control"
          v-model="formData.isSalaryBankReflected"
          :class="{ 'is-invalid': submitted && $v.formData.isSalaryBankReflected.$error }"
          data-placement="right"
          @change="onChangeSalaryBankReflected($event)"
        >
          <option value="" disabled selected> Select One</option>
          <option value="No">No</option>
          <option value="Yes">Yes</option>
        </select>

        <div class="error_message" v-if="submitted && !$v.formData.isSalaryBankReflected.required">This field is
          required.
        </div>
      </div>


      <!--      Monthly income from other sources (if any)-->
<!--      <div class="form-group">-->
<!--        <label for="otherSourcesAmount">Monthly income from other sources (if any)</label>-->
<!--        <input-->
<!--          type="number"-->
<!--          class="form-control"-->
<!--          placeholder="Enter other sources amount"-->
<!--          v-model="formData.otherSourcesAmount"-->
<!--          data-placement="right"-->
<!--          min="0"-->
<!--        >-->
<!--      </div>-->

      <!--      Requested Loan Amount-->
      <div class="form-group">
        <label for="requestedLoanAmount">Requested Loan Amount</label>
        <input
          type="number"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.requestedLoanAmount.$error }"
          v-model="formData.requestedLoanAmount"
          placeholder=" Enter Requested Amount"
          data-placement="right"
          min="0"
        >
        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.required">This field is
          required.
        </div>
        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.numeric">Should be a valid
          value.
        </div>
        <!--        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.between">Minimum required loan amount is BDT 50,000 and  Maximum-->
        <!--          loan amount is BDT 10,00,000</div>-->
      </div>


      <!--      Tenure of your loan(Years)-->
      <div class="form-group">
        <label for="tenure">Tenure of your loan(Years)</label>
        <input
          type="number"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.tenure.$error }"
          v-model="formData.tenure"
          data-placement="right"
          min="0"
          :max="this.maxTenure"

        >
        <div class="error_message" v-if="submitted && !$v.formData.tenure.required">This field is required.</div>
        <div class="error_message" v-if="submitted && !$v.formData.tenure.numeric">Should be a valid value.</div>
        <div class="error_message" v-if="submitted && !$v.formData.tenure.between">Maximum Tenure {{ this.maxTenure }}
          yrs
        </div>
      </div>

      <!--      Do you have any existing loan?-->
      <div class="form-group">
        <label for="doYouHaveAnyExistingLoan">Do you have any existing loan?</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.doYouHaveAnyExistingLoan.$error }"
          v-model="formData.doYouHaveAnyExistingLoan"
          data-placement="right"
          @change="onChangeDoYouHaveAnyExistingLoan($event)"
        >
          <option value="" disabled> Select a loan type</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>
        <div class="error_message" v-if="submitted && !$v.formData.doYouHaveAnyExistingLoan.required">This field is
          required.
        </div>
      </div>

      <!--    Hidden Tenure of your loan-->
      <div class="form-group" v-show="haveExistingLoan">
        <label for="monthlyInstalmentAmount">Total Monthly Installment Amount of all existing loans (in BDT)</label>
        <input
          type="number"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.monthlyInstalmentAmount.$error }"
          v-model="formData.monthlyInstalmentAmount"
          data-placement="right"
          min="0"
        >
        <div class="error_message" v-if="submitted && !$v.formData.monthlyInstalmentAmount.required">This field is
          required.
        </div>
        <div class="error_message" v-if="submitted && !$v.formData.monthlyInstalmentAmount.numeric">Should be a valid
          value.
        </div>
      </div>


      <div class="form-group">
        <label for="doYouHaveETIN">Do you have E-TIN?</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.doYouHaveETIN.$error }"
          v-model="formData.doYouHaveETIN"
          data-placement="right"
          @change="onChangeDoYouHaveETIN($event)"
        >
          <option value="" disabled> Select One</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>
        <div class="error_message" v-if="submitted && !$v.formData.doYouHaveETIN.required">This field is required.</div>
      </div>

      <div class="form-group">
        <label for="doYouHaveNID">Do you have NID?</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.doYouHaveNID.$error }"
          v-model="formData.doYouHaveNID"
          data-placement="right"
          @change="onChangeDoYouHaveNID($event)"
        >
          <option value="" disabled> Select One</option>
          <option value="Yes">Yes</option>
          <option value="No">No</option>

        </select>
        <div class="error_message" v-if="submitted && !$v.formData.doYouHaveNID.required">This field is required.</div>
      </div>

      <div class="form-group">
        <label for="preferredInstallmentAmount">Preferred installment amount against your application</label>
        <input
          type="number"
          :class="{ 'is-invalid': submitted && $v.formData.preferredInstallmentAmount.$error }"
          class="form-control"
          placeholder="Preferred installment amount"
          v-model="formData.preferredInstallmentAmount"
          data-placement="right"
          min="0"
        >
        <div class="error_message" v-if="submitted && !$v.formData.preferredInstallmentAmount.numeric">Should be a valid
          value.
        </div>
      </div>

      <div class="mb-3 form-check px-3">
        <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
        <label class="form-check-label" style="font-size: 13px" for="exampleCheck1">
          I do hereby admit that all the above information that I have input is true & correct.
          If any of the above information figured out false or incorrect, I understand & agree that my loan application
          will be rejected.
          I agree to share my information with IDLC and follow the company policy as required.</label>
      </div>


      <div class="text-center">
        <!--        <p class="error_message" v-if="submitStatus === 'OK'">Thanks for your submission!</p>-->
        <p class="error_message" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
        <!--        <p class="text-success" v-if="submitStatus === 'PENDING'">Sending...</p> <br>-->
        <button class="button btn apply-for-loan-submit" type="submit">Submit</button>

      </div>

    </form>
  </div>

</template>


<script>
  import "vue-step-wizard/dist/vue-step-wizard.css";
  // import { required, email, numeric} from "vuelidate/lib/validators";
  import {required, minLength, maxLength, email, numeric, between} from 'vuelidate/lib/validators'
  import Datepicker from 'vuejs-datepicker';
  import axios from "axios";


  export default {
    name: "SmeLoan",
    components: {
      Datepicker
    },


    data() {
      return {
        businessType: [],
        branches: [],
        pbetween: 3,
        fullName: null,
        formData: {
          fullName: null,
          dob: null,
          houseNo: null,
          roadNo: null,
          areaLocation: null,
          city: null,
          country: null,
          branchName: "",
          phone: null,
          email: null,
          profession: null,

          requestedLoanAmount: 0,
          useOfTheProposedCar: null,
          tenure: 0,
          doYouHaveAnyExistingLoan: null,
          monthlyInstalmentAmount: 0,
          monthlyIncomeFromOtherSources: null,
          // otherSourcesAmount: 0,
          //For Business
          nameOfBusinessOrganization: '',
          sinceWhenYouHaveATradeLicense: 3,
          natureOfYourBusiness: 15,
          monthlySalesAmount: 0,

          //For Service Holder
          officeName: null,
          netSalaryMonthly: 0,
          experienceWithCurrentEmployer: 0,
          isSalaryBankReflected: 'Yes',

          //For IndependentProfessionals
          majorProfession: null,
          netMonthlyIncomeIndependentProfessionals: 0,

          //For isNRB
          typeOfResidency: null,
          majorProfessionForNRB: 'Service-holder',
          monthlySalaryORBusinessIncomeForNRB: 0,
          sinceWhenYouHaveATradeLicenseForNRB: 5,

          //For isLandlord
          locationORAddressOfProperty: null,
          typeOfPropertyThatGenerateRentalIncome: 'Apartment',
          netMonthlyRentalIncome: 0,

          doYouHaveETIN: 'Yes',
          doYouHaveNID: 'Yes',
          preferredInstallmentAmount: 0,

          terms: false,
          submitted: false,

        },
        maxTenure: 5,
        haveExistingLoan: false,
        isServiceHolder: false,
        isBusinessman: false,
        isIndependentProfessionals: false,
        isNRB: false,
        isLandlord: false,
        interestRate: 10,
        EMIOfAppliedLoan: 0,
        submitStatus: null,
        getAge: 0,
        isBusinessmanProfessionForNBR: false,
        // isOtherSourcesAmount: false,
        countries: [],
        submitted: false,

      }

    },


    validations: {
      formData: {
        fullName: {required},
        dob: {required},
        houseNo: {required},
        roadNo: {required},
        areaLocation: {required},
        city: {required},
        country: {required},
        branchName: {required},
        phone: {required, minLength: minLength(11), maxLength: maxLength(11), numeric},
        email: {required, email},
        profession: {required},
        requestedLoanAmount: {required, numeric},
        tenure: {required, numeric, between: between(1, 5)},
        doYouHaveAnyExistingLoan: {required},
        monthlyInstalmentAmount: {required, numeric},
        netSalaryMonthly: {required, numeric},
        sinceWhenYouHaveATradeLicense: {required, numeric, between: between(3, 100)},
        natureOfYourBusiness: {required, numeric},
        monthlySalesAmount: {required, numeric},
        netMonthlyIncomeIndependentProfessionals: {required, numeric},
        monthlySalaryORBusinessIncomeForNRB: {required, numeric},
        sinceWhenYouHaveATradeLicenseForNRB: {required, numeric, between: between(5, 100)},
        majorProfessionForNRB: {required},
        typeOfPropertyThatGenerateRentalIncome: {required},
        netMonthlyRentalIncome: {required, numeric},
        experienceWithCurrentEmployer: {numeric},
        isSalaryBankReflected: {required},
        doYouHaveETIN: {required},
        doYouHaveNID: {required},
        preferredInstallmentAmount: {required, numeric},
      }
    },
    methods: {
      calculateAge() {
        var date = new Date(this.formData.dob),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        this.formData.dob = [date.getFullYear(), mnth, day].join("-");
        var dob = [date.getFullYear()].join("-");
        var currentDate = new Date().getFullYear();
        return currentDate - dob;
      },

      checkCarEligibility() {
        // let message = '';
        const warningAlertMessage = 'As per online loan eligibility checker, ' +
          'your loan application is found to be ineligible for next level of assessment. ' +
          'However, you can visit your nearest IDLC Branch or call 16409 for more information.';

        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        } else {

          this.submitStatus = 'PENDING';
          let requestedLoanAmount = parseInt(this.formData.requestedLoanAmount);

          this.getAge = this.calculateAge();

          if (this.getAge < 30
            || this.getAge > 45
            || this.doYouHaveETIN == 'No'
            || this.doYouHaveNID == 'No'
            || this.formData.preferredInstallmentAmount < 10000
            || this.formData.isSalaryBankReflected == 'No'
            || this.formData.netSalaryMonthly < 70000
            || this.formData.experienceWithCurrentEmployer < 1
            || this.isServiceHolder == false
            || requestedLoanAmount < 500000
            || requestedLoanAmount > 1000000) {
            return this.warningMessage(warningAlertMessage);
          }

          // if (this.formData.otherSourcesAmount == null) {
          //   this.formData.otherSourcesAmount = 0;
          // }

          let tenureInMonth = parseInt(this.formData.tenure) * 12;
          let rateOfInterest = parseInt(this.interestRate) / 100 / 12;
          let x = Math.pow(1 + rateOfInterest, tenureInMonth);
          let payableEmi = (requestedLoanAmount * x * rateOfInterest) / (x - 1);
          this.EMIOfAppliedLoan = Number(payableEmi);
          let totalMonthlyIncome = 0;
          let dbr = 0;

          totalMonthlyIncome = parseInt(this.formData.netSalaryMonthly);
          dbr = (parseInt(payableEmi) + parseInt(this.formData.monthlyInstalmentAmount)) / totalMonthlyIncome;
          dbr = dbr * 100;
          return this.commonDBRCheck(totalMonthlyIncome, dbr);
        }
      },


      commonDBRCheck(totalMonthlyIncome, dbr) {
        if (totalMonthlyIncome <= 100000) {
          if (dbr <= 50) {
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          } else {
            let message = 'As per online loan eligibility checker, your loan application is found to be ineligible for next level of assessment. However, you can visit your nearest IDLC Branch or call 16409 for more information.';
            this.warningMessage(message);
          }
        } else if (totalMonthlyIncome > 100000) {
          if (dbr <= 60) {
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          } else {
            let message = 'As per online loan eligibility checker, your loan application is found to be ineligible for next level of assessment. However, you can visit your nearest IDLC Branch or call 16409 for more information.';
            this.warningMessage(message);
          }
        }
      },

      finalCheck(dscr, debtEquityRatio) {
        if (dscr > 1 && debtEquityRatio < 1) {
          this.$fire({
            title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
            type: "success",
            timer: 5000
          }).then(r => {
            console.log(r.value);
            this.submitData();
            return true;

          });

        } else {
          this.notEligibleWarning();

        }
      },

      warningMessage(message) {
        this.$fire({
          title: message,
          type: "warning",
          timer: 10000
        }).then(r => {
          this.$refs.anyName.reset();
          console.log(r.value);
        });
      },

      successAlert(message) {
        this.$fire({
          title: message,
          type: "success",
          timer: 10000
        }).then(r => {
          this.submitDataForCarLoan();
          console.log(r.value);
        });
      },

      getBusinessType() {
        axios.get('get-business-type').then((response) => {
          if (response.status == 200) {
            this.businessType = response.data.details;
          }
        }).catch(error => console.log(error));

      },

      getBranch() {
        axios.get('get-branch', {
          params: {
            sortby: 'name'
          }
        }).then((response) => {
          if (response.status == 200) {
            let branchData = response.data.details.sort();
            this.branches = branchData;

          }
        }).catch(error => console.log(error));
      },
      getCountry() {
        axios.get('get-country-list').then((response) => {
          if (response.status == 200) {
            this.countries = response.data.details;

          }
        }).catch(error => console.log(error));
      },

      onChangeUseOfTheProposedCar(event) {
        this.formData.useOfTheProposedCar = event.target.value;
      },
      onChangeSecurityOfferings(event) {
        this.formData.securityOfferings = event.target.value;
      },

      onChangeTypeOfBusiness(event) {
        this.formData.typeOfBusiness = event.target.value;
      },

      onChangeBranchName(event) {
        this.formData.branchName = event.target.value;
      },

      onChangeCountryName(event) {
        this.formData.country = event.target.value;
      },

      onChangeDoYouHaveAnyExistingLoan(event) {
        this.haveExistingLoan = false;
        this.formData.doYouHaveAnyExistingLoan = event.target.value;
        if (this.formData.doYouHaveAnyExistingLoan == 'Yes') {
          this.haveExistingLoan = true;
        } else {
          this.haveExistingLoan = false;
        }
      },
      onChangeDoYouHaveETIN(event) {
        let selectedResult = event.target.value;
        if (selectedResult == 'Yes') {
          this.doYouHaveETIN = 'Yes';
        } else {
          this.doYouHaveETIN = 'No';
        }
      },

      onChangeDoYouHaveNID(event) {
        let selectedResult = event.target.value;
        if (selectedResult == 'Yes') {
          this.doYouHaveNID = 'Yes';
        } else {
          this.doYouHaveNID = 'No';
        }
      },


      onChangeNatureOfYourBusiness(event) {
        this.formData.natureOfYourBusiness = event.target.value;
      },

      onChangeProfession(event) {
        let selectedProfession = event.target.value;
        if (selectedProfession == 'Salaried') {
          // this.isIndependentProfessionals = false;
          this.isServiceHolder = true;
          selectedProfession = this.formData.profession;
        } else {
          this.isServiceHolder = false;
          // this.isIndependentProfessionals = true;
          selectedProfession = this.formData.profession;
        }
      },

      // onChangeMonthlyIncomeFromOtherSources(event) {
      //   this.formData.monthlyIncomeFromOtherSources = event.target.value;
      //   if (this.formData.monthlyIncomeFromOtherSources == 'na') {
      //     this.isOtherSourcesAmount = false;
      //   } else {
      //     this.isOtherSourcesAmount = true;
      //   }
      // },

      onChangeMajorProfession(event) {
        this.formData.majorProfession = event.target.value;
      },

      onChangeTypeOfResidency(event) {
        this.formData.typeOfResidency = event.target.value;
      },

      onChangeTypeOfPropertyThatGenerateRentalIncome(event) {
        this.formData.typeOfPropertyThatGenerateRentalIncome = event.target.value;
      },

      onChangeMajorProfessionForNRB(event) {
        this.isBusinessmanProfessionForNBR = false;
        let selectedProfessionForNRB = event.target.value;
        this.formData.majorProfessionForNRB = selectedProfessionForNRB;
        if (selectedProfessionForNRB != 'Service-holder') {
          this.isBusinessmanProfessionForNBR = true;
        }

      },

      onChangeSalaryBankReflected(event) {
        let selectedResult = event.target.value;
        if (selectedResult === 'Yes') {
          this.formData.isSalaryBankReflected = selectedResult;
        } else {
          this.formData.isSalaryBankReflected = selectedResult;
          // return this.warningMessage('Salary must be bank reflected');
        }
      },

      submitDataForCarLoan() {
        const data = new FormData();
        data.append('fullName', this.formData.fullName);
        data.append('dob', this.formData.dob);
        data.append('houseNo', this.formData.houseNo);
        data.append('roadNo', this.formData.roadNo);
        data.append('areaLocation', this.formData.areaLocation);
        data.append('city', this.formData.city);
        data.append('country', this.formData.country);
        data.append('branchName', this.formData.branchName);
        data.append('phone', this.formData.phone);
        data.append('email', this.formData.email);
        data.append('profession', this.formData.profession);
        data.append('requestedLoanAmount', this.formData.requestedLoanAmount);
        data.append('loanType', 'Personal Loan');
        data.append('tenure', this.formData.tenure);
        data.append('doYouHaveAnyExistingLoan', this.formData.doYouHaveAnyExistingLoan);
        data.append('monthlyInstalmentAmount', this.formData.monthlyInstalmentAmount);
        data.append('monthlyIncomeFromOtherSources', this.formData.monthlyIncomeFromOtherSources);
        // data.append('otherSourcesAmount', this.formData.otherSourcesAmount);
        data.append('nameOfBusinessOrganization', this.formData.nameOfBusinessOrganization);
        data.append('sinceWhenYouHaveATradeLicense', this.formData.sinceWhenYouHaveATradeLicense);
        data.append('natureOfYourBusiness', this.formData.natureOfYourBusiness);
        data.append('officeName', this.formData.officeName);
        data.append('netSalaryMonthly', this.formData.netSalaryMonthly);
        data.append('netMonthlyIncomeIndependentProfessionals', this.formData.netMonthlyIncomeIndependentProfessionals);
        data.append('typeOfResidency', this.formData.typeOfResidency);
        data.append('majorProfessionForNRB', this.formData.majorProfessionForNRB);
        data.append('monthlySalaryORBusinessIncomeForNRB', this.formData.monthlySalaryORBusinessIncomeForNRB);
        data.append('sinceWhenYouHaveATradeLicenseForNRB', this.formData.sinceWhenYouHaveATradeLicenseForNRB);
        data.append('locationORAddressOfProperty', this.formData.locationORAddressOfProperty);
        data.append('typeOfPropertyThatGenerateRentalIncome', this.formData.typeOfPropertyThatGenerateRentalIncome);
        data.append('netMonthlyRentalIncome', this.formData.netMonthlyRentalIncome);
        data.append('useOfTheProposedCar', this.formData.useOfTheProposedCar);
        data.append('experienceWithCurrentEmployer', this.formData.experienceWithCurrentEmployer);

        //Newly added
        data.append('doYouHaveETIN', this.formData.doYouHaveETIN);
        data.append('doYouHaveNID', this.formData.doYouHaveNID);
        data.append('preferredInstallmentAmount', this.formData.preferredInstallmentAmount);
        this.$store.dispatch("submitAfterEligibilityChecked", data)
          .then(response => {
            this.$refs.anyName.reset();
            console.log(response);
          })
          .catch(error => {
            this.$refs.anyName.reset();
            console.log(error);
          });
      }
    },
    computed: {
      totalLoanAmount() {
        return this.formData.totalLoanAmount = parseInt(this.formData.ccOverdraftLoanAmount) + parseInt(this.formData.TermLoan);
      },


    },
    created() {
      this.getBusinessType();
      this.getBranch();
      this.getCountry();


    },
    // mounted() {
    //   $('#datepicker').datepicker({
    //     uiLibrary: 'bootstrap'
    //   });
    // }
  };
</script>
<style scoped>


  .error_message {
    color: #d62e2f;
    font-size: 14px;
  }

  .form-group--error {
    color: #d62e2d;

  }

  .tabStatus {
    display: none !important;
  }

  .error {
    font-size: 14px;
  }

  .firsttabcontent1 .nav-pills.nav-wizard > li.active a {
    background-color: #d62e2f;
    color: #fff;
  }

  .nav .nav-pills.nav-wizard > li.active a {
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
  select option:hover, option:focus {
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

  .nav-pills.nav-wizard > li a {
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
