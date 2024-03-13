<template>
  <div class="text-center" style="padding: 50px 30px">
    <h2 class="text-uppercase" style="font-size: 2rem; color: #ffff;">Apply for Deposit</h2>
    <div class="container ">
      <div class="col-md-8 offset-md-2 contact_form_details" >
        <!--        <div class="message_image">-->
        <!--          <img src="../../../assets/img/message.png" alt="">-->
        <!--        </div>-->

        <b-form @submit.prevent="onSubmit"  v-if="show" class="apply-for-depositp-submit">
          <b-form-group id="input-group-2" label="Your Name:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.name"
              required
              placeholder="Enter name"
            ></b-form-input>
          </b-form-group>



          <b-form-group id="input-group-2" label="Contact Number:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.contact"
              required
              placeholder="Contact Number"
              type="number"
            ></b-form-input>
          </b-form-group>


          <b-form-group
            id="input-group-1"
            label="Email address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.email"
              type="email"
              required
              placeholder="Enter email"
            ></b-form-input>
          </b-form-group>

          <b-form-group
            id="input-group-1"
            label="Address:"
            label-for="input-1"
          >
            <b-form-input
              id="input-1"
              v-model="form.address"
              type="text"
              required
              placeholder="Enter Address"
            ></b-form-input>
          </b-form-group>

<!--          <b-form-group-->
<!--            label="Select Your Nearest Branch:"-->
<!--            label-for="input-1"-->

<!--          >-->
<!--              <b-form-select-->
<!--                v-model="form.branchName"-->
<!--                :options="options"-->
<!--                required-->
<!--              >-->
<!--                <option v-for="(item, index) in branches"-->
<!--                        :key="index"-->
<!--                        :value="item.name" >-->
<!--                  {{ item.name }}-->
<!--                </option>-->
<!--              </b-form-select>-->
<!--          </b-form-group>-->

          <div class="form-group">
            <label for="branchName">Select Your Nearest Branch:</label>
            <select
              type="text"
              class="form-control"
              v-model="form.branchName"
              data-placement="right"
              @change="onChangeBranchName($event)"
            >
              <option value="" disabled > Select One</option>

              <option :value="item.name" v-for="item in branches">{{ item.name}}</option>
              <option value="Service-holder" >Service holder </option>
            </select>
          </div>



          <b-form-group  label="Deposit Amount:" label-for="input-2">
            <b-form-input
              id="input-2"
              v-model="form.amount"
              required
              placeholder="Enter Deposit Amount"
              type="number"
            ></b-form-input>
          </b-form-group>



          <div class="form-group row">
            <label for="robot" class="col-sm-12 col-form-label"></label>
            <div class="row justify-content-md-center" style="width: 100%;">
              <div class="col-sm-12 col-md-6">
                <vue-recaptcha ref="recaptcha"
                               @verify="onVerify" sitekey="6LfPaBAaAAAAAG-lvB-YGQLc0N5475S_k-fLJiMi">
                </vue-recaptcha>
              </div>
            </div>
          </div>
          <pre class="mt-3 mb-0">{{ text }}</pre>

          <button type="submit" @click="showAlert"   class="submit_button apply-for-depositp-submit">Submit</button>
          <!--            <b-button type="reset" variant="danger">Reset</b-button>-->
        </b-form>
      </div>

    </div>
  </div>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  import axios from "axios";
  export default {
    name: "Form",
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
          branchName: null,
        },
        show: true,
        dismissSecs: 5,
        dismissCountDown: 0,
        alert: false,
        selected: null,
        branches: [],
      }
    },
    components: {'vue-recaptcha': VueRecaptcha},
    methods: {
      onSubmit() {
        const data = new FormData();
        data.append('name', this.form.name);
        data.append('contact', this.form.contact);
        data.append('email', this.form.email);
        data.append('address', this.form.address);
        data.append('branchName', this.form.branchName);
        this.$store.dispatch("submitDepositForm", data)
          .then(response => {
            console.log(response);
            this.$fire({
              title: "Thank you for your submission! Our representative will get in touch with you within 2 working days.",
              type: "success",
              timer: 5000
            }).then(r => {
              console.log(r.value);
              return true;
            });
          })
          .catch(error => {
            console.log(error);
          });

      },

      getBranches( ) {
        axios.get('get-branch', {
          params: {
            sortby: 'name'
          }
        })
          .then((response) => {
            if(response.status == 200){
              this.branches = response.data.details;
            }else{
              alert("Server returned " + response.code + " : " + response.user_message)
            }
          })
          .catch(error =>  console.log(error));
      },

      onChangeBranchName(event){
        this.form.branchName = event.target.value;
      },

    },
    created() {
      this.getBranches();
    }
  }
</script>

<style scoped>
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
