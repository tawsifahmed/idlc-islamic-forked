<template>
  <div>
    <div class="main_slider">
      <div class="main_slider_bg_part">

        <h2 style="text-align: center; text-transform: uppercase; color: #fff; margin-bottom: 10px;" class="h2Responsive ">
          {{ this.contentData.second_title }}
        </h2>
        <div class="container-lg"   v-show="isPlaceholder" >
          <vue-content-loading :width="300" :height="100"  >
            <img @load="onImageLoad" hidden>
            <!--              <circle cx="30" cy="30" r="30" />-->
<!--            <rect x="0" y="0" rx="1" ry="1" width="180" height="10" />-->
<!--            <rect x="230" y="0" rx="1" ry="1" width="70" height="10" />-->
            <rect  x="0" y="0" rx="2" ry="2" width="300" height="100" />
          </vue-content-loading>
        </div>

        <div class="container-lg" v-show="isImageLoaded">
          <div class="slider">
            <div class="item">
              <picture>
                <img :src="contentData.static_image" alt="Slider Image" @load="onImageLoad">
              </picture>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container homePageTitleDetails sectionTitle">
      <!-- <h2 style="text-align: center; " class="h2Responsive ">
        {{ contentData.second_title }}
      </h2> -->
      <h6 style="margin-top: unset;">{{ contentData.tagline }}</h6>
      <div v-html="contentData.description"></div>
    </div>
  </div>
</template>
<script>
  import axios from "axios";
  import VueContentLoading from 'vue-content-loading';

  export default {
    components: {
          VueContentLoading,
    },
    data() {
      return {
        contentData: '',
        shortcode: 'ApplyForJob',
        isImageLoaded: false,
        isPlaceholder: true,
      }
    },
    methods: {

      getHeaderContent(){

        axios.get('get-page-content', {
          params: {
            shortcode: this.shortcode
          }
        }).then((response) => {

          if(response.status == 200){
            this.contentData = response.data.details;
          }
        }).catch(error => console.log(error));
      },
      onImageLoad () {

        this.isPlaceholder = false;
        this.isImageLoaded = true;
        // this.$store.state.isLoading =false;
      },

    },
    created() {
      this.getHeaderContent();
    },
    updated() {

    },


  };


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
