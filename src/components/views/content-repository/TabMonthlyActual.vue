<template>
  <section class="container my-5">
    <b-card class="product-card">
      <a v-b-toggle="'annualReportcollapse' + 2" block class="d-flex cursor_pointer">
        <strong class="question_product" style="color:white; font-size: 1.25rem;">
          Monthly Actual Profit Disclosure
        </strong>
      </a>
      <div v-bind:id="'annualReportcollapse' + 2">
        <b-card class="question-card">
          <b-card v-if="files.length <= 0" class="question-card loading">
            <div>No Content Available</div>
          </b-card>
          <div v-else class="row">
            <div class="latest_news slider multiple-items col-md-12">
              <div class="row">


                <div v-for="file in files" :key="file.id" class="col-lg-3 col-ms-6 col-12">
                  <div class="card-single-pdf">
                    <div class="title-report-pdf"></div>
                    <div class="single-report-img">
                      <img src="../../../assets/img/report/PDF-File.png" alt="" />
                    </div>
                    <div class="report-name">
                      <h6 class="file-name" :title="file.title">{{  file.title }}</h6>
                      <p v-if="file.description" class="file-brief" v-b-tooltip.hover.bottom="file.description">{{file.description.length >= 35 ? file.description.substring(0, 35) + '...' : file.description}}</p>
                      <p class="invisible" v-else>asd</p>

                    </div>
                    <a :href="file.file" target="_blank" class="download-report-btn d-flex justify-content-center align-items-center py-2">

                      <img style="height: 25px;" src="../../../assets/img/report/Download-PDF.png" alt="" />
                    </a>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </b-card>
      </div>
    </b-card>
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
      contentFiles: [],
    }
  },
  methods: {
    getContentFiles() {
      axios.get('get-monthly-profit-discloser').then(res => {
        this.contentFiles = res.data.data;
        this.contentFiles.filter(item => {
          this.files.push(item)
          // this.showViewMorePdf = true
        })
        // console.log('files', this.files)
      }).catch(error => {
        console.log(error)
      })
    },
  },
  created() {
    this.getContentFiles();
    this.getFaqTab();
    if (this.$route.params.tabName) {

      this.isForeignRouteExist();
    } else {
      this.getFaq(7);
    }


  },

}
</script>
<style lang="" scoped>

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
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0 13px;
      text-transform: none;
    }

    .file-brief{
      cursor: pointer !important;
      padding: 0px !important;
      font-size: 11.75px !important;
    }


</style>
