<template>
  <section>
    <!--CATEGORIZED PORDUCT Part End-->
    <div class="productFeatures">

      <div v-for="itemData in keyFeatureData" class="categoryDetails " :id="'categoryFeature'+itemData.id" ref="'id_'+itemData.id" >
        <div class="container-lg">
          <div class="tab">
            <button class="tablinks1 active" @click="openTab( 'feature'+itemData.id, $event)" :id="'defaultOpen'+itemData.id">Feature</button>
            <button class="tablinks1 " @click="openTab( 'eligibility'+itemData.id, $event)">Eligibility</button>
            <button class="tablinks1 " @click="openTab( 'howCanIUse'+itemData.id, $event)">How I can use this loan</button>
            <button class="tablinks1 " @click="openTab( 'requiredDocument'+itemData.id, $event)">Required Document</button>
          </div>

          <div :id="'feature'+itemData.id" class="tabcontent1" style="display: block;">
            <span  v-html="itemData.feature_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : $parent.shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
          </div>

          <div :id="'eligibility'+itemData.id" class="tabcontent1">
            <span  v-html="itemData.eligibility_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : $parent.shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
          </div>

          <div :id="'howCanIUse'+itemData.id"  class="tabcontent1">
            <span  v-html="itemData.how_can_use_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : $parent.shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
          </div>
          <div :id="'requiredDocument'+itemData.id" class="tabcontent1">
            <span  v-html="itemData.required_document_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : $parent.shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
            <a :href="itemData.required_document_file" class="tabcontent1Button" target="_blank" download>Download</a>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>
<script>
  import axios from "axios";

  export default {
    name: "KeyFeatures",
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        shortcode: 'PersonalLoan',
        keyFeatureData: [],
        ProductDetailData: [],
        isMobile: false

      }
    },
    methods: {

      onClickProduct(selectedId){
        $(".categoryDetails").hide();
        $("#categoryFeature"+selectedId).show(700);
        $( "#defaultOpen"+selectedId ).trigger( "click" );
        //initiate as false
        // device detection
        if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)
          || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) {
          this.isMobile = true;
        }
        if(this.isMobile){
          $('html, body').animate({
            scrollTop: $("#categoryFeature"+selectedId).offset().top- 40
          }, 2000);
        }else{
          $('html, body').animate({
            scrollTop: $("#categoryFeature"+selectedId).offset().top- 22
          }, 2000);
        }
      },

      openTab(cityName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        event.target.className += " active";
      },

      categoryNextButton(id){
        let nextId = id+1;
        $(".categoryDetails").hide();
        if (nextId <= this.keyFeatureData[7].id){
          $("#categoryFeature"+nextId).show(700);
          $( "#defaultOpen"+nextId ).trigger( "click" );
        }else{
          nextId = this.keyFeatureData[0].id
          $("#categoryFeature"+nextId).show(700);
          $( "#defaultOpen"+nextId ).trigger( "click" );
        }
      },

      categoryPrevButton(id) {
        let prevId = id-1;
        $(".categoryDetails").hide();
        if (prevId >= this.keyFeatureData[0].id){
          $("#categoryFeature"+prevId).show(700);
          $( "#defaultOpen"+prevId ).trigger( "click" );
        }else{
          prevId = this.keyFeatureData[7].id
          $("#categoryFeature"+prevId).show(700);
          $( "#defaultOpen"+prevId ).trigger( "click" );
        }
      },

      getProducts() {
        axios.get('get-product', {
          params: {
            shortcode: this.shortcode
          }
        }).then((response) => {
          if (response.status == 200) {
            this.keyFeatureData = response.data.details;
          }
        }).catch(error => console.log(error));
      }
    },
    created() {
      this.getProducts();
    }


  }
</script>
<style lang="" scoped>

  .productFeatures .categoryDetails {
    display: none;
  }

  .productFeatures .categoryDetails:first-child {
    display: block;
  }


  .custom-select select {
    display: none;
  }

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
    display: flex;
  }

  .mcategory {
    display: none;
  }

  @media screen and (max-width: 770px) {
    .categories {
      display: none !important;
    }

    .mcategory {
      display: block !important;
    }
  }
</style>
