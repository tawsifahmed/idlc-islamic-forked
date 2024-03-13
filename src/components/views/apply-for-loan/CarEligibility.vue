<template>
  <div>
    <form @submit.prevent="checkCarEligibility" class="apply-for-loan-submit">

      <div class="col-md-12 ">
        <h6 class="text-center btn-block bg_color_for_apply_page" >Car Loan</h6>
        <hr>
      </div>

<!--      Name of the Applicant-->
      <div class="form-group" >
        <label >Full Name</label>
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
          <option value="" disabled selected> Select Your Country </option>
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
          <option value="" DISABLED selected>Select Your Nearest Branch</option>
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
        <div class="error_message" v-if="submitted && !$v.formData.phone.minLength">Should be a valid phone number.</div>
        <div class="error_message" v-if="submitted && !$v.formData.phone.maxLength">Should be a valid phone number.</div>
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
          placeholder="Select one"
        >
          <option value="" disabled selected> Select Your Profession</option>
          <option value="Service-holder" >Service holder</option>
          <option value="Businessman" >Businessman</option>
          <option value="Independent-Professionals" >Independent Professionals (Freelancer, Architect, Auditor, Doctor, Engineer, etc.</option>
          <option value="NRB" >NRB (Non Resident Bangladeshi)</option>
          <option value="Landlord" >Landlord</option>
        </select>
        <div class="error_message" v-if="submitted && !$v.formData.profession.required">This field is required.</div>
      </div>

<!-- Hidden Field Form isServiceHolder -->
      <div v-if="isServiceHolder">
        <div class="form-group" >
          <label for="officeName">Name of my Office </label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Office Name"
            v-model="formData.officeName"
            data-placement="right"
          >
        </div>

        <div class="form-group" >
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
          <div class="error_message" v-if="submitted && !$v.formData.netSalaryMonthly.numeric">Should be a valid value.</div>
        </div>

      </div>

<!-- Hidden Field Form isBusinessman -->
      <div v-if="isBusinessman">
        <div class="form-group" >
          <label for="nameOfBusinessOrganization">Name of Business Organization</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Business Organization"
            v-model="formData.nameOfBusinessOrganization"
            data-placement="right"
          >
        </div>
        <div class="form-group" >
          <label for="sinceWhenYouHaveATradeLicense">Since when you have a Trade License?(Years)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.sinceWhenYouHaveATradeLicense.$error }"
            class="form-control"
            placeholder="Enter year"
            v-model="formData.sinceWhenYouHaveATradeLicense"
            data-placement="right"
            min="3"
          >
          <div class="error_message" v-if="submitted && !$v.formData.sinceWhenYouHaveATradeLicense.numeric">Should be a valid value.</div>
          <div class="error_message" v-if="submitted && !$v.formData.sinceWhenYouHaveATradeLicense.between">Won't accept less than 3 yrs business experience </div>
        </div>
        <div class="form-group" >
          <label for="natureOfYourBusiness">Nature of your business?</label>
          <select
            type="text"
            class="form-control"
            v-model="formData.natureOfYourBusiness"
            :class="{ 'is-invalid': submitted && $v.formData.natureOfYourBusiness.$error }"
            data-placement="right"
            @change="onChangeNatureOfYourBusiness($event)"
          >
            <option value="" disabled selected> Select One</option>
            <option value="15" >Trader</option>
            <option value="10" >Manufacturer </option>
            <option value="12" >Service</option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formData.natureOfYourBusiness.required">Should be a valid value.</div>
        </div>
        <div class="form-group" >
          <label for="monthlySalesAmount">Monthly  Sales / Revenue  Amount ( BDT)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.monthlySalesAmount.$error }"
            class="form-control"
            placeholder="Enter Monthly  Sales / Revenue  Amount"
            v-model="formData.monthlySalesAmount"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.monthlySalesAmount.numeric">Should be a valid value.</div>
        </div>
      </div>

