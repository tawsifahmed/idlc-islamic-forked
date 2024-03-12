<template>
  <div class="productWhychoose">
    <div class="top_curve"></div>
    <div class="productWhychooseImgBg">
      <div class="container-lg">
        <div class="tab">
          <button class="tablinks active" @click="whyChoosetab( 'whychose', $event)" id="defaultOpen"><img
            src="~@/assets/img/productWhyChoose/Why-choose-IDLC.png" alt="">Why Choose IDLC
          </button>
          <button class="tablinks" @click="whyChoosetab( 'faq', $event)"><img
            src="~@/assets/img/productWhyChoose/FAQ.png" alt="">FAQ
          </button>
          <button class="tablinks" @click="whyChoosetab( 'contactUs', $event)"><img
            src="~@/assets/img/productWhyChoose/Contact-us.png" alt="">Contact Us
          </button>
          <button class="tablinks" @click="whyChoosetab( 'downloadBrochures', $event)"><img
            src="~@/assets/img/productWhyChoose/Download-Brochures.png" alt="">Download Brochures
          </button>
        </div>


        <div id="whychose" class="tabcontent" style="display:block;">
          <!-- <span onclick="this.parentElement.style.display='none'" class="topright">&times</span> -->
          <div class="whyChoosebody">
            <div class="reason ">
              <img v-lazy="lowerTabContents.why_choose_one_image" alt="">
              <h5>{{ lowerTabContents.why_choose_one_title }}</h5>
              <div class="line"></div>
              <p>{{ lowerTabContents.why_choose_one_subtitle}}</p>
            </div>

            <div class="reason">
              <img v-lazy="lowerTabContents.why_choose_two_image" alt="">
              <h5>{{ lowerTabContents.why_choose_two_title }}</h5>
              <div class="line"></div>
              <p>{{ lowerTabContents.why_choose_two_subtitle }}</p>
            </div>

            <div class="reason">
              <img v-lazy="lowerTabContents.why_choose_three_image" alt="">
              <h5>{{ lowerTabContents.why_choose_three_title }}</h5>
              <div class="line"></div>
              <p>{{ lowerTabContents.why_choose_three_subtitle }}</p>
            </div>

            <div class="reason">
              <img v-lazy="lowerTabContents.why_choose_four_image" alt="">
              <h5>{{ lowerTabContents.why_choose_four_title }}</h5>
              <div class="line"></div>
              <p>{{ lowerTabContents.why_choose_four_subtitle}}</p>
            </div>

          </div>
        </div>

        <div id="faq" class="tabcontent">
          <div class="whychoseTabContent">
            <div class="icon">
              <img v-lazy="lowerTabContents.faq_image" alt="">
            </div>
            <div class="sort_detail">
              <app-common-faq/>
            </div>
          </div>
        </div>

        <div id="contactUs" class="tabcontent">
          <div class="whychoseTabContent">
            <div class="icon">
              <img v-lazy="lowerTabContents.contact_image" alt="">
            </div>
            <div class="sort_detail">
              <p>{{ lowerTabContents.contact_text }}</p>
              <router-link :to="{ name: 'ContactUs', params: { branchId : 0}}" class="tabcontent1ButtonBase"> View More </router-link>
            </div>
          </div>
        </div>
        <div id="downloadBrochures" class="tabcontent">
          <div class="whychoseTabContent">
            <div class="icon">
              <img v-lazy="lowerTabContents.download_image" alt="">
            </div>
            <div class="sort_detail">
              <p>{{ lowerTabContents.download_text }}</p>
              <a :href="lowerTabContents.brochure_download" class="tabcontent1ButtonBase" target="_blank" download>Download Now</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_curve"></div>
  </div>
</template>


<script>
  import axios from "axios";

  export default {
    name: "WhyChoose",
    components: {
      AppCommonFaq: () => import('../../partials/CommonFaq'),
    },
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        shortcode: 'Priority',
        lowerTabContents: '',
        faqTabName: 'Priority',

      }
    },
    methods: {
      whyChoosetab(cityName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        var newElement = document.getElementById(cityName);
        event.target.className += " active";
      },

      getTabContent(){
        axios.get('get-tab-content', {
          params: {
            shortcode: this.shortcode
          }
        }).then((response) => {
          if (response.status == 200) {
            this.lowerTabContents = response.data.details[0];
          }else{
            console.log(response);
          }
        }).catch(error => console.log(error));
      }
    },
    created(){
      this.getTabContent();
      $( "#defaultOpen" ).trigger( "click" );
    },
  }
</script>


<style scoped>

.productWhychoose {
position: relative;
/* background-image: url("~@/assets/img/whyChoose.jpg"); */
background-attachment: fixed;
background-repeat: no-repeat;
background-size: 100% 100%;
margin-bottom: 30px;
}

.productWhychoose .productWhychooseImgBg {
  background: rgba(51, 51, 51, 0.949);
  padding: 125px 0px 100px 0px;
  margin: 0 auto;
  height: 625px;
}

