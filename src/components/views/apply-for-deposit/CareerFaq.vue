<template>
  <div class="container">

    <br>
    <h2 style="text-align: center; " class="h2Responsive textUpperCase commonSpace">
      FREQUENTLY ASKED QUESTIONS
    </h2>

    <div class="row" v-for=" (faq, index) in faqs " :key="index">
      <div class="col-md-12">
        <b-card class="row">
          <a  v-b-toggle="'collapse-' + index" block class="d-flex">
            <strong >{{ faq.question }}</strong>
            <!-- replace these with your preferred icons -->
            <strong v-if="isVisible" aria-hidden="true" class="ml-auto">-</strong>
            <strong v-else aria-hidden="true" class="ml-auto">+</strong>
          </a>
          <b-collapse :id="'collapse-' + index" >
            <div class="commonFont"  v-html="faq.answer"></div>
          </b-collapse>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
      name: "CareerFaq",

      data(){
        return{
          faqs: '',
          isVisible: false,
          shortcode: 'ApplyForJob',

        }
      },
      methods:{
        getFaq(){
          axios.get('get-career-faq', {
            params: {
              shortcode: this.shortcode
            }
          }).then((response) => {

            if(response.status == 200){
              this.faqs = response.data.details;
            }
          }).catch(error => console.log(error));
        }
      },
      created() {
        this.getFaq();
      },


    }
</script>

<style scoped>

  .job-card h4{
    color:#4D5154;
  }
  .applyButton{
    background-color: #d62e2f;
    color:#ffffff;
  }
  .shareButton{
    border:2px solid #d62e2f;
    color:#4D5154;
  }
  .shareButton:hover {
    color: #fff;
  }
  .shareButton:hover i{
    color: #fff;
  }
  .tabcontent2Button {

    padding: 2px 16px !important;
  }

  .tabcontent2Button{
    margin-right: 1px !important;
  }
  .tabcontent2Button:hover span i{
    color: #fff;
  }
  .tabcontent2Button:focus span i{
    color: #fff;
  }
  a{
    cursor: pointer;
  }
  .vacancies{
    font-size: 14px;
  }
  .ml-auto, .mx-auto {
    color: #BFBFBF !important;
  }
  .card-body{
    background-color: #F2F2F2;
    padding: 0;
  }
  .card-body .d-flex{
    padding: 20px;
  }
  .card-body .commonFont{
    padding: 15px !important;
  }
  .card-body a{
    font-size: 14px;
    color: #000 !important;
    text-decoration: none;
    padding: 2px 6px 9px 7px;
  }
  .card-body p{
    padding: 6px !important;
  }
  .card{
    margin-bottom: 15px !important;
  }
  .commonFont{
    background-color: #ffffff;
  }

  .filterOptions{
    margin-bottom: 20px;
  }
  .job-card{
    border: 1px solid #dadce0;
    border-radius: 3px;
    -webkit-box-shadow: none;
    box-shadow: none;
    margin-top: 10px;
    padding: 5px;
    background-color: #F2F2F2;
  }
  .list-group-item {
    border: none !important;
    font-size: 14px;
    opacity: .8;
    background-color: unset;
  }
  .fa, .fas {
    color: #D12728;
    font-size: 14px;
    padding: 2px;
  }
  .qualifications{
    font-size: 14px;
    margin-top: 15px;
    margin-bottom: 15px;
    padding: 0 20px;
  }
  .qualifications ul li{
    list-style-type: circle;
  }
  .job-card-header-top{
    margin-top: 15px;
    padding: 0 20px;

  }
  .job-card-header{
    margin-top: 5px;
    padding-bottom: 5px;
  }
  .job-card-content{
    padding-top: 5px;
  }
  .job-card h5{

    padding: 0 20px;
  }
  .job-card:hover {
    border-color: transparent;
    -webkit-box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  }
  @media only screen and (max-width: 770px) {
    .mpadding{
      padding-bottom: 30px;
    }

    .job-card-header{
      text-align: center;
    }
    .job-card-header h4{
      font-size: 1.25rem;
      padding-bottom: 20px;
    }
    .job-card-header .list-group-item{
      text-align: center;
      margin: auto;
      padding: 20px;
    }

  }
</style>
