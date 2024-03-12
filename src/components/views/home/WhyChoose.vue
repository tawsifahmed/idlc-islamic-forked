<template>
  <!--Why Chose Part Start-->
  <div class="whyChose">
    <div class="top_curve"></div>
    <div class="whyChoseBg">
      <div class="container-lg">
        <div class="header">
          <h2 class="h2Responsive">WHY CHOOSE IDLC?</h2>
        </div>
        <div class="body">
          <div class="reason">
            <img :src="this.$parent.homePageData.homePageTabContent.why_choose_one_image" alt="" v-if="this.$parent.homePageData.homePageTabContent">
            <h5>{{ this.$parent.homePageData.homePageTabContent.why_choose_one_title }}</h5>
            <div class="line"></div>
            <p>{{ this.$parent.homePageData.homePageTabContent.why_choose_one_subtitle }}</p>
          </div>
          <div class="reason">
            <img :src="this.$parent.homePageData.homePageTabContent.why_choose_two_image"  alt="">
            <h5>{{ this.$parent.homePageData.homePageTabContent.why_choose_two_title }}</h5>
            <div class="line"></div>
            <p>{{ this.$parent.homePageData.homePageTabContent.why_choose_two_subtitle }}</p>
          </div>
          <div class="reason">
            <img :src="this.$parent.homePageData.homePageTabContent.why_choose_three_image" alt="">
            <h5>{{ this.$parent.homePageData.homePageTabContent.why_choose_three_title }}</h5>
            <div class="line"></div>
            <p>{{ this.$parent.homePageData.homePageTabContent.why_choose_three_subtitle }}</p>
          </div>
          <div class="reason">
            <img :src="this.$parent.homePageData.homePageTabContent.why_choose_four_image" alt="">
            <h5>{{ this.$parent.homePageData.homePageTabContent.why_choose_four_title }}</h5>
            <div class="line"></div>
            <p>{{ this.$parent.homePageData.homePageTabContent.why_choose_four_subtitle }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_curve"></div>
  </div>
  <!--Why Chose Part End-->
</template>

<script type="text/javascript">

export default {
  name: "WhyChoose",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
    }
  },

  mounted() {
    // console.log(this.$parent.homePageData);
  }

};

</script>

<style scoped>

.whyChose {
  /* height: 530px; */
  /* background-image: url("~@/assets/img/whyChoose.jpg"); */
  background-attachment: fixed;
  background-size: 100% auto;
  position: relative;
}

.whyChose .top_curve {
  background: url("~@/assets/img/curveShapeWhite.png") top center;
  top: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.whyChose .bottom_curve {
  background: url("~@/assets/img/curveShapeWhiteUp.png") top center;
  bottom: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.whyChose .whyChoseBg {
  background: rgba(214, 46, 47, 0.95);
  height: 100%;
  padding: 100px 0px 70px 0px;
  margin: 0 auto;
  color: #fff;
}

.whyChose .whyChoseBg .header {
  font-size: 2rem;
}

.whyChose .whyChoseBg .header h2 {
  text-transform: uppercase;
  text-align: center;
  width: 100%;
  margin: 0 auto;
}

.whyChose .whyChoseBg .body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;

  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 20px 0 50px 0;
  text-align: center;
}

.whyChose .whyChoseBg .body .reason {
  -ms-flex-preferred-size: 23%;
      flex-basis: 23%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
}

.whyChose .whyChoseBg .body .reason img {
  width: 65px;
  margin-bottom: 15px;
}

.whyChose .whyChoseBg .body .reason .line {
  margin: 10px 30px;
  height: 1px;
  background: #fff;
}

.whyChose .whyChoseBg .body .reason p {
  font-size: 14px;
}

.whyChose .whyChoseBg .body .reason:hover {
  background: rgba(255, 255, 255, 0.25);
}

@media screen and (max-width: 770px) {
  .whyChose {
    height: auto;
  }
  .whyChose .top_curve {
    top: -0.1rem;
  }
  .whyChose .bottom_curve {
    bottom: -0.1rem;
  }
  .whyChose .whyChoseBg {
    padding: 100px 0px;
  }
  .whyChose .whyChoseBg .header h2 {
    width: unset;
    font-size: 25px;
  }
  .whyChose .whyChoseBg .body {
    margin: 25px 0 25px 0;
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .whyChose .whyChoseBg .body .reason {
    -ms-flex-preferred-size: 49%;
        flex-basis: 49%;
    margin-bottom: 7px;
    padding: 10px;
  }
  .whyChose .whyChoseBg .body .reason img {
    width: 50px;
    margin-bottom: 10px;
  }
}
</style>