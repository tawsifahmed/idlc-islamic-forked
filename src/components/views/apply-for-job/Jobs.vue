<template>
<div class="container">
  <div class="commonSpace">
  </div>


  <div class="row mb-3 job-card" v-for="item in contentData" :key="item.id" v-if="contentData">
    <div class="col-md-12 job-card-header">
      <div class="row job-card-header-top">
        <div class="col-md-8 col-sm-12">
          <div class="row">
            <h4>{{ item.title}}</h4>
          </div>
          <div class="row">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item"> <span class="icon-h-square"></span> IDLC</li>
                <li class="list-group-item"> <span class="icon-clipboard"></span> {{ item.department_name}}</li>
              </ul>
          </div>
        </div>
        <div class="col-md-4 col-sm-12 pull-right text-right  ">
          <b-button v-b-toggle="'id_'+item.id" class="m-1 tabcontent2Button expand text-right"  @click.prevent="closeSelectedItem()">  <span class="icon-plus"></span></b-button>
          <a :href="item.apply_link" target="_blank"> <button class="tabcontent2Button text-right ">Apply</button> </a>
        </div>

      </div>


    </div>
    <b-collapse :id="'id_'+item.id"    :class="paramsId == item.id ? 'showContent' : '' ">
      <b-card>
        <h5>Qualifications:</h5>
        <div class="qualifications">
            <div v-html="item.long_desc"></div>
        </div>

      </b-card>
    </b-collapse>
  </div>



  <div class="row mb-3 job-card"  v-if="contentData == ''" >
    <div class="col-md-12 job-card-header">
      <div class="row ">
        <div class="col-sm-12">
          <div class="row text-center">
            <h4 style="margin: auto; ">No Vacancy available.</h4>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="upCVandLNButtons">
    <div class="upCVandLNButton upCV">
      <div class="iconAndButton">
        <div class="icon">
          <img src="~@/assets/img/career/01.png" alt="">
        </div>
        <router-link to="/applied-career" class="upCVandINbtn upload-cv">Upload CV</router-link>
      </div>
      <div class="text">
        <h5>Upload Your CV</h5>
        <p>
          Click on the button to upload your CV and our HR will be in touch with you
        </p>
      </div>
    </div>
    <div class="upCVandLNButton linkedIn">
      <div class="iconAndButton">
        <div class="icon">
          <img src="~@/assets/img/career/02.png" alt="">
        </div>
        <a href="https://www.linkedin.com/company/idlc-finance-limited" class="upCVandINbtn idlc-at-linkedin" target="_blank">IDLC at LinkedIn</a>
      </div>
      <div class="text">
        <h5>Follow us on LinkedIn</h5>
        <p>
          Stay connected with us and our latest news by connecting with us on LinkedIn
        </p>
      </div>
    </div>
  </div>
</div>

</template>


<script>
  import axios from "axios";

  export default {
    name: 'Apply-For-Jobs',
    data() {
      return {
        message: '',
        dept_id: '',
        contentData: [],
        departments: [],
        locations: [],
        search: '',
        location_id: '',
        department_id: '',
        selectedFile: '',
        uploadPercentage: 0,
        paramsId: 0,
      }
    },

    methods: {
      getJobsContent(){
        this.message = "";
        axios.get('get-career').then((response) => {
          if(response.status == 200){
            console.log(response.data.details);
            this.contentData = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      getDepartment(){
        axios.get('get-department').then((response) => {
          if(response.status == 200){
            this.departments = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      getLocations(){
        axios.get('get-district').then((response) => {
          if(response.status == 200){
            this.locations = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      searchByDepartment(){
        this.message = "";
        axios.get('get-career', {
            params: {
              type: 'search',
              dept_id: this.department_id,
              search: this.search,
              location_id: this.location_id,
            }
          }
        ).then((response) => {
          if(response.status == 200){
            if (response.data.details == ""){
              this.contentData = [];
              this.message = "There is vacancy in this department!";
            }else{
              this.contentData = response.data.details;
            }
          }
        }).catch(error => console.log(error));
      },

      onFileChanged(event){
         this.selected_file = event.target.files[0];
        // this.file = this.$refs.cv_files;
        console.log(files);

      },

      onUpload() {
        const formData = new FormData();
        formData.append('myFile', this.selectedFile, this.selectedFile.name)
        this.$store.dispatch("submitContactForm", formData)
          .then(response => {
            console.log(response);
            this.showDismissibleAlert = true
          })
          .catch(error => {
            console.log(error);
          });

      },

      closeSelectedItem(){
        $(".showContent").removeClass("showContent");
        this.paramsId = 0;
      }



    },
    computed: {
      computed_items (){
        let department = this.selectedType;
        return this.items.filter(function(item){
          let filtered = true
          if(filterType && filterType.length > 0){
            filtered = item.type == filterType
          }
          return filtered
        })
      }
    },
    created() {
      this.getJobsContent();
      this.getDepartment();
      this.getLocations();
      if (this.$route.params.id){
        this.paramsId = this.$route.params.id ;
      }
    },

  }

</script>
<style scoped>

  .showContent{
    display: block!important;
  }
  .hideContent{
    display: none;
  }
  .uCVButtons {
    width: 100%; display: flex; margin-top: 50px; align-items: center; justify-content: space-between;
  }
  .uCVButtons a{
    flex-basis: 48%;
    color: #fff;
    background-color: #d62e2f;
    font-size: 1.25rem;
    padding: 10px;
    transition: all .3s;
  }
  .uCVButtons a:hover{
    background-color: #333;
    text-decoration: none;
  }
  .uCVButtons a i{
    font-size: 1.25rem;
  }
  @media screen and (max-width: 600px){
    .uCVButtons {
      flex-direction: column;
    }
    .uCVButtons a{
      width: 100%;
    }
    .uCVButtons a:first-child{
      margin-bottom: 20px;
    }
  }
  .upload-btn-wrapper {
    position: relative;
    overflow: hidden;
  }


  .upload-btn-wrapper input[type=file] {
    font-size: 100px;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0;

  }

  .job-card-header-top .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem  1.25rem  0.75rem 0rem;
    border: 1px solid rgba(0, 0, 0, 0.125);

  }
  .job-card .card-body {
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem 0rem;
    background-color: #ffffff;
    border-radius: 4px;
    box-shadow: 1px 2px 4px #dddddd;
  }

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
        vertical-align: unset;
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
    color: inherit;
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

