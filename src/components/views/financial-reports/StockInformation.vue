<template>
<div class="container">
  <div class="  homePageTitleDetails sectionTitle">
      <h2 style="text-align: center; text-transform: uppercase;" class="h2Responsive ">
        AT A GLANCE
      </h2>
      <br>
    <div v-if="glanceContentData.length > 0">
      <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:true}}">

        <div class="atAGlanceItem text-center" v-for="(glanceContentItem, index) in glanceContentData" :key="index">
          <img :src="glanceContentItem.image" alt="">
          <h2 class="amount">{{glanceContentItem.title}}</h2>
          <p>{{glanceContentItem.description}}</p>
        </div>


      </carousel>


    </div>

    </div>
    <br>
  <section class="quickLinks">

    <div class="">
      <div class="container">
        <div class="row justify-content-md-center">
          <div class="col-md-12 ">

          <div class="quickLinkBox quicklinkBox_4">
               <div id="" class="" data-sf-element="Container"
                   data-placeholder-label="col-md-12 col-sm-12"><h4 style="font-size: 1.25rem; text-align: center;">Latest Stock Price</h4>


                <div id="formFundsOfFunds" class="fundsOfFunds ng-scope cardslider cardslider--direction-right"
                     ng-controller="CommonFundController" style="height: 218px;margin-top: 15px; ">
                  <ul class="cardslider__cards">
                    <li class="cardslider__card cardslider__card--transitions false cardslider__card--index-0"
                        aria-hidden="false" style="z-index: 4;">
                      <div class="fundCard hoverStyle insideCardBox">
                        <div class="cardTop" style="z-index:11">
                          <div class="starhot"></div>
                          <div class="toolTipHover toolTipDown cardTopInfo">
                            <a href="#" class="infoTootip icon-info"></a>
                            <div class="tooltip">
                              <div class="tooltip-inner">
                                <p title="">An open ended equity scheme predominantly investing in large cap stocks.</p>
                              </div>
                            </div>
                          </div>

                          <!-- <div class="subTitle">Category A Company</div> -->
                            <h2 class="text-center">
                              <a href="/our-funds/equity-funds/bluechip-fund" id="SchemeOptionName">IDLC Finance PLC</a>
                            </h2>


                          <div class="row">

                            <div class="col-md-6 col-xs-5">

                              <div class="cartfundType fundTitle ng-binding" id="FundName_1191" value="EQUITY FUNDS">


                              </div>
                            </div>

                          </div>
                        </div>


                        <div class="cardMiddle">
                          <div class="row">
                            <div class="cardBox cagr eliptext">
                              <div class="title">
                                <span class="Name">Latest Stock  Price <br> (Today)</span>
                              </div>

                              <div id="CAGRValue" class="amount arrow ">
                                {{rates.todayPriceRate}}
                              </div>
                            </div>
                            <div class="cardBox cagr eliptext">
                              <div class="title">
                                <span class="Name">Yesterday's Stock <br> Price</span>
                              </div>

                              <div id="CAGRValue1" class="amount arrow ">
                                {{rates.yesterdaypriceRate}}
                              </div>
                            </div>
                            <div class="cardBox cagr eliptext">
                              <div class="title">
                                <span class="Name">Percentage<br> Charge</span>

                              </div>
                                <!-- <br class="displayNone"> -->
                              <div id="CAGRValue2" class="amount arrow ">
                                {{rates.percentage}}%
                              </div>
                            </div>

                          </div>



                        </div>
                        <!-- <router-link to="/financial-reports" class="cardBottom btn btn-danger">
                         Download Latest Financial Report
                        </router-link> -->
                      </div>
                    </li>
                  </ul>

                </div>


              </div>
          </div>
          </div>

        </div>

      </div>
    </div>
    <br>
    <!--Product Slider Part End-->
  </section>


