<template>
  <div>
    <!--Main Slider Part Start-->
    <div class="main_slider">
      <div class="main_slider_bg_part">
        <div class="container-lg">
          <div class="slider_top">
            <h1>{{ this.$parent.contentData.first_title }}</h1>
            <div class="buttons">
              <a
                href="https://bka.sh/mkt02"
                target="_blank"
                style="justify-self: flex-end"
              >
                <h6>Open Savings Account</h6>
              </a>
            </div>
          </div>
          <div v-if="sliders.length > 0" class="slider">
            <div v-if="sliders.length > 0">
              <carousel
                :autoplay="true"
                :nav="false"
                :items="1"
                :dots="true"
                v-for="(slideItem, index) in sliders"
                :key="slideItem.id"
                :id="'slide_' + index"
              >
                <div
                  v-for="slideItem in sliders"
                  :key="slideItem.id"
                  class="item"
                >
                  <div class="item_overlay">
                    <div class="item_tex">
                      <!-- <h2 class="animate__animated animate__backInLeft">{{slideItem.title}} </h2> -->
                      <!-- <p  class="animate__animated animate__fadeInUp"> {{slideItem.subtitle}}  </p> -->
                    </div>
                  </div>
                  <picture>
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
      shortcode: this.$parent.shortcode,
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

<style scoped>
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
  justify-content: flex-end;
  gap: 10px;
}

.main_slider .main_slider_bg_part .slider_top .buttons a {
  background: #00a6b4;
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
  background: #00a6b4;
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
  background: linear-gradient(45deg, #437a7f, #00a6b4);
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
