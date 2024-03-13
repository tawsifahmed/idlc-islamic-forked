<template>
  <div>
    <div class="container">
        <div class="searchable">
      </div>
    </div>

    <b-container class="bv-example-row custom_row" style="margin-top: 40px">
      <b-row >
        <b-col md="4" v-for="(item, index) in stories" :key="index" style="margin-bottom: 30px">
          <b-card
            :title="item.name"
            :img-src="item.image"
            img-alt="Image"
            img-top
            tag="article"
            style=""
            class="mb-2"
          >
            <div class="news_box_share">
              <!-- <span>Share On</span> -->
              <a class=""  title="Share on Facebook" target="_blank" :href="'https://www.facebook.com/sharer/sharer.php?u=https://web.idlc.com/story/share/'+item.id">
                <span class="icon-facebook-f"></span>
              </a>
              <a title="Share on Linked In" target="_blank" :href="'https://www.linkedin.com/sharer/sharer.php?u=https://web.idlc.com/story/share/'+item.id">
                <span class="icon-linkedin"></span>
              </a>
<!--              <ShareNetwork-->
<!--                href="sme-success-stories"-->
<!--                title=""-->
<!--                network="facebook"-->
<!--                :url="shareBase+item.id"-->
<!--              ><span class="icon-facebook-f"></span></ShareNetwork>-->
<!--              <ShareNetwork-->
<!--                href="sme-success-stories"-->
<!--                title=""-->
<!--                network="linkedin"-->
<!--                :url="shareBase+item.id"-->
<!--              ><span class="icon-linkedin"></span></ShareNetwork>-->
            </div>

            <b-card-text>
              <span v-html="item.description.substr(0, 120)"></span>
            </b-card-text>

            <b-button href="#"  class="read_more" id="show-modal" @click="storyModal(index)" >Read More</b-button>
          </b-card>
        </b-col>
      </b-row>
    </b-container>


<!--    Modal Section-->
<!--    Modal Section-->

    <!-- custom Modal -->
     <div class="customPopUp"  @click.stop="storyModalOpen = !storyModalOpen" v-if="storyModalOpen" newsData="newsData" >
        <div class="customModalBody" @click.stop="">
          <div class="customModalHeader">
            <button class="closeCustomModal" @click.stop="storyModalOpen = !storyModalOpen"><span class="icon-times"></span></button>
            <h5 ></h5>
          </div>
          <div class="customModalContent">

            <div class="image">
              <img :src="singleStory.image" width="100%" alt="">
            </div>

            <br>
            <div  class="details">
              <h4 class="text-center" style="margin-bottom: 10px;">{{ singleStory.name }} </h4>
              <div v-html="singleStory.description"></div>

            </div>
          </div>
          <div class="customModalFooter">
            <a  @click.stop="storyModalOpen = !storyModalOpen" class="cModalBClose">Close</a>
          </div>
        </div>
      </div>
    <!-- custom Modal end -->

  </div>
</template>

<script>
    import axios from "axios";
    export default {
        name: "Stories",
      data() {
        return {
          perPage: 3,
          currentPage: 1,
          storyModalOpen: false,
          stories: [],
          shortcode: 'SuccessStory',
          contents: '',
          singleStory: '',
          shareBase: this.$store.state.storyShareBaseUrl,
        }
      },

      methods:{
        getStories(){
          axios.get('sme-success-story').then((response) => {
            if(response.status == 200){
              this.stories = response.data.details;
              // console.log(this.stories);
            }
          }).catch(error => console.log(error));
        },


        storyModal(index){
          this.storyModalOpen = true;
          return  this.singleStory = this.stories[index];
        }
      },
      created() {
        this.getStories();
      },
      updated() {
      },

    }
</script>

<style scoped>

  .custom_row .card-img, .card-img-top {
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
    height: 200px;
  }

  .modal_header img{
    width: 100%;
    height: 100%;
  }
  article {
    position: relative;
    overflow: hidden;
  }
  .news_box_share{
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
.news_box_share span,
.news_box_share a i{
  color: #fff;
  font-size: 20px;
}
.news_box_share a{
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}
.news_box_share a:hover{
  transform: rotate(90deg) scale(1.2);
}
article:hover .news_box_share{
  right: 0;
}

  .share_icon{
    position: absolute;
    right: 6px;
    top:6px;
    color: #ffffff;
    font-size: 14px;
    /*background-color: red;*/
    cursor: pointer;
    opacity: 0.8;


  }

  .share_icon:hover{
    position: absolute;
    right: 6px;
    top:6px;
    font-size: 14px;
    opacity: 1;
    cursor: pointer;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
    transition: all 0.3s;

  }



  .card-title {
    font-size: 17px;
    transition: all 0.3s;
    cursor: pointer;
    text-transform: capitalize;
  }

  .card-title:hover {
    font-size: 17px;
    color: #d62e2d;
    -webkit-transform: scale(1.01);
    transform: scale(1.01);
    cursor: pointer;
    transition: all 0.3s;


  }

  .homePageTitleDetails p{
    padding-bottom: 0px!important;
  }



  .card-text {
    font-size: 14px;
    margin-bottom: 14px;
  }
  .custom_row .row{
    margin-bottom: 30px;
  }

  .read_more{
    display: inline-block;
    border: 1px solid #00a6b4;
    color: #00a6b4;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    background-color: #fff!important;
    box-shadow: 2px 4px 8px rgba(0, 0, 0, 0.2);


  }
  .read_more:focus,
  .read_more:active{
    color: #00a6b4 !important;
    border: 1px solid #00a6b4 !important;

  }

  .read_more:hover{
    display: inline-block;
    border: 1px solid #00a6b4;
    color: #fff!important;
    padding: 5px 10px;
    font-size: 12px;
    border-radius: 100px;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    cursor: pointer;
    background: #00a6b4!important;
    box-shadow: 2px 4px 16px rgba(0, 0, 0, 0.2);
    -webkit-transform: scale(1.1);
    transform: scale(1.1);


  }
  .card {
      border: 1px solid rgba(0, 0, 0, 0.125) !important;
  }


  .modal-enter {
    /*transform: rotateY(0deg);*/
  }

  .modal-enter-active {
    animation: modal-in  0.5s ease-in forwards;
  }

  .modal-leave {
    /*transform: rotateY(0deg);*/
  }

  .modal-leave-active {
    animation: modal-out 0.5s ease-out forwards;
  }

  @keyframes modal-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  @keyframes modal-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }


</style>
