<template>
  <div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <h6 class="text-center btn-block bg_color_for_apply_page" >Home Loan</h6>
        <hr></div>
      <div class="col-md-10 offset-md-1">
        <form  @submit.prevent="onSubmit" method="post" class=custom_form>
          <div class="mb-3">
            <label >What type of loan do you need? (লোন টাইপ)</label>
            <select
              class="form-control"
              placeholder="Select Loan"
              data-placement="right"
              title="Select a Loan"
              v-model="form.loan_type"
            >
              <option value="">Select Loan</option>
              <option value="Home-Purchase-Loan" selected>Home Purchase Loan</option>
              <option value="Home-Equity-Loan" selected> Home Equity Loan</option>
              <option value="Home-Loan-Sheild" selected> Home Loan Sheild</option>
              <option value="Construction-Loan" selected>Construction Loan</option>
              <option value="Affordable-Home-Loan" selected> Affordable Home Loan</option>
              <option value="Semi-Paka-Loan" selected> Semi Paka Loan</option>
              <option value="Home-Purchase-Loan" selected> Home Purchase Loan</option>
              <option value="Commercial-Space-Loan" selected>Commercial Space Loan</option>
              <option value="Construction Loan" selected> Construction Loan</option>
            </select>
          </div>

          <div class="mb-3">
            <label for="name" class="form-label">Full Name (আপনার নাম)</label>
            <input   v-model="form.name" type="text" name="name" class="form-control" id="name" placeholder="Type Your Name"  >
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Your Email (আপনার ইমেইল)</label>
            <input v-model="form.email"  type="email" class="form-control" id="email" placeholder="Type Your Email"  >
          </div>
          <div class="mb-3">
            <label for="address" class="form-label">Your Address (আপনার ঠিকানা)</label>
            <input v-model="form.address" type="text" class="form-control" id="address" placeholder="Type Your Address"  >
          </div>
          <div class="mb-3">
            <label  class="form-label">Your District (জেলা)</label>
            <select  v-model="form.district" class="form-control decorated" name="district"   >
              <option value="" disabled >Select District</option>
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
            <input v-model="form.phone" type="number" class="form-control" id="phone" placeholder="Type Your Phone">
          </div>
          <p class="term-condition">Our Terms and Conditions template will get you started with creating your own custom Terms
            and Conditions agreement. This Terms and Conditions template is free to download and use for your website or mobile app.</p>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1" required>
            <label class="form-check-label" for="exampleCheck1">I accept terms & conditions</label>
          </div>
          <div class="col-md-12">
            <b-alert v-if="successMessage"   show dismissible fade><h6>Your request has been sent!</h6> </b-alert>
            <b-alert    dismissible fade>
              <h6 v-if="errors" v-for="error in form.errors" >{{ error }}</h6>
            </b-alert>
<!--            <div v-if="form.errors.length">-->
<!--              <b-alert-->
<!--              <b-alert-->

<!--                dismissible-->
<!--                fade-->
<!--                variant="warning"-->
<!--                v-for="error in form.errors"-->
<!--                :key="error"-->
<!--              >-->

<!--                <h6> asdasd {{ error }}</h6>-->
<!--              </b-alert>-->
<!--            </div>-->
<!--            <div class="form-group row">-->
<!--              <label for="robot" class="col-sm-12 col-form-label"></label>-->
<!--              <div class="row justify-content-md-center" style="width: 100%;">-->
<!--                <div class="col-sm-12 col-md-6">-->
<!--                  <vue-recaptcha ref="recaptcha"-->
<!--                    @verify="onVerify" sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">-->
<!--                  </vue-recaptcha>-->
<!--                </div>-->
<!--              </div>-->
<!--            </div>-->
            <hr></div>

          <div class="text-center">
            <button type="submit" class="btn ">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  // import VueRecaptcha from 'vue-recaptcha';
  export default {
    data() {
      return {
        form: {
          email: '',
          name: '',
          address: '',
          district: '',
          phone: '',
          loan_type: '',
          checked: [],
          form: '',
          errors: ['test'],
        },
        selected: null,
        dismissSecs: 5,
        dismissCountDown: 0,
        showDismissibleAlert: false,
        successMessage: false,
        // errorMessage: false,
      }
    },
    // components: {'vue-recaptcha': VueRecaptcha},
    methods: {
      onSubmit() {
        this.form.errors = [];

        if (!this.form.loan_type) {
          this.form.errors.push('Select a loan type.');
        }
        if (!this.form.name) {
          this.form.errors.push('Name field is required.');
        }
        if (!this.form.email) {
          this.form.errors.push('Email field is required.');
        }
        if (!this.form.address) {
          this.form.errors.push('Address field is required.');
        }
        if (!this.form.district) {
          this.form.errors.push('District field is required.');
        }
        if (!this.form.phone) {
          this.form.errors.push('Phone field is required.');
        }

        const data = new FormData();
        data.append('loan_type', this.form.loan_type);
        data.append('name', this.form.name);
        data.append('email', this.form.email);
        data.append('address', this.form.address);
        data.append('district', this.form.district);
        data.append('phone', this.form.phone);

        this.$store.dispatch("submitForHomeLoan", data)
          .then(response => {
            if (response.code == 200){
              this.successMessage = true;
            }
            console.log(response);
          }).catch(error => {
          console.log(error);
        });



        // event.preventDefault()
        // alert(JSON.stringify(this.form));


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
      }
    },

    updated() {
      $('.alert').alert();
    }
  }
</script>
<style scoped>

  .alert-dismissible .close {
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    padding: 0.5rem 1rem!important;
    color: inherit;
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
  select.decorated option:hover {
    box-shadow: 0 0 10px 100px #00a6b4 inset;
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
  label {
    font-size: 14px;
  }
</style>
