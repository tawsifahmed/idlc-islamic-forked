<template>
  <div>
    <!--Main Slider Part Start-->
    <div class="main_slider">
      <div class="main_slider_bg_part">
        <div class="container-lg" style="height: 445px" v-show="isPlaceholder">
          <vue-content-loading :width="300" :height="115">
            <img @load="onImageLoad" hidden />
            <!--              <circle cx="30" cy="30" r="30" />-->
            <rect x="0" y="0" rx="1" ry="1" width="180" height="10" />
            <rect x="230" y="0" rx="1" ry="1" width="70" height="10" />
            <rect x="0" y="15" rx="2" ry="2" width="300" height="105" />
          </vue-content-loading>
        </div>

        <div class="container-lg" v-show="isImageLoaded">
          <div class="slider_top">
            <h1>{{ this.$parent.contentData.first_title }}</h1>
            <div class="buttons">
              <router-link
                style=""
                :to="{
                  name: 'ApplyForLoan',
                  params: { applyFor: this.$parent.shortcode }
                }"
                target="_blank"
              >
                <h6>Apply For Loan</h6>
              </router-link>
              <a
                href="https://idlc.com/login/login.php"
                target="_blank"
                style=""
              >
                <h6>Customer Login</h6>
              </a>
            </div>
          </div>
          <div class="slider">
            <div v-if="sliders.length > 0">
              <carousel :autoplay="true" :nav="false" :items="1" :dots="true">
                <div
                  class="item"
                  style="display: none"
                  v-for="(slideItem, index) in sliders"
                  :key="slideItem.id"
                  :id="'slide_' + index"
                >
                  <div class="item_overlay">
                    <div class="item_tex">
                      <h2 class="animate__animated animate__backInLeft">
                        {{ slideItem.title }}
                      </h2>
                      <p class="animate__animated animate__fadeInUp">
                        {{ slideItem.subtitle }}
                      </p>
                    </div>
                  </div>
                  <picture>
                    <!--                    <source srcset="~@/assets/img/sliders/Car-Loan-002.jpg" media="(max-width: 600px)">-->
                    <!--                    <source srcset="~@/assets/img/sliders/Car_Loan.jpg">-->
                    <img
                      :src="slideItem.image"
                      @load="onImageLoad"
                      alt="Slider Image"
                    />
                  </picture>
                </div>
              </carousel>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--Main Slider Part End-->
  </div>
</template>

<script>
import axios from "axios";
import VueContentLoading from "vue-content-loading";

export default {
  components: {
    VueContentLoading
  },
  data() {
    return {
      shortcode: "PersonalLoan",
      sliders: [],
      isImageLoaded: false,
      isPlaceholder: true,
      singleSlide: []
    };
  },
  methods: {
    getSlider() {
      axios
        .get("get-slider", {
          params: {
            shortcode: this.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.sliders = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    onImageLoad() {
      this.isPlaceholder = false;
      this.isImageLoaded = true;
      document.getElementById("slide_0").style.display = "block";
      setTimeout(this.updateSlider, 500);
      // this.$store.state.isLoading =false;
    },
    updateSlider() {
      document.getElementById("slide_1").style.display = "block";
      document.getElementById("slide_2").style.display = "block";
    }
  },
  created() {
    this.getSlider();
  },
  updated() {}
};
</script>

<style lang="" scoped>
.owl-dots {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  position: absolute !important;
  bottom: 80px;
  left: 105px;
}
</style>
