<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />

    <div class="homePageTitleDetails sectionTitle container dFTagline" >
      <div class="page_heading">
        <h2 style="text-align: center;  " class="h2Responsive textUpperCase">
          E-TENDER
        </h2>
      </div>


<!--      <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>-->
    </div>

    <app-initiative-content/>
    <br>
    <div class="container">
      <div class="row filterOptions investor_relation"  >
        <div class="col-md-12">
          <b-card  class="product-card">
            <a  v-b-toggle="'annualReportcollapse' + 1111" block class="d-flex">
              <strong class="question_product" style="color:white; font-size: 1.25rem;">CONTACT DETAILS</strong>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
            </a>
            <b-collapse v-bind:id="'annualReportcollapse' + 1111">
              <b-card class="question-card">
                <a  v-b-toggle.collapse-home-loan-1 block>
                  <div class="row" >
                  <div class="col-md-12">
                    <ul style="font-size: 14px;">
<!--                      <li><strong>{{ contactData.title}}</strong> ,</li>-->
<!--                      <li><strong>Phone:</strong>{{ contactData.phone}}</li>-->
<!--                      <li><strong>Email:</strong>{{ contactData.email}}</li>-->
                      <li>
                        <div v-html="contactData.description"></div>
                      </li>
                    </ul>
                  <!-- <a href="#" class="tabcontent1Button">Apply Now</a> -->
                  <!-- <br> -->
                  <!-- <a href="~@/assets/pdf/IDLC_Code_of_Conduct2019.pdf" class="tabcontent1Button" download>Download</a> -->
                  </div>
                </div>
                  <!-- replace these with your preferred icons -->
                  <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                  <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                </a>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
      </div>

    </div>
    <br><br>

    <app-footer />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'e-tender',
  data(){
    return {
      downloadableFiles: [],
      shortcode: 'eTender',
      contactData: [],
    }
  },

  components: {
    AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
    AppHeader: () => import('../../incudes/Header'),
    AppSideNav: () => import('../../incudes/SideNav'),
    AppTopCurve: () => import('../../incudes/SlimTopCurve'),
    AppCoverImage: () => import('../../incudes/CoverImage'),
    AppInitiativeContent: () => import('../../views/e-tender/downloadFileComponent'),
    AppFooter: () => import('../../incudes/Footer'),

  },
  methods: {
    getInvestorRelationContact(){
      axios.get('investor-relation-contact', {
        params: {
          shortcode: 'ETender'
        }
      }).then((response) => {

        if(response.status == 200){
          this.contactData = response.data.details['0'];
        }
      }).catch(error => console.log(error));
    },

  },
  created() {
    this.getInvestorRelationContact();
    this.getDownloadableFiles();

  },
  mounted() {
    // this.$store.state.isLoading =false;

  },updated(){

  }
}
</script>
<style lang="" scoped>

  .contact_details{
    text-align: center;
  }
  .contact_details h6{
    padding: 15px;
    padding-bottom: 20px;
  }
  .contact_details p{
    font-size: 14px;
    padding-bottom: 20px;
  }

  .homePageTitleDetails p{
    padding: 20px 100px 20px 100px;
  }

  @media screen and (max-width: 600px){
    .homePageTitleDetails p{
      padding: 10px;
    }
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
    border: 2px solid red;
    border-radius: 20px;
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
  .news_box .news_box_image{
    width: 100%;
    overflow: hidden;
  }
  .news_box .news_box_image img{
    width: 100%;
    transition: all 0.4s;
  }
  .news_box:hover .news_box_image img{
    transform: scale(1.2);
  }
  .news_box .news_box_header {
    width: 100%;
    padding: 15px 20px 10px 20px;;
  }
  .news_box .news_box_header h2,
  .news_box .news_box_body p{
    text-align: left;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .news_box .news_box_header h2{
    font-size: 1rem;
    -webkit-line-clamp: 3;
    height: 65px;
  }

  .news_box .news_box_body {
    padding: 0 20px 20px 20px;
    display: none;
  }
  .news_box .news_box_body p{
    font-size: 14px;
    -webkit-line-clamp: 3;
  }
  .news_box .news_box_footer {
    padding: 0 20px 20px 20px;
  }
  .news_box .news_box_footer .news_box_learnMore_btn{
    display: inline-block;
    border: 1px solid #d62e2f;
    color: #d62e2f;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 100px;
    transition: all 0.4s;
  }
  .news_box .news_box_footer .news_box_learnMore_btn:hover{
    color: #fff;
    background: #d62e2f;
    text-decoration: none;
  }
  .news_box .news_box_share{
    background: #d62e2f;
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
  .news_box .news_box_share a i{
    color: #fff;
    font-size: 20px;
  }
  .news_box .news_box_share a{
    color: #fff;
    font-size: 20px;
    transition: all 0.3s;
    transform: rotate(90deg) scale(1);
  }
  .news_box .news_box_share a:hover{
    transform: rotate(90deg) scale(1.2);
  }
  .news_box:hover .news_box_share{
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



  .tabcontent1 .pdf_icon .files{
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
  .download-item p, .download-item h4 {
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
    background: #d62e2f;
    font-size: 14px;
    font-weight: 100%;
    width: 100%;
    color: #ffffff;
    text-decoration: none;
  }

  .inner_box h4  {
    text-align: center;
    padding: 20px;
  }
  .contactDetaiBoxETender {
    border: 1px solid #ffe4e4;
    padding: 20px;
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    margin-bottom: 20px;
  }
  ul {
    list-style: none !important;
  }
  .product-card {
  background: #d62e2f;
  color: #fff;
  margin-bottom: 5px;
}
.product-card .card-body{
  padding: 0rem;
}
.product-card .question-card{
  padding: 10px;
}
.product-card .card-body .d-flex{
  padding: 10px;
}
.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}

</style>
