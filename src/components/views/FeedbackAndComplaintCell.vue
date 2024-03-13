<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve/>
    <div class="promotion-header">
      <div class="homePageTitleDetails sectionTitle dFTagline">
        <div class="page_heading">
          <h2 style="text-align: center; " class="h2Responsive textUpperCase">
            Feedback And Complaint Cell
          </h2>
        </div>
<!--        <p>If you have invested your part in IDLC, it is now our aim to make it easier for you to know the ins and outs-->
<!--          of the stock-market updates.</p>-->
      </div>
    </div>

    <!-- Feedback and complaint tab  -->
    <div class="productFeatures">
      <div class="categoryDetails" id="categoryFeature1">
        <div class="container-lg">
        </div>
        <br>
        <div class="container-lg">
          <div class="tab">
            <button class="tablinks1" id="FeedbackButton"
                    @click="tabOpen( 'Feedback', $event)">Feedback
            </button>
            <button class="tablinks1" id="ComplaintButton"
                    @click="tabOpen( 'Complaint', $event)">Complaint
            </button>
          </div>

          <div
               class=" tabcontent1 feedbackContant"
            id="Feedback">
            <div class="container">
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-12">

                  <form @submit.prevent="onSubmitFeedback" ref="feedbackForm" class="feedback-submit">

                    <input type="text"
                           name="message_type"
                           class="form-control"
                           id="phone"
                           placeholder="Type Your Phone Number"
                           value="Feedback"
                           hidden

                    >
                    <div class="form-group">
                      <label for="name" style="font-size: 14px;">Your Name</label>
                      <input type="text"
                             name="name"
                             class="form-control"
                             id="name"
                             placeholder="Type Your Name"
                             :class="{ 'is-invalid': submitted && $v.form.name.$error }"
                             v-model="form.name"
                             v-on:keypress="isLetter($event)"
                      >
                      <div class="error_message" v-if="submitted && !$v.form.name.required">This field is required.</div>

                    </div>


                    <div class="form-group">
                      <label for="phone" style="font-size: 14px;">Phone Number</label>
                      <input type="number"
                             name="phone"
                             class="form-control"
                             id="phone"
                             placeholder="Type Your Phone Number"
                             v-model="form.phone"
                             :class="{ 'is-invalid': submitted && $v.form.phone.$error }"
                      >

                      <div class="error_message" v-if="submitted && !$v.form.phone.required">This field is required.</div>
                      <div class="error_message" v-if="submitted && !$v.form.phone.numeric">Should be a valid phone number.</div>
                      <div class="error_message" v-if="submitted && !$v.form.phone.minLength">Should be a valid phone number.</div>
                      <div class="error_message" v-if="submitted && !$v.form.phone.maxLength">Should be a valid phone number.</div>

                    </div>

                    <div class="form-group">
                      <label for="email" style="font-size: 14px;">Email Address</label>
                      <input type="email"
                             name="email"
                             class="form-control"
                             id="email"
                             placeholder="Email Address"
                             v-model="form.email"
                             :class="{ 'is-invalid': submitted && $v.form.email.$error }"
                      >
                      <div class="error_message" v-if="submitted && !$v.form.email.required">This field is required.</div>
                      <div class="error_message" v-if="submitted && !$v.form.email.email">Invalid email address.</div>
                    </div>


                    <div class="form-group">
                      <label for="complaint" style="font-size: 14px;">Feedback</label>
                      <textarea name="complaint"
                                id="complaint"
                                class="form-control"
                                rows="6"
                                placeholder="Type Your Feedback"
                                v-model="form.message"
                                :class="{ 'is-invalid': submitted && $v.form.message.$error }"
                      ></textarea>
                      <div class="error_message" v-if="submitted && !$v.form.message.required">This field is required.</div>
                    </div>
                    <div class="form-group row">
                      <label for="robot" class="col-sm-12 col-form-label"></label>
                      <div class="row justify-content-md-center" style="width: 100%;">
                        <div class="col-sm-12 col-md-6">
                          <vue-recaptcha ref="recaptcha"
                                         @verify="onVerify"
                                         sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">
                          </vue-recaptcha>
                        </div>
                      </div>
                    </div>

                    <div class="form-group text-center">
                      <button class="tabcontent2Button text-center feedback-submit">Submit</button>
                    </div>

                  </form>
                </div>
              </div>

            </div>
          </div>

          <div
               class=" tabcontent1 feedbackContant"

            id="Complaint">
            <div class="container">
              <div class="row">
                <div class="col-md-8 offset-md-2 col-sm-12">
                  <form @submit.prevent="onSubmitComplaint" class="complaint-submit">
                    <input type="text"
                           name="message_type"
                           class="form-control"
                           value="Complaint"
                           hidden

                    >
                    <div class="form-group">
                      <label for="name" style="font-size: 14px;">Your Name</label>
                      <input type="text"
                             name="name"
                             class="form-control"
                             id="name"
                             placeholder="Type Your Name"
                             :class="{ 'is-invalid': submitted && $v.formTwo.name.$error }"
                             v-model="formTwo.name"
                             v-on:keypress="isLetter($event)"
                      >
                      <div class="error_message" v-if="submitted && !$v.formTwo.name.required">This field is required.</div>

                    </div>


                    <div class="form-group">
                      <label for="phone" style="font-size: 14px;">Phone Number</label>
                      <input type="number"
                             name="phone"
                             class="form-control"
                             id="phone"
                             placeholder="Type Your Phone Number"
                             v-model="formTwo.phone"
                             :class="{ 'is-invalid': submitted && $v.formTwo.phone.$error }"
                             min="0"
                      >

                      <div class="error_message" v-if="submitted && !$v.formTwo.phone.required">This field is required.</div>
                      <div class="error_message" v-if="submitted && !$v.formTwo.phone.numeric">Should be a valid phone number.</div>
                      <div class="error_message" v-if="submitted && !$v.formTwo.phone.minLength">Should be a valid phone number.</div>
                      <div class="error_message" v-if="submitted && !$v.formTwo.phone.maxLength">Should be a valid phone number.</div>
                    </div>

                    <div class="form-group">
                      <label for="email" style="font-size: 14px;">Email Address</label>
                      <input type="email"
                             name="email"
                             class="form-control"
                             id="email"
                             placeholder="Email Address"
                             v-model="formTwo.email"
                             :class="{ 'is-invalid': submitted && $v.formTwo.email.$error }"
                      >
                      <div class="error_message" v-if="submitted && !$v.formTwo.email.required">This field is required.</div>
                      <div class="error_message" v-if="submitted && !$v.formTwo.email.email">Invalid email address.</div>
                    </div>

                    <div class="form-group">
                      <label for="complaint" style="font-size: 14px;">Complaint</label>
                      <textarea name="complaint"
                                id="complaint"
                                class="form-control"
                                rows="6"
                                placeholder="Type About Complaint"
                                v-model="formTwo.message"
                                :class="{ 'is-invalid': submitted && $v.formTwo.message.$error }"
                      ></textarea>
                      <div class="error_message" v-if="submitted && !$v.formTwo.message.required">This field is required.</div>
                    </div>

                    <div class="form-group row">
                      <label for="robot" class="col-sm-12 col-form-label"></label>
                      <div class="row justify-content-md-center" style="width: 100%;">
                        <div class="col-sm-12 col-md-6">
                          <vue-recaptcha ref="recaptcha"
                                         @verify="onVerify"
                                         sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">
                          </vue-recaptcha>
                        </div>
                      </div>
                    </div>

                    <input type="text" name="first_last_name_"
                           style="display:block; opacity: 0.0001; width: 1px; height: 1px; margin: 0; padding: 0; border: 0;"
                           value="theodore">

                    <div class="form-group text-center">
                      <button class="tabcontent2Button text-center complaint-submit" >Submit</button>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
          <br>

          <br><br>
        <div class="container">
          <div class="row filterOptions investor_relation"  >
            <div class="col-md-12">
              <b-card  class="product-card">
                <a  v-b-toggle="'annualReportcollapse' + 1111" block class="d-flex">
                  <strong class="question_product" style="color:white; font-size: 1.25rem;">COMPLAINT CELL DETAILS</strong>
                  <!-- replace these with your preferred icons -->
                  <strong  aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                </a>
                <b-collapse v-bind:id="'annualReportcollapse' + 1111">
                  <b-card class="question-card">
                    <a  v-b-toggle.collapse-home-loan-1 block>
                      <div class="row" >
                      <div class="col-md-12">
                        <p><span v-html="contactDetail.description"></span></p>
                      <!-- <a href="#" class="tabcontent1Button">Apply Now</a> -->
                      <!-- <br> -->
                      <!-- <a href="~@/assets/pdf/IDLC_Code_of_Conduct2019.pdf" class="tabcontent1Button" download>Download</a> -->
                      </div>
                    </div>
                      <!-- replace these with your preferred icons -->
                      <strong aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                    </a>
                  </b-card>
                </b-collapse>
              </b-card>
            </div>
          </div>

        </div>
