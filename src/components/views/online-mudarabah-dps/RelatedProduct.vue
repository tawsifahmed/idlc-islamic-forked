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
                        <router-link to="/car-loan">
                            <div class="product ">
                                <div class="icon">
                                <img src="~@/assets/img/menu_icon/Menubar/Car-Loan.png" alt="">
                                </div>
                                <h5>Car Loan</h5>
                                <div class="text">
                                     <p>A car is not a privilege anymore, it’s your right to commute comfortably. Add in those weekends of family trips</p>

                                </div>
                            </div>
                        </router-link>
                    </div>
                    <div class="item">
                        <router-link to="/personal-loan">
                            <div class="product">
                                <div class="icon">
                                    <img src="~@/assets/img/menu_icon/Menubar/Personal-loan.png" alt="">
                                </div>
                                <h5>Personal Loan</h5>
                                <div class="text">
                                     <p>It could be children’s education, marriage of self or dependent, emergency medical expenses,</p>

                                </div>
                            </div>
                        </router-link>
                    </div>
                  <div class="item">
                    <router-link to="/sme-loan">
                      <div class="product ">
                        <div class="icon">
                          <img src="~@/assets/img/menu_icon/Menubar/SME-loan.png" alt="">
                        </div>
                        <h5>SME Loan</h5>
                        <div class="text">
                          <p>Boost the growth of your business by availing IDLC SME Term Loan. We strive to provide the best possible service through quick processing</p>

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
                          <p>Longer tenor financing product tailored to the requirements of BMRE, Land acquisition </p>

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