<!-- Hidden Field Form isIndependentProfessionals -->
      <div v-if="isIndependentProfessionals">

        <div class="form-group">
          <label for="majorLoanType">Please select your major profession </label>
          <select
            type="text"
            class="form-control"
            v-model="formData.majorProfession"
            data-placement="right"
            @change="onChangeMajorProfession($event)"
          >
            <option value="" disabled > Select One</option>
            <option value="Independent-Physician-Dentist" >Independent Physician / Dentist </option>
            <option value="Architect" >Architect</option>
            <option value="Accounting Profession" >Accounting Profession </option>
            <option value="IT based Freelancer" >IT based Freelancer </option>
            <option value="Consultant" >Consultant  </option>
            <option value="Others" >Others </option>
          </select>
        </div>

        <div class="form-group" >
          <label for="nameOfBusinessOrganization">Name of Business Organization</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Your Business Organization"
            v-model="formData.nameOfBusinessOrganization"
            data-placement="right"
          >
        </div>

        <div class="form-group" >
          <label for="netMonthlyIncomeIndependentProfessionals">Net Monthly  Income  ( BDT)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.netSalaryMonthly.$error }"
            class="form-control"
            placeholder="Enter Office Name"
            v-model="formData.netMonthlyIncomeIndependentProfessionals"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.netMonthlyIncomeIndependentProfessionals.numeric">Should be a valid value.</div>
        </div>
      </div>

<!-- Hidden Field Form isNRB -->
      <div v-if="isNRB">
        <div class="form-group">
          <label for="typeOfResidency">Type of residency</label>
          <select
            type="text"
            class="form-control"
            v-model="formData.typeOfResidency"
            data-placement="right"
            @change="onChangeTypeOfResidency($event)"
          >
            <option value="" disabled > Select One</option>
            <option value="Permanent-Resident-OR-Citizen" >Permanent Resident  / Citizen</option>
            <option value="Non-Permanent-Resident" >Non-Permanent Resident </option>
          </select>
        </div>

        <div class="form-group">
          <label for="majorProfessionForNRB">Please select your major profession </label>
          <select
            type="text"
            class="form-control"
            v-model="formData.majorProfessionForNRB"
            :class="{ 'is-invalid': submitted && $v.formData.majorProfessionForNRB.$error }"
            data-placement="right"
            @change="onChangeMajorProfessionForNRB($event)"
          >
            <option value="" disabled > Select One</option>
            <option value="Businessman" >Businessman</option>
            <option value="Service-holder" >Service holder </option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formData.majorProfessionForNRB.required">This field is required.</div>
        </div>

        <div class="form-group" >
          <label for="monthlySalaryORBusinessIncomeForNRB">Monthly Salary / Business Income as per overseas Tax Return  (amount should be converted in BDT)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.monthlySalaryORBusinessIncomeForNRB.$error }"
            class="form-control"
            placeholder="Enter Amount"
            v-model="formData.monthlySalaryORBusinessIncomeForNRB"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.monthlySalaryORBusinessIncomeForNRB.numeric">Should be a valid value.</div>
        </div>

        <!--        Hidden isBusinessmanProfessionForNBR-->
        <div class="form-group" v-show="isBusinessmanProfessionForNBR">
          <label for="sinceWhenYouHaveATradeLicense">Since when you have a Trade License?(Years)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.sinceWhenYouHaveATradeLicenseForNRB.$error }"
            class="form-control"
            placeholder="Enter year"
            v-model="formData.sinceWhenYouHaveATradeLicenseForNRB"
            data-placement="right"
            min="5"
          >
          <div class="error_message" v-if="submitted && !$v.formData.sinceWhenYouHaveATradeLicenseForNRB.numeric">Should be a valid value.</div>
          <div class="error_message" v-if="submitted && !$v.formData.sinceWhenYouHaveATradeLicenseForNRB.between">Won't accept less than 5 yrs business experience </div>
        </div>

      </div>

