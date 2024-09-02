<template>
  <section class="my-5">
      <div v-bind:id="'annualReportcollapse' + 2">
          <b-card v-if="files.length <= 0" class="question-card loading">
            <div>No Content Available</div>
          </b-card>
          <div v-else>
            <div class="latest_news slider multiple-items col-md-12">
              <div class="row">
                <div v-for="(file, index) in files" :key="file.id" class="col-lg-4 col-md-6 col-12 mb-3" style="    padding-right: 10px !important; padding-left: 10px !important;">
                  <div class="border rounded p-3">
                    <!-- Thumbnail with play button -->
                    <div v-if="!file.showPlayer" class="thumbnail-wrapper" @click="playVideo(index)">
                      <img  class="thumb-img" :src="`${baseUrl}/uploads/video_file/${file.thumbnail}`" />
                      <div class="play-button">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <circle cx="32.5" cy="32.5" r="32.5" fill="white" fill-opacity="0.5" />
                          <ellipse cx="32.4991" cy="32.5011" rx="20.546" ry="20.546" fill="white" />
                          <path
                              d="M41.0035 32.128C41.2901 32.2935 41.2901 32.7072 41.0035 32.8727L28.5673 40.0527C28.2807 40.2182 27.9223 40.0114 27.9223 39.6803L27.9223 25.3203C27.9223 24.9893 28.2807 24.7824 28.5673 24.9479L41.0035 32.128Z"
                              fill="#00a6b4" />
                      </svg>
                      </div>
                    </div>

                    <!-- Video player -->
                    <div v-else class="video-wrapper">
                      <vue-plyr :options="options">
                        <video
                          v-if="file.video_type === 'upload'"
                          :id="`up${index}`"
                          controls
                          crossorigin
                          playsinline
                        >
                          <source :src="`${baseUrl}/uploads/video_file/${file.video_link}`" />
                        </video>
                        <div v-else class="plyr__video-embed">
                          <iframe
                            ref="iframePlayer"
                            :src="getYouTubeEmbedUrl(file.video_link)"
                            allowfullscreen
                            allowtransparency
                            allow="autoplay"
                          ></iframe>
                        </div>
                      </vue-plyr>
                    </div>

                    <p v-b-tooltip.hover.left="file.title" class="vid-title" style="padding-top: 0.7rem !important; padding-bottom: 0px !important">{{ file.title }}</p>
                    <h6 v-b-tooltip.hover.left="file.subtitle" v-if="file.subtitle" class="vid-description ">{{file.subtitle}}
                      <br>
                      <span class="invisible">
                        1
                      </span>
                    </h6>
                    <h6 v-else class="vid-description invisible">asd alskdjaskjd a slaksjd laksdj as;ldkj aslkdj aslkdj as;kjd as;kjkd ;asljkd asdkj;l asdlk jasd ;kjasd ;kjasd lkjasd </h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "FileTab",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      isVisible: false,
      files: [],
      baseUrl: axios.defaults.baseURL.replace('/api/v1/', ''),
      thumbnailUrl: 'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    };
  },
  methods: {
    getContentFiles() {
      axios.get('get-video-file').then(res => {
        this.files = res.data.details.map(file => ({
          ...file,
          showPlayer: false,
        }));
      }).catch(error => {
        console.error(error);
      });
    },
     playVideo(index) {
      console.log(this.$refs.videoPlayer);
      this.$set(this.files, index, { ...this.files[index], showPlayer: true });

      this.$nextTick(() => {
        // Play the uploaded video if it's the upload type
        if (this.files[index].video_type === 'upload') {
          const videoElement = document.getElementById(`up${index}`);
          if (videoElement) {
            videoElement.play().catch(error => {
              console.error('Error playing video:', error);
            });
          } else {
            console.log('Video Element not found');
          }
        }


        if (this.files[index].video_type !== 'upload') {
          const iframeElement = this.$refs.iframePlayer[index];
          if (iframeElement) {
            iframeElement.src = this.getYouTubeEmbedUrl(this.files[index].video_link, true);
          }
        }
      });
    },
    getYouTubeEmbedUrl(url, autoplay = true) {
      let embedUrl = url;
      if (autoplay) {
        if (embedUrl.includes("?")) {
          embedUrl += "&autoplay=1";
        } else {
          embedUrl += "?autoplay=1";
        }
      }
      return embedUrl;
    }
  },
  created() {
    this.getContentFiles();
  }
};
</script>
<style lang="" scoped>

