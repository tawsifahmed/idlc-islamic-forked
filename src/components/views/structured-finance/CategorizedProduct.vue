<template>
  <section>
    <!--CATEGORIZED PORDUCT Part Start-->
    <div class="category">
      <!-- <div class="top_curve"></div> -->
      <div class=" categoryBg">
        <div class="container-lg">
          <div class="categoryBody">
            <div class="header sectionTitle">
              <h2 class="h2Responsive ">Services We Offer</h2>
            </div>
            <div class="container">
              <form class="categoryForm">
                <div class="form-group row justify-content-center">
                  <label class="col-sm-12 col-form-label category_label"
                    >I am interested to know about</label
                  >
                  <div class="col-md-6 col-sm-12">
                    <div class="custom-select">
                      <select>
                        <option>Select One</option>
                        <option
                          v-for="(pData, index) in productData"
                          :value="index"
                          :key="pData.name"
                          >{{ pData.name }}</option
                        >
                      </select>
                    </div>
                  </div>
                </div>
              </form>
              <div class="categories">
                <div
                  :data-id="pData.id"
                  @click="onClickProduct(index)"
                  class="productsItem reason"
                  v-for="(pData, index) in productData"
                  :key="pData.id"
                >
                  <a>
                    <h6>{{ pData.name }}</h6>
                    <img alt="Retirement" v-lazy="pData.image" />
                    <div class="nextArrow">
                      <a>
                        <div class="arrow"></div>
                      </a>
                    </div>
                  </a>
                </div>
              </div>

              <div class="mcategory">
                <div v-if="productData.length > 0">
                  <carousel
                    :autoplay="false"
                    :dots="false"
                    :navText="[prev, next]"
                    :responsive="{
                      0: { items: 1, nav: true },
                      600: { items: 1, nav: true },
                      1000: { items: 1, nav: true }
                    }"
                    id="mcategoryProduct"
                  >
                    <div class="item" v-for="i in productData.length - 1">
                      <div
                        @click="onClickProduct(i - 1)"
                        class="reason productsItem"
                        :data-id="productData[i - 1].id"
                      >
                        <a>
                          <h6>
                            {{ productData[i - 1].title }}
                          </h6>
                          <img
                            alt="Retirement"
                            v-lazy="productData[i - 1].image"
                          />

                          <div class="nextArrow">
                            <a><div class="arrow"></div></a>
                          </div>
                        </a>
                      </div>

                      <div
                        @click="onClickProduct(i)"
                        class="reason productsItem"
                        :data-id="productData[i].id"
                      >
                        <a>
                          <h6>
                            {{ productData[i].title }}
                          </h6>
                          <img
                            alt="Retirement"
                            v-lazy="productData[i].image"
                            v-if="i > 0"
                          />

                          <div class="nextArrow">
                            <a><div class="arrow"></div></a>
                          </div>
                        </a>
                      </div>
                    </div>
                  </carousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="bottom_curve"></div> -->
    </div>
    <!-- <div id="topBreak"></div> -->
    <!--CATEGORIZED PORDUCT Part End-->
    <div class="productFeatures">
      <div
        v-for="(itemData, index) in productData"
        class="categoryDetails "
        :id="'categoryFeature' + index"
        ref="'id_'+itemData.id"
        :key="'categoryFeature' + index"
      >
        <span
          @click="categoryPrevButton(index)"
          class="categoryPrevButton"
          :data-id="itemData.id"
          ><a><span class="icon-arrow-left"></span></a
        ></span>
        <span
          @click="categoryNextButton(index)"
          class="categoryNextButton"
          :data-id="itemData.id"
          ><a><span class="icon-arrow-right"></span></a
        ></span>
        <div class="container-lg">
          <div class="productPageTitleDetai sectionTitle">
            <h2 style="text-align: center; " class="h2Responsive ">
              {{ itemData.name }}
            </h2>
            <h6 class="categoriesTagline">{{ itemData.product_tagline }}</h6>
            <span v-html="itemData.description"></span>
          </div>
        </div>

        <div class="container-lg">
          <div class="tab">
            <button
              class="tablinks1 active"
              @click="openTab('feature' + itemData.id, $event)"
              :id="'defaultOpen' + index"
            >
              Feature
            </button>
            <!-- <button class="tablinks1 " @click="openTab( 'eligibility'+itemData.id, $event)">Eligibility</button> -->
            <!-- <button class="tablinks1 " @click="openTab( 'howCanIUse'+itemData.id, $event)">How I can use this loan</button> -->
            <!-- <button class="tablinks1 " @click="openTab( 'requiredDocument'+itemData.id, $event)">Required Document</button> -->
            <button
              class="tablinks1 "
              @click="openTab('contactInformation' + itemData.id, $event)"
            >
              Contact Information
            </button>
          </div>

          <div
            :id="'feature' + itemData.id"
            class="tabcontent1"
            style="display: block; overflow: auto;"
          >
            <span v-html="itemData.feature_description"></span>
            <!-- <router-link
              :to="{ name: 'ApplyForLoan', params: { applyFor: shortcode } }"
              target="_blank"
              class="tabcontent1Button"
              >Apply Now</router-link
            > -->
          </div>
          <!--
          <div :id="'eligibility'+itemData.id" class="tabcontent1">
            <span  v-html="itemData.eligibility_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
          </div> -->
          <!--
          <div :id="'howCanIUse'+itemData.id"  class="tabcontent1">
            <span  v-html="itemData.how_can_use_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
          </div> -->
          <!-- <div :id="'requiredDocument'+itemData.id" class="tabcontent1">
            <span  v-html="itemData.required_document_description" ></span>
            <router-link :to="{ name: 'ApplyForLoan', params: { applyFor : shortcode}}"  target="_blank" class="tabcontent1Button">Apply Now</router-link>
            <a :href="itemData.required_document_file" class="tabcontent1Button" target="_blank" download>Download</a>
          </div> -->

          <div :id="'contactInformation' + itemData.id" class="tabcontent1">
            <!--            <span v-html="itemData.how_can_use_description"></span>-->
            <h6>Head of Structured Finance</h6>
            <p style="font-size: 16px;">IDLC Finance PLC</p>
            <p>
              Bay’s Galleria (1st Floor), 57 Gulshan Avenue, Dhaka 1212,
              Bangladesh <br />
              Contact No: 16409, +8809609994352
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
import axios from "axios";