<!-- Hidden isLandlord-->
      <div v-if="isLandlord">
        <div class="form-group" >
          <label for="locationORAddressOfProperty">Location /  Address of property that generate rental income</label>
          <input
            type="text"
            class="form-control"
            placeholder="Enter Location /  Address of property"
            v-model="formData.locationORAddressOfProperty"
            data-placement="right"
          >
        </div>

        <div class="form-group" >
          <label for="typeOfPropertyThatGenerateRentalIncome">Type of property that generate rental income</label>
          <select
            type="text"
            class="form-control"
            v-model="formData.typeOfPropertyThatGenerateRentalIncome"
            :class="{ 'is-invalid': submitted && $v.formData.typeOfPropertyThatGenerateRentalIncome.$error }"
            data-placement="right"
            @change="onChangeTypeOfPropertyThatGenerateRentalIncome($event)"
          >
            <option value="" disabled selected> Select One</option>
            <option value="Apartment" >Apartment </option>
            <option value="Building" >Building  </option>
            <option value="Tin-shed-[brick wall + tin]" >Tin shed [brick wall + tin]</option>
            <option value="Tin-shed" >Tin shed </option>
            <option value="Shop-Commercial-space-Office" >Shop / Commercial space / Office  </option>
            <option value="Factory-Ware house" >Factory / Ware house</option>
            <option value="Others" >Others </option>
          </select>
          <div class="error_message" v-if="submitted && !$v.formData.typeOfPropertyThatGenerateRentalIncome.required">This field is required.</div>
        </div>

        <div class="form-group" >
          <label for="netMonthlyRentalIncome">Net Monthly Rental Income in Total   (in BDT)</label>
          <input
            type="number"
            :class="{ 'is-invalid': submitted && $v.formData.netMonthlyRentalIncome.$error }"
            class="form-control"
            placeholder="Monthly Rental Income"
            v-model="formData.netMonthlyRentalIncome"
            data-placement="right"
            min="0"
          >
          <div class="error_message" v-if="submitted && !$v.formData.netMonthlyRentalIncome.numeric">Should be a valid value.</div>
        </div>
      </div>

<!--      Monthly income from other sources (if any) Drop Down-->
      <div class="form-group" >
        <label for="monthlyIncomeFromOtherSources">Monthly income from other sources (if any)</label>
        <select
          type="text"
          class="form-control"
          v-model="formData.monthlyIncomeFromOtherSources"
          data-placement="right"
          @change="onChangeMonthlyIncomeFromOtherSources($event)"
        >
          <option value="" disabled selected> Select One</option>
          <option value="Private-practice" >Private practice [physicians, dentists]</option>
          <option value="Rental" >Rental </option>
          <option value="Interest-from-FDR" >Interest from FDR  </option>
          <option value="Commission" >Commission</option>
          <option value="Consultancy" >Consultancy</option>
          <option value="Agricultural" >Agricultural</option>
          <option value="Private-Tuition" >Private Tuition [Teachers]</option>
          <option value="Others">Others</option>
          <option value="na">N/A</option>
        </select>
      </div>

<!--      other sources amount-->
      <div class="form-group" v-show="isOtherSourcesAmount" >
        <label for="otherSourcesAmount">Monthly income from other sources amount</label>
        <input
          type="number"
          class="form-control"
          placeholder="Enter other sources amount"
          v-model="formData.otherSourcesAmount"
          data-placement="right"
        >
      </div>

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
        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.required">This field is required.</div>
        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.numeric">Should be a valid value.</div>
        <div class="error_message" v-if="submitted && !$v.formData.requestedLoanAmount.between">Minimum required loan amount is BDT 500,000/-</div>
      </div>

