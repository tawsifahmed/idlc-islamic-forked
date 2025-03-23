<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-static-image />
    <div class="container mb-4">
      <!-- <div class="iconBlocks">
        <div class="block" v-for="(icon, index) in aboutIcons" :key="icon">
          <img :src="`${baseUrl}/${icon.icon}`" width="80" height="80" alt="Icon">
          <p>{{icon.name}}</p>
        </div>
      </div> -->
      <div class="homePageTitleDetails sectionTitle" style="padding-top: 0;">
        <!-- <h2 style="text-align: center; " class="h2Responsive ">
          {{this.contentData.second_title}}
        </h2> -->
        <!-- <h6>sample tagline</h6> -->
        <p v-html="this.contentData.description"></p>
      </div>

      <div class="philosophy">
        <h2 style="text-align: center; " class="h2Responsive ">
          Our Philosophy
        </h2>

        <div v-if="articleData.vision">
          <h6>Vision</h6>
          <div v-html="articleData.vision">
          </div>
        </div>
        <div v-if="articleData.mission">
          <h6>Mission</h6>
          <div v-html="articleData.mission">
          </div>
        </div>
        
        <h6>Our Values</h6>
        <div v-if="articleData.phiosophy" class="our_values">
          <div v-html="articleData.phiosophy">
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="ourJourneyHeading">

      <h2>Our Journey</h2>
    </div>
    <div class="ourJourney">

      <div v-for="(journeyDataItem,index) in journeyData"   :key="journeyDataItem.id" class="journey">
        <div v-bind:class="['timeBlock', {'timeBlockOdd' : isOdd(index)} , {'timeBlockEven' : !isOdd(index)}]">

          <h1 class="year">{{journeyDataItem.year}}</h1>
          <div class="circles"></div>

        </div>
        <div class="newses">

          <div class="topRow">
            <div class="news" v-for="(journeyDataItemEven,index) in journeyDataItem.content"   :key="journeyDataItemEven" v-if="index % 2 == 0">
              <div class="pin"></div>
              <p class="text">{{journeyDataItemEven.title}}</p>
            </div>
          </div>
          <div class="middleLine"></div>
          <div class="bottomRow">
            <div class="news" v-for="(journeyDataItemOdd,index) in journeyDataItem.content"   :key="journeyDataItemOdd"  v-if="index % 2 != 0">
              <div class="pin"></div>
              <p class="text">{{journeyDataItemOdd.title}}</p>
            </div>
          </div>
        </div>
      </div>

    </div> -->

    <app-footer />

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'world-of-idlc',
  data() {
    return {
      contentData: "",
      articleData: "",
      aboutIcons: null,
      journeyData: [],
      shortcode: 'VissionMissionValues',
      baseUrl: axios.defaults.baseURL.replace('/api/v1/', ''),
    }
  },
  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/TopCurve'),
    AppStaticImage: () => import('./StaticImage'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  methods: {
    isOdd(x) {
      if ((x % 2) == 0) {
        return true;
      }
      return false;
    },
    getArticleContent() {
      axios.get('get-world-idlc').then((response) => {
        if (response.status == 200) {
          this.articleData = response.data.details;
        }
      }).catch(error => console.log(error));
    },
    getAboutIcons() {
      axios.get('get-world-idlc-icon').then((response) => {
        if (response.status == 200) {
          this.aboutIcons = response.data.details
        }
      }).catch(error => console.log(error));
    },
    getHeaderContent() {
      axios.get('get-page-content', {
        params: {
          shortcode: this.shortcode
        }
      }).then((response) => {
        if (response.status == 200) {
          this.contentData = response.data.details;
        }
      }).catch(error => console.log(error));
    },
    getJourneyContent(){
      axios.get('get-our-journey').then((response) => {

          // console.log('journey', response);
        if(response.status == 200){
          this.journeyData = response.data;
        }
      }).catch(error => console.log(error));
    },
  },
  created() {
    this.getArticleContent();
    this.getHeaderContent();
    this.getJourneyContent();
    this.getAboutIcons();
  },
}

</script>
<style scoped>
.our_values ul {
  margin: auto;
  display: inline-block;
  text-align: left;
  font-size: 14px;
  /* list-style: none;; */
}

.our_values ul li:not(:last-child) {
  margin-bottom: 10px;
}

.our_values ul li i {
  font-size: 16px;
  margin-right: 10px;
  color: #00a6b4;
  display: none;
}

h2 {
  text-transform: uppercase;
}

