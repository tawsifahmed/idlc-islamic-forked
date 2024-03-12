<template>
    <section>
      <div class="productFeatures">
          <div class="categoryDetails"   id="categoryFeature1">
              <div class="container-lg">

              </div>
              <br>
                <div class="container-lg">
                    <div class="tab">
                      <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:false}}">
                        <div class="slideTabItem">
                          <button class="tablinks1 active" @click="keyFeatureTabOpen( 'home_lone',$event)" id="defaultOpen1">
                              <img src="../../../assets/img/menu_icon/Menubar/Home-Loan.png" alt="">
                              <h5>Home Loan</h5>
                          </button>
                        </div>
                        <div class="slideTabItem">
                          <button class="tablinks1" @click="keyFeatureTabOpen( 'car_loan',$event)">
                              <img src="../../../assets/img/Car-Loan.png" style="margin-bottom: 5px;" alt="">
                              <h5>Car Loan</h5>
                          </button>
                        </div>
                        <div class="slideTabItem">
                          <button class="tablinks1" @click="keyFeatureTabOpen( 'sme_loan',$event)">
                              <img src="../../../assets/img/menu_icon/Menubar/SME-loan.png" alt="">
                              <h5>Sme Loan</h5>
                          </button>
                        </div>
                        <div class="slideTabItem">
                          <button class="tablinks1" @click="keyFeatureTabOpen( 'personal_loan',$event)">
                              <img src="../../../assets/img/menu_icon/Menubar/Personal-loan.png" alt="">
                              <h5>Personal Loan</h5>
                          </button>
                        </div>
                        <div class="slideTabItem">
                          <button class="tablinks1 active" @click="keyFeatureTabOpen( 'home_lone',$event)" >
                              <img src="../../../assets/img/menu_icon/Menubar/Home-Loan.png" alt="">
                              <h5>Home Loan</h5>
                          </button>
                        </div>
                      </carousel>

                    </div>

                    <div id="home_lone" class="tabcontent1 active">
                      <b-card  class="">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>

                      </b-card>
                    </div>
                    <div id="car_loan" class="tabcontent1 ">
                      <b-card  class="">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </div>
                    <div id="sme_loan" class="tabcontent1 ">
                      <b-card  class="">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </div>
                    <div id="personal_loan" class="tabcontent1 ">
                      <b-card  class="">
                        <div class="container">
                          <div class="row">
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                            <div class="col-md-3">
                              <div class="reportCard_22">
                                <a href="#">
                                  <div class="image">
                                    <img src="./../../../assets/img/report/Financial-Report_Image.jpg" alt="">
                                  </div>
                                  <div class="downloadIcon">
                                    <div class="icon"></div>
                                  </div>
                                  <div class="text">
                                    <p>Sample Image Title</p>
                                  </div>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </b-card>
                    </div>
                </div>
            </div>
      </div>
      <app-footer />
    </section>
</template>
<script>
   export default {
        name: "BrochureTab",
     data() {
       return {
         isVisible: false,
       }
     },
     components: {
       AppFooter: () => import('../../incudes/Footer'),
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
        created() {

        },

    }
</script>
<style lang="" scoped>
  .slideTabItem {
    width: 100%;
    display: block;
    padding: 20px;
  }
  .slideTabItem .tablinks1{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .productFeatures .tab .tablinks1{
    border-right: unset !important;
    height: 180px;
    /* margin-right: 35px;
    margin-left: 35px; */
    align-items: center;
    color: #000000 !important;
    background-color: #F2F2F2 !important;
    /* display: block; */
  }



  .productFeatures .tab{
    background-color: #ffffff;
    overflow: hidden;
    width: 82%;
    margin: 0 auto;
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
        background: rgba(214, 46, 47, 1);
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
 .tab button.active {
   background-color: #F2F2F2 !important;
      color: #000000 !important;
   border-bottom: 4px solid #d62e2f !important;
    }
 .tab button:focus {
   background-color: #F2F2F2 !important;
      color: #000000 !important;
   border-bottom: 4px solid #d62e2f !important;
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




.card {
  border: none;
}

</style>
