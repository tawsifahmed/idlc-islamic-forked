<template>
    <section>

      <div class="productFeatures">
          <div class="categoryDetails"   id="categoryFeature1">
              <div class="container-lg">

              </div>
              <br>
                <div class="container-lg">
                    <div class="tab">
                        <button  class="tablinks1 active  home-loan-button"   @click="keyFeatureTabOpen( 'home_lone',$event)" id="HomeLoan">
                            <img class="home-loan-button" src="../../../assets/img/menu_icon/Menubar/Home-Loan.png" alt="">
                            <h5 class="home-loan-button">Home Loan</h5>
                        </button>
                        <button  class="tablinks1 car-loan-button"  @click="keyFeatureTabOpen( 'car_loan',$event)" id="CarLoan">
                            <img class="car-loan-button" src="../../../assets/img/menu_icon/Menubar/Car-Loan.png" alt="">
                            <h5 class="car-loan-button">Car Loan</h5>
                        </button>
                        <button class="tablinks1 sme-loan-button" @click="keyFeatureTabOpen( 'sme_loan',$event)" id="SmeLoan">
                            <img class="sme-loan-button" src="../../../assets/img/menu_icon/Menubar/SME-loan.png" alt="">
                            <h5 class="sme-loan-button">SME Loan</h5>
                        </button>
                      <button class="tablinks1 personal-loan-button"  @click="keyFeatureTabOpen( 'personal_loan',$event)" id="PersonalLoan">

                          <img class="personal-loan-button" src="../../../assets/img/menu_icon/Menubar/Personal-loan.png" alt="">
                          <h5 class="personal-loan-button">Personal Loan</h5>

                      </button>

                    </div>

                    <div id="home_lone" class="tabcontent1"   >
                        <div class="container">
                            <div class="row">
                                <div class="col-md-12" style="padding-bottom: 20px;">
                                  <app-home-eligibility-form/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="car_loan" class="tabcontent1" >
                      <div class="container">
                            <div class="row">
                                <div class="col-md-12" style="padding-bottom: 20px;">
                                  <app-car-eligibility/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="sme_loan"  class="tabcontent1"  >
                      <div class="container">
                            <div class="row">
                                <div class="col-md-12" style="padding-bottom: 20px;">
                               <app-sme-eligibility-form/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="personal_loan" class="tabcontent1" style="display: block;" >
                      <div class="container">
                            <div class="row">
                                <div class="col-md-12" style="padding-bottom: 20px;">
                                <app-personal-loan/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </section>
</template>
<script>
   export default {
        name: "ProductTab",
        components: {
            // AppStepFormValidation: () => import('./StepFormValidation'),
            AppHomeLoan: () => import('./HomeLoan'),
            AppHomeEligibilityForm: () => import('./HomeEligibilityForm'),
            AppCarEligibility: () => import('./CarEligibility'),
            // AppCarLoan: () => import('./CarLoan'),
            // AppSmeLoan: () => import('./SmeLoan'),
            AppSmeEligibilityForm: () => import('./SmeEligibilityForm'),
            AppPersonalLoan: () => import('./PersonalLoan')
        },
        methods: {
            keyFeatureTabOpen: function(cityName,event) {
                var i, tabcontent, tablinks;

                tabcontent = document.getElementsByClassName("tabcontent1");
                for (i = 0; i < tabcontent.length; i++) {
                    tabcontent[i].style.display = "none";
                }
                tablinks = document.getElementsByClassName("tablinks1");
                for (i = 0; i < tablinks.length; i++) {
                    tablinks[i].className = tablinks[i].className.replace(" active", "");
                }
                document.getElementById(cityName).style.display = "block";
                var newElement = document.getElementById(cityName);
                event.target.className += " active";

            }
        },
        mounted() {
          if (this.$route.params.applyFor == "HomeLoan"){
            $("#HomeLoan").trigger( "click" );
          }else if(this.$route.params.applyFor == "CarLoan"){
            $("#CarLoan").trigger( "click" );
          }else if(this.$route.params.applyFor == "SmeLoan"){
            $("#SmeLoan").trigger( "click" );
          }else if(this.$route.params.applyFor == "PersonalLoan"){
            $("#PersonalLoan").trigger( "click" );
          }else{
            $("#HomeLoan").trigger( "click" );
          }
        },

    }
