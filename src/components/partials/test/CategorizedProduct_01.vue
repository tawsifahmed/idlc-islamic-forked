<template>
    <section>
            <!--CATEGORIZED PORDUCT Part Start-->

<!-- <div id="topBreak"></div> -->
<!--CATEGORIZED PORDUCT Part End-->
<div class="productFeatures">
    <div class="categoryDetails"   id="categoryFeature1">
        <div class="container-lg">
            <!-- <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive ">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam vel adipisci eligendi recusandae veritatis vitae. Consequatur suscipit quo atque dignissimos esse aperiam doloribus vitae.</p>
            </div> -->
        </div>
<br>
          <div class="container-lg">
              <div class="tab">
                  <button class="tablinks1" @click="keyFeatureTabOpen( 'feature',$event)" id="defaultOpen1">Feature</button>
                  <button class="tablinks1" @click="keyFeatureTabOpen( 'eligibility',$event)">Eligibility</button>
                  <button class="tablinks1" @click="keyFeatureTabOpen( 'howCanIUse',$event)">How I can use this loan</button>
                  <button class="tablinks1" @click="keyFeatureTabOpen( 'requiredDocument',$event)">Required Document</button>
              </div>

              <div id="feature" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>Financing up to 80% of the apartment price including Registration costs</li>
                      <li><span class="icon-check-square-o"></span>Up to 25 years’ loan term</li>
                      <li><span class="icon-check-square-o"></span>Customers can take loan to purchase an apartment without incurring registration costs.</li>
                      <li><span class="icon-check-square-o"></span>Full / partial early payment option of the loan amount before expiry.</li>
                      <li><span class="icon-check-square-o"></span>No hidden charges</li>
                      <li><span class="icon-check-square-o"></span>Transparent process in determining interest rate</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>

              <div id="eligibility" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                      <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                      <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>

              <div id="howCanIUse" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>
              <div id="requiredDocument" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following 
                        .</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                  <a href="#" class="tabcontent1Button">Download</a>
              </div>
          </div>
      </div>
</div>
    </section>
</template>
<script>

   export default {
        name: "CategorizedProduct",
        data() {
            return {
            prev: "<span class='icon-chevron-left'></span>",
            next: "<span class='icon-chevron-right'></span>"
            }
        },
        methods: {
            keyFeatureTabOpen: function(cityName,event) {
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
                var newElement = document.getElementById(cityName);
                event.target.className += " active";
    
            }
        }

    }
</script>
<style lang="" scoped>
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
    @media screen and (max-width: 600px){
        .categories {
            display: none;
        }
        .mcategory {
            display: block;   
        }
    }
</style>