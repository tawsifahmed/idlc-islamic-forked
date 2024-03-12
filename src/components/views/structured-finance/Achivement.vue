<template>
    <div class="container-lg">
      <h2 class="h2Responsive"
          style="
          text-align: center;
          color: #2d2a29;
          margin: 15px 0 20px 0;
          text-transform: uppercase;
        "
      >
        Our Achievements
      </h2>

      <div class="latest_news slider multiple-items">
        <div>
          <carousel :loop="true" :autoplay="true" :nav="true" :items="4" :dots="false" :navText="[prev,next]"
                    :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:true}}">

            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>
            <div class="achivement_gutter">
              <div class="achivement_box">
                <div class="achivement_image">
                  <img src="~@/assets/img/mbr_01.png" alt="">
                  
                </div>
              </div>
            </div>


          </carousel>
        </div>

      </div>
      <div class="container-lg text-center " style="padding-top: 10px; padding-bottom: 2px;">
        
      </div>

    </div>
</template>
<script>
export default {
    name: 'Achievements',
    data(){
        return {
            prev: "<span class='icon-chevron-left'></span>",
            next: "<span class='icon-chevron-right'></span>",
        }
    }
}
</script>
<style scoped>
.achivement_gutter {
    padding: 0 10px;
}
.achivement_gutter .achivement_box {
    height: 100%;width: 100%;
}
.achivement_gutter .achivement_box .achivement_image img{
    width: 100%;
}
</style>