.ytp-overflow-button-visible{
  display: none !important;
}

.video-thumbnail {
  width: 100%;
  cursor: pointer;
}

.thumb-img{
  width: 100%;
  height: 180.36px;
  border-radius: 8px;
}
.vid-title{
  font-size: 1.25rem;
  line-height: 1.75rem;
  font-weight: 600;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;

}

.vid-description{
  padding-top: 3px;
  color: #484848 !important;
  font-size: 1rem;
  line-height: 1.35rem;
  font-weight: 400;
  overflow: hidden !important;
  display: -webkit-box !important;
  -webkit-box-orient: vertical !important;
  -webkit-line-clamp: 2 !important;
  cursor: pointer;
}



.play-button {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  color: white;
  cursor: pointer;
}

.thumbnail-wrapper {
  position: relative;
  width: 100%;
  display: inline-block;
}

.video-wrapper {
  border-radius: 8px;
  overflow: hidden;
}


.cursor_pointer {
  cursor: pointer;
}

.loading {
  text-align: center;
  font-size: 16px;
  font-weight: 700;
  color: #000;
}

.wrapper {}

.wrapper .title {
  margin-bottom: 56px;
}

.wrapper .title h1 {
  text-align: center;
  font-size: 35px;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 15px;
}

.wrapper .title p {
  text-align: center;
  font-size: 16px;
  line-height: 148%;
}

.content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
}

.drop_down {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 35%;
}

.item {
  border-radius: 5px;
  border: 1px solid #D0D0D0;
  background: #F0F0F0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 14px 21px;
  position: relative;
}

.lists {
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  top: 52px;
  border-radius: 5px;
  border: 1px solid #D0D0D0;
  background: #F0F0F0;
  z-index: 99;
}

.list {
  background: #F0F0F0;
  cursor: pointer;
  padding: 14px 21px;
  text-align: start !important;
  border-bottom: 1px solid #D0D0D0;
}

.list p {
  text-align: start !important;
}

.list:last-child {
  border-bottom: none;
}

.item p {
  text-align: center;
  font-size: 16px;
  font-weight: 700
}

.item svg {
  width: 15px;
  height: 15px;
}

.btns {
  display: flex;
  align-items: center;
}

.btn {
  font-size: 16px;
  font-weight: 700;
  padding: 14px 24px;
  border-radius: 5px;
  background: #F0F0F0;
}

.active {
  background: #D8393A !important;
  color: #F0F0F0 !important;
}

.videos {
  margin-bottom: 20px;
}

