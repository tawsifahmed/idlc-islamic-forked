<template>
  <!--Latest news and updates part start-->
    <div class="container-lg">
      <h2 class="h2Responsive"
        style="
          text-align: center;
          color: #2d2a29;
          margin: 15px 0 20px 0;
          text-transform: uppercase;
        "
      >
        Latest news and updates
      </h2>

      <div class="latest_news slider multiple-items" >
        <!-- <div class="owl-carousel owl-theme" id="latestNews"> -->
          <carousel :autoplay="true" :nav="true" :items="4" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:false},600:{items: 1,nav:true},1000:{items: 4,nav:true}}">
            <div class="news_box_gutter">
              <div class="news_box">
                <div class="news_box_image">
                  <img src="~@/assets/img/latestNews/1.jpg" alt="">
                </div>
                <div class="news_box_header">
                    <h2>IDLC launched IDLC-ShopUp Online Purnota Loan Fair</h2>
                </div>
                <div class="news_box_body">
                  <!-- <p>
                    The largest financial institution IDLC launches an e-loan fair named 'IDLC-ShopUp Online Purnota Loan Fair' with the leading online business platform “ShopUp” to provide e-loan facilities to the women entrepreneurs in e-commerce and f-commerce sector dated August 16, 2020.
                  </p> -->
                </div>
                <div class="news_box_footer">
                  <a class="news_box_learnMore_btn" href="#">Read More</a>
                </div>
                <div class="news_box_share">
                  <!-- <span>Share On</span> -->
                  <a href="#">
                    <span class="icon-facebook-f"></span></span>
                  </a>
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#">
                  <span class="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="news_box_gutter">
              <div class="news_box">
                <div class="news_box_image">
                  <img src="~@/assets/img/latestNews/2.jpg" alt="">
                </div>
                <div class="news_box_header">
                  <h2>Bangladesh Bank arranged an online awareness raising session</h2>
                </div>
                <div class="news_box_body">

                  <!-- <p>
                    Bangladesh Bank arranged an online awareness raising session for IDLC Finance PLC on 17th August. <br>
                    A.K.M. Fazlur Rahman, Executive Director, Bangladesh Bank inaugurated the program as Chief Guest, and IDLC’s Deputy Managing Director, M Jamal Udidn,

                  </p> -->
                </div>
                <div class="news_box_footer">
                  <a class="news_box_learnMore_btn" href="#">Read More</a>
                </div>
                <div class="news_box_share">
                  <!-- <span>Share On</span> -->
                  <a href="#">
                    <span class="icon-facebook-f"></span></span>
                  </a>
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#">
                  <span class="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="news_box_gutter">
              <div class="news_box">
                <div class="news_box_image">
                  <img src="~@/assets/img/latestNews/3.jpg" alt="">
                </div>
                <div class="news_box_header">
                  <h2>IDLC Investments wins Bangladesh’s Best Investment Bank </h2>
                </div>
                <div class="news_box_body">
                  <!-- <p>
                    IDLC Investment won "Euromoney Awards for Excellence" for the third time in a row as the "Best Investment Bank in Bangladesh". <br>
                    IDLC Investments has been awarded by Euromoney for its ability to adapt and tailor its offerings in adverse conditions, superior financial performance
                  </p> -->
                </div>
                  <div class="news_box_footer">
                    <a class="news_box_learnMore_btn" href="#">Read More</a>
                  </div>
                  <div class="news_box_share">
                  <!-- <span>Share On</span> -->
                  <a href="#">
                    <span class="icon-facebook-f"></span></span>
                  </a>
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#">
                  <span class="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="news_box_gutter">
              <div class="news_box">
                <div class="news_box_image">
                  <img src="~@/assets/img/latestNews/1.jpg" alt="">
                </div>
                <div class="news_box_header">
                  <h2>IDLC Donates BDT 24 Million to Prime Minister's Relief & Welfare</h2> 
                </div>
                <div class="news_box_body">

                  <!-- <p>
                    IDLC has donated BDT 24 million to Prime Minister’s Relief and Welfare Fund in response to coronavirus pandemic. Arif Khan, CEO & MD, IDLC Finance PLC has handed over the cheque at Prime Minister’s office today. Dr. Ahmad Kaikaus is currently performing as the Principal
                  </p> -->
                </div>
                <div class="news_box_footer">
                  <a class="news_box_learnMore_btn" href="#">Read More</a>
                </div>
                <div class="news_box_share">
                  <!-- <span>Share On</span> -->
                  <a href="#">
                    <span class="icon-facebook-f"></span></span>
                  </a>
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#">
                  <span class="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            <div class="news_box_gutter">
              <div class="news_box">
                <div class="news_box_image">
                  <img src="~@/assets/img/latestNews/3.jpg" alt="">
                </div>
                <div class="news_box_header">
                  <h2>IDLC Donates Essential Food Items for 30,000 Daily Wage Earners</h2>
                </div>
                <div class="news_box_body">
                  <!-- <p>
                    IDLC Finance PLC has taken an initiative to donate essential food items for low income people & daily wage-earners living in different parts of the country from April 4, 2020.
                    In this initiative, five well-known local voluntary and development organizations are partner
                  </p> -->
                </div>
                <div class="news_box_footer">
                  <a class="news_box_learnMore_btn" href="#">Read More</a>
                </div>
                <div class="news_box_share">
                  <!-- <span>Share On</span> -->
                  <a href="#">
                    <span class="icon-facebook-f"></span></span>
                  </a>
                  <a href="#">
                    <span class="icon-linkedin"></span>
                  </a>
                  <a href="#">
                  <span class="icon-twitter"></span>
                  </a>
                </div>
              </div>
            </div>
            
            
            
            
          </carousel>
        <!-- </div> -->
        
        
        
        
        
      </div>

    </div>
<!--Latest news and updates part start-->
</template>

<script>

export default {
  name: "LatestNewsSlide",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>"
    }
  }

}
</script>

<style scoped>
.news_box_gutter {
  padding: 0 10px;
}
@media screen and (max-width: 600px){
  .news_box_gutter {
  padding: 0 0px;
  margin-bottom: 2px;
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
.news_box .news_box_image{
  width: 100%;
  overflow: hidden;
}
.news_box .news_box_image img{
  width: 100%;
  transition: all 0.4s;
}
.news_box:hover .news_box_image img{
  transform: scale(1.2);
}
.news_box .news_box_header {
  width: 100%;
  padding: 15px 20px 10px 20px;;
}
.news_box .news_box_header h2,
.news_box .news_box_body p{
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.news_box .news_box_header h2{
  font-size: 1rem;
  -webkit-line-clamp: 3;
  height: 65px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  display: none;
}
.news_box .news_box_body p{
  font-size: 14px;
  -webkit-line-clamp: 3;
}
.news_box .news_box_footer {
  padding: 0 20px 20px 20px;
}
.news_box .news_box_footer .news_box_learnMore_btn{
  display: inline-block;
  border: 1px solid #00a6b4;
  color: #00a6b4;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
}
.news_box .news_box_footer .news_box_learnMore_btn:hover{
  color: #fff;
  background: #00a6b4;
  text-decoration: none;
}
.news_box .news_box_share{
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
.news_box .news_box_share a i{
  color: #fff;
  font-size: 20px;
}
.news_box .news_box_share a{
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}
.news_box .news_box_share a:hover{
  transform: rotate(90deg) scale(1.2);
}
.news_box:hover .news_box_share{
  right: 0;
}


</style>
