<template>
  <div class="text-center applyResumi">
    <h2 class="text-uppercase" style="font-size: 2rem; color: #ffff;">Drop Your Resume</h2>
    <div class="container ">
      <div class="col-md-8 offset-md-2 contact_form_details" >
        <div class="message_image">
          <img src="../../../assets/img/message.png" alt="">
        </div>

        <form @submit.prevent="onSubmit"  v-if="show">
          <div class="form-group" >
            <label >Your Name:</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.form.name.$error }"
              placeholder="Enter Your Name"
              v-model.trim="form.name"
            >
            <div class="error_message" v-if="submitted && !$v.form.name.required">This field is required.</div>
          </div>

          <div class="form-group">
            <label for="dob" class="">Date of Birth: </label>
            <datepicker
              class="custom_datePiker_style"
              placeholder="Date of birth"
              v-model="form.dob"
              width="500px"
              required=""
            />
          </div>

          <div class="form-group" >
            <label >Contact Number:</label>
            <input
              type="number"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.form.contact.$error }"
              placeholder="Contact Number"
              v-model.trim="form.contact"
              data-placement="right"
            >
            <div class="error_message" v-if="submitted && !$v.form.contact.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.contact.numeric">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.contact.minLength">Should be a valid phone number.</div>
            <div class="error_message" v-if="submitted && !$v.form.contact.maxLength">Should be a valid phone number.</div>
          </div>

          <div class="form-group">
            <label for="email">Your Email:</label>
            <input
              type="email"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.form.email.$error }"
              v-model="form.email"
              data-placement="right"
              title="Enter Your Email"

            >
            <div class="error_message" v-if="submitted && !$v.form.email.required">This field is required.</div>
            <div class="error_message" v-if="submitted && !$v.form.email.email">Email is invalid.</div>
          </div>

          <div class="form-group" >
            <label >Address:</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.form.address.$error }"
              placeholder="Enter Address"
              v-model.trim="form.address"
              data-placement="right"
            >
            <div class="error_message" v-if="submitted && !$v.form.address.required">This field is required.</div>
          </div>


          <div class="form-group">
            <label >District:</label>
            <select
              required=""
              class="form-control"
              v-model="form.district"
              placeholder="Select Loan"
              data-placement="right"
              title="Select a Branch"
              @change="onChangeDistrictName($event)"
            >
              <option value="" DISABLED selected>Select Your District</option>
              <option :value="data.text" v-for="data in options" :key="data.id">{{ data.text}}</option>
            </select>
          </div>

          <div class="form-group" >
            <label >Years of Professional Experience (if any):</label>
            <input
              type="text"
              class="form-control"
              placeholder="Professional Experience"
              v-model.trim="form.years_of_experience"
              data-placement="right"
            >
          </div>

          <div class="form-group" >
            <label >Last Completed Degree:</label>
            <input
              type="text"
              class="form-control"
              :class="{ 'is-invalid': submitted && $v.form.last_completed_degree.$error }"
              placeholder="Professional Experience"
              v-model.trim="form.last_completed_degree"
              data-placement="right"
            >
            <div class="error_message" v-if="submitted && !$v.form.last_completed_degree.required">This field is required.</div>
          </div>

          <div class="form-group" >
            <label >Upload your Resume:</label>
            <p style="opacity: .8">(pdf file only)</p>
            <input
              type="file"
              accept="application/pdf"
              @change="onSelectResumeFile($event)"
              :class="{ 'is-invalid': submitted && $v.form.resume_file.$error }"
            >
<!--              v-model.trim="form.resume_file"-->
            <div class="error_message" v-if="submitted && !$v.form.resume_file.required">This field is required.</div>
          </div>

<!--          <div class="form-group row">-->
<!--              <label for="robot" class="col-sm-12 col-form-label"></label>-->
<!--              <div class="row justify-content-md-center" style="width: 100%;">-->
<!--                <div class="col-sm-12 col-md-6">-->
<!--                  <vue-recaptcha ref="recaptcha" sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">-->
<!--                  </vue-recaptcha>-->
<!--                </div>-->
<!--              </div>-->
<!--          </div>-->


          <b-button type="submit" @click="showAlert"   class="submit_button">Submit</b-button>
          <!--            <b-button type="reset" variant="danger">Reset</b-button>-->
        </form>
      </div>

    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength, email, numeric, between  } from 'vuelidate/lib/validators'
