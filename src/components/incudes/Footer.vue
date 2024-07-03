<template>
  <div>
    <footer id="">
      <section class="">
        <div class="">
          <div class="row" style="margin: 0 !important">
            <footer class="new_footer_area bg_color">
              <div class="new_footer_top">
                <div class="container">
                  <div class="row">
                    <div class="col-lg-3 col-md-6">
                      <div
                        class="f_widget about-widget wow fadeInLeft social_icons "
                        data-wow-delay="0.2s"
                        style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
                      >
                        <h3
                          class="f-title f_600 t_color f_size_18 onMobileDisplayNone"
                        >
                          Our Products
                        </h3>
                        <ul class="list-unstyled f_list onMobileDisplayNone">
                          <li>
                            <router-link to="/deposit-products">Deposit Products</router-link>
                          </li>
                          <li>
                            <router-link to="/financing-products/consumer">Financing Products (Consumer)</router-link>
                          </li>
                          <li>
                            <router-link to="/financing-products/business">Financing Products (Business)</router-link>
                          </li>

                        </ul>
                        <br />
                        <div>
                          <h3 class="f-title f_600 t_color f_size_18 mb-0">
                            Connect With Us
                          </h3>
                          <span class="breakLine"><br /></span>
                          <ul class="footerSocialIcons">
                            <li>
                              <a
                                href="https://www.facebook.com/IDLC.BD"
                                class="contact-us-facebook"
                                target="_blank"
                              >
                                <span
                                  class="fab fa-facebook-f fa-fw icon-facebook contact-us-facebook"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a
                                href="https://www.linkedin.com/company/idlc-finance-limited"
                                class="contact-us-linkedin"
                                target="_blank"
                                ><span
                                  class="fab fa-linkedin-in icon-linkedin contact-us-linkedin"
                                ></span
                              ></a>
                            </li>
                            <li>
                              <a
                                href="https://www.youtube.com/user/idlcfinancelimited"
                                class="contact-us-youtube"
                                target="_blank"
                              >
                                <span
                                  class="fab fa-youtube icon-youtube-play contact-us-youtube"
                                ></span>
                              </a>
                            </li>
                            <li>
                              <a href="tel:16409" class="footerCallBtn"> </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="onDesktopDisplayNone">
                        <app-MFooter />
                      </div>
                    </div>

                    <div class="col-lg-3 col-md-6 onMobileDisplayNone">
                      <div
                        class="f_widget about-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.4s"
                        style="visibility: visible; animation-delay: 0.4s; animation-name: fadeInLeft;"
                      >
                        <h3 class="f-title f_600 t_color f_size_18">
                          About Us
                        </h3>
                        <ul class="list-unstyled f_list">
                          <li>
                            <router-link to="/idlc-at-a-glance"
                              >IDLC at a Glance
                              </router-link>
                          </li>
                          <li>
                            <router-link to="/news-events"
                              >News & Events
                              </router-link>
                          </li>
                          <li>
                            <router-link to="/shariah-supervisory-committee"
                              >Shariah Supervisory Committee
                              </router-link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 onMobileDisplayNone">
                      <div
                        class="f_widget about-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.6s"
                        style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInLeft;"
                      >
                        <h3 class="f-title f_600 t_color f_size_18">
                          Quick Links
                        </h3>
                        <ul class="list-unstyled f_list">

                          <li><router-link to="/faq">FAQ</router-link></li>
                          <li><router-link to="/shariah-supervisory-committee">Shariah Supervisory Committee</router-link></li>
                          <li><router-link to="/content-repository/documents">Content Repository (Documents)</router-link></li>
                          <li><router-link to="/content-repository/documents">Content Repository (Videos)</router-link></li>

                        </ul>
                      </div>
                    </div>
                    <div class="col-lg-3 col-md-6 onMobileDisplayNone">
                      <div
                        class="f_widget social-widget pl_70 wow fadeInLeft"
                        data-wow-delay="0.8s"
                        style="visibility: visible; animation-delay: 0.8s; animation-name: fadeInLeft;"
                      >
                        <h3 class="f-title f_600 t_color f_size_18">
                          Location Map
                        </h3>
                        <div
                          id="map"
                          class=""
                          style="position: relative; overflow: hidden; border: 1px solid #bebbbb; border-radius: 7px;"
                        >
                          <a
                            href="https://www.google.com/maps/place/IDLC+Head+Office/@23.78232,90.41637,12z/data=!4m5!3m4!1s0x0:0x249d3e7f09dd6e20!8m2!3d23.7823198!4d90.4163699?hl=en"
                            target="_blank"
                          >
                            <!-- <iframe
                                              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29204.285697454092!2d90.39010513188641!3d23.799542112155386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c79ec6c9486b%3A0x249d3e7f09dd6e20!2sIDLC%20Head%20Office!5e0!3m2!1sen!2sbd!4v1599763272743!5m2!1sen!2sbd"
                                              width="100%"
                                              height="100%"
                                              frameborder="0"
                                              style="border: 0; "
                                              allowfullscreen=""
                                              aria-hidden="false"
                                              tabindex="0"
                                            ></iframe> -->
                            <img
                              src="~@/assets/img/map.jpg"
                              alt=""
                              width="100%"
                            />
                          </a>
                        </div>
                        <div
                          class="f_widget about-widget wow fadeInLeft social_icons"
                          data-wow-delay="0.2s"
                          style="visibility: visible; animation-delay: 0.2s; animation-name: fadeInLeft;"
                        >
                          <ul class="list-unstyled social  address_text">
                            <li>
                              <router-link
                                to="/contact-us/0"
                                class="f-title  t_color f_size_18"
                                style="font-size: 12px; "
                              >
                                <span class="" style="font-weight: bold; "
                                  >IDLC Finance PLC Corporate Head
                                  Office</span
                                >
                                <br />
                                Bay’s Galleria (1st Floor), 57 Gulshan Avenue,
                                Dhaka 1212, Bangladesh</router-link
                              >
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="footer_bg">
                  <div class="footer_bg_one"></div>
                  <div class="footer_bg_two"></div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </section>

      <!-- <section class="footer-bottom" style="background-color: #161616;">
        <div class="container">
          <ul>
            <li>
              <router-link
                :to="{ name: 'RegulatoryDisclosure', params: { id: 'nis' } }"
                >NIS</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'RegulatoryDisclosure', params: { id: 'ed' } }"
                >Revised Rate of Excise Duty</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'RegulatoryDisclosure', params: { id: 'camd' } }"
                >Disclosures on CAMD</router-link
              >
            </li>
            <li>
              <router-link
                :to="{ name: 'RegulatoryDisclosure', params: { id: 'rd' } }"
                >Fees and Charges</router-link
              >
            </li>
            <li><router-link to="/e-tender">E-TENDERS</router-link></li>
            <li><router-link to="/sitemap">Sitemap</router-link></li>
            <li><router-link to="#">ACC Hotline Number - 106</router-link></li>
          </ul>
        </div>
      </section> -->
    </footer>

    <!-- <div id="quick_menu">
      <ul>

        <li
          v-b-tooltip.hover.right="'Let us help'"
          data-toggle="tooltip"
          data-placement="right"
          title="Let us help"
        >
          <router-link to="/get-in-touch-with-us" class=""
            ><img src="~@/assets/img/quick_menu_icons/Get-in-touch.png" alt=""
          /></router-link>
        </li>
        <li
          v-b-tooltip.hover.right="'Calculators'"
          data-toggle="tooltip"
          data-placement="right"
          title="Calculators"
        >
          <router-link to="/calculators"
            ><img src="~@/assets/img/quick_menu_icons/Calculator.png" alt=""
          /></router-link>
        </li>
        <li
          v-b-tooltip.hover.right="'Call us'"
          data-toggle="tooltip"
          data-placement="right"
          title="Call us"
          class="call-us-floating"
        >
          <a href="tel:16409" class="call-us-floating"
            ><img
              class="call-us-floating"
              src="~@/assets/img/quick_menu_icons/03.png"
              alt=""
              style="transform: rotate(90deg);"
          /></a>
        </li>
      </ul>
    </div> -->

    <!-- <div class="cc-contactpop fixed">
      <h3>Let Us Help You</h3>
      <div class="renseignement">
        <span class="icon-close"></span>
        <p>If you’d like to send us feedback, want to be become an author or have any other question/query, please fill out the form below and we will get back to you as soon as possible. </p>

      </div>
      <form method="post">
        <div class="form-group">
          <input type="text" name="name" placeholder="Your name"/>
        </div>
        <div class="form-group">
          <input type="email" name="email" placeholder="E-mail"/>
        </div>
        <div class="form-group">
          <input type="text" name="phone" placeholder="Phone number"/>
        </div>
        <div class="form-group">
          <textarea id="message" type="text" placeholder="Message"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div> -->
    <!-- <div id="fb-root"></div> -->
    <!-- Your Chat Plugin code -->
    <!-- <div class="fb-customerchat"
        attribution=setup_tool
        page_id="178375008882936">
      </div> -->
  </div>