</div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "StockInformation.vue",
        data() {
          return {
            prev: "<span class='icon-chevron-left'></span>",
            next: "<span class='icon-chevron-right'></span>",
            glanceContentData:"",
            priceContentData:"",
            rates: "",
          }
        },
      methods: {
        getGlanceData(){
          axios.get('financial-glance').then((response) => {
            if(response.status == 200){
              this.glanceContentData = response.data.details;
            }
          }).catch(error => console.log(error));
        },
        getPriceContentData(){
          axios.get('financial-price-rate').then((response) => {
            if(response.status == 200){
              this.rates = response.data.details;
              console.log( this.rates);
            }
          }).catch(error => console.log(error));
        },

      },
      created() {
        this.getGlanceData();
        this.getPriceContentData();
      },
    }
</script>

<style scoped>
  .Stock_Information p{
    font-size: 14px;
    padding: 20px;
  }

  .Stock_Information{
    background-color: #f2f2f2;
    margin-bottom: 20px;
    margin-top: 10px;
  }
  .atAGlanceItem  {
    padding: 20px;
  }
  .atAGlanceItem p {
    padding: 0;
  }
      .quickLinks {
        margin-bottom: 20px;
    }
    .quickLinks .shortDescription {
        font-size: 14px;
        margin: 15px 0 20px 0;
    }
    .quickLinkBox {
        margin: 0px;
    }
    .quickLinkBox .blockHeading{
        text-align: center;
    }
    .quickLinkBox .blockHeading h4{
        font-size: 1.25rem;
    }

    .quickLinks_career_box{
        border: 1px solid #ffe4e4;
        border-radius: 1rem;
        padding: 20px 10px 20px 10px;
        -webkit-transition: all 0.2s ease-out;
        transition: all 0.2s ease-out;
        display: block;
        background: #f9f9f9;
        color: #000;
        clear: both;
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-top: 15px;
        height: 270px;
        overflow: hidden;
    }
    .quickLinks_career_box:hover{
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.10);
        background: #fff;
        text-decoration: none;
        cursor:default;
    }
    .quickLinks_career_box .headPart{
        display: flex;
        align-items: center;
        flex-direction: column;
        text-align: center;
        margin-bottom: 15px;;
    }
    .quickLinks_career_box .headPart .icon{
        width: 80px;
        height: 80px;
        margin-bottom: 10px;
    }
    .quickLinks_career_box .heighlightedText{
        font-weight: bold;
        transition: all 0.4s;
    }
    .quickLinks_career_box:hover .heighlightedText{
        color: #00a6b4;
    }
    .quickLinks_career_box .headPart .icon img{
        width: 100%;
        margin-bottom: 10px;
        transition: all 0.4s;
    }
    .quickLinks_career_box:hover .headPart .icon img{
        filter: invert(6%) sepia(100%) saturate(9999%);
    }
    .quickLinks_career_box .headPart .icon img{
        width: 100%;
    }
    .quickLinks_career_box .headPart .image{
      width: 100%;
      height: 143px;
      overflow: hidden;
      position: relative;
    }
    .quickLinks_career_box .headPart .image .bluryImage{
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url("~@/assets/img/mbr_01.png");
        filter: blur(8px);
      -webkit-filter: blur(8px);
    }
    .quickLinks_career_box .headPart .image img{
      transition: all 0.3s;
      height: 100%;
      width: auto;
       filter: blur(0px);
      -webkit-filter: blur(0px);
    }

    .quickLinks_career_box .headPart .Text p{
        font-size: 14px;
        color: #000;
        transition: all 0.3s;
    }
    .quickLinks_career_box .headPart .Text a:hover p{
        font-size: 14px;
        color: #00a6b4;
        text-decoration: none;
    }
    .quickLinks_career_box:hover .headPart .Text a{
        text-decoration: none;
    }
    .quickLinks_career_box .jobs {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    .quickLinks_career_box .jobs a {
        color: #333;
        transition: all 0.3s;
        margin-bottom: 15px;
        display: block;
        text-align: center;
        flex-basis: 50%;
        padding: 0 5px;
    }
    .quickLinks_career_box .jobs a:not(:last-child) {
        border-right: 1px solid #333;
    }
    .quickLinks_career_box .jobs a h6{
        font-size: 14px
    }
    .quickLinks_career_box .jobs a:hover{
        color: #00a6b4;
        text-decoration: none;
    }
    .quickLinks_career_box.review {
    padding: 0px;
  }
@media screen and (max-width: 600px){
  .quickLinkBox {
    margin-bottom: 20px;

  }
  .quickLinks_career_box {
    height: auto;
  }
  .quickLinks_career_box.review {
    padding-bottom: 20px;
  }
  .displayNone {
    display: none;
  }
}
.fundCard {
  overflow: hidden;
  border-radius: 1rem;
  border: solid 1px #ffe4e4;
  /* margin-bottom: 3rem; */
}

.fundCard .cardTop {
    padding: 1rem 1rem 0rem 1rem;
    background-color: #f0f8ff;
    position: relative;
}

.fundCard .cardMiddle {
  padding: 2rem .5rem 1rem .5rem;
}
.fundCard .cardBottom {
  padding: 1rem 2rem;
  border-top: solid 1px #dcdcdc;
  font-size: 14px;
}
.fundCard .cardTop .cart {
  display: inline-block;
  font-size: 2.6rem;
  line-height: 2.6rem;
  color: #00a6b4;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in;
  -moz-transition: all 0.2s ease-in;
  -ms-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

.fundCard .cardTop .toolTipHover .nextButton {
  display: inline-block;
  position: relative;
  font-size: 14px;
  outline: 0;
  cursor: pointer;
  background: #fff;
  padding: 4px 10px;
  border: 2px solid #00a6b4;
  border-radius: 30px;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  color: #00a6b4;
}
.cardTop h2 {
  padding-bottom: 1.25rem;
}
.cardTop h2 a {
  font-size: 1.25rem;
  color: #000000;
}
.cardTop h2 a:hover {
  text-decoration: none;
}

.cardTop h2 a:before {
  font-size: 1.3rem;
  color: #ffffff !important;
  z-index: 9;
}


.fundCard .cardMiddle {
  /* padding: 3rem 2rem 3rem 2rem; */
  background: #f9f9f9;
  transition: all 0.3s;
}
.fundCard:hover .cardMiddle {
  background: #fff;
}

.fundCard.insideCardBox .cardMiddle .cardBox {
  border: none;
  float: left;
  width: 50%;
  padding: 0 0 0 1.5rem;
}

.fundCard.insideCardBox .cardMiddle .cardBox {
  border: none;
  float: left;
  width: 33%;
  padding: 0 0 0 .25rem;
  text-align: center;
}
.cardBox .amount.arrow {
  position: relative;
}
.fundCard.insideCardBox .cardMiddle .cardBox .descrpi {
  font-size: 0.9rem;
  color: #5e6977;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.title .Name {
  font-size: 12px;
}

.fundCard.insideCardBox .cardMiddle .cardBox .amount {
  font-size: 1.25rem;
}

.fundCard.insideCardBox .suitableFor {
  color: #000;
  margin-bottom: 0.5rem;
  /* min-height: 8.6rem; */
}

.fundCard .cardTop:before {
  content: "";
  position: absolute;
  background: #00a6b4;
  -webkit-transition: all 0.3s ease-in;
  -moz-transition: all 0.3s ease-in;
  -ms-transition: all 0.3s ease-in;
  -o-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  opacity: 1;
    top: -20px;
    bottom: -0.6rem;
    left: -7rem;
    right: -7rem;
    border-radius: 50%;
    z-index: -10;
    color: #ffffff;
}


.fundCard .cardTop h2 a {
  color: #ffffff !important;
}
.fundCard:hover .cardTop .subTitle {
  color: #ffffff !important;
}
.fundCard:hover .cardTop .equityCap {
  color: #ffffff !important;
}
.fundCard .cardBottom {
  padding: 1rem 1rem;
  border-top: solid 1px #dcdcdc;
  background-color: #00a6b4;
  width: 100%;
  transition: all 0.3s;
}
.fundCard .cardBottom:hover {
  border-top: solid 1px #dcdcdc;
  background-color: #2a2626;
  width: 100%;
}
.quickLinksButton {
  padding: 5px 7px;
    font-size: 12px;
}
.fundCard {
    transition: all 0.3s;
}
.fundCard:hover {
    box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.10);
    background: #fff;
    text-decoration: none;
    cursor:default;
}
.atAGlanceItem img {
  width: 50px !important;
  margin: 0px auto 5px auto;
}
</style>
