<template>
    <div class="ourManagement">
      <div class="ourManagementImgBg">
        <div class="container">

          <h2 class="text-center" style="margin-bottom: 20px; text-transform: uppercase;">Idlc Financial Literacy Wing Events</h2>
          <!-- <br> -->
          <div class="tab row">

                <!-- uncomment this after the backed done -->

              <!-- <button v-for="(yearDataItem,index) in this.$parent.yearData" :key="yearDataItem" :class="index == 0 ? 'tablinks active col-sm' : 'tablinks  col-sm'" @click="achievementtab( yearDataItem, $event,yearDataItem)" :id="index == 0 ? 'defaultOpen' : ''">{{yearDataItem}}
              </button> -->

              <!-- comment this after the backed done -->

              <button v-for="(yearDataItem,index) in dummyYears" :key="yearDataItem" :class="yearDataItem == new Date().getFullYear() ? 'tablinks active col-sm' : 'tablinks  col-sm'" @click="achievementtab( yearDataItem, $event,yearDataItem)" :id="index == 0 ? 'defaultOpen' : ''">{{yearDataItem}}
              </button>
  
          </div>
  
  
          <div v-for="(yearDataItem,index) in dummyYears" :id="yearDataItem" class="tabcontent"  :style="index == 0 ? 'display: block' : ''">
  
  
            <div class="awardContent">
              <div class="row">
                  <div class="col-md-6" v-for="(initiativeDataItem,index) in initiativeData" :key="index" v-if="initiativeData.length > 0">
  
                    <b-card no-body class="overflow-hidden csr_news" >
                      <b-row no-gutters>
                        <b-col md="6">
                          <b-card-img v-if="initiativeDataItem && initiativeDataItem.images[0] && initiativeDataItem.images[0].image" :src="initiativeDataItem.images[0].image" alt="Image" class="rounded-0" width="200px" @load="onImageLoad"></b-card-img>
  
                        </b-col>
                        <b-col md="6" class="">
                          <b-card-body :title="initiativeDataItem.title">
                            <!-- <p style="font-size: 10px; margin: 10px 0;">Published Date: <span v-html="initiativeDataItem.publish_date"></span></p> -->
                            <a class="read_more" @click="openModal(initiativeDataItem)">Read More</a>
                          </b-card-body>
                          <div class="news_box_share">
                            <!-- <span>Share On</span> -->
                            <a class=""  title="Share on Facebook" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://web.idlc.com/csr/share/'+initiativeDataItem.id">
                              <span class="icon-facebook-f"></span>
                            </a>
                            <a title="Share on Linked In" target="_blank" :href="'https://www.linkedin.com/sharer/sharer.php?u=https://web.idlc.com/csr/share/'+initiativeDataItem.id">
                              <span class="icon-linkedin"></span>
                            </a>


  
  <!--                          <ShareNetwork-->
  <!--                            href="csr"-->
  <!--                            title=""-->
  <!--                            network="facebook"-->
  <!--                            :url="shareBase+initiativeDataItem.id"-->
  <!--                          ><span class="icon-facebook-f"></span></ShareNetwork>-->
  <!--                          <ShareNetwork-->
  <!--                            href="csr"-->
  <!--                            title=""-->
  <!--                            network="linkedin"-->
  <!--                            :url="shareBase+initiativeDataItem.id"-->
  <!--                          ><span class="icon-linkedin"></span></ShareNetwork>-->
                          </div>
                        </b-col>
                      </b-row>
                    </b-card>
                    <br>
                  </div>
                  <div class="col-md-12 text-center" v-if="initiativeData.length < 1">
                    <h5>Please Explore Other Tabs</h5>
                  </div>
              </div>
            </div>
  
          </div>
  
  
  
        </div>
  
      </div>
      <!-- Modal -->
      <div class="customPopUp" @click.stop="modalShow = !modalShow" v-if="modalShow" initiativeModalData="initiativeModalData">
        <div class="customModalBody" @click.stop="">
          <div class="customModalHeader">
            <button class="closeCustomModal" @click.stop="modalShow = !modalShow"><span class="icon-times"></span></button>
            <h5>{{initiativeModalData.title}}</h5>
          </div>
          <div class="customModalContent">
            <carousel class="image_container" :autoplay="false" :nav="false" :items="1" :dots="false">
              <template slot="prev">
                <span class="prev">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
                </span>
              </template>
          
              <img class="slider_image" v-for="(item, index) in initiativeModalData.images" :key="`image_${index}`" :src="item.image" width="100%" alt="" >

              <template slot="next">
                <span class="next">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </span>
              </template>
            </carousel>
            <br>
            <div  class="details">
              <p><span v-html="initiativeModalData.description"></span></p>
  
            </div>
          </div>
          <div class="customModalFooter">
              <a @click.stop="modalShow = !modalShow" class="cModalBClose">Close</a>
            </div>
        </div>
      </div>
    </div>
  
  </template>
  
  <script>
    import axios from "axios";
    import carousel from 'vue-owl-carousel'
  
    export default {
  
      data() {
        return { 
            dummyYears : [],
          activeClass: 'defaultOpen',
          initiativeData: "",
          initiativeModalData: "",
          shareBase: this.$store.state.csrShareBaseUrl,
          modalShow: false,
        }
      },
      component:{
        AppCsrInitiatives: () => import('../../views/csr/CsrInitiatives'),
        carousel 
      },
      methods: {
        achievementtab: function (tabName, event,yearDataItem) {
          var i, tabcontent, tablinks;
          tabcontent = document.getElementsByClassName("tabcontent");
          for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].style.display = "none";
          }
          tablinks = document.getElementsByClassName("tablinks");
          for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace(" active", "");
          }
          document.getElementById(tabName).style.display = "block";
          var newElement = document.getElementById(tabName);
          event.target.className += " active";
          this.getInitiativeContent(yearDataItem);
        },
        openModal(newsItem) {
          this.modalShow = true;
          this.initiativeModalData = newsItem;
        },
        getInitiativeContent(year){
          console.log('year =>', year)
          this.initiativeData = []
  
          axios.get('get-finencial-csrfs', {
            params: {
              year: year,
            }
          }).then((response) => {
            if(response.status == 200){
              this.initiativeData = response.data.details[year];

              //Need to remove this line after backend done
              
              console.log('initiativeData =>', this.initiativeData)
              if (response.data.details == ""){
                // this.$store.state.isLoading =false;
              }
            }
          }).catch(error => console.log(error));
        },

        getInitiativeContentAll(){
          axios.get('get-finencial-csrfs').then((response) => {
            if(response.status == 200){
              const result = response.data.details
              this.dummyYears = Object.keys(result).reverse()
              console.log('year =>', year)
            }
          }).catch(error => console.log(error));
        },
  
        changeData(){
          alert('jo');
        },
  
        onImageLoad () {
          this.$store.state.isLoading = false;
        },
  
  
      },
      created() {
  
      },
      mounted() {
        const date = new Date()
        this.getInitiativeContent(date.getFullYear());
        this.getInitiativeContentAll();
      }
    }
  </script>
  <style scoped>
    .prev svg{
      width: 30px;
      height: 30px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      left: 3%;
      transform: translate(-3%, -50%);
      z-index: 99;
      background: #00a6b4;
      border-radius: 100%;
      padding: 5px;
      color: #fff;
    }
    .next svg{
      width: 30px;
      height: 30px;
      cursor: pointer;
      position: absolute;
      top: 50%;
      right: 3%;
      transform: translate(-3%, -50%);
      z-index: 99;
      background: #00a6b4;
      border-radius: 100%;
      padding: 5px;
      color: #fff;
    }
    .image_container {
      position: relative;
    }
    .ourManagement {
      position: relative;
      /* background-image: url("~@/assets/img/whyChoose.jpg"); */
      background-attachment: fixed;
      background-repeat: no-repeat;
      background-size: 100% 100%;
      margin-bottom: 30px;
    }
  
    .ourManagement .ourManagementImgBg {
      /* background: #00a6b4; */
      padding: 50px 100px 0px 100px;
    }
  
  
    .ourManagement .tab {
      overflow: hidden;
      border-bottom: 2px solid #00a6b4;
      background: rgba(255, 255, 255, 0.15);
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      margin-bottom: 10px;
    }
  
    .ourManagement .tab .tablinks {
      flex: 1;
      color: #00a6b4;
      float: left;
      outline: none;
      cursor: pointer;
      padding: 14px 16px;
      transition: 0.3s;
      font-size: 14px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: #f2f2f2;
      border: none;
      outline: none;
      /* border-bottom: 2px solid #00a6b4; */
    }
    .ourManagement .tab .tablinks:not(:last-child) {
      border-right: 1px solid #ccc;
    }
    @media screen and (max-width: 600px){
       .ourManagement .tab .tablinks {
          border-bottom: 1px solid #ccc;
        }
    }
  
    .ourManagement .tab .tablinks img {
      width: 30px;
    }
  
    .ourManagement .tab button:hover {
      background-color: #ddd;
    }
  
    .ourManagement .tab button.active {
      background-color: #00a6b4;
      color: #ffffff;
    }
  
  
  
    @media screen and (max-width: 770px) {
      .ourManagement {
        margin-bottom: 0px;
        /* Style the tab */
        /* Style the tab content */
      }
  
      .ourManagement .ourManagementImgBg {
        padding: 30px 0px 30px 0px;
        height: unset;
      }
  
      .ourManagement .tab .tablinks {
        padding: 10px 7px;
        font-size: 12px;
      }
  
      .ourManagement .tab .tablinks img {
        width: 30px;
  
      }
  
    }
    .awardContent{
      padding-top: 20px;
      padding-bottom: 20px;
    }
  
    .awardContent img{
         padding: 27px 20px 20px 20px;
       }
    .awardContent h4{
      font-size: 1rem;
    }
  
  
    .read_more{
      display: inline-block;
      border: 1px solid #00a6b4;
      color: #00a6b4;
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 100px;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      cursor: pointer;
  
    }
  
    .read_more:hover{
      display: inline-block;
      border: 1px solid #00a6b4;
      color: #fff;
      padding: 5px 10px;
      font-size: 12px;
      border-radius: 100px;
      -webkit-transition: all 0.4s;
      transition: all 0.4s;
      cursor: pointer;
      background: #00a6b4;
  
    }
    .card-text{
      font-size: 14px !important;
    }
    .card-deck .card {
      margin-bottom: 15px !important;
  
    }
    .card-deck .card:hover {
      border-color: transparent;
      -webkit-box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
      box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    }
  
    .page-item.active .page-link {
      z-index: 3;
      color: #fff;
      background-color: red;
      border-color: red;
    }
    .csr_news .news_box_share{
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
  .csr_news .news_box_share span,
  .csr_news .news_box_share a i{
    color: #fff;
    font-size: 20px;
  }
  .csr_news .news_box_share a{
    color: #fff;
    font-size: 20px;
    transition: all 0.3s;
    transform: rotate(90deg) scale(1);
  }
  .csr_news .news_box_share a:hover{
    transform: rotate(90deg) scale(1.2);
  }
  .csr_news:hover .news_box_share{
    right: 0;
  }
  .slider_image {
    width: 100%;
    height: 300px;
    object-fit: contain;
    object-position: center;
  }
  </style>
  