</template>
<script>

export default {
  components: {
    AppMFooter: () => import("./MFooter")
  },
  mounted() {}
};
</script>

<style scoped>
.new_footer_area {
  background: #6f6f6f3d;
  width: 100%;
}

.new_footer_top {
  padding: 35px 0px 200px;
  position: relative;
  overflow-x: hidden;
}
@media screen and (max-width: 600px) {
  .new_footer_top[data-v-7d5a0c7f] {
    padding: 5px 0px 200px;
    position: relative;
    overflow-x: hidden;
  }
}
.new_footer_area .footer_bottom {
  padding-top: 5px;
  padding-bottom: 50px;
}
.footer_bottom {
  font-size: 14px;
  font-weight: 300;
  line-height: 20px;
  padding: 27px 0px;
}
.new_footer_top .company_widget p {
  font-size: 16px;
  font-weight: 300;
  line-height: 28px;
  margin-bottom: 20px;
}
.new_footer_top .company_widget .f_subscribe_two .btn_get {
  border-width: 1px;
  margin-top: 20px;
}
.btn_get_two:hover {
  background: transparent;
  color: #5e2ced;
}
.btn_get:hover {
  color: #fff;
  background: #6754e2;
  border-color: #6754e2;
  -webkit-box-shadow: none;
  box-shadow: none;
}

