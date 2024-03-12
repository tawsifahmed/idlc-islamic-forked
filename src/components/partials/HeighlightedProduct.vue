<template>
  <div>
    <!--Product Slider Part Start-->
    <br /><br />
    <h2 class="h2Responsive"  style="text-align: center;  text-transform: uppercase;   margin-top: 40px;
          font-size: 2rem;
          color: #2d2a29;">
      Highlighted Products
    </h2>
    <section class="center3 slider multiple-items heightlightedProductArea">
      <carousel :autoplay="false" :nav="false" :items="5" :dots="false">

        <div class="heightlightedProduct">
          <div class="icon icon_1"></div>
          <h4 class="slick_slider_text text-center">
            Personal <br />
            Loan
          </h4>
        </div>
        <div class="heightlightedProduct">
          <div class="icon icon_2"></div>
          <h4 class="slick_slider_text text-center">
            SME Term <br />
            Loan
          </h4>
        </div>
        <div class="heightlightedProduct">
          <div class="icon icon_3"></div>
          <h4 class="slick_slider_text text-center">
            Working Capital <br />
            Loan
          </h4>
        </div>
        <!-- <div class="heightlightedProduct">
          <div class="icon icon_4"></div>
          <h4 class="slick_slider_text text-center">
            IDLC Startup <br />
            Loan
          </h4>
        </div> -->
        <div class="heightlightedProduct">
          <div class="icon icon_5"></div>
          <h4 class="slick_slider_text text-center">Seasonal <br />Loan</h4>
        </div>
        <div class="heightlightedProduct">
          <div class="icon icon_6"></div>
          <h4 class="slick_slider_text text-center">
            Construction <br />
            Loan
          </h4>
        </div>
        <!-- <div class="heightlightedProduct">
          <div class="icon icon_7"></div>
          <h4 class="slick_slider_text text-center">
            Affordable Home <br />
            Loan
          </h4>
        </div> -->

        <div class="heightlightedProduct">
          <div class="icon icon_8"></div>
          <h4 class="slick_slider_text text-center">
            Car <br />
            Loan
          </h4>
        </div>
        <!-- <div class="heightlightedProduct">
          <div class="icon icon_9"></div>
          <h4 class="slick_slider_text text-center">
            Working Capital <br />
            Loan
          </h4>
        </div> -->
        <div class="heightlightedProduct">
          <div class="icon icon_10"></div>
          <h4 class="slick_slider_text text-center">
            Commercial Space <br />
            Loan
          </h4>
        </div>
        <div class="heightlightedProduct">
          <div class="icon icon_11"></div>
          <h4 class="slick_slider_text text-center">
            Term Loan <br />
            Financing
          </h4>
        </div>
        <div class="heightlightedProduct">
          <div class="icon icon_12"></div>
          <h4 class="slick_slider_text text-center">
            Project <br />
            Financing
          </h4>
        </div>

      </carousel>
    </section>
    <!--Product Slider Part End-->
  </div>
</template>

<script>

export default {
name: "HeighlightedProduct",

}
</script>

<style scoped>
.heightlightedProductArea{
  margin: 0px 50px;
}
</style>
