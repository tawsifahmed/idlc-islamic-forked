<template>
  <div class="container">
    <div class="investorInfo">
      <div class="heading text-center">
        <h2>Investor Information</h2>
      </div>
      <div class="body">
        <div class="icon">
          <img src="~@/assets/img/menu_icon/Menubar/Apply-for-jobs.png" alt="Icon">
        </div>
        <div class="formField">
          <form @submit.prevent="investorInformationSubmit" class="investor-information-submit">
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.formData.name.$error }"
                placeholder="Name"
                v-model="formData.name"
                v-on:keypress="isLetter($event)"
              >
              <div class="error_message" v-if="submitted && !$v.formData.name.required">This field is required.</div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.formData.address.$error }"
                placeholder="Address"
                v-model="formData.address"
              >
              <div class="error_message" v-if="submitted && !$v.formData.address.required">This field is required.</div>
            </div>

            <div class="form-group">
              <input
                type="number"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.formData.phone.$error }"
                placeholder="Phone"
                v-model="formData.phone"
                min="0"
              >
              <div class="error_message" v-if="submitted && !$v.formData.phone.required">This field is required.</div>
              <div class="error_message" v-if="submitted && !$v.formData.phone.numeric">Should be a valid phone number.</div>
              <div class="error_message" v-if="submitted && !$v.formData.phone.minLength">Should be a valid phone number.</div>
              <div class="error_message" v-if="submitted && !$v.formData.phone.maxLength">Should be a valid phone number.</div>

            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.formData.email.$error }"
                placeholder="Email"
                v-model="formData.email"
              >
              <div class="error_message" v-if="submitted && !$v.formData.email.required">This field is required.</div>
              <div class="error_message" v-if="submitted && !$v.formData.email.email">Invalid email address.</div>
            </div>

            <div class="form-group">
              <input
                type="text"
                class="form-control"
                :class="{ 'is-invalid': submitted && $v.formData.information.$error }"
                placeholder="Information"
                v-model="formData.information"
              >
              <div class="error_message" v-if="submitted && !$v.formData.information.required">This field is required.
              </div>
            </div>


            <div class="form-group row">
              <label for="robot" class="col-sm-12 col-form-label"></label>
              <div class="row justify-content-md-center" style="width: 100%;">
                <div class="col-sm-12 col-md-6">
                  <vue-recaptcha ref="recaptcha"
                                 sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">
                  </vue-recaptcha>
                </div>
              </div>
            </div>
            <input type="submit" class="tabcontent1Button investor-information-submit" value="Submit">
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import VueRecaptcha from 'vue-recaptcha';
  import {required, email, numeric, between, minLength, maxLength} from 'vuelidate/lib/validators'

  export default {
    components: {
      'vue-recaptcha': VueRecaptcha
    },
    data() {
      return {
        submitStatus: null,
        submitted: false,

        formData: {
          name: null,
          address: null,
          phone: null,
          email: null,
          information: null,
        }

      }

    },

    validations: {
      formData: {
        name: {required},
        address: {required},
        phone: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
        email: {required, email},
        information: {required},
      }
    },
    methods: {
      investorInformationSubmit(event) {
        this.submitted = true;
        this.$v.formData.$touch();
        if (this.$v.formData.$invalid) {
          this.submitStatus = 'ERROR';
        } else {

          const data = new FormData();
          data.append('name', this.formData.name);
          data.append('address', this.formData.address);
          data.append('phone', this.formData.phone);
          data.append('email', this.formData.email);
          data.append('information', this.formData.information);


          this.$store.dispatch("investorInformationSubmit", data)
            .then(response => {
              console.log(response);
              this.$fire({
                title: 'Thank you for your submission! Our representative will get in touch with you within 2 working days.',
                type: "success",
                timer: 10000
              }).then(r => {
                this.formData.name = this.formData.address = this.formData.phone = this.formData.email = this.formData.information = '';
                this.formReset();
                console.log(r.value);
              });
            })
            .catch(error => {
              console.log(error);
            });
        }

      },
      formReset(){
        this.submitted = false;
        Object.assign(this.$data, this.$options.data())
        this.$v.$reset()
      },
      isLetter(e) {
        let char = String.fromCharCode(e.keyCode); // Get the character
        if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex
        else e.preventDefault(); // If not match, don't add to input text
      }
    },
    mounted() {
      var scripts = [
        "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
        "https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js"
      ];
      scripts.forEach(script => {
        let tag = document.createElement("script");
        tag.setAttribute("src", script);
        document.head.appendChild(tag);
      });
    }
  }
</script>
<style scoped>

  .error_message {
    color: #00a6b4;
    font-size: 14px;
  }

  .form-group--error {
    color: #d62e2d;

  }


  .investorInfo .heading {
    margin: 30px 0 20px 0;
    text-transform: uppercase;
  }

  .investorInfo .body {
    background: #f2f2f2;
    /* background: green; */
    padding: 30px;
    display: flex;
    align-items: center;
  }

  .investorInfo .body .icon {
    flex-basis: 40%;
    text-align: center;
    padding: 30px;
  }

  .investorInfo .body .icon img {
    width: 150px;
    filter: invert(6%) sepia(100%) saturate(9999%);
  }

  .investorInfo .body .formField {
    flex: 1;
  }

  .investorInfo .body .formField form {
    padding: 20px;
  }

  .investorInfo .body .formField form input[type=text],
  .investorInfo .body .formField form input[type=number] {
    width: 100%;
    display: block;
    margin-bottom: 15px;
    padding: 7px 15px;
    font-size: 14px;
    border-radius: 5px;
    border: 1px solid #00a6b47c;
  }

  .tabcontent1Button {
    padding: 5px 20px;
    background: #fff;
    outline: none;
    border: 2px solid #00a6b4;
    font-size: 14px;
    border-radius: 100px;
    color: #333;
    transition: all 0.3s;
    display: block;
    margin: 0 auto;

  }

  .tabcontent1Button:hover {
    background: #00a6b4;
    color: #fff;
  }

  @media screen and (max-width: 600px) {
    .investorInfo .body {
      flex-direction: column;
      padding: 30px 0;
    }

    .investorInfo .body .icon {
      border-right: none;
    }
  }

</style>