/*.new_footer_top .f_widget.about-widget .f_list li a:hover {*/
/*    color: #5e2ced;*/
/*}*/
.new_footer_top .f_widget.about-widget .f_list li {
  margin-bottom: 7px;
}
.f_widget.about-widget .f_list li:last-child {
  margin-bottom: 10px;
}
.f_widget.about-widget .f_list li {
  margin-bottom: 15px;
}
.f_widget.about-widget .f_list {
  margin-bottom: 0px;
}

.btn_get_two {
  -webkit-box-shadow: none;
  box-shadow: none;
  background: #5e2ced;
  border-color: #5e2ced;
  color: #fff;
}

.btn_get_two:hover {
  background: transparent;
  color: #5e2ced;
}

.new_footer_top .f-title {
  margin-bottom: 14px;
}
.f_600 {
  font-weight: 600;
}
.f_size_18 {
  font-size: 18px;
}

.new_footer_top .f_widget.about-widget .f_list li a {
  color: #212529;
  font-size: 0.8rem;
  display: inline-block;
  position: relative;
  text-decoration: none !important;
  font-weight: 500;
}
.new_footer_top .f_widget.about-widget .f_list li a::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: #333;
  transition: all 0.3s;
}
.new_footer_top .f_widget.about-widget .f_list li a:hover::after {
  width: 100%;
}

.new_footer_top .footer_bg {
  position: absolute;
  bottom: 0;
  background: url("~@/assets/img/Footer_BG-03.png") no-repeat scroll center 0;
  width: 100%;
  height: 266px;
  z-index: -1;
}

