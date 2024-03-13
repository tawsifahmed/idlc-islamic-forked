<template>
    <section>
            <!--CATEGORIZED PORDUCT Part Start-->

<!-- <div id="topBreak"></div> -->
<!--CATEGORIZED PORDUCT Part End-->
        <div class="productFeatures">
            <div class="categoryDetails"   id="categoryFeature1">
                <div class="container-lg">
                    <div class="productPageTitleDetai sectionTitle">
                        <h2 style="text-align: center; " class="h2Responsive ">
                            EXPLORE JOBS
                        </h2>
                        <!-- <h6 class="categoriesTagline"></h6> -->
                        <p>Find out which of our jobs is right for you. <br>
                        Explore what departments we have to offer.</p>
                    </div>
                </div>
                <br>
                <div class="container">
                    <div class="jobs">
                      <div class="job" v-for="itemData in contentData">
                          <div class="icon">
                            <img v-lazy="itemData.image" alt="">
                          </div>
                          <div class="text">
                            <h5 class="title">{{ itemData.name }}</h5>
                            <p class="description font-light">{{ itemData.description}}</p>
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
        name: "FeaturedProgramm",
     components: {


     },
     data() {
       return {
         contentData: [],
         shortcode: 'CorporateLoan',
       }
     },
     methods: {

       getDepartment(){
         axios.get('get-department').then((response) => {
           if(response.status == 200){
             this.contentData = response.data.details;
           }
         }).catch(error => console.log(error));
       }

     },
     created() {
       this.getDepartment();
     },

    }
</script>
<style lang="" scoped>
    .categoryBody .mcategory .reason {
        flex-basis: 23%;
        background: rgba(255, 255, 255, 0.15);
        background: #00a6b4;
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
#experienced_professionals {
    display: block;
}
  .font-light{
    font-size: 14px;
  }

.jobs {margin-bottom: 30px;}
.jobs .job{display: flex; align-items: center; margin-bottom: 10px; background-color: #f2f2f2; border-radius: 5px; padding: 10px 20px;  box-shadow: 1px 1px 2px #ddd;}
.jobs .job:hover{display: flex; align-items: center; margin-bottom: 10px; background-color: #f2f2f2; border-radius: 5px; padding: 10px 20px;  box-shadow: 2px 2px 4px #ddd; }
.jobs .job .icon{ width: 30px; margin-right: 15px;}
.jobs .job .icon img{width: 100%}
.jobs .job .text{flex: 1; }

</style>
