<template>
  <div class="text-center" style="padding: 50px 30px">
    <h2 class="text-uppercase" style="font-size: 2rem; color: #ffff;">Get in touch with Us</h2>
    <div class="container ">
      <div class="col-md-8 offset-md-2 contact_form_details" >
        <div class="message_image">
          <img src="../../../assets/img/message.png" alt="">
        </div>

        <b-form @submit.prevent="onSubmit" class="get-in-touch-with-us"  v-if="show">

          <b-form-group id="input-group-2" label=" Name:" label-for="input-2">
            <b-form-input
              v-model="form.name"
              placeholder="Enter name"
              :class="{ 'is-invalid': submitted && $v.form.name.$error }"
              v-on:keypress="isLetter($event)"
            ></b-form-input>
            <div class="error_message" v-if="submitted && !$v.form.name.required">This field is required.</div>
          </b-form-group>


          <b-form-group
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              :class="{ 'is-invalid': submitted && $v.form.email.$error }"
            ></b-form-input>
            <div class="error_message" v-if="submitted && !$v.form.email.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.email.email">Invalid email address.</div>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Phone Number:"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.phone"
              type="number"
              placeholder="Enter phone number"
              min="0"
              :class="{ 'is-invalid': submitted && $v.form.phone.$error }"
            ></b-form-input>
            <div class="error_message" v-if="submitted && !$v.form.phone.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.numeric">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.minLength">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.phone.maxLength">Should be a valid phone number.</div>
          </b-form-group>


          <b-form-group
            id=""
            label="Address:"
            label-for="input-1"
          >
            <b-form-input
              v-model="form.address"
              type="text"
              placeholder="Address"
              :class="{ 'is-invalid': submitted && $v.form.address.$error }"
            ></b-form-input>
            <div class="error_message" v-if="submitted && !$v.form.address.required">This field is required.</div>
          </b-form-group>

          <label class="">Message:</label>
          <textarea id="textarea" class="form-control"
                    v-model="form.message" name="message"  cols="100" rows="5" style="overflow: hidden;"
                    :class="{ 'is-invalid': submitted && $v.form.message.$error }"
          ></textarea>
          <div class="error_message" v-if="submitted && !$v.form.message.required">This field is required.</div>
          <div class="form-group row">
              <label for="robot" class="col-sm-12 col-form-label"></label>
              <div class="row justify-content-md-center" style="width: 100%;">
                <div class="col-sm-12 col-md-6">
                  <vue-recaptcha
                    ref="recaptcha"
                    :loadRecaptchaScript="true"
                    sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">
                  </vue-recaptcha>
                </div>
              </div>
            </div>


          <button type="submit" class="submit_button get-in-touch-with-us">
            Submit
          </button>
          <!--            <b-button type="reset" variant="danger">Reset</b-button>-->
        </b-form>
      </div>

    </div>
  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  import {required, email, numeric, minLength, maxLength} from 'vuelidate/lib/validators'
  import $v from 'bootstrap-vue/esm/mixins/form';
    export default {
      name: "Form",


      data() {
        return {
          form: {
            name: '',
            email: '',
            phone: '',
            checked: [],
            message: '',
            address: '',
          },
          show: true,
          submitted: false,
          submitStatus: null,
        }
      },

      validations: {
        form: {
          name: {required},
          address: {required},
          phone: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
          email: {required, email},
          message: {required},
        }
      },


      components: {'vue-recaptcha': VueRecaptcha},
      methods: {
        onSubmit() {
          this.submitted = true;
          this.$v.form.$touch();
          if (this.$v.form.$invalid) {
            this.submitStatus = 'ERROR';
          } else {
            const data = new FormData();
            data.append('name', this.form.name);
            data.append('email', this.form.email);
            data.append('phone', this.form.phone);
            data.append('address', this.form.address);
            data.append('message', this.form.message);

            this.$store.dispatch("submitContactForm", data)
              .then(response => {
                console.log(response);
                this.$fire({
                  title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
                  type: "success",
                  timer: 5000
                }).then(r => {
                  this.form.name = this.form.email = this.form.phone = this.form.address = this.form.message = '';
                  this.formReset();
                  console.log(r.value);

                  return true;
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
        onVerify: function (response) {
          console.log('Verify: ' + response)
        },
        onExpired: function () {
          console.log('Expired')
        },
        resetRecaptcha () {
          this.$refs.recaptcha.reset() // Direct call reset method
        },

        isLetter(e) {
          let char = String.fromCharCode(e.keyCode); // Get the character
          if(/^[A-Za-z]+$/.test(char)) return true; // Match with regex
          else e.preventDefault(); // If not match, don't add to input text
        }



  },

      created() {
        let recaptchaScript = document.createElement('script')
        recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
        document.head.appendChild(recaptchaScript)

        let recaptchaVueScript1 = document.createElement('script')
        recaptchaVueScript1.setAttribute('src', 'https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js')
        document.head.appendChild(recaptchaVueScript)
      }

      // created() {
      //   var scripts = [
      //     "https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit",
      //     "https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js"
      //   ];
      //   scripts.forEach(script => {
      //     let tag = document.createElement("script");
      //     tag.setAttribute("src", script);
      //     document.head.appendChild(tag);
      //   });
      // }
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
  .contact_form_details{
      margin-top: 50px;
    text-align: left;
    font-size: 14px;
    padding: 50px;
    border-radius: 10px;
    -webkit-box-shadow: 2px 4px 14px #dddddd;
    box-shadow: 2px 4px 14px rgba(0, 0, 0, .25);
    position: relative;
    background: #fff;
  }
  @media screen and (max-width: 770px){
    .contact_form_details{
      padding: 50px 20px;
    }
  }

  .contact_form_details .message_image{
    position: absolute;
    top: -39px;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 50%;
    background-color: #dddddd;
    height: 80px;
    width: 80px;
    text-align: center;
  }

  .contact_form_details .message_image img{
    margin-top: 18px;
    margin-left: 2px;
  }

  .contact_form_details .form-control:focus {
    color: #495057;
    background-color: #fff;
    border-color: #00a6b4;
    outline: 0;
    -webkit-box-shadow: 0 0 0 0.1rem #00a6b4;
    box-shadow: 0 0 0 0.1rem #00a6b4;
    opacity: 1;
  }

  .submit_button{
    display: inline-block;
    border: 1px solid #00a6b4;
    color: #00a6b4!important;
    padding: 7px 32px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    background-color: #fff!important;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);


  }

  .submit_button:hover{
    display: inline-block;
    border: 1px solid #00a6b4;
    color: #fff!important;
    padding: 7px 32px;
    font-size: 14px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    background: #00a6b4!important;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);


  }

  .contact_form_details .form-control {
    font-size: 14px!important;
  }

</style>
