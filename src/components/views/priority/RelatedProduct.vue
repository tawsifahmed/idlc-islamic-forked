<template>
     <div class="similarProductSection">
      <div class="container-lg">
      <div class="heading text-center sectionTitle ">
            <h2 style="text-transform: uppercase; text-align: center; margin-bottom: 10px;" class="h2Responsive">
            Related Products
            </h2>
        </div>
        <div class="similarProduct">

          <div class="right">

            <div class="products">
                <!-- <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:true}}"> -->
                <!-- <div class="owl-carousel owl-theme" id="similarProduct"> -->
                  <div class="item">
                    <router-link to="/term-deposit">
                      <div class="product ">
                        <div class="icon">
                          <img src="~@/assets/img/menu_icon/Menubar/Deposit-at-IDLC.png" alt="">
                        </div>
                        <h5>Term Deposit</h5>
                        <div class="text">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit, </p>
                        </div>
                      </div>
                    </router-link>
                  </div>
                  <div class="item">
                    <router-link to="/dps">
                      <div class="product">
                        <div class="icon">
                          <img src="~@/assets/img/menu_icon/Menubar/DPS.png" alt="">
                        </div>
                        <h5>DPS</h5>
                        <div class="text">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit, </p>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <div class="item">
                    <router-link to="/corporate-loan">
                      <div class="product">
                        <div class="icon">
                          <img src="~@/assets/img/menu_icon/Menubar/Corporate-Loan.png" alt="">
                        </div>
                        <h5>Corporate Loan</h5>
                        <div class="text">
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit, </p>
                        </div>
                      </div>
                    </router-link>
                  </div>

                  <div class="item">
                    <router-link to="/home-loan">
                      <div class="product ">
                        <div class="icon">
                          <img src="~@/assets/img/menu_icon/Menubar/Home-Loan.png" alt="">
                        </div>
                        <h5>Home Loan</h5>
                        <div class="text">
                          <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Apartment Purchase</p>
                        </div>
                      </div>
                    </router-link>
                  </div>


                <!-- </carousel> -->

                </div>

            </div>
          </div>
        </div>
      </div>
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
