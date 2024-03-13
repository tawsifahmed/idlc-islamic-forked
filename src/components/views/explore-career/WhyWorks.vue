<template>
  <!--Why Chose Part Start-->
  <div class="whyChose">
    <div class="top_curve"></div>
    <div class="whyChoseBg">
      <div class="container-lg">
        <div class="header">
          <h2 class="h2Responsive">Why work at IDLC?</h2>
        </div>
        <div class="body" style="overflow: hidden">
          <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 3,nav:true}}">

            <div class="reason exploreJobImg">
                <img src="~@/assets/img/exploreJob/Be-a-next-generation-leader.png" alt="">
                <h5>Be a next generation leader</h5>
                <div class="line"></div>
                <p>Everywhere you look you see a young crowd working together to achieve the goals of the organization. The power of millennial coupled with the support given by the IDLC family gives you the ideal platform to be a next generation leader.</p>
              </div>
              <div class="reason exploreJobImg">
                <img src="~@/assets/img/exploreJob/Dynamic-Work-Culture.png" alt="">
                <h5>Dynamic work culture</h5>
                <div class="line"></div>
                <p>IDLC believes in youth and the power of change. Passion determination, and motivation are what sets our people apart from the rest. Everyone here has a dream, and we dare to dream big. Regardless of your job role we encourage you to embrace your uniqueness to bring out the best in you. Every job role here is diverse and unique with plenty of opportunity to learn new things every day</p>
              </div>
              <div class="reason exploreJobImg">
                <img src="~@/assets/img/exploreJob/Expand-your-horizons.png" alt="">
                <h5>Expand your horizons</h5>
                <div class="line"></div>
                <p>Don’t want to limit yourself to one department or one team. At IDLC our employees are encouraged to take part in various projects from time to time to enable them to broaden their horizons.</p>
              </div>
              <div class="reason exploreJobImg">
                <img src="~@/assets/img/exploreJob/Rise-together.png" alt="">
                <h5>Rise together</h5>
                <div class="line"></div>
                <p>At the heart of our growth we have our employees. Are employees are our family. Every day we strive to maintain a friendly and respectful environment that motivate our employees to give their best and contribute to their full potential. We have created an environment of trust and support within the organization to enable everyone to work together as a team, while at the same time encourage individuals to be innovative and creative within their own roles.</p>
              </div>
              <div class="reason exploreJobImg">
                <img src="~@/assets/img/exploreJob/Equal-Employment-Opportunities.png" alt="">
                <h5>Equal employment opportunities</h5>
                <div class="line"></div>
                <p>We are committed to maintain a positive environment in our workplace, free from any discrimination in terms of gender, age, race, religion, creed or any other criteria. We ensure equal opportunities for all in terms of recruitment, selection, promotion, training, development and rewards.</p>
              </div>


      </carousel>
          
        </div>
      </div>
    </div>
    <div class="bottom_curve"></div>
  </div>
  <!--Why Chose Part End-->
</template>

<script>
  import axios from "axios";

  export default {
    name: "WhyChoose",
    components: {},
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        shortcode:'ExploreCareer',
        lowerTabContents: '',
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
    },
  }
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
  background: #00a6b4;
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
.whyChose .whyChoseBg .body  {
    display: block;
    text-align: center;
}
.whyChose .whyChoseBg .body .reason {
   margin: 0 10px;
   min-height: 380px;
   display: flex; flex-direction: column;justify-content: flex-start; align-items: center;
}
.exploreJobImg img{
  filter: invert(100%)
}

</style>
