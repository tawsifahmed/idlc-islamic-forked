<template>
    <section v-if="faqs.length > 0">
      <div class="productFeatures">
          <div class="categoryDetails"   id="categoryFeature1">
              <div class="container-lg">
              </div>
              <br>
                <div class="container-lg">
                  <h2 style="text-align: center; " class="h2Responsive ">
                    FAQ
                  </h2>
                    <!-- <div class="tab">
                      <div v-if="faqTabs.length > 0" style="width:100%;">
                        <carousel  :dots="false" :autoplay="false" :nav="true" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:true}}">
                          <div class="slideTabItem" v-for="(faqTabItem,index) in faqTabs" :key="index">
                            <button :class="faq_tab_id == faqTabItem.id ? 'tablinks1 active' : 'tablinks1' "
                                    @click="faqOpenTab( faqTabItem.id, faqTabItem.title,  $event)">
                                <img :src="faqTabItem.image" alt="">
                                <h5  >{{ faqTabItem.title }}</h5>
                            </button>
                          </div>

                        </carousel>
                      </div>
                    </div> -->

                    <div :id="faq_tab_id"  class="tabcontent1" style="display: block;">
                      <b-card  class="product-card">
                        <a   class="d-flex">
                          <strong class="question_product">{{ selectedTabName}}</strong>
                          <!-- <strong v-if="isVisible" aria-hidden="true" class="ml-auto ">-</strong>
                          <strong v-else aria-hidden="true" class="ml-auto d-none">+</strong> -->
                        </a>

                        <b-collapse id="collapse-1"  style="display: block;">
                          <b-card class="question-card" v-for="(faqItem, index) in faqs" :key="index">
                            <a  v-b-toggle="'collapse-home-loan-'+index" block class="d-flex" aria-expanded="true" style="display: block" >
                              <strong>{{ faqItem.question}}</strong>
                              <!-- replace these with your preferred icons -->
                              <strong v-if="isVisible" aria-hidden="true" class="ml-auto">-</strong>
                              <strong v-else aria-hidden="true" class="ml-auto">+</strong>
                            </a>
                            <b-collapse :id="'collapse-home-loan-'+ index"  >
                              <span v-html="faqItem.answer" class="commonFont faqAnswer" ></span>
                            </b-collapse>
                          </b-card>
                        </b-collapse>
                      </b-card>
                    </div>
                </div>
            </div>
      </div>
    </section>
</template>
<script>
  import axios from "axios";

  export default {
    name: "FaqTab",
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        isVisible: false,
        faqTabs: [],
        faqs: [],
        faq_tab_id: 13,
        selectedTabName: "Business Financing Products",

      }
    },
    methods: {
      faqOpenTab(tabID, tabName, event){
        this.faq_tab_id = tabID;
        console.log('tabID, tabID', tabID);
        this.selectedTabName = tabName;
        this.getFaq(tabID);
        var i, tablinks;
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabID).style.display = "block";

        event.target.className += " active";
      },

      getFaqTab(){
        axios.get('get-faq-tab').then((response) => {
          if (response.status == 200) {
            this.faqTabs = response.data.details;
            console.log(this.faqTabs);
          }else{
            console.log(response);
          }
        }).catch(error => console.log(error));
      },

      getFaq(faq_tab_id){
       // get-faq-question-answer?faq_tab_id=1
        axios.get('get-faq-question-answer',{
          params:{
            faq_tab_id: faq_tab_id
          }
        }).then((response) => {
          if (response.status == 200) {
            this.faqs = response.data.details;
          }else{
            console.log(response);
          }
        }).catch(error => console.log(error));

      },
      isForeignRouteExist(){
        // alert(this.$route.params.tabName);
        this.faq_tab_id = this.$route.params.tabType;
        this.getFaq(this.faq_tab_id);
        this.selectedTabName = this.$route.params.tabName;
        // alert(  this.faq_tab_id);
        // let faqAnswer = document.getElementsByClassName('faqAnswer');
        // for (let i = 0; i < faqAnswer.length; i++) {
        //   faqAnswer[i].className = faqAnswer[i].className.replace(" showContent", "");
        // }
        // this.$root.$emit('bv::toggle::collapse', 'collapse-home-loan-'+this.$route.params.faq);
      }
    },
    created() {
      this.getFaqTab();
      if (this.$route.params.tabName){

        this.isForeignRouteExist();
      }else{
        this.getFaq(13);
      }


    },

  }
</script>
<style lang="" scoped>

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
    padding: 13px 0px 12px 14px !important;
  }
  .card{
    margin-bottom: 15px !important;
  }
  .product-card {
    background-color: #F2F2F2 !important;

  }
  .product-card .card-body{
    padding: 0.25rem !important;

  }
  .question_product{
    color: #000000 !important;

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


</style>
