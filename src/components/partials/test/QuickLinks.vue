<template>
  <section class="quickLinks">
    <h2 class="h2Responsive text-center"  style="text-transform: uppercase;">
      Quick links
    </h2>
    <p class="text-center shortDescription">Here's some more from our side to help make your investment journey smoother
            </p>
    <div class="">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <div class="quickLinkBox quicklinkBox_1">
              <div class="blockHeading">
                  <h4>Monthly Business Review</h4>
              </div>
              <div class="quickLinks_career_box review" style="">
                <div class="headPart">
                  <div class="image">
                    <div class="bluryImage"></div>
                    <img src="~@/assets/img/mbr_01.png" alt="" >
                  </div>
                    <br>
                    <div class="Text" style="">
                    <!-- <h5>Career at IDLC</h5> -->
                      <a href="#">
                        <p>Microfinance sector of Bangladesh: impact post pendemic prospects</p>
                      </a>
                    </div>
                </div>
                <div class="jobs">
                    
                    
                </div>
                <a href="#" class="tabcontent2Button quickLinksButton" style="margin: 0;">View More</a>
                </div>
          </div>
          </div>
          <div class="col-md-3">
            <div class="quickLinkBox quicklinkBox_2">
              <div class="blockHeading">
                  <h4>Career at IDLC</h4>
              </div>
              <div class="quickLinks_career_box">
                <div class="headPart">
                    <div class="icon">
                        <img src="~@/assets/img/q_link_news/career-B.png" alt="">
                    </div>
                    <div class="Text">
                    <!-- <h5>Career at IDLC</h5> -->
                    <p class="heighlightedText">Get a chance to work with the professionals</p>
                    </div>
                </div>
                <div class="jobs">
                    <a href="#" class="job">
                        <h6>Executive</h6>
                        <span>Marketing Department</span>
                    </a>
                    <a href="#" class="job">
                        <h6>Manager</h6>
                        <span>Finance Department</span>
                    </a>
                    
                </div>
                <a href="#" class="tabcontent2Button quickLinksButton" style="margin: 0;">See More Vacancies</a>
                </div>
          </div>
          </div>
          <div class="col-md-3">
            
          <div class="quickLinkBox quicklinkBox_3">
              <div class="blockHeading">
                  <h4>Online Service Portal</h4>
              </div>
              <div class="quickLinks_career_box">
                <div class="headPart">
                    <div class="icon">
                        <img src="~@/assets/img/q_link_news/Online-Service-Portal.png" alt="">
                    </div>
                    <div class="Text">
                    <!-- <h5>Career at IDLC</h5> -->
                    <p class="heighlightedText">Open IDLC Online Service Portal Account</p>
                    </div>
                </div>
                <div class="jobs text-center">
                    <h6 class="text-center" style="font-size: 14px;">The best of IDLC, all in one place.</h6>
                    
                </div>
                <br>
                <br>
                    <div class="openOnlinePortalButtons">
                      <a href="#" class="tabcontent2Button quickLinksButton" >Sign In</a>
                      <a href="#" class="tabcontent2Button quickLinksButton" >Open Account</a>
                    </div>
                </div>
          </div>
          </div>
          <div class="col-md-3">
            
          <div class="quickLinkBox quicklinkBox_4">
               <div id="" class="" data-sf-element="Container"
                   data-placeholder-label="col-md-4 col-sm-6"><h4 style="font-size: 1.25rem; text-align: center;">Recommended Schemes</h4>


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
                                9.29
                              </div>
                            </div>
                            <div class="cardBox cagr eliptext">
                              <div class="title">
                                <span class="Name">Yesterday's Stock <br> Price</span>
                              </div>

                              <div id="CAGRValue" class="amount arrow ">
                                0.67 
                              </div>
                            </div>
                            <div class="cardBox cagr eliptext">
                              <div class="title">
                                <span class="Name">Percentage<br> Charge</span>
                                
                              </div>
                                <br class="displayNone">
                              <div id="CAGRValue" class="amount arrow ">
                                0.5% 
                              </div>
                            </div>
                            
                          </div>



                        </div>
                        <button class="cardBottom btn btn-danger">
                         Download Latest Financial Report
                        </button>
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
</template>

<script>

export default {
    name: "QuickLinks_01",
      data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>"
    }
  }
}
</script>

<style scoped>

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
        color: #d62e2f;
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
        color: #d62e2f;
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
        color: #d62e2f;
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
  color: #d62e2f;
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
  border: 2px solid #d62e2f;
  border-radius: 30px;
  text-decoration: none;
  -webkit-transition: all 0.2s ease-out;
  transition: all 0.2s ease-out;
  color: #d62e2f;
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
  background: rgba(214, 46, 47, 0.95);
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
  background-color: #d62e2f;
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
</style>
