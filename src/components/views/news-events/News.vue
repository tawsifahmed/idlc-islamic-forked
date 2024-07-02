<template>

  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <div class="container  homePageTitleDetails sectionTitle dFTagline">
      <div class="page_heading">
        <h2 style="text-align: center; text-transform: uppercase;" class="h2Responsive ">
            News
        </h2>
      </div>

        <!-- <h6>Sample Tagline</h6> -->


    </div>
    <div class="container">
      <div class="singleNews">
        <div class="newsTitle">
          <h2>{{this.contentData.title}}</h2>
          <br>
          <p style="font-size: 10px; margin: 10px 0;">Published Date: {{ formatDate(this.contentData.publish_date)}}</p>
        </div>
        <div class="image">
          <img :src="this.contentData.image" alt="">
        </div>
        <div class="detailNews">
          <p v-html="contentData.description"></p>
        </div>
      </div>
      <div class="newsShare">
        <span>Share On:</span>
        <a class=""  title="Share on Facebook" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://idlc-islamic.netlify.app/news/'+contentData.id">
          <span class="icon-facebook-f"></span>
        </a>

        <a title="Share on Linked In" target="_blank" :href="'https://www.linkedin.com/sharer/sharer.php?u=https://idlc-islamic.netlify.app/news/'+contentData.id">
          <span class="icon-linkedin"></span>
        </a>

<!--        <ShareNetwork-->
<!--          :href="'news/'+contentData.id"-->
<!--          title=""-->
<!--          network="linkedin"-->
<!--          :url="shareBase+this.$route.params.newsId"-->
<!--        ><span class="icon-linkedin"></span></ShareNetwork>-->

      </div>

    </div>
    <app-footer />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: 'news-and-events',
   data() {
    return {
      shortcode: 'NewsAndEvent',
      contentData: "",
      shareBase: this.$store.state.shareBaseUrl,
    }
  },

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/SlimTopCurve'),
    AppFooter: () => import('../../incudes/Footer'),

  },


  methods: {
    formatDate (input) {
      var datePart = input.match(/\d+/g),
        year = datePart[0].substring(0), // get only two digits
        month = datePart[1],
        day = datePart[2];
      const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ];
      console.log(month);
      return day+' '+ monthNames[month-1] +' '+year;
    },
    getNewsContent(){
      axios.get('get-news',{
        params: {
          news_id: this.$route.params.newsId
        }
      }).then((response) => {
        if(response.status == 200){
          this.contentData = response.data.details;
          console.log(this.contentData);
        }
      }).catch(error => console.log(error));
    },
  },
  created() {
    this.getNewsContent();
  },
  mounted() {

  },updated(){

  }
}
</script>


<style scoped>
.newsShare  {
  margin-bottom: 20px;
  text-align:right;
}
.newsShare span {
  font-size: 1rem;
}
.newsShare a {
  font-size: 14px;
  margin: 0 10px;
  color: #fff;
  background: #00a6b4;
  padding: 10px;
  border-radius: 5px;
  transition: all 0.3s;
  width: 30px;
}
.newsShare a:hover {
  background: #333;
}
.singleNews {
  text-align: center;
  margin: 20px 0 50px 0;
}
.singleNews .image {
  max-width: 500px;
  margin: 20px auto;
}
.singleNews .image img{
  width: 100%;
}
.singleNews .detailNews {
  font-size: 14px;
  text-align: justify;
}
.singleNews .detailNews p{
  font-size: 14px;

}

</style>