<br><br>

        </div>
      </div>
    </div>
    <app-footer />


  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  import axios from "axios";
  import {required, email, numeric, between, minLength, maxLength} from 'vuelidate/lib/validators';

  export default {
    name: 'feedback-and-complaint',
    data() {
      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message: '',
          message_type_Feedback: 'Feedback',
          message_type_Complaint: 'Complaint',
          robot: false,
          shortcode: 'FeedbackAndComplaint',
        },

        formTwo: {
          name: '',
          email: '',
          phone: '',
          message: '',
          message_type_Feedback: 'Feedback',
          message_type_Complaint: 'Complaint',
          robot: false,
          shortcode: 'FeedbackAndComplaint',
        },
        submitStatus: 'Submit',
        contactDetail: '',
        submitted: false,
      }
    },

    validations: {
      form: {
        name: {required},
        phone: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
        email: {required, email},
        message: {required},
      },

      formTwo: {
        name: {required},
        phone: {required, numeric, minLength: minLength(11), maxLength: maxLength(11)},
        email: {required, email},
        message: {required},
      }
    },
    components: {
      AppHeaderMobile: () => import('../incudes/HeaderMobile'),
      AppHeader: () => import('../incudes/Header'),
      AppSideNav: () => import('../incudes/SideNav'),
      AppTopCurve: () => import('../incudes/SlimTopCurve'),
      // AppStaticImage: () => import('../incudes/StaticImage'),
      AppFooter: () => import('../incudes/Footer'),

      'vue-recaptcha': VueRecaptcha
    },

    methods: {
      tabOpen: function (tabName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        event.target.className += " active";
        var newElement = document.getElementById(tabName);

      },

      onSubmitFeedback() {
        this.submitted = true;
        this.$v.form.$touch();
        if (this.$v.form.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
        this.form.robot = true;
          this.submitStatus = 'Sending...';
          const data = new FormData();
          data.append('name', this.form.name);
          data.append('email', this.form.email);
          data.append('phone', this.form.phone);
          data.append('message', this.form.message);
          data.append('message_type', this.form.message_type_Feedback);
          if (this.form.robot == true) {

            this.$store.dispatch("submitComplaint", data)
              .then(response => {
                this.submitStatus = 'Submit';
                this.$fire({
                  title: "Your Feedback has been sent!",
                  type: "success",
                  timer: 5000
                }).then(r => {
                  this.form.name =  this.form.phone = this.form.email = this.form.message = '';
                  this.formReset();
                  this.form.robot = false;
                  console.log(r.value);
                  return true;
                });
              })
              .catch(error => {
                console.log(error);
              });
          }else{
            alert('false');
          }
        }


      },
      onSubmitComplaint() {

        this.submitted = true;
        this.$v.formTwo.$touch();
        if (this.$v.formTwo.$invalid) {
          this.submitStatus = 'ERROR';
        } else {
          this.submitStatus = 'Sending...';
          // this.formTwo.robot = true;
          const data = new FormData();
          data.append('name', this.formTwo.name);
          data.append('email', this.formTwo.email);
          data.append('phone', this.formTwo.phone);
          data.append('message', this.formTwo.message);
          data.append('message_type', this.formTwo.message_type_Complaint);
            this.$store.dispatch("submitComplaint", data)
              .then(response => {
                this.submitStatus = 'Submit';
                this.$fire({
                  title: "Your Complaint has been sent!",
                  type: "success",
                  timer: 5000
                }).then(r => {
                  this.formTwo.name =  this.formTwo.phone = this.formTwo.email = this.formTwo.message = '';
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
      getContactDetail(){
        axios.get('investor-relation-contact',{
          params: {
            shortcode: 'FeedbackAndComplaint',
          }
        }).then((response) => {
          if(response.status == 200){
            this.contactDetail = response.data.details['0'];
          }
        }).catch(error => console.log(error));
      },
      onVerify: function (response) {
        if (response) this.form.robot = true;
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
    created() {
      this.getContactDetail();

    },
    beforeMount() {
      // this.$store.state.isLoading = false;
    },
    mounted() {
      if (this.$route.params.id == 'Feedback'){
        $("#FeedbackButton").trigger('click');
      }else if(this.$route.params.id == 'Complaint'){
        $("#ComplaintButton").trigger('click');
      }else{
        $("#FeedbackButton").trigger('click');
      }


      let recaptchaScript = document.createElement('script')
      recaptchaScript.setAttribute('src', 'https://www.google.com/recaptcha/api.js?onload=vueRecaptchaApiLoaded&render=explicit')
      document.head.appendChild(recaptchaScript)

      let recaptchaVueScript = document.createElement('script')
      recaptchaVueScript.setAttribute('src', 'https://unpkg.com/vue-recaptcha@latest/dist/vue-recaptcha.min.js')
      document.head.appendChild(recaptchaVueScript)
    }
  }
</script>
<style lang="" scoped>
  .error_message {
    color: #00a6b4;
    font-size: 14px;
  }

  .form-group--error {
    color: #d62e2d;

  }


  .contact_details {
    text-align: center;
  }

  .contact_details h6 {
    padding: 15px;
    font-size: 1.25rem;
  }

  .contact_details p {
    font-size: 14px;
    padding-bottom: 20px;
  }

  .homePageTitleDetails p {
    padding: 20px 100px 20px 100px;
  }

  @media screen and (max-width: 600px) {
    .homePageTitleDetails p {
      padding: 10px !important;
    }

    .homePageTitleDetails h2 {
      padding: 5px !important;
    }
  }


  .categoryBody .mcategory .reason {
    flex-basis: 23%;
    background: #00a6b4;
    margin: 10px;
    color: #fff;
    padding: 15px;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .categoryBody .mcategory .reason:hover {
    background: #00a6b4;
  }

  .categoryBody .mcategory .reason a {
    display: block;
    text-align: center;
  }

  .categoryBody .mcategory .reason a h6 {
    color: #fff;
  }

  .categoryBody .mcategory .reason a img {
    transition: all 0.3s;
    height: 80px;
    width: 80px;
    display: inline-block;
  }

  .categoryBody .mcategory .owl-buttons {
    padding-top: 15px !important;
    position: absolute;
    left: 50%;
    /* padding-right: 45px !important; */
  }

  .categoriesTagline {
    margin-top: 13px;
    font-size: 1.25rem;
  }

  .categories {
    display: block;
  }

  .mcategory {
    display: none;
  }

  /* .container-lg .tab {
      border: 2px solid #CF2829;
      border-radius: 20px;
  } */

  .productFeatures .tab {
    border: none;
  }

  /*.categoryDetails .tabcontent1 {*/
  /*    border: none;*/
  /*}*/
  @media screen and (max-width: 600px) {
    .categories {
      display: none;
    }

    .mcategory {
      display: block;
    }
  }

  /* News CSS  */
  .news_box_gutter {
    padding: 0 10px;
  }

  .complientDetail {
    background-color: #f2f2f2;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
    margin: 30px;
    padding: 30px;
    width: 100%;
    border-radius: 10px
  }

  @media screen and (max-width: 600px) {
    .news_box_gutter {
      padding: 0 0px;
      margin-bottom: 2px;
    }

    .complientDetail {
      margin: 30px 0 20px 0;
    }

    .productFeatures {
      margin-top: 30px;
    }
  }

  .news_box {
    width: 100%;
    border: 1px solid #ccc;
    padding: 0;
    overflow: hidden;
    position: relative;
    margin: 0 0px;
  }

  .news_box:focus {
    box-shadow: none;
    outline: none;
  }

  .news_box .news_box_image {
    width: 100%;
    overflow: hidden;
  }

  .news_box .news_box_image img {
    width: 100%;
    transition: all 0.4s;
  }

  .news_box:hover .news_box_image img {
    transform: scale(1.2);
  }

  .news_box .news_box_header {
    width: 100%;
    padding: 15px 20px 10px 20px;;
  }

  .news_box .news_box_header h2,
  .news_box .news_box_body p {
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }

  .news_box .news_box_header h2 {
    font-size: 1rem;
    -webkit-line-clamp: 3;
    height: 65px;
  }

  .news_box .news_box_body {
    padding: 0 20px 20px 20px;
    display: none;
  }

  .news_box .news_box_body p {
    font-size: 14px;
    -webkit-line-clamp: 3;
  }

  .news_box .news_box_footer {
    padding: 0 20px 20px 20px;
  }

  .news_box .news_box_footer .news_box_learnMore_btn {
    display: inline-block;
    border: 1px solid #00a6b4;
    color: #00a6b4;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 100px;
    transition: all 0.4s;
  }

  .news_box .news_box_footer .news_box_learnMore_btn:hover {
    color: #fff;
    background: #00a6b4;
    text-decoration: none;
  }

  .news_box .news_box_share {
    background: #00a6b4;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 130px;
    padding: 5px 10px;
    transform: rotate(-90deg) translateX(32%);
    transform-origin: right bottom;
    position: absolute;
    top: 0;
    right: -100px;
    transition: all 0.4s;
  }

  .news_box .news_box_share span,
  .news_box .news_box_share a i {
    color: #fff;
    font-size: 20px;
  }

  .news_box .news_box_share a {
    color: #fff;
    font-size: 20px;
    transition: all 0.3s;
    transform: rotate(90deg) scale(1);
  }

  .news_box .news_box_share a:hover {
    transform: rotate(90deg) scale(1.2);
  }

  .news_box:hover .news_box_share {
    right: 0;
  }

  /* Custom CSS  */
  .custom-select {
    border-radius: 8px;
    border: 2px solid #ccc;
    padding-left: 10px;
  }

  .keyword-field {
    border-radius: 8px;
    border: 2px solid #ccc;
    padding-left: 10px;
  }

  .homePageTitleDetails p {
    font-size: 14px;
    padding: 20px 250px 20px 250px;
  }

  .latest {
    margin: 20px;
  }

  .logo {
    text-align: center;
  }

  .single-news {
    padding-bottom: 10px;
  }

  #feature {
    display: block;
  }

  .tab button.active {
    background-color: #333 !important;
    color: #fff !important;
  }

  .tab .tablinks1 {
    margin-right: 1px;
    background-color: #808182 !important;
    align-items: center;
    color: #fff !important;
  }

  .custom_label {
    font-size: 15px;
  }

  .alert-msg {
    font-size: 16px;
  }

  ::placeholder {
    font-size: 12px;
    font-weight: normal;
  }

  .feedbackContant {
    background-color: #f2f2f2;
  }

  .hideContent {
    display: none !important;
  }

  .showContent {
    display: block!important;
  }
  ul {
    list-style: none !important;
  }
  .product-card {
  background: #00a6b4;
  color: #fff;
  margin-bottom: 5px;
}
.product-card .card-body{
  padding: 0rem;
}
.product-card .question-card{
  padding: 10px;
}
.product-card .card-body .d-flex{
  padding: 10px;
}
.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}
</style>