<!--      Use of the proposed Car-->
      <div class="form-group">
        <label for="useOfTheProposedCar">Use of the proposed Car</label>
        <select
          type="text"
          class="form-control"
          :class="{ 'is-invalid': submitted && $v.formData.useOfTheProposedCar.$error }"
          v-model="formData.useOfTheProposedCar"
          data-placement="right"
          @change="onChangeUseOfTheProposedCar($event)"
          placeholder="Select one"
        >
          <option value="" disabled selected> Select Your Profession</option>
          <option value="Personal-Family-Use" >Personal & Family use</option>
          <option value="Business-Rental-etc" >Business, Rental etc. </option>
        </select>
        <div class="error_message" v-if="submitted && !$v.formData.useOfTheProposedCar.required">This field is required.</div>
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
        <div class="error_message" v-if="submitted && !$v.formData.tenure.between">Maximum Tenure {{ this.maxTenure }} yrs </div>
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
          <option value="" disabled > Select a loan type</option>
          <option value="Yes" >Yes</option>
          <option value="No" >No</option>

        </select>
        <div class="error_message" v-if="submitted && !$v.formData.doYouHaveAnyExistingLoan.required">This field is required.</div>
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
        <div class="error_message" v-if="submitted && !$v.formData.monthlyInstalmentAmount.required">This field is required.</div>
        <div class="error_message" v-if="submitted && !$v.formData.monthlyInstalmentAmount.numeric">Should be a valid value.</div>
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
          otherSourcesAmount: 0,
          //For Business
          nameOfBusinessOrganization: '',
          sinceWhenYouHaveATradeLicense: 3,
          natureOfYourBusiness: 15,
          monthlySalesAmount: 0,

          //For Service Holder
          officeName: null,
          netSalaryMonthly: 0,

          //For IndependentProfessionals
          majorProfession : null,
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

          terms: false,
          submitted: false,

        },
        maxTenure: 25,
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
        isOtherSourcesAmount: false,
        countries: [],
        submitted: false,
      }
    },

    validations: {
      formData: {
        fullName: { required },
        dob: { required },
        houseNo: { required },
        roadNo: { required },
        areaLocation: { required },
        city: { required },
        country: { required },
        branchName: { required },
        phone: { required, minLength: minLength(11), maxLength: maxLength(11), numeric},
        email: { required, email},
        profession: { required },
        requestedLoanAmount: { required, numeric, between: between(500000, 1000000000000000000) },
        tenure: { required, numeric, between: between(1, 6)},
        doYouHaveAnyExistingLoan: { required },
        monthlyInstalmentAmount: { required, numeric },
        netSalaryMonthly: { required, numeric },
        sinceWhenYouHaveATradeLicense: { required, numeric, between: between(3, 100) },
        natureOfYourBusiness: { required, numeric },
        monthlySalesAmount: { required, numeric },
        netMonthlyIncomeIndependentProfessionals: { required, numeric },
        monthlySalaryORBusinessIncomeForNRB: { required, numeric },
        sinceWhenYouHaveATradeLicenseForNRB: { required, numeric,  between: between(5, 100) },
        majorProfessionForNRB: { required},
        typeOfPropertyThatGenerateRentalIncome: { required},
        netMonthlyRentalIncome: { required, numeric},
        useOfTheProposedCar: { required},
      }
    },
    methods: {
      convert() {
        var date = new Date(this.formData.dob),
          mnth = ("0" + (date.getMonth() + 1)).slice(-2),
          day = ("0" + date.getDate()).slice(-2);
        this.formData.dob =  [date.getFullYear(), mnth, day].join("-");
        var dob =  [date.getFullYear()].join("-");
        var currentDate = new Date().getFullYear();
        return this.getAge =   currentDate - dob;
      },

      checkCarEligibility() {
        this.submitted = true;
        this.$v.$touch();
        if (this.$v.$invalid) {
          this.submitStatus = 'ERROR';
        }else{
          this.convert();
          if (this.getAge <= 25 || this.getAge >= 60){
            let message = 'The Applicant must attain a minimum age to apply for a loan';
            this.warningMessage(message);
          }else {
            if(this.formData.useOfTheProposedCar == 'Business-Rental-etc'){
              let message = 'Please visit our SME portion of this website for details';
              this.warningMessage(message);
            }else{
              if (this.formData.otherSourcesAmount == null){
                this.formData.otherSourcesAmount = 0;
              }
              this.submitStatus = 'PENDING';
              let tenureInMonth = parseInt(this.formData.tenure) * 12;
              let rateOfInterest  = parseInt(this.interestRate)/ 100 / 12;
              let requestedLoanAmount = parseInt(this.formData.requestedLoanAmount);
              let x = Math.pow(1 + rateOfInterest, tenureInMonth);
              let emiPayable =  (requestedLoanAmount * x * rateOfInterest) / (x-1);
              this.EMIOfAppliedLoan = Number(emiPayable);
              let totalMonthlyIncome = 0;
              let dbr = 0;
              if (this.isServiceHolder == true){
                totalMonthlyIncome = parseInt(this.formData.netSalaryMonthly) + parseInt(this.formData.otherSourcesAmount);
                dbr = (parseInt(emiPayable)+ parseInt(this.formData.monthlyInstalmentAmount))/totalMonthlyIncome;
                dbr = dbr*100;
                if (totalMonthlyIncome <= 60000){
                  let message = 'The Applicant must attain minimum financial strength to apply for the loan';
                  this.warningMessage(message);
                }
                this.commonDBRCheck(totalMonthlyIncome, dbr);
              }else if(this.isBusinessman == true){
                let monthlyNetProfit = parseInt(this.formData.monthlySalesAmount) * parseInt(this.formData.natureOfYourBusiness);
                totalMonthlyIncome = monthlyNetProfit + parseInt(this.formData.otherSourcesAmount);
                dbr = (parseInt(emiPayable)+ parseInt(this.formData.monthlyInstalmentAmount))/totalMonthlyIncome;
                dbr = dbr*100;
                if (totalMonthlyIncome <= 50000){
                  let message = 'The Applicant must attain minimum financial strength to apply for the loan';
                  this.warningMessage(message);
                }
                this.commonDBRCheck(totalMonthlyIncome, dbr);

              }else if(this.isIndependentProfessionals == true){
                totalMonthlyIncome = parseInt(this.formData.netMonthlyIncomeIndependentProfessionals) + parseInt(this.formData.otherSourcesAmount);
                dbr = (parseInt(emiPayable)+ parseInt(this.formData.monthlyInstalmentAmount))/totalMonthlyIncome;
                dbr = dbr*100;
                if (totalMonthlyIncome <= 60000){
                  let message = 'The Applicant must attain minimum financial strength to apply for the loan';
                  this.warningMessage(message);
                }
                this.commonDBRCheck(totalMonthlyIncome, dbr);

              }else if(this.isNRB == true){
                totalMonthlyIncome = parseInt(this.formData.monthlySalaryORBusinessIncomeForNRB) + parseInt(this.formData.otherSourcesAmount);
                dbr = (parseInt(emiPayable)+ parseInt(this.formData.monthlyInstalmentAmount))/totalMonthlyIncome;
                dbr = dbr*100;
                if(this.formData.majorProfessionForNRB == 'Service-holder') {
                  if (totalMonthlyIncome <= 120000) {
                    let message = "The Applicant must attain minimum financial strength to apply for the loan";
                    this.warningMessage(message);
                  }
                }else{
                  if (totalMonthlyIncome <= 150000) {
                    let message = "The Applicant must attain minimum financial strength to apply for the loan";
                    this.warningMessage(message);
                  }
                }
                this.dbrCheckForNRB(totalMonthlyIncome, dbr);

              }else if(this.isLandlord == true){
                totalMonthlyIncome = parseInt(this.formData.netMonthlyRentalIncome) + parseInt(this.formData.otherSourcesAmount);
                dbr = (parseInt(emiPayable)+ parseInt(this.formData.monthlyInstalmentAmount))/totalMonthlyIncome;
                dbr = dbr*100;
                if (totalMonthlyIncome <= 60000){
                  let message = 'The Applicant must attain minimum financial strength to apply for the loan';
                  this.warningMessage(message);
                }
                this.commonDBRCheck(totalMonthlyIncome, dbr);
              }
            }
          }
        }
      },

      dbrCheckForNRB(totalMonthlyIncome, dbr){
        if(totalMonthlyIncome <= 100000){
          if (dbr <= 40){
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          }else {
            let message = 'The Applicant must attain minimum financial strength to apply for the loan';
            this.warningMessage(message);
          }
        }else if (totalMonthlyIncome > 100000){
          if (dbr <= 50){
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          }else {
            let message = 'The Applicant must attain minimum financial strength to apply for the loan';
            this.warningMessage(message);
          }
        }
      },

      commonDBRCheck(totalMonthlyIncome, dbr){
        if(totalMonthlyIncome <= 100000){
          if (dbr <= 50){
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          }else {
            let message = 'The Applicant must attain minimum financial strength to apply for the loan';
            this.warningMessage(message);
          }
        }else if (totalMonthlyIncome > 100000){
          if (dbr <= 60){
            let message = "Your loan application is forwarded to the nearest IDLC branch. We will communicate you soon. Thank You.";
            this.successAlert(message);
          }else {
            let message = 'The Applicant must attain minimum financial strength to apply for the loan';
            this.warningMessage(message);
          }
        }
      },

      finalCheck(dscr, debtEquityRatio){
        if (dscr > 1 && debtEquityRatio < 1  ){
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

      warningMessage(message){
        this.$fire({
          title: message,
          type: "warning",
          timer: 10000
        }).then(r => {
          console.log(r.value);
        });
      },

      successAlert(message){
        this.$fire({
          title: message,
          type: "warning",
          timer: 10000
        }).then(r => {
          this.submitDataForCarLoan();
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
            sortby: 'name'
          }
        }).then((response) => {
          if (response.status == 200) {
            let branchData = response.data.details.sort();
            this.branches = branchData;

          }
        }).catch(error => console.log(error));
      },
      getCountry(){
        axios.get('get-country-list').then((response) => {
          if (response.status == 200) {
            this.countries = response.data.details;

          }
        }).catch(error => console.log(error));
      },

      onChangeUseOfTheProposedCar(event){
        this.formData.useOfTheProposedCar = event.target.value;
      },
      onChangeSecurityOfferings(event){
        this.formData.securityOfferings = event.target.value;
      },

      onChangeTypeOfBusiness(event){
        this.formData.typeOfBusiness = event.target.value;
      },

      onChangeBranchName(event){
        this.formData.branchName = event.target.value;
      },

      onChangeCountryName(event){
        this.formData.country = event.target.value;
      },

      onChangeDoYouHaveAnyExistingLoan(event){
        this.haveExistingLoan = false;
        this.formData.doYouHaveAnyExistingLoan = event.target.value;
        if (this.formData.doYouHaveAnyExistingLoan == 'Yes'){
          this.haveExistingLoan = true;
        }else {
          this.haveExistingLoan = false;
        }
      },

      onChangeNatureOfYourBusiness(event){
        this.formData.natureOfYourBusiness = event.target.value;
      },

      onChangeProfession(event){
        this.isServiceHolder = false;
        this.isBusinessman = false;
        let selectedProfession = event.target.value;

        selectedProfession = this.formData.profession;

        if (selectedProfession == 'Service-holder'){
          this.isServiceHolder = true;
        }else if(selectedProfession == 'Businessman'){
          this.isBusinessman = true;
        }else if(selectedProfession == 'Independent-Professionals'){
          this.isIndependentProfessionals = true;
        }else if(selectedProfession == 'NRB'){
          this.isNRB = true;
        }else{
          this.isLandlord = true;
        }
      },

      onChangeMonthlyIncomeFromOtherSources(event){
        this.formData.monthlyIncomeFromOtherSources = event.target.value;
        if (this.formData.monthlyIncomeFromOtherSources == 'na'){
          this.isOtherSourcesAmount = false;
        }else{
          this.isOtherSourcesAmount = true;
        }
      },

      onChangeMajorProfession(event){
        this.formData.majorProfession = event.target.value;
      },

      onChangeTypeOfResidency(event){
        this.formData.typeOfResidency = event.target.value;
      },

      onChangeTypeOfPropertyThatGenerateRentalIncome(event){
        this.formData.typeOfPropertyThatGenerateRentalIncome = event.target.value;
      },

      onChangeMajorProfessionForNRB(event){
        this.isBusinessmanProfessionForNBR = false;
        let selectedProfessionForNRB = event.target.value;
        this.formData.majorProfessionForNRB = selectedProfessionForNRB;
        if(selectedProfessionForNRB != 'Service-holder'){
          this.isBusinessmanProfessionForNBR = true;
        }

      },

      submitDataForCarLoan(){
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
        data.append('loanType', 'Car Loan');
        data.append('tenure', this.formData.tenure);
        data.append('doYouHaveAnyExistingLoan', this.formData.doYouHaveAnyExistingLoan);
        data.append('monthlyInstalmentAmount', this.formData.monthlyInstalmentAmount);
        data.append('monthlyIncomeFromOtherSources', this.formData.monthlyIncomeFromOtherSources);
        data.append('otherSourcesAmount', this.formData.otherSourcesAmount);
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
        this.$store.dispatch("submitAfterEligibilityChecked", data)
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


  .error_message{
    color: #00a6b4;
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

  button.btn {
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
  button.btn:hover {
    outline: none;
    border: 2px solid #00a6b4 !important;
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