.iconBlocks {
  color: #fff;
  display: flex;
  justify-content: space-between;
  margin: 50px 0 30px 0;
}

.iconBlocks .block {
  background-color: #00a6b4;
  flex-basis: 25%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 0;
}

.iconBlocks .block:first-child {
  border-radius: 50px 0 0 0;
}

.iconBlocks .block:last-child {
  border-radius: 0 0 50px 0;
}

.iconBlocks .block img {
  width: 80px;
  margin-bottom: 10px;
}

.iconBlocks .block p {
  font-size: 14px;
  text-align: center;
}

.philosophy {
  text-align: center;
  /* margin: 20px 0; */
}

.philosophy h6 {
  font-size: 1.25rem;
  margin: 20px 0 15px 0;
}

.philosophy p {
  font-size: 14px;
  margin: 2px 0;
}

.ourJourneyHeading {
  margin: 30px 0 20px 0;
  text-align: center;
}

.ourJourney {
  height: 500px;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  background-image: url("~@/assets/img/atAGlance/Timeline-Page-BG.png");
}

.ourJourney .journey {
  display: flex;
  align-items: center;
}

.ourJourney .journey:first-child {
  margin-left: 150px;
  ;
}

.ourJourney .timeBlock {
  color: #00a6b4;
  width: 120px;
  height: 140px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.ourJourney .timeBlock.timeBlockOdd {
  transform: translateY(-8px);
}

.ourJourney .timeBlock.timeBlockEven {
  transform: translateY(40px);
}

.ourJourney .timeBlock.timeBlockEven .year {
  order: 2;
}

.ourJourney .timeBlock .circles {
  width: 60px;
  height: 60px;
  padding: 10px;
  border-radius: 100px;
  border: 1px solid #333;
  margin-right: 15px;
  position: relative;
}

.ourJourney .timeBlock .circles::before,
.ourJourney .timeBlock .circles::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 100px;
}

.ourJourney .timeBlock .circles::before {
  width: 40px;
  height: 40px;
  border: 3px solid #00a6b4;
}

.ourJourney .timeBlock .circles::after {
  width: 20px;
  height: 20px;
  background-color: #00a6b4;
}

.ourJourney .journey .newses .middleLine {
  height: 1px;
  background-color: #333;
  margin: 0 -45px 0 -70px;
}

.ourJourney .journey .newses .news {
  display: flex;
  height: 200px;
}

.ourJourney .journey .newses .topRow,
.ourJourney .journey .newses .bottomRow {
  display: flex;
  height: 200px;
}

.ourJourney .journey .newses .topRow .news {
  margin-left: 100px;
}

.ourJourney .journey .newses .news .pin {
  height: 50px;
  width: 3px;
  background-color: #00a6b4;
  position: relative;
  align-self: flex-end;
  margin: 0 10px;
}

.ourJourney .journey .newses .news .pin::before {
  content: "";
  width: 8px;
  height: 8px;
  border-radius: 100px;
  position: absolute;
  background-color: #00a6b4;
}

.ourJourney .journey .newses .topRow .news .pin {
  align-self: flex-end;
}

.ourJourney .journey .newses .bottomRow .news .pin {
  align-self: flex-start;
}

.ourJourney .journey .newses .topRow .news .text {
  margin-top: -10px;
  align-self: flex-end;
  margin-bottom: 40px;
}

.ourJourney .journey .newses .topRow .news .pin::before {
  top: -4px;
  left: -3px;
}

.ourJourney .journey .newses .bottomRow .news .pin::before {
  bottom: -4px;
  left: -3px;
}

.ourJourney .journey .newses .news .text {
  font-size: 14px;
  width: 180px;
}

.ourJourney .journey .newses .bottomRow .news {
  margin-left: 30px;
}

.ourJourney .journey .newses .bottomRow .news .text {
  margin-top: 40px;
}

@media screen and (max-width: 770px) {
  .iconBlocks {
    flex-wrap: wrap;
  }

  .iconBlocks .block {
    flex-basis: 49.8%;
    margin-bottom: 1px;
  }

  .iconBlocks .block p {
    text-align: center;
  }

  .ourJourney .journey:first-child {
    margin-left: 50px;
  }

  .ourJourney .journey .newses .topRow .news {
    margin-left: 60px;
  }

  .ourJourney .journey .newses .bottomRow .news {
    margin-left: 10px;
  }
}

@media screen and (max-width: 600px) {
  .topShape {
    max-height: 170px;
  }
}
</style>
