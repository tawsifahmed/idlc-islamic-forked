<template>
    <div class="container">
        <br><br><br>
        <div class="SMECOVER">
            <div class="coverImage">
              <div v-if="stories.length > 0">
                <carousel  :loop="true" :autoplay="true" :nav="false" :items="1" :navText="[prev,next]" >
                    <div style="width: 100%;" v-for="item in stories">
                        <img :src="item.image" alt="">
                    </div>
                </carousel>
              </div>

            </div>

            <div class="smePageTitleDetails sectionTitle">
                <h2 style="text-transform: uppercase; " class="h2Responsive ">
                  Empowering Small Businesses
                </h2>
                <!-- <h6>Sample Tagline</h6> -->
<!--              <div v-html="story.description.substr(0, 320)" class="html_converted_text_box"></div><br>-->
              <p class="">People from different backgrounds and cities have made their mark as business tycoons, from humble beginnings. We are proud to have partnered with some of them, in their journey of success.</p>
                <router-link to="/sme-success-stories" class="successStoriesButton">SME Success Stories</router-link>
            </div>
        </div>
        <br>
    </div>
</template>
<script>

import axios from "axios";

export default {
  name: "LatestNewsSlide",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      story: '',
      stories:[],
    }
  },

  methods: {
    getStory(){
      axios.get('sme-success-story').then((response) => {
        if(response.status == 200){
          this.stories = response.data.details;
        }
      }).catch(error => console.log(error));
    },

    getStories(){
      axios.get('sme-success-story').then((response) => {
        if(response.status == 200){
          this.story = response.data.details['0'];
        }
      }).catch(error => console.log(error));
    }
  },

  created() {
    this.getStory();
    this.getStories();
  }

}
</script>
<style scoped>

  .smePageTitleDetails p {
    font-size: 14px;

    margin: 10px 0 20px 0;
  }

    .SMECOVER {
        display: flex;
        justify-content:center;
        align-items:center;
        background: #f2f2f2;
        padding: 20px;
    }
    .coverImage {
        flex-basis: 40%;overflow: hidden;
    }
    .coverImage img{
        width: 100%;
    }
    .smePageTitleDetails {
        flex-basis: 50%;
        text-align: left;
        padding: 0 20px;
      font-size: 14px;
      margin-bottom: 10px;
    }

    .successStoriesButton {
        outline: none;
        border: 2px solid #00a6b4;
        padding: 10px 30px;
        font-size: 1.25rem;
        border-radius: 100px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        /* margin-right: 20px; */
        text-decoration: none;
        color: inherit;
        display: inline-block;
    }
    .successStoriesButton:hover {
        background: #00a6b4;
        color: #fff;
    }
    @media screen and (max-width: 600px){
        .SMECOVER {
            flex-direction: column;
            overflow: hidden;
        }
        .coverImage {
            width: 100%;
        }
        .successStoriesButton {

            font-size: 14px;
          padding: 0 10px;

        }

      .smePageTitleDetails h2 {
        margin-bottom: 10px;
        margin-top: 10px;
        font-size: 1.6rem;
        padding: 0px;
        /* color: #fff; */
      }

    }
    .owl-theme .owl-nav {
        position: absolute;
        left: 0;
        bottom: 0;
    }
</style>