.new_footer_top .footer_bg .footer_bg_one {
  background: url("~@/assets/img/volks.gif") no-repeat center center;
  width: 330px;
  height: 105px;
  background-size: 100%;
  position: absolute;
  bottom: 0;
  left: 30%;
  -webkit-animation: myfirst 22s linear infinite;
  animation: myfirst 22s linear infinite;
}

.new_footer_top .footer_bg .footer_bg_two {
  background: url("~@/assets/img/Cyclist_94.29.gif") no-repeat center center;
  width: 88px;
  height: 100px;
  background-size: 100%;
  bottom: 0;
  left: 38%;
  position: absolute;
  -webkit-animation: myfirst 30s linear infinite;
  animation: myfirst 30s linear infinite;
}

.similarProduct .owl-buttons {
  padding-top: 10px !important;
}

@-moz-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@-webkit-keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

@keyframes myfirst {
  0% {
    left: -25%;
  }
  100% {
    left: 100%;
  }
}

ul.list-unstyled.social li a {
  color: #2d2a29;
}

/************* quick_menu *****************/

/* FLOATING SIDEBAR */
div#quick_menu ul {
  clear: both;
  position: fixed;
  display: block;
  list-style-type: none;
  right: -3.2em;
  top: 15%;
  -webkit-animation: slideright 1s forwards;
  -webkit-animation-delay: 1.5s;
  animation: slideright 1s forwards;
  animation-delay: 1.5s;
  z-index: 111;
}

@keyframes slideright {
  100% {
    right: 0;
  }
}

div#quick_menu li {
  margin-bottom: 15px;
  padding: 10px;
  transform: rotate(270deg);
  background-color: #0000006e;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  -webkit-transition: width 0.5s, background-color 0.1s;
  transition: width 0.5s, background-color 0.1s;
  text-align: center;
}

div#quick_menu li a {
  font-size: 19px;
  text-transform: none;
  text-align: center;
  text-decoration: none;
  color: #ebebeb;
}

div#quick_menu li:hover {
  background-color: #d23839;
  color: #fff;
  cursor: pointer;
}

#quick_menu a img {
  width: 20px;
  transform: rotate(45deg);
}

.address_text li {
  padding: 8px 0px 0px 0px !important;
}
.onDesktopDisplayNone {
  display: none;
}
@media screen and (max-width: 600px) {
  .onMobileDisplayNone {
    display: none;
  }
  .onDesktopDisplayNone {
    display: block;
  }
}
/*************footer End*****************/

ul {
  list-style: none !important;
}
.footerSocialIcons {
  display: flex;
}
.footerSocialIcons li {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.footerSocialIcons li a {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  border-radius: 100px;
  color: #fff;
  font-size: 16px;
  transition: all 0.3s;
}
.footerSocialIcons li:nth-child(1) a {
  border: 2px solid #3b5998;
  background: #3b5998;
}
.footerSocialIcons li:nth-child(2) a {
  border: 2px solid #007bb5;
  background: #007bb5;
}
.footerSocialIcons li:nth-child(3) a {
  border: 2px solid #bb0000;
  background: #bb0000;
}
.footerSocialIcons li:nth-child(1) a:hover {
  color: #3b5998;
}
.footerSocialIcons li:nth-child(2) a:hover {
  color: #007bb5;
}
.footerSocialIcons li:nth-child(3) a:hover {
  color: #bb0000;
}

.footerSocialIcons li a:hover {
  background: #fff;
  text-decoration: none;
}
.footerSocialIcons li a.footerCallBtn {
  background-image: url("~@/assets/img/quick_menu_icons/02.png");
  background-size: cover;
  padding: 0;
}
.footerSocialIcons li a.footerCallBtn:hover {
  background-image: url("~@/assets/img/quick_menu_icons/01.png");
}
@media screen and (max-width: 768px) {
  .footerSocialIcons {
    justify-content: center;
  }
  .footerSocialIcons li {
    margin: 0 5px;
  }
}
</style>