import Datepicker from 'vuejs-datepicker';
  import VueRecaptcha from 'vue-recaptcha';

  import axios from "axios";
    export default {
      name: "Form",
      components: {'vue-recaptcha': VueRecaptcha, Datepicker},
      data() {
        return {
          form: {
            name: '',
            dob: '',
            contact: '',
            email: '',
            address: '',
            district: '',
            years_of_experience: '',
            resume_file: '',
            last_completed_degree: '',
            checked: [],
            message: '',
          },
          show: true,
          dismissSecs: 5,
          dismissCountDown: 0,
          showDismissibleAlert: false,
          selected: null,
          submitted: false,
        options: [
            { value: null, text: 'Please select an option' },
            { value:'Bandarban', text:'Bandarban' },
            { value:'Barguna', text: 'Barguna' },
            { value:'Barisal', text: 'Barisal' },
            { value:'Bhola', text: 'Bhola' },
            { value:'Bogra', text: 'Bogra' },
            { value:'Brahmanbaria', text: 'Brahmanbaria' },
            { value:'Bagerhat', text: 'Bagerhat' },
            { value:'Chandpur', text: 'Chandpur' },
            { value:'Chittagong', text: 'Chittagong' },
            { value:'Chuadanga', text: 'Chuadanga' },
            { value:'Comilla', text: 'Comilla' },
            { value:'Cox', text: 'Cox' },
            { value:'Dhaka', text: 'Dhaka' },
            { value:'Dinajpur', text: 'Dinajpur' },
            { value:'Faridpur', text: 'Faridpur' },
            { value:'Feni', text: 'Feni' },
            { value:'Gaibandha', text: 'Gaibandha' },
            { value:'Gazipur', text: 'Gazipur' },
            { value:'Gopalganj', text: 'Gopalganj' },
            { value:'Habiganj', text: 'Habiganj' },
            { value:'Jaipurhat', text: 'Jaipurhat' },
            { value:'Jamalpur', text: 'Jamalpur' },
            { value:'Jessore', text: 'Jessore' },
            { value:'Jhalokati', text: 'Jhalokati' },
            { value:'Jhenaidah', text: 'Jhenaidah' },
            { value:'Khagrachari', text: 'Khagrachari' },
            { value:'Khulna', text: 'Khulna' },
            { value:'Kishoreganj', text: 'Kishoreganj' },
            { value:'Kurigram', text: 'Kurigram' },
            { value:'Kushtia', text: 'Kushtia' },
            { value:'Lakshmipur', text: 'Lakshmipur' },
            { value:'Lalmonirhat', text: 'Lalmonirhat' },
            { value:'Madaripur', text: 'Madaripur' },
            { value:'Magura', text: 'Magura' },
            { value:'Manikganj', text: 'Manikganj' },
            { value:'Maulvibazar', text: 'Maulvibazar' },
            { value:'Meherpur', text: 'Meherpur' },
            { value:'Munshiganj', text: 'Munshiganj' },
            { value:'Mymensingh', text: 'Mymensingh' },
            { value:'Naogaon', text: 'Naogaon' },
            { value:'Narail', text: 'Narail' },
            { value:'Narayanganj', text: 'Narayanganj' },
            { value:'Narsingdi', text: 'Narsingdi' },
            { value:'Natore', text: 'Natore' },
            { value:'Nawabganj', text: 'Nawabganj' },
            { value:'Netrokona', text: 'Netrokona' },
            { value:'Nilphamari', text: 'Nilphamari' },
            { value:'Noakhali', text: 'Noakhali' },
            { value:'Pabna', text: 'Pabna' },
            { value:'Panchagarh', text: 'Panchagarh' },
            { value:'Patuakhali', text: 'Patuakhali' },
            { value:'Pirojpur', text: 'Pirojpur' },
            { value:'Rajbari', text: 'Rajbari' },
            { value:'Rajshahi', text: 'Rajshahi' },
            { value:'Rangamati', text: 'Rangamati' },
            { value:'Rangpur', text: 'Rangpur' },
            { value:'Satkhira', text: 'Satkhira' },
            { value:'Shariatpur', text: 'Shariatpur' },
            { value:'Sherpur', text: 'Sherpur' },
            { value:'Sirajganj', text: 'Sirajganj' },
            { value:'Sunamganj', text: 'Sunamganj' },
            { value:'Sylhet', text: 'Sylhet' },
            { value:'Tangail', text: 'Tangail' },
            { value:'Thakurgaon', text: 'Thakurgaon' },
        ]
        }
      },

      validations: {
        form: {
          name: { required },
          contact: { required, minLength: minLength(11), maxLength: maxLength(11), numeric},
          email: { required, email},
          address: { required },
          district:{ required },
          resume_file: { required },
          last_completed_degree: { required },
        }
      },

      methods: {
        onSubmit(){
          this.submitted = true;
          this.$v.form.$touch();
          if (this.$v.form.$invalid) {
            this.submitStatus = 'ERROR';
          } else {
            console.log('pass');
            this.convertDate();
            const data = new FormData();
            data.append('name', this.form.name);
            data.append('dob', this.form.dob);
            data.append('contact', this.form.contact);
            data.append('email', this.form.email);
            data.append('address', this.form.address);
            data.append('district', this.form.district);
            data.append('experience', this.form.years_of_experience);
            data.append('last_completed_degree', this.form.last_completed_degree);
            data.append('resume_file', this.form.resume_file);
            console.log('pass 2');
            this.$store.dispatch("submitAppliedResumeForm", data)
              .then(response => {
                console.log(response);
                if(response.data.code == '422'){
                  this.$fire({
                    title: "The resume file type must be a pdf!",
                    type: "warning",
                    timer: 8000
                  }).then(r => {
                    console.log(r.value);
                    return true;
                  });
                }else{
                  this.$fire({
                    title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
                    type: "success",
                    timer: 8000
                  }).then(r => {
                    console.log(r.value);
                    return true;
                  });
                }


              })
              .catch(error => {
                console.log(error);
              });
          }

        },
        convertDate() {
          var date = new Date(this.form.dob),
            mnth = ("0" + (date.getMonth() + 1)).slice(-2),
            day = ("0" + date.getDate()).slice(-2);
          return this.form.dob =  [date.getFullYear(), mnth, day].join("-");
        },


        countDownChanged(dismissCountDown) {
          this.dismissCountDown = dismissCountDown
        },
        showAlert() {
          this.dismissCountDown = this.dismissSecs
        },

        onChangeDistrictName(event){
          this.form.district = event.target.value;
        },

        onSelectResumeFile(event){
          // this.form.resume_file = event.target.value;
          this.form.resume_file = event.target.files[0];
        }

      },
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

  .applyResumi {
    padding: 50px 30px;
  }
  @media screen and (max-width: 600px){
    .applyResumi {
      padding: 50px 0px;
    }
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
    color: #00a6b4;
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
  .custom-select {
    position: relative;
    padding: 7px;
}

</style>
