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
                            <label for="colFormLabel" class="col-sm-12 col-form-label category_label">I want to take a loan for</label>
                            <div class="col-md-6 col-sm-12">
                                <div class="custom-select">
                                    <select class="" id="selectProductsItem">
                                        <option>Select One</option>
                                        <option value="1">Lorem ipsum dolor sit.</option>
                                        <option value="2">Lorem ipsum dolor sit.</option>
                                        <option value="3">Lorem ipsum dolor sit.</option>
                                        <option value="4">Lorem ipsum dolor sit.</option>
                                        <option value="5">Lorem ipsum dolor sit.</option>
                                        <option value="6">Lorem ipsum dolor sit.</option>
                                        <option value="7">Lorem ipsum dolor sit.</option>
                                        <option value="8">Lorem ipsum dolor sit.</option>
                                    </select>
                                    <!-- <span class="spanx">Select One</span> -->
                                    <!-- <span class="spanxDownArrow"></span> -->
                                </div>
                            </div>
                        </div>

                    </form>
                    <div class="categories">
                            <div data-id="1" class="reason productsItem">
                                <a>
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Apartment-Purchase-Loan.png" >

                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </a>
                            </div>
                            <div data-id="2"  class="reason productsItem">
                                <a>
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Home-Equity-Loan.png"  >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>

                            <div data-id="3"  class="reason productsItem">
                                <a >

                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Home-Loan-Shield.png"  >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>
                            <div data-id="4"  class="reason productsItem">
                                <a >
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Construction-Loan.png"  >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>
                            <div data-id="5"  class="reason productsItem">
                                <a >
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Affordable-Home-Loan.png" >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>

                            <div data-id="6"  class="reason productsItem">

                                <a>
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Semi-Paka-Loan.png" >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>
                            <div data-id="7"  class="reason productsItem">
                                <a>
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/House-Purchase-Loan.png" >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>
                            <div data-id="8"  class="reason productsItem">
                                <a>
                                    <h6>Lorem ipsum dolor sit.</h6>
                                    <img alt="Retirement" src="~@/assets/img/catagories/Commercial-Space-Purchase-Loan.png" >
                                </a>
                                <div class="nextArrow">
                                    <a><div class="arrow"></div></a>
                                </div>
                            </div>

                    </div>
                    <div class="mcategory" >
                         <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 1,nav:true}}" id="mcategoryProduct">
                            <div class="item">

                                <div data-id="1" class="reason productsItem">
                                    <a>
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Apartment-Purchase-Loan.png" >

                                        <div class="nextArrow">
                                            <a><div class="arrow"></div></a>
                                        </div>
                                    </a>
                                </div>
                                <div data-id="2"  class="reason productsItem">
                                    <a>
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Home-Equity-Loan.png"  >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>
                            </div>

                            <div class="item">

                                <div data-id="3"  class="reason productsItem">
                                    <a >

                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Home-Loan-Shield.png"  >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>
                                <div data-id="4"  class="reason productsItem">
                                    <a >
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Construction-Loan.png"  >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>
                            </div>

                            <div class="item">
                                <div data-id="5"  class="reason productsItem">
                                    <a >
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Affordable-Home-Loan.png" >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>
                                <div data-id="6"  class="reason productsItem">

                                    <a>
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Semi-Paka-Loan.png" >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>

                            </div>

                            <div class="item">
                                <div data-id="7"  class="reason productsItem">
                                    <a>
                                        <h6>Lorem ipsum dolor sit.</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/House-Purchase-Loan.png" >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>
                                <div data-id="8"  class="reason productsItem">
                                    <a>
                                        <h6>Commercial Space Loan</h6>
                                        <img alt="Retirement" src="~@/assets/img/catagories/Commercial-Space-Purchase-Loan.png" >
                                    </a>
                                    <div class="nextArrow">
                                        <a><div class="arrow"></div></a>
                                    </div>
                                </div>

                            </div>
                         </carousel>
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
    <div class="categoryDetails"   id="categoryFeature1">
        <span class="categoryPrevButton"  data-id="8"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="2"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive ">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum veniam vel adipisci eligendi recusandae veritatis vitae. Consequatur suscipit quo atque dignissimos esse aperiam doloribus vitae.</p>
            </div>
        </div>

          <div class="container-lg">
              <div class="tab">
                  <button class="tablinks1" @click="openCity( 'feature',$event)" id="defaultOpen1">Feature</button>
                  <button class="tablinks1" @click="openCity( 'eligibility',$event)">Eligibility</button>
                  <button class="tablinks1" @click="openCity( 'howCanIUse',$event)">How I can use this loan</button>
                  <button class="tablinks1" @click="openCity( 'requiredDocument',$event)">Required Document</button>
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
                      <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                  <a href="#" class="tabcontent1Button">Download</a>
              </div>
          </div>
      </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature2">
        <span class="categoryPrevButton"  data-id="1"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="3"><a ><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
          <div class="container-lg">
              <div class="tab">
                  <button class="tablinks1" @click="openCity( 'feature2',$event)" id="defaultOpen2">Feature</button>
                  <button class="tablinks1" @click="openCity( 'eligibility2',$event)">Eligibility</button>
                  <button class="tablinks1" @click="openCity( 'howCanIUse2',$event)">How I can use this loan</button>
                  <button class="tablinks1" @click="openCity( 'requiredDocument2',$event)">Required Document</button>
              </div>

              <div id="feature2" class="tabcontent1">
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

              <div id="eligibility2" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                      <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                      <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>

              <div id="howCanIUse2" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>
              <div id="requiredDocument2" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                  <a href="#" class="tabcontent1Button">Download</a>
              </div>
          </div>
      </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature3">
        <span class="categoryPrevButton"  data-id="2"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="4"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
          <div class="container-lg">
              <div class="tab">
                  <button class="tablinks1" @click="openCity( 'feature3',$event)" id="defaultOpen3">Feature</button>
                  <button class="tablinks1" @click="openCity( 'eligibility3',$event)">Eligibility</button>
                  <button class="tablinks1" @click="openCity( 'howCanIUse3',$event)">How I can use this loan</button>
                  <button class="tablinks1" @click="openCity( 'requiredDocument3',$event)">Required Document</button>
              </div>

              <div id="feature3" class="tabcontent1">
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

              <div id="eligibility3" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                      <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                      <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>

              <div id="howCanIUse3" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
              </div>
              <div id="requiredDocument3" class="tabcontent1">
                  <ul>
                      <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                  </ul>
                  <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                  <a href="#" class="tabcontent1Button">Download</a>
              </div>
          </div>
      </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature4">
        <span class="categoryPrevButton"  data-id="3"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="5"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
        <div class="container-lg">
            <div class="tab">
                <button class="tablinks1" @click="openCity( 'feature4',$event)" id="defaultOpen4">Feature</button>
                <button class="tablinks1" @click="openCity( 'eligibility4',$event)">Eligibility</button>
                <button class="tablinks1" @click="openCity( 'howCanIUse4',$event)">How I can use this loan</button>
                <button class="tablinks1" @click="openCity( 'requiredDocument4',$event)">Required Document</button>
            </div>

            <div id="feature4" class="tabcontent1">
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

            <div id="eligibility4" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                    <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                    <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>

            <div id="howCanIUse4" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>
            <div id="requiredDocument4" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                <a href="#" class="tabcontent1Button">Download</a>
            </div>
        </div>
    </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature5">
        <span class="categoryPrevButton"  data-id="4"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="6"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
        <div class="container-lg">
            <div class="tab">
                <button class="tablinks1" @click="openCity( 'feature5',$event)" id="defaultOpen5">Feature</button>
                <button class="tablinks1" @click="openCity( 'eligibility5',$event)">Eligibility</button>
                <button class="tablinks1" @click="openCity( 'howCanIUse5',$event)">How I can use this loan</button>
                <button class="tablinks1" @click="openCity( 'requiredDocument5',$event)">Required Document</button>
            </div>

            <div id="feature5" class="tabcontent1">
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

            <div id="eligibility5" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                    <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                    <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>

            <div id="howCanIUse5" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>
            <div id="requiredDocument5" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                <a href="#" class="tabcontent1Button">Download</a>
            </div>
        </div>
    </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature6">
        <span class="categoryPrevButton"  data-id="5"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="7"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
        <div class="container-lg">
            <div class="tab">
                <button class="tablinks1" @click="openCity( 'feature6',$event)" id="defaultOpen6">Feature</button>
                <button class="tablinks1" @click="openCity( 'eligibility6',$event)">Eligibility</button>
                <button class="tablinks1" @click="openCity( 'howCanIUse6',$event)">How I can use this loan</button>
                <button class="tablinks1" @click="openCity( 'requiredDocument6',$event)">Required Document</button>
            </div>

            <div id="feature6" class="tabcontent1">
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

            <div id="eligibility6" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                    <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                    <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>

            <div id="howCanIUse6" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>
            <div id="requiredDocument6" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                <a href="#" class="tabcontent1Button">Download</a>
            </div>
        </div>
    </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature7">
        <span class="categoryPrevButton"  data-id="6"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="8"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Lorem ipsum dolor sit.
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
        <div class="container-lg">
            <div class="tab">
                <button class="tablinks1" @click="openCity( 'feature7',$event)" id="defaultOpen7">Feature</button>
                <button class="tablinks1" @click="openCity( 'eligibility7',$event)">Eligibility</button>
                <button class="tablinks1" @click="openCity( 'howCanIUse7',$event)">How I can use this loan</button>
                <button class="tablinks1" @click="openCity( 'requiredDocument7',$event)">Required Document</button>
            </div>

            <div id="feature7" class="tabcontent1">
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

            <div id="eligibility7" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                    <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                    <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>

            <div id="howCanIUse7" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>
            <div id="requiredDocument7" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
                <a href="#" class="tabcontent1Button">Download</a>
            </div>
        </div>
    </div>
    <div class="categoryDetails"  style="display: none;" id="categoryFeature8">
        <span class="categoryPrevButton"  data-id="7"><a><span class="icon-arrow-left"></span></a></span>
        <span class="categoryNextButton"  data-id="1"><a><span class="icon-arrow-right"></span></a></span>
        <div class="container-lg">
            <div class="productPageTitleDetai sectionTitle">
                <h2 style="text-align: center; " class="h2Responsive">
                    Commercial Space Loan
                </h2>
                <h6 class="categoriesTagline">Sample Tagline</h6>
                <p>Home is where our dreams begin. Home is where your happiness starts. Home is shelter to every phase of your life. IDLC Lorem ipsum dolor sit. gives you the confidence to purchase own space to live in freedom.</p>
            </div>
        </div>
        <div class="container-lg">
            <div class="tab">
                <button class="tablinks1" @click="openCity('feature8',$event)" id="defaultOpen8">Feature</button>
                <button class="tablinks1" @click="openCity('eligibility8',$event)">Eligibility</button>
                <button class="tablinks1" @click="openCity('howCanIUse8',$event)">How I can use this loan</button>
                <button class="tablinks1" @click="openCity( 'requiredDocument8',$event)">Required Document</button>
            </div>

            <div id="feature8" class="tabcontent1">
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

            <div id="eligibility8" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>Regular income from a sustainable & valid source of employment or business.</li>
                    <li><span class="icon-check-square-o"></span>Age of the main income earner should be within 65 years at the end of proposed loan tenure.</li>
                    <li><span class="icon-check-square-o"></span>Apartment being purchased should be an eligible & enforceable security.</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>

            <div id="howCanIUse8" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You can use this loan to purchase an apartment for individual ownership</li>
                </ul>
                <router-link to="/apply-for-loan" class="tabcontent1Button">Apply Now</router-link>
            </div>
            <div id="requiredDocument8" class="tabcontent1">
                <ul>
                    <li><span class="icon-check-square-o"></span>You will require some mandatory & supplementary documents to avail this loan. To know more details about the required documents of the Lorem ipsum dolor sit. download the following PDF.</li>
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
            openCity: function(cityName,event) {
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
        display: flex;
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
