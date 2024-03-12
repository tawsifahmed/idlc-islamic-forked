<template>
  <div>
    <!--Main Slider Part Start-->
    <div class="main_slider">
      <div class="main_slider_bg_part ">
        <div class="container-lg" style="height: 445px" v-show="isPlaceholder">
          <vue-content-loading :width="300" :height="115">
            <rect x="0" y="0" rx="1" ry="1" width="180" height="10" />
            <rect x="230" y="0" rx="1" ry="1" width="70" height="10" />
            <rect
              x="0"
              y="15"
              rx="2"
              ry="2"
              width="300"
              height="105"
              fill="black"
              stroke="black"
            />
          </vue-content-loading>
        </div>

        <div class="container-lg " v-show="isImageLoaded">
          <div class="slider_top">
            <h1 class="">{{ this.$parent.pageSliderHeader.first_title }}</h1>
            <div class="buttons">
              <a href="/apply-for-loan" target="_blank" style="">
                <h6>Apply For Loan</h6>
              </a>
              <a
                href="https://idlc.com/login/login.php"
                target="_blank"
                style=""
              >
                <h6>Customer Login</h6>
              </a>
            </div>
          </div>
          <div class="slider ">
            <div v-if="this.$parent.sliders.length > 0">
              <carousel
                :autoplay="true"
                :nav="false"
                :items="1"
                :dots="true"
                id="items"
              >
                <div
                  class="item slideItem"
                  v-for="(slideItem, index) in this.$parent.sliders"
                  :key="slideItem.id"
                  style=""
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
                    <img :src="slideItem.image" @load="onImageLoad" />
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

<script type="text/javascript">
// import axios from "axios";
import VueContentLoading from "vue-content-loading";

export default {
  name: "HomeSlider",
  components: {
    VueContentLoading
  },
  data() {
    return {
      loading: true,
      isImageLoaded: false,
      isPlaceholder: true,
      singleSlide: [],
      waitSec: false
    };
  },
  methods: {
    onImageLoad() {
      this.isPlaceholder = false;
      this.isImageLoaded = true;
      document.getElementById("slide_0").style.display = "block";
      setTimeout(this.updateSlider, 0);
      this.$store.state.isLoading = false;
    },
    updateSlider() {
      document.getElementById("slide_1").style.display = "block";
      document.getElementById("slide_2").style.display = "block";
    }
  },
  created() {},
  mounted() {}
};
</script>

<style scoped type="text/css">
.main_slider {
  position: relative;
  width: 100%;
  /* z-index: -1; */
}

.main_slider .main_slider_bg_part {
  border-radius: 0 0 50% 50%;
  z-index: 1;
  margin-top: 75px;
}

.main_slider .main_slider_bg_part .slider_top {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  z-index: 10;
}

.main_slider .main_slider_bg_part .slider_top h1 {
  font-size: 35px !important;
  color: #fff;
  margin-bottom: 10px;
}

.main_slider .main_slider_bg_part .slider_top .buttons {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  gap: 10px;
}

.main_slider .main_slider_bg_part .slider_top .buttons a {
  background: #ff1818;
  padding: 10px 15px;
  border-radius: 10px 10px 0 0;
  color: #fff;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  display: flex;
  align-items: center;
  -webkit-box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:nth-child(1) {
  background: #8c1919;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:nth-child(2) {
  background: #fff;
  color: #2d2a29;
}

.main_slider .main_slider_bg_part .slider_top .buttons a:hover {
  -webkit-transform: scaleY(1) translateY(0px);
  transform: scaleY(1) translateY(0px);
  -webkit-box-shadow: 0 0px 20px 8px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 20px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  background: linear-gradient(45deg, #7a1a1b, #ef0934);
  color: #fff;
}

.main_slider .main_slider_bg_part .slider {
  -webkit-box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0px 10px 7px rgba(0, 0, 0, 0.2);
  z-index: 100;
}

.main_slider .main_slider_bg_part .slider img {
  width: 100%;
}

.main_slider .main_slider_bg_part .slider .item {
  position: relative;
}

.main_slider .main_slider_bg_part .slider .item .item_tex {
  position: absolute;
  bottom: 50px;
  right: 30px;
  color: #fff;
  text-align: right;
  padding: 15px 7px;
  opacity: 0;
  border-radius: 5px;
  -webkit-animation: slidetext 0.4s ease-in-out 0.5s forwards;
  animation: slidetext 0.4s ease-in-out 0.5s forwards;
}
.main_slider .main_slider_bg_part .slider .item .item_tex h2 {
  font-size: 2rem;
}
.main_slider .main_slider_bg_part .slider .item .item_tex p {
  font-size: 1.25rem;
}

.item_overlay {
  /*background-color: rgba(0, 0, 0, 0.34);*/
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

@media screen and (max-width: 770px) {
  .main_slider .main_slider_bg_part {
    margin-top: 15px;
  }
  .main_slider .main_slider_bg_part .slider_top {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }
  .main_slider .main_slider_bg_part .slider_top h1 {
    font-size: 25px !important;
  }
  .main_slider .main_slider_bg_part .slider_top .buttons {
    -ms-flex-item-align: end;
    align-self: flex-end;
  }
  .main_slider .main_slider_bg_part .slider #owl-demo .item img {
    height: 200px !important;
  }
  .main_slider .main_slider_bg_part .slider .item .item_tex {
    width: 100%;
    bottom: 15px;
    right: 8px;
  }
  .main_slider .main_slider_bg_part .slider .item .item_tex h2 {
    font-size: 20px;
  }
  .main_slider .main_slider_bg_part .slider .item .item_tex p {
    font-size: 1rem;
  }
}

@-webkit-keyframes slidetext {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slidetext {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.owl-dots {
  text-align: center;
  -webkit-tap-highlight-color: transparent;
  position: absolute !important;
  bottom: 80px;
  left: 105px;
}
</style>