.productWhychoose .top_curve {
  background: url("~@/assets/img/curveShapeWhite.png") top center;
  top: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.productWhychoose .bottom_curve {
  background: url("~@/assets/img/curveShapeWhiteUp.png") top center;
  bottom: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.productWhychoose .tab {
  overflow: hidden;
  border-bottom: 1px solid #ccc;
  background: rgba(255, 255, 255, 0.15);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.productWhychoose .tab .tablinks {
  -webkit-box-flex: 1;
      -ms-flex: 1;
          flex: 1;
  color: #fff;
  background-color: inherit;
  float: left;
  border: none;
  outline: none;
  cursor: pointer;
  padding: 14px 16px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
  font-size: 1.25rem;
  margin-right: 1px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.productWhychoose .tab .tablinks img {
  width: 30px;
}

.productWhychoose .tab button:hover {
  background-color: #ddd;
}

.productWhychoose .tab button.active {
  background-color: #d62e2f;
}

.productWhychoose .tabcontent {
  display: none;
  padding: 6px 12px;
  border-top: none;
  -webkit-animation: fadebottomToTop 0.5s ease-in-out forwards;
          animation: fadebottomToTop 0.5s ease-in-out forwards;
}

.productWhychoose .tabcontent .whyChoosebody {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin: 25px 0 50px 0;
  text-align: center;
}

.productWhychoose .tabcontent .whyChoosebody .reason {
  -ms-flex-preferred-size: 23%;
      flex-basis: 23%;
  padding: 15px;
  background: rgba(255, 255, 255, 0.15);
  border-radius: 5px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  color: #fff;
}

.productWhychoose .tabcontent .whyChoosebody .reason img {
  width: 65px;
  margin-bottom: 15px;
}

.productWhychoose .tabcontent .whyChoosebody .reason .line {
  margin: 10px 30px;
  height: 1px;
  background: #fff;
}

.productWhychoose .tabcontent .whyChoosebody .reason p {
  font-size: 14px;
}

.productWhychoose .tabcontent .whyChoosebody .reason:hover {
  background: rgba(255, 255, 255, 0.25);
}

.productWhychoose .tabcontent .whychoseTabContent {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 25px 0;
  background: rgba(255, 255, 255, 0.15);
  color: #fff;
  border-radius: 5px;
  padding: 30px;
}

.productWhychoose .tabcontent .whychoseTabContent .icon {
  -ms-flex-preferred-size: 30%;
      flex-basis: 30%;
  text-align: center;
  border-right: 1px solid rgba(255, 255, 255, 0.35);
}

.productWhychoose .tabcontent .whychoseTabContent .icon img {
  width: 150px;
}

.productWhychoose .tabcontent .whychoseTabContent .sort_detail {
  -ms-flex-preferred-size: 70%;
      flex-basis: 70%;
}

.productWhychoose .tabcontent .whychoseTabContent .sort_detail p {
  font-size: 14px;
  padding: 30px;
}

@media screen and (max-width: 770px) {
  .productWhychoose {
    margin-bottom: 0px;
    /* Style the tab */
    /* Style the tab content */
  }
  .productWhychoose .productWhychooseImgBg {
    padding: 125px 0px 77px 0px;
    height: unset;
  }
  .productWhychoose .bottom_curve {
    bottom: -0.2rem;
  }
  .productWhychoose .tab .tablinks {
    padding: 10px 7px;
    font-size: 15px;
  }
  .productWhychoose .tab .tablinks img {
    width: 30px;
  }
  .productWhychoose .tabcontent .whyChoosebody {
    -ms-flex-wrap: wrap;
        flex-wrap: wrap;
  }
  .productWhychoose .tabcontent .whyChoosebody .reason {
    -ms-flex-preferred-size: 49%;
        flex-basis: 49%;
    margin-bottom: 7px;
    padding: 10px;
  }
  .productWhychoose .tabcontent .whyChoosebody .reason h5 {
    font-size: 16px;
  }
  .productWhychoose .tabcontent .whyChoosebody .reason img {
    width: 50px;
  }
  .productWhychoose .tabcontent .whychoseTabContent {
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
            text-align: center;
  }
  .productWhychoose .tabcontent .whychoseTabContent .icon {
    border-right: none;
  }
  .productWhychoose .tabcontent .whychoseTabContent .icon img {
    width: 100px;
  }

}
  .FAQList {
    list-style: none;
    margin: 0 0 20px 25px;
  }
  .FAQList li{

    background: rgba(255, 255, 255, 0.20);
    margin-bottom: 10px;
    border-radius: 5px;
    transition: all 0.3s;
  }
  .FAQList li:hover{
    background: rgba(255, 255, 255, 0.35);
  }
  .FAQList li a{
    padding: 9px 10px;
    display: block;
    font-size: 14px;
    color: #Fff;
  }
  .FAQList li a i{
    float: right;
  }
  .FAQList li a:hover{
    text-decoration: none;
  }
  @media screen and (max-width: 600px){
    .FAQList {
      margin: 36px 0 20px 0px;
    }
    .FAQList li a{
      padding: 9px 25px 9px 10px;
      position: relative;
    }
    .FAQList li a i{
      position: absolute;
      right: 5px;
      top: 10px;
    }
  }
</style>