</script>
<style lang="" scoped>

  /*.hideContent{*/
  /*  display: none;*/
  /*}*/
  /*.showContent{*/
  /*  display: block;*/
  /*}*/

  .productFeatures .tab .tablinks1{
    border-right: unset !important;
    height: 180px;
    margin-right: 35px;
    margin-left: 35px;
    align-items: center;
    color: #000000 !important;
    background-color: #F2F2F2 !important;
    position: relative;
  }
  .productFeatures .tab .tablinks1 img,
  .productFeatures .tab .tablinks1 h5{
    z-index: -1;
  }

  .productFeatures .tab .tablinks1 img{
    width: 35%;

  }

  .faq-item{
    background: #F2F2F2;
    border-radius: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
    text-align: center;
  }
  .faq-item img{
    padding-top: 40px;
  }
  .faq-item h5{
    padding: 20px 0px 30px 0px;
  }
  a{
    cursor: pointer;
  }
  .product-card.card-body{
    background-color: #F2F2F2 !important;
  }
  .card-body a{
    font-size: 14px;
    color: #000 !important;
    text-decoration: none;
    padding: 2px 6px 9px 7px;
  }
  .card-body p{
    padding: 13px 0px 12px 14px !important;
  }
  .card{
    margin-bottom: 15px !important;
  }
  .product-card {
    background-color: #F2F2F2 !important;

  }
  .product-card .card-body{
    padding: 0.25rem !important;

  }
  .question_product{
    color: #000000 !important;

  }
  .ml-auto, .mx-auto {
    color: #BFBFBF !important;
  }
  .question-card p{
    background-color: #ffffff !important;
    color: #000000 !important;
  }
  .question-card .card-body{
    background-color: #ffffff !important;
  }
  .question-card{
    background-color: #ffffff !important;
  }
    .categoryBody .mcategory .reason {
        flex-basis: 23%;
      background-color: #DCDCDC !important;
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
    .categoryBody .mcategory .owl-buttons{
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
    .container-lg .tab {
        border: unset !important;
    }

    .categoryDetails .tabcontent1 {
        border: none;
    }
    @media screen and (max-width: 600px){
        .categories {
            display: none;
        }
        .mcategory {
            display: block;
        }
      .tab .tablinks1 {
        margin-bottom: 5px;
      }
    }

    /* News CSS  */
    .news_box_gutter {
  padding: 0 10px;
}
@media screen and (max-width: 600px){
  .news_box_gutter {
  padding: 0 0px;
  margin-bottom: 2px;
}
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
#home_lone {
    display: block;
}
  .font-light{
    font-size: 14px;
  }
 .tab button.active,
 .tab button:focus {
   background-color: #F2F2F2 !important;
      color: #000000 !important;
   border-bottom: 4px solid #00a6b4 !important;
    }
.tab .tablinks1 {
  align-items: center;
  color: #000000 !important;
  background-color: #F2F2F2 !important;
  margin-right: 14px;
    }
  .tab{
    background-color: unset !important;
  }

    .box_items{
      margin-top: 25px;
      margin-bottom: 25px;
      padding: 20px;
      box-shadow: 2px 4px 8px #ddd;
    }

    .box_items:hover{
      margin-top: 25px;
      margin-bottom: 25px;
      padding: 20px;
      box-shadow: 4px 8px 16px #ddd;
    }
/* report CSS  */
.card-single {
  background: #F2F2F2;
  height: 220px;
  width: 80%;
  margin-bottom: 40px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  margin-bottom: 100px;
}
.title-report {
  padding-top: 15px;
}
.single-report-img {
  height: 80px;
  width: 80px;
  background-color: #fff;
  border-radius: 50%;
  text-align: center;
  padding: 25px 15px 22px 12px;
  margin: 0 auto;
}
.single-report-img img{
  height: 100%;
}
.report-name {
  text-transform: uppercase;
  font-size: 17px;
  color: rgb(59, 58, 58);
  text-align: center;
}
.download-report-btn {
  background: #00a6b4;
  color: #fff;
  font-size: 12px;
  padding: 5px;
  margin-top: 0;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
}
.download-report-btn a {
  padding: 5px;
}
.download-report-btn img {
  height: 20px;
  filter:grayscale(100%) invert(100%);
}

.card-body .card-single a {
  color: #fff !important;
}
.card {
  border: none;
}
@media screen and (max-width: 600px){
    .card-single {
    background: #F2F2F2;
    height: 220px;
    width: 100%;
    margin-bottom: 40px;
    border-radius: 5px;
  }
  .card {
    border: none;
  }
  .card-single {
    margin-bottom: 60px;
  }
  .productFeatures .tabcontent1 {
    padding: 0px;
  }
  .productFeatures .tab .tablinks1:nth-child(1), .productFeatures .tab .tablinks1:nth-child(3) {
    border-right: 1px solid transparent;
  }
  .productFeatures .tab .tablinks1:nth-child(1), .productFeatures .tab .tablinks1:nth-child(2) {
    border-bottom: 1px solid transparent;
  }


}
</style>
