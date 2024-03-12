<template>
  <div>
    <!--Main Slider Part Start-->
    <div class="main_slider">
      <div class="main_slider_bg_part">
        <div class="container-lg">
          <div class="slider_top">

          </div>
          <div class="slider">
            <carousel :autoplay="true" :nav="false" :items="1" :dots="true">
              <div class="item">
                  <div class="item_overlay">
                      <div class="item_tex">
                          <h2 class="animate__animated animate__backInLeft">Bangladesh - The Hidden Gem</h2>
                          <p  class="animate__animated animate__fadeInUp">Bangladesh - The Hidden Gem</p>
                      </div>
                  </div>
                  <picture>
                        <source srcset="~@/assets/img/sliders/Car-Loan-002.jpg" media="(max-width: 600px)">
                        <source srcset="~@/assets/img/sliders/Car_Loan.jpg">
                        <img src="~@/assets/img/sliders/Car_Loan.jpg" alt="Slider Image">
                    </picture>
              </div>
              <div class="item">
                  <div class="item_overlay">
                      <div class="item_tex">
                          <h2 class="animate__animated animate__backInLeft">Bangladesh - The Hidden Gem</h2>
                          <p  class="animate__animated animate__fadeInUp">Bangladesh - The Hidden Gem</p>
                      </div>
                  </div>
                  <picture>
                      <source srcset="~@/assets/img/sliders/Dhaka-City-001.jpg" media="(max-width: 600px)">
                      <source srcset="~@/assets/img/sliders/Dhaka_City.jpg">
                      <img src="~@/assets/img/sliders/Dhaka_City.jpg" alt="Slider Image">
                  </picture>
              </div>
              <div class="item">
                  <div class="item_overlay">
                      <div class="item_tex">
                          <h2 class="animate__animated animate__backInLeft">Bangladesh - The Hidden Gem</h2>
                          <p  class="animate__animated animate__fadeInUp">Bangladesh - The Hidden Gem</p>
                      </div>
                  </div>
                  <picture>
                      <source srcset="~@/assets/img/sliders/Home-Loan-003.jpg" media="(max-width: 600px)">
                      <source srcset="~@/assets/img/sliders/Home_Loan.jpg">
                      <img src="~@/assets/img/sliders/Home_Loan.jpg" alt="Slider Image">
                  </picture>
              </div>
            </carousel>
          </div>
        </div>
      </div>
    </div>
    <!--Main Slider Part End-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      texts: ['hello', 'Bangladesh', 'Its me'],
    }
  }
}
</script>

<style lang="" scoped>
  .owl-dots {
    text-align: center;
    -webkit-tap-highlight-color: transparent;
    position: absolute !important;
    bottom: 100px;
    bottom: 80px;
    left: 105px;
  }
</style>