export default {
  name: "CategorizedProduct",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      productData: [],
      ProductDetailData: [],
      isMobile: false,
      shortcode: this.$parent.shortcode
    };
  },
  methods: {
    getProducts() {
      axios
        .get("get-product", {
          params: {
            shortcode: this.$parent.shortcode
          }
        })
        .then(response => {
          if (response.status == 200) {
            this.productData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    onClickProduct(selectedId) {
      $(".categoryDetails").hide();
      $(".categoryDetails").removeClass("rightToLeftAnimation");
      $("#categoryFeature" + selectedId).show(900);
      $("#defaultOpen" + selectedId).trigger("click");
      //initiate as false
      // device detection
      if (
        /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
          navigator.userAgent
        ) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
          navigator.userAgent.substr(0, 4)
        )
      ) {
        this.isMobile = true;
      }
      if (this.isMobile) {
        $("html, body").animate(
          {
            scrollTop: $("#categoryFeature" + selectedId).offset().top - 40
          },
          2000
        );
      } else {
        $("html, body").animate(
          {
            scrollTop: $("#categoryFeature" + selectedId).offset().top - 22
          },
          2000
        );
      }
    },

    openTab(tabName, event) {
      var i, tabcontent, tablinks;
      tabcontent = document.getElementsByClassName("tabcontent1");
      for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
      }
      tablinks = document.getElementsByClassName("tablinks1");
      for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
      }
      document.getElementById(tabName).style.display = "block";
      event.target.className += " active";
    },

    categoryNextButton(id) {
      let nextId = id + 1;
      $(".categoryDetails").hide();
      $(".categoryDetails").removeClass("rightToLeftAnimation");
      if (nextId <= this.productData.length - 1) {
        $("#categoryFeature" + nextId).show(900);
        $("#defaultOpen" + nextId).trigger("click");
      } else {
        nextId = 0;
        $("#categoryFeature" + nextId).show(900);
        $("#defaultOpen" + nextId).trigger("click");
      }
    },

    categoryPrevButton(id) {
      let prevId = id - 1;
      $(".categoryDetails").hide();
      $(".categoryDetails").removeClass("rightToLeftAnimation");
      if (prevId >= 0) {
        // $("#categoryFeature"+prevId).css({"display": "block" , "font-size": "200%", "animation": "rightToLeft .9s ease-in-out forwards"});
        $("#categoryFeature" + prevId).addClass("rightToLeftAnimation");
        $("#defaultOpen" + prevId).trigger("click");
      } else {
        prevId = this.productData.length - 1;
        $("#categoryFeature" + prevId).addClass("rightToLeftAnimation");
        $("#defaultOpen" + prevId).trigger("click");
      }
    }
  },
  created() {
    this.getProducts();
    if (this.$route.params.Purnota) {
      this.isFromPurnota(this.$route.params.Purnota);
      this.onClickProduct(1);
      $("#defaultOpen1").trigger("click");
    } else {
      $("#defaultOpen0").trigger("click");
    }
  },
  updated() {
    // device detection
    if (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(
        navigator.userAgent
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| ||a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
        navigator.userAgent.substr(0, 4)
      )
    ) {
      this.isMobile = true;
    }
    $(".select-selected").remove();
    var x, i, j, l, ll, selElmnt, a, b, c;
    /*look for any elements with the class "custom-select":*/
    x = document.getElementsByClassName("custom-select");
    l = x.length;
    for (i = 0; i < l; i++) {
      selElmnt = x[i].getElementsByTagName("select")[0];
      // alert(this.shortcode);
      ll = selElmnt.length;
      /*for each element, create a new DIV that will act as the selected item:*/
      a = document.createElement("DIV");
      a.setAttribute("class", "select-selected");
      a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
      x[i].appendChild(a);
      /*for each element, create a new DIV that will contain the option list:*/
      b = document.createElement("DIV");
      b.setAttribute("class", "select-items select-hide");
      for (j = 1; j < ll; j++) {
        /*for each option in the original select element,
          create a new DIV that will act as an option item:*/
        c = document.createElement("DIV");
        c.style.textAlign = "center";
        c.innerHTML = selElmnt.options[j].innerHTML;
        c.addEventListener("click", function(e) {
          /*when an item is clicked, update the original select box,
            and the selected item:*/
          var y, i, k, s, h, sl, yl;
          s = this.parentNode.parentNode.getElementsByTagName("select")[0];
          sl = s.length;
          h = this.parentNode.previousSibling;
          for (i = 0; i < sl; i++) {
            if (s.options[i].innerHTML == this.innerHTML) {
              s.selectedIndex = i;
              h.innerHTML = this.innerHTML;
              y = this.parentNode.getElementsByClassName("same-as-selected");
              yl = y.length;
              for (k = 0; k < yl; k++) {
                y[k].removeAttribute("class");
              }
              this.setAttribute("class", "same-as-selected");
              let selectTargetdivId = s.options[i].value;
              // this.onClickProduct(selectTargetdivId);
              $(".categoryDetails").hide();
              $("#categoryFeature" + selectTargetdivId).show(900);
              if (this.isMobile) {
                $("html, body").animate(
                  {
                    scrollTop:
                      $("#categoryFeature" + selectTargetdivId).offset().top -
                      40
                  },
                  2000
                );
              } else {
                $("html, body").animate(
                  {
                    scrollTop:
                      $("#categoryFeature" + selectTargetdivId).offset().top -
                      22
                  },
                  2000
                );
              }
              document
                .getElementById("defaultOpen" + selectTargetdivId)
                .click();
              break;
            }
          }
          h.click();
        });
        b.appendChild(c);
      }
      x[i].appendChild(b);
      a.addEventListener("click", function(e) {
        /*when the select box is clicked, close any other select boxes,
          and open/close the current select box:*/
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle("select-hide");
        this.classList.toggle("select-arrow-active");
      });
    }
    function closeAllSelect(elmnt) {
      /*a function that will close all select boxes in the document,
        except the current select box:*/
      var x,
        y,
        i,
        xl,
        yl,
        arrNo = [];
      x = document.getElementsByClassName("select-items");
      y = document.getElementsByClassName("select-selected");
      xl = x.length;
      yl = y.length;
      for (i = 0; i < yl; i++) {
        if (elmnt == y[i]) {
          arrNo.push(i);
        } else {
          y[i].classList.remove("select-arrow-active");
        }
      }
      for (i = 0; i < xl; i++) {
        if (arrNo.indexOf(i)) {
          x[i].classList.add("select-hide");
        }
      }
    }
    /*if the user clicks anywhere outside the select box,
      then close all select boxes:*/
    document.addEventListener("click", closeAllSelect);
    if (this.isMobile) {
      $(".categories").hide();
      $(".mcategory").show();
      $(".breakLine").show();
    } else {
      $(".mcategory").hide();
      $(".categories").show();
      $(".breakLine").hide();
    }
  }
};
</script>
<style scoped>
.category {
  position: relative;
  background-attachment: fixed;
  background-size: 100% auto;
  position: relative;
  margin-bottom: 0px;
}

