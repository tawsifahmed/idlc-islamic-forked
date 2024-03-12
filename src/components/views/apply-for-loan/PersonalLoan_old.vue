<template>
  <div>
    <div class="container ">
      <div class="col-md-12 ">
        <h6 class="text-center btn-block bg_color_for_apply_page" >Personal Loan</h6>
        <hr>
      </div>

      <div class="col-md-12" >
        <form  @submit.prevent="onSubmit" method="post" class="custom_form apply-for-loan-submit">
          <div class="mb-3">
<!--            <div class="mb-3">-->
<!--              <label  class="form-label">Select Loan Type</label>-->
<!--              <select-->
<!--                v-model="form.loan_type" class="form-control decorated" name="district"   required="" >-->
<!--                <option value="" selected>Select District</option>-->
<!--                <option value="Home-Loan">Home Loan</option>-->
<!--                <option value="Car-Loan">Car Loan</option>-->
<!--                <option value="Car-Loan">Personal Loan</option>-->
<!--                <option value="SME-Loan">SME Loan</option>-->
<!--              </select>-->
<!--            </div>-->
            <label for="name" class="form-label">Full Name (আপনার নাম)</label>
            <input                 :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                                   v-model="form.name" type="text" name="name" class="form-control" id="name" placeholder="Type Your Name"  >
            <div class="error_message" v-if="submitted && !$v.form.name.required">This field is required.</div>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Your Email (আপনার ইমেইল)</label>
            <input                 :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                                    v-model="form.email"  type="email" class="form-control" id="email" placeholder="Type Your Email"  >
            <div class="error_message" v-if="submitted && !$v.form.email.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.email.email">Invalid email address.</div>
          </div>

          <div class="mb-3">
            <label for="address" class="form-label">Your Address (আপনার ঠিকানা)</label>
            <input :class="{ 'is-invalid': submitted && $v.form.address.$error }"
                   v-model="form.address" type="text" class="form-control" id="address" placeholder="Type Your Address" >
            <div class="error_message" v-if="submitted && !$v.form.address.required">This field is required.</div>
          </div>

          <div class="mb-3">
            <label  class="form-label">Your District (জেলা)</label>
            <select
              v-model="form.district" class="form-control decorated" name="district"   required="" >
              <option value="" selected>Select District</option>
              <option value="Bandarban">Bandarban</option>
              <option value="Barguna">Barguna</option>
              <option value="Barisal">Barisal</option>
              <option value="Bhola">Bhola</option>
              <option value="Bogra">Bogra</option>
              <option value="Brahmanbaria">Brahmanbaria</option>
              <option value="Bagerhat">Bagerhat</option><option value="Chandpur">Chandpur</option>
              <option value="Chittagong">Chittagong</option>
              <option value="Chuadanga">Chuadanga</option>
              <option value="Comilla">Comilla</option>
              <option value="Cox'sBazar">Cox'sBazar</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Dinajpur">Dinajpur</option>
              <option value="Faridpur">Faridpur</option>
              <option value="Feni">Feni</option>
              <option value="Gaibandha">Gaibandha</option>
              <option value="Gazipur">Gazipur</option>
              <option value="Gopalganj">Gopalganj</option>
              <option value="Habiganj">Habiganj</option>
              <option value="Jaipurhat">Jaipurhat</option>
              <option value="Jamalpur">Jamalpur</option>
              <option value="Jessore">Jessore</option>
              <option value="Jhalokati">Jhalokati</option>
              <option value="Jhenaidah">Jhenaidah</option>
              <option value="Khagrachari">Khagrachari</option>
              <option value="Khulna">Khulna</option>
              <option value="Kishoreganj">Kishoreganj</option>
              <option value="Kurigram">Kurigram</option>
              <option value="Kushtia">Kushtia</option>
              <option value="Lakshmipur">Lakshmipur</option>
              <option value="Lalmonirhat">Lalmonirhat</option>
              <option value="Madaripur">Madaripur</option>
              <option value="Magura">Magura</option>
              <option value="Manikganj">Manikganj</option>
              <option value="Maulvibazar">Maulvibazar</option>
              <option value="Meherpur">Meherpur</option>
              <option value="Munshiganj">Munshiganj</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Naogaon">Naogaon</option>
              <option value="Narail">Narail</option>
              <option value="Narayanganj">Narayanganj</option>
              <option value="Narsingdi">Narsingdi</option>
              <option value="Natore">Natore</option>
              <option value="Nawabganj">Nawabganj</option>
              <option value="Netrokona">Netrokona</option>
              <option value="Nilphamari">Nilphamari</option>
              <option value="Noakhali">Noakhali</option>
              <option value="Pabna">Pabna</option>
              <option value="Panchagarh">Panchagarh</option>
              <option value="Patuakhali">Patuakhali</option>
              <option value="Pirojpur">Pirojpur</option>
              <option value="Rajbari">Rajbari</option>
              <option value="Rajshahi">Rajshahi</option>
              <option value="Rangamati">Rangamati</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Satkhira">Satkhira</option>
              <option value="Shariatpur">Shariatpur</option>
              <option value="Sherpur">Sherpur</option>
              <option value="Sirajganj">Sirajganj</option>
              <option value="Sunamganj">Sunamganj</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Tangail">Tangail</option>
              <option value="Thakurgaon">Thakurgaon</option>
            </select>
          </div>
          <div class="mb-3">
            <label for="phone" class="form-label">Contact Number (আপনার ফোন নম্বর)</label>
            <input  :class="{ 'is-invalid': submitted && $v.form.phone.$error }"
                    v-model="form.phone" type="number" min="0" class="form-control" id="phone" placeholder="Type Your Phone">
            <div class="error_message" v-if="submitted && !$v.form.phone.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.numeric">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.minLength">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.maxLength">Should be a valid phone number.</div>

          </div>
          <p class="term-condition">
            I do hereby admit that all the above information that I have input is true & correct.
            If any of the above information figured out false or incorrect, I understand & agree that my loan application will be rejected.
            I agree to share my information with IDLC and follow the company policy as required.</p>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
            <label class="form-check-label" for="exampleCheck1">I accept terms & conditions</label>
          </div>
          <div class="col-md-12">

