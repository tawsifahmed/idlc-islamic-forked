<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <!-- <app-static-image /> -->

    <div class="promotion-header">
      <div class="homePageTitleDetails sectionTitle dFTagline">
        <div class="page_heading">
          <h2 style="text-align: center; " class="h2Responsive textUpperCase">
                Promotion and Campaigns
            </h2>
        </div>

            <!-- <h6>{{ contentData.tagline }}</h6> -->
        <p>{{ promotion_and_campaign_upper_content.description}}</p>
<!--            <p>We try to create an impact in every step that we take. Here are some of the snapshots of the events we have managed to initiate or be a part of.</p>-->
      </div>
    </div>

      <div class="news-content-list row">
          <div class="col-10 offset-1">
              <h2 class="latest text-center" style="text-transform: uppercase; margin: 20px auto;">Offers</h2>
          </div>
    </div>


    <div class="container">
      <div class="offers">
        <div class="offer" v-for="item in offers" :key="item.id">
          <div class="image">
            <img :src="item.image" alt="">
          </div>
          <div class="text">
            <div class="title">
              <h6>{{item.title}} </h6>
            </div>
            <div class="description">
              <div  v-html="item.description"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-footer />

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'promotions-and-campaigns-news-and-events',
  data() {
      return {
        modalShow1: false,
        modalShow2: false,
        modalShow3: false,
        modalShow4: false,
        modalShow5: false,
        modalShow6: false,
        offers: [],
        promotion_and_campaign_upper_content: '',
      }
  },
  components: {
    AppHeaderMobile: () => import('../incudes/HeaderMobile'),
    AppHeader: () => import('../incudes/Header'),
    AppSideNav: () => import('../incudes/SideNav'),
    AppTopCurve: () => import('../incudes/SlimTopCurve'),
    AppFooter: () => import('../incudes/Footer'),

    // AppStaticImage: () => import('../incudes/StaticImage'),
  },
  methods: {
    getOffers(){
      axios.get('get-promotion').then((response) => {
        if(response.status == 200){
          this.offers = response.data.details.promotions;
          this.promotion_and_campaign_upper_content = response.data.details.promotion_and_campaign_upper_content;
        }
      }).catch(error => console.log(error));
    }

  },
  created() {
    this.getOffers();
  },
  mounted() {
    // this.$store.state.isLoading =false;

  },updated(){

  }
}
</script>
<style scoped>

.offer_button {
  display: inline-block;
  border: 1px solid #00a6b4;
  color: #00a6b4;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
  background: #fff;
  padding-left: 25px;
  padding-right: 25px;
  position: absolute;
  bottom: 20px;
  left: 35%;

}
.offer_button:hover{
  color: #fff;
  background: #00a6b4;
  text-decoration: none;
}
.offers {
  margin-bottom: 50px;
}
.offers .offer {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f2f2;
  overflow: hidden;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 20px;;
}
.offers .offer .image{
  margin-bottom: 15px;
  flex-basis: 30%;
}
.offers .offer .image img{ width: 400px; height: 225px;}
@media screen and (max-width: 600px){
  .offers .offer .image img{ width: 100%; height: unset; }
}
.offers .offer .text{
  flex: 1;
  padding: 0 20px 0 20px;
}
.offers .offer .text .title {margin-bottom: 10px;}
.offers .offer .text .title h6{font-size: 1.25rem;}
.offers .offer .text .description{ font-size: 14px}
.offers .offer .text .description p{font-size: 14px;}
@media screen and (max-width: 600px){
  .offers .offer {
    flex-direction: column;
  }
  .offers .offer .image{
    margin-right: 0px;
    flex-basis: 100%;
    margin-bottom: 10px;
  }
  .offers .offer .image img{ width: 100%;}
}
</style>