.categoryBg {
  padding: 30px 75px 0px 75px;
}

.categoryBg .categoryBody {
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  text-align: center;
  border-radius: 10px;
}

.category .top_curve {
  background: url("~@/assets/img/curveShapeWhite.png") top center;
  top: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.category_label {
  font-size: 14px;
  text-align: center;
  padding-top: 0;
}

.category .bottom_curve {
  background: url("~@/assets/img/curveShapeWhiteUp.png") top center;
  bottom: 0rem;
  background-size: cover;
  height: 5rem;
  width: 100%;
  position: absolute;
  z-index: 100;
}

.categoryBody .header {
  color: #333;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.categoryBody .categories {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.categoryBody .categories .reason {
  flex-basis: 23%;
  background: rgba(255, 255, 255, 0.15);
  background: rgba(214, 46, 47, 0.95);
  margin: 10px;
  color: #fff;
  padding: 15px;
  border-radius: 5px;
  transition: all 0.3s;
  cursor: pointer;
}
.categoryBody .categories .reason:hover {
  background: rgba(214, 46, 47, 1);
}
.categoryBody .categories .reason a h6 {
  color: #fff;
}
.categoryBody .categories .reason a img {
  transition: all 0.3s;
  height: 80px;
}

.categoryBody .nextArrow a .arrow {
  height: 30px;
  width: 30px;
  margin: 10px auto;
  background-image: url("~@/assets/img/catagories/Arrow-01.png");
  background-size: 100% 100%;
  transition: all 0.3s;
}
.categoryBody .reason a {
  text-decoration: none;
}

.categoryBody .reason:hover .nextArrow a .arrow {
  background-image: url("~@/assets/img/catagories/Arrow-02.png");
  transform: translateX(0px);
}
.categoryBody .reason:hover a img {
  transform: scale(1.15);
}

.reason i {
  color: darkred;
  margin-top: 15px;
}

.rightToLeftAnimation {
  display: block !important;
  font-size: 200%;
  animation: rightToLeft 0.9s ease-in-out forwards;
}

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