.videos video {
  width: 100%;
  height: 218px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.videos .iframe {
  width: 100%;
  height: 218px;
  border-radius: 8px;
  margin-bottom: 10px;
}

.video_title {
  color: #333333;
  margin-bottom: 30px;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.more {
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0px;
}

.more div {
  font-size: 18px;
  border-radius: 100px;
  border: 1px solid #D8393A;
  padding: 16px 24px;
  cursor: pointer;
  color: #D8393A;
  transition: all 0.4s;
}

.more_video {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 30px;
}

.more_video div {
  font-size: 18px;
  border-radius: 100px;
  border: 1px solid #D8393A;
  padding: 16px 24px;
  cursor: pointer;
  color: #D8393A;
  transition: all 0.4s;
}

.more div:hover {
  background: #00a6b4;
  color: #fff;
}

@media (max-width: 768px) {
  .content {
    flex-direction: column;
    gap: 20px;
  }

  .drop_down {
    width: 100%;
  }
}




.gReport {
  margin-top: 40px;
  margin-bottom: 60px;
}

.customPagination .page-item {
  background: #000 !important;
}

.productFeatures .tabcontent ul li .page-link {
  font-size: 14px;
  padding: 10px 0;
  background-color: red !important;
}

.customPagination>li.active>a,
.customPagination>li>a:hover {
  color: white !important;
  background-color: green !important;
}

.categoryBody .mcategory .reason {
  flex-basis: 23%;
  background: rgba(255, 255, 255, 0.15);
  background: rgba(214, 46, 47, 0.95);
  margin: 10px;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  transition: all 0.3s;
}

.categoryBody .mcategory .reason:hover {
  background: rgba(214, 46, 47, 1);
}

.categoryBody .mcategory .reason a {
  display: block;
  text-align: center;
}

.categoryBody .mcategory .reason a h6 {
  color: #fff;
}

.categoryBody .mcategory .reason a img {
  transition: all 0.3s;
  height: 80px;
  width: 80px;
  display: inline-block;
}

.categoryBody .mcategory .owl-buttons {
  padding-top: 15px !important;
  position: absolute;
  left: 50%;
  /* padding-right: 45px !important; */
}

.categoriesTagline {
  margin-top: 13px;
  font-size: 1.25rem;
}

.categories {
  display: block;
}

.mcategory {
  display: none;
}

.container-lg .tab {
  border: 2px solid red;
  border-radius: 20px;
}

.categoryDetails .tabcontent {
  border: none;
}

@media screen and (max-width: 600px) {
  .categories {
    display: none;
  }

  .mcategory {
    display: block;
  }
}

/* News CSS  */
.news_box_gutter {
  padding: 0 10px;
}

@media screen and (max-width: 600px) {
  .news_box_gutter {
    padding: 0 0px;
    margin-bottom: 2px;
  }
}

.news_box {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 0 0px;
}

.news_box:focus {
  box-shadow: none;
  outline: none;
}

.news_box .news_box_image {
  width: 100%;
  overflow: hidden;
}

.news_box .news_box_image img {
  width: 100%;
  transition: all 0.4s;
}

.news_box:hover .news_box_image img {
  transform: scale(1.2);
}

.news_box .news_box_header {
  width: 100%;
  padding: 15px 20px 10px 20px;
}

.news_box .news_box_header h2,
.news_box .news_box_body p {
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

.news_box .news_box_header h2 {
  font-size: 1.25rem;
  -webkit-line-clamp: 3;
  height: 50px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  font-size: 14px;
}

.news_box .news_box_body p {
  font-size: 14px;
  -webkit-line-clamp: 3;
}

.news_box .news_box_footer {
  padding: 0 20px 20px 20px;
}

.news_box .news_box_footer .news_box_learnMore_btn {
  display: inline-block;
  border: 1px solid #00a6b4;
  color: #00a6b4;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
  cursor: pointer;
}

.news_box .news_box_footer .news_box_learnMore_btn:hover {
  color: #fff;
  background: #00a6b4;
  text-decoration: none;
}

.news_box .news_box_share {
  background: #00a6b4;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  padding: 5px 10px;
  transform: rotate(-90deg) translateX(32%);
  transform-origin: right bottom;
  position: absolute;
  top: 0;
  right: -100px;
  transition: all 0.4s;
}

.news_box .news_box_share span,
.news_box .news_box_share a i {
  color: #fff;
  font-size: 20px;
}

.news_box .news_box_share a {
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}

.news_box .news_box_share a:hover {
  transform: rotate(90deg) scale(1.2);
}

.news_box:hover .news_box_share {
  right: 0;
}

/* Custom CSS  */
.custom-select {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}

.keyword-field {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}

.homePageTitleDetails p {
  font-size: 14px;
  padding: 20px 250px 20px 250px;
}

.latest {
  margin: 20px;
}

.logo {
  text-align: center;
}

.single-news {
  padding-bottom: 34px;
  padding-left: 0;
}

#feature {
  display: block;
}

.tabcontent .pdf_icon .files {
  /*padding: 20px;*/
  height: 175px;
  /*background-color: red;*/

  border: 1px solid #ffe4e4;
  position: relative;
  margin-bottom: 20px;
}

.download-item {
  border: 1px solid #ffe7e7;
  position: relative;
  margin-bottom: 20px;
}

.download-item:hover {
  border: 1px solid #ffe4e4;
}

.download-item p,
.download-item h4 {
  padding: 0px 20px;
}

p.tag span {
  position: absolute;
  right: 0px;
  background: #ffe4e4;
  line-height: 22px;
  padding: 0px 16px;
  color: #fff;
  border-bottom-left-radius: 6px;
  text-align: center;
  display: inline-block;
  font-size: 14px;
  float: right;
}

.down-link {
  padding: 15px;
  position: absolute;
  bottom: 0;
  background: #ffe4e4;
  font-size: 14px;
  font-weight: 100%;
  width: 100%;
  color: #fff;
  text-align: center;
}

.download-item h4 {
  padding-top: 30px;
  margin: auto;
}

.down-link:hover {
  padding: 15px;
  position: absolute;
  bottom: 0;
  background: #00a6b4;
  font-size: 14px;
  font-weight: 100%;
  width: 100%;
  color: #ffffff;
  text-decoration: none;
}

.inner_box h4 {
  text-align: center;
  padding: 20px;
}

.custom-field {
  padding-bottom: 20px;
}

/* .section-4 {
      margin-bottom: 10px;
      display: block;
      text-align: right;
    } */

.product-card {
  background: #00a6b4;
  color: #fff;
  margin-bottom: 5px;
}

.product-card .card-body {
  padding: 0rem;
}

.product-card .question-card {
  padding: 10px;
}

.product-card .card-body .d-flex {
  padding: 10px;
}

.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}

.card-single-pdf {
  margin: 15px auto;
}

@media screen and (max-width: 600px) {
  .card-single-pdf {
    margin: 25px auto;
  }
}

.feedback_form {
  padding: 30px 0 50px 0;
}

.feedback_form .form-title {
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  color: #333333;
  text-align: center;
  margin-bottom: 20px;
}

.feedback_form .form-group {}

.feedback_form .form-group label {
  font-weight: 400;
  font-size: 16px;
  line-height: 148%;
  text-align: justify;
  color: #333333;
}

.feedback_form .form-group .form-control {
  background: #fafafa;
  border: 1px solid #c9c9c9;
  border-radius: 6px;
  padding: 13px 18px;
  height: auto;
}

.feedback_form .form-group .form-control:focus {
  outline: none;
  box-shadow: none;
}

  .slideTabItem {
    width: 100%;
     display: block;
    padding: 20px;
  }
  .slideTabItem .tablinks1{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .productFeatures .tab .tablinks1{
    border-right: unset !important;
    height: 180px;
    align-items: center;
    color: #000000 !important;
    background-color: #F2F2F2 !important;

  }
  .productFeatures .tab{
    background-color: #ffffff;
    overflow: hidden;
    width: 82%;
    margin: 0 auto;
  }

  .productFeatures .tab .tablinks1 img{
    width: 35%;
  }


  .faq-item{
    background: #F2F2F2;
    border-radius: 5px;
    -webkit-transition: all .3s;
    transition: all .3s;
    text-align: center;
  }
  .faq-item img{
    padding-top: 40px;
  }
  .faq-item h5{
    padding: 20px 0px 30px 0px;
  }
  a{
    cursor: pointer;
  }
  .product-card.card-body{
    background-color: #F2F2F2 !important;
  }
  .card-body a{
    font-size: 14px;
    color: #000 !important;
    text-decoration: none;
    padding: 2px 6px 9px 7px;
  }
  .card-body p{
    padding: 10px 0px 12px 0px !important;
  }


  .product-card {
    padding: 0px;
    color: white !important;
  }

  .ml-auto, .mx-auto {
    color: #BFBFBF !important;
  }
  .question-card p{
    background-color: #ffffff !important;
    color: #000000 !important;
  }
  .question-card .card-body{
    background-color: #ffffff !important;
  }
  .question-card{
    background-color: #ffffff !important;
  }
    .categoryBody .mcategory .reason {
        flex-basis: 23%;
        background-color: #DCDCDC !important;
        margin: 10px;
        color: #fff;
        padding: 15px;
        border-radius: 5px;
        transition: all 0.3s;
    }
    .categoryBody .mcategory .reason:hover {
        background: #00a6b4;
    }
    .categoryBody .mcategory .reason a {
        display: block;
        text-align: center;
    }
    .categoryBody .mcategory .reason a h6 {
        color: #fff;
    }
    .categoryBody .mcategory .reason a img {
        transition: all 0.3s;
        height: 80px;
        width: 80px;
        display: inline-block;
    }
    .categoryBody .mcategory .owl-buttons{
        padding-top: 15px !important;
        position: absolute;
        left: 50%;
        /* padding-right: 45px !important; */
    }
    .categoriesTagline {
        margin-top: 13px;
        font-size: 1.25rem;
    }
    .categories {
        display: block;
    }
    .mcategory {
        display: none;
    }
    .container-lg .tab {
        border: unset !important;
    }

    .categoryDetails .tabcontent1 {
        border: none;
    }
    @media screen and (max-width: 600px){
        .categories {
            display: none;
        }
        .mcategory {
            display: block;
        }
      .tab .tablinks1 {
        margin-bottom: 5px;
      }
    }

    /* News CSS  */
    .news_box_gutter {
  padding: 0 10px;
}
@media screen and (max-width: 600px){
  .news_box_gutter {
  padding: 0 0px;
  margin-bottom: 2px;
}
}


/* Custom CSS  */
.custom-select {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}
.keyword-field {
  border-radius: 8px;
  border: 2px solid #ccc;
  padding-left: 10px;
}
.homePageTitleDetails p {
    font-size: 14px;
    padding: 20px 250px 20px 250px;
}
.latest {
    margin: 20px;
}
.logo {
    text-align: center;
}
.single-news {
    padding-bottom: 10px;
}
#home_lone {
    display: block;
}
  .font-light{
    font-size: 14px;
  }
 .tab button.active {
   background-color: #F2F2F2 !important;
      color: #000000 !important;
   border-bottom: 4px solid #00a6b4 !important;
    }
 .tab button:focus {
   background-color: #F2F2F2 !important;
      color: #000000 !important;
   border-bottom: 4px solid #00a6b4 !important;
    }

  .tab{
    background-color: unset !important;
  }

    .box_items{
      margin-top: 25px;
      margin-bottom: 25px;
      padding: 20px;
      box-shadow: 2px 4px 8px #ddd;
    }

    .box_items:hover{
      margin-top: 25px;
      margin-bottom: 25px;
      padding: 20px;
      box-shadow: 4px 8px 16px #ddd;
    }
    @media screen and (max-width: 770px) {

      .productFeatures .tab .tablinks1:nth-child(1), .productFeatures .tab .tablinks1:nth-child(3) {
        border-right: 1px solid transparent;
      }
      .productFeatures .tab .tablinks1:nth-child(1), .productFeatures .tab .tablinks1:nth-child(2) {
        border-bottom: 1px solid transparent;
      }
    }

    .download-report-btn{
      cursor: pointer !important;
    }

    .file-name{
      cursor: pointer !important;
    }





</style>