<!--            <div class="form-group row">-->
<!--              <label for="robot" class="col-sm-12 col-form-label"></label>-->
<!--              <div class="row justify-content-md-center" style="width: 100%;">-->
<!--                <div class="col-sm-12 col-md-6">-->
<!--                  <vue-recaptcha ref="recaptcha"-->
<!--                                @verify="onVerify" sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">-->
<!--                  </vue-recaptcha>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->

            <hr></div>
          <div class="text-center">
            <button type="submit" class="btn apply-for-loan-submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// import VueRecaptcha from 'vue-recaptcha';
import {required, email, numeric, between, minLength, maxLength} from 'vuelidate/lib/validators'

  export default {
    data() {
      return {
        submitStatus: null,
        submitted: false,
        form: {
          email: '',
          name: '',
          address: '',
          district: '',
          phone: '',
          loan_type: 'Personal-Loan',
          checked: [],
          form: '',
          errors: [],
        },
        selected: null,
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        successMessage: false,
      }
    },
    validations: {
      form: {
        name: {required},
        address: {required},
        phone: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
        email: {required, email},
        district: {required},
        loan_type: {required},
      }
    },

    // components: {'vue-recaptcha': VueRecaptcha},
    methods: {
      onSubmit() {
        // this.successMessage = true
        this.submitted = true;
        this.$v.form.$touch();
        if (this.$v.form.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          const data = new FormData();
          data.append('loan_type', this.form.loan_type);
          data.append('name', this.form.name);
          data.append('email', this.form.email);
          data.append('address', this.form.address);
          data.append('district', this.form.district);
          data.append('phone', this.form.phone);
          this.$store.dispatch("submitForHomeLoan", data)
            .then(response => {
              this.$fire({
                title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
                type: "success",
                timer: 5000
              }).then(r => {
                this.form.name = this.form.address = this.form.phone = this.form.email = '';
                this.formReset();
                console.log(r.value);
                return true;

              });
              // this.successMessage = true
              console.log(response);
            }).catch(error => {

            console.log(error);
          });


          // event.preventDefault()
          // alert(JSON.stringify(this.form));

        }
      },
      onReset(event) {
        event.preventDefault()
        // Reset our form values
        this.form.email = ''
        this.form.name = ''
        this.form.address = ''
        this.form.district = ''
        this.form.phone = ''
        this.form.checked = []
        // Trick to reset/clear native browser form validation state
        this.show = false
        this.$nextTick(() => {
          this.show = true
        })
      },

      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
      showAlert() {
        this.dismissCountDown = this.dismissSecs
      },
      formReset(){
        this.submitted = false;
        Object.assign(this.$data, this.$options.data())
        this.$v.$reset()
      }
    },

    // updated() {
    //   $('.alert').alert();
    // }
  }
</script>
<style scoped>

  .error_message {
    color: #d62e2f;
    font-size: 14px;
  }

  .form-group--error {
    color: #d62e2d;

  }


  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 0.5rem 1rem!important;
    color: inherit;
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
  select.decorated option:hover {
    box-shadow: 0 0 10px 100px #d62e2f inset;
  }
  .term-condition {
    font-size: 14px;
    padding-bottom: 8px;
  }
  .condition-check {
    padding-left: 20px;
    padding-top: 10px;
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
    margin: auto 10px auto auto;
  }
  .nav-pills.nav-wizard>li a {
    position: relative;
  }
  label {
    font-size: 14px;
  }




</style>
