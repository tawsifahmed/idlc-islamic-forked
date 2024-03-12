<template>
  <div>
    <!--Main Slider Part Start-->
    <div class="main_slider">
      <div class="main_slider_bg_part">
        <div class="container-lg">
          <!-- <div class="slider_top"> -->
          <!-- <h1>Welcome to financing happiness!</h1> -->
          <!-- <div class="buttons">
                <router-link to="/apply-for-loan" style="">
                    <h6>Apply For Loan</h6>
                    <p>We are here for you</p>
                </router-link>
                <a href="https://idlc.com/login/login.php" target="_blank" style="">
                    <h6>Customer Login</h6>
                    <p>Let's catch your dreams</p>
                </a>
            </div> -->
          <!-- </div> -->
          <div class="slider">
            <div class="item">
              <!-- <div class="item_overlay">
                            <div class="item_tex">
                                <h2 class="animate__animated animate__backInLeft">Bangladesh - The Hidden Gem</h2>
                                <p  class="animate__animated animate__fadeInUp">Bangladesh - The Hidden Gem</p>
                            </div>
                        </div> -->
              <picture>
                <source
                  srcset="~@/assets/img/sliders/Car-Loan-002.jpg"
                  media="(max-width: 600px)"
                />
                <source srcset="~@/assets/img/sliders/Car_Loan.jpg" />
                <img
                  src="~@/assets/img/sliders/Car_Loan.jpg"
                  alt="Slider Image"
                />
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Main Slider Part End-->
  </div>
</template>

<script></script>

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
