<template>
  <header
    class="globalNav noDropdownTransition"
    v-if="!isMobile()"
    style="    background: #fff;
    height: 70px;
    "
  >
    <div class="headerContainer">
      <div class="sideNavOpen" onclick="openNav()">
        <span class="sideNavOpenBar"></span>
        <span class="sideNavOpenBar"></span>
        <span class="sideNavOpenBar"></span>
      </div>
      <ul class="navRoot">
        <li style="display: none;"></li>
        <li class="navSection logo">
          <router-link class="rootLink item-home colorize" to="/"
            ><img src="~@/assets/img/logo/IDLC_NEW.png" alt="logo"
          /></router-link>
        </li>
        <li class="navSection primary">

          <ul class="desktop_menu">
            <!-- <li >
              <router-link to="/shariah-supervisory-committee" style="color: black;">
                Shariah Supervisory Committe
              </router-link>

            </li> -->
            <li >
              <router-link to="/deposit-products" style="color: black;">
                Deposit Products
              </router-link>

            </li>
            <li >
              <router-link to="/financing-products" style="color: black;">
                Financing Products
              </router-link>

            </li>
            <li >
              <router-link to="/faq" style="color: black;">
                FAQ
              </router-link>
            </li>
            <li class="drop_arrow">
              About
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/idlc-at-a-glance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Idlc-at-a-glance.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC at a Glance</h3>
                          <p class="subTitle">
                            About IDLC | Our Journey
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/shariah-supervisory-committee">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Our-management.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Shariah Committe</h3>
                          <p class="subTitle">
                            See our Shariah Team
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <!-- <li>
                      <a target="_blank" class="menu_link" href="https://idlc.com/our-achievement">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Our-achievement.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Our Achievements</h3>
                          <p class="subTitle">
                            Awards and Accolades
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a target="_blank" class="menu_link" href="https://idlc.com/news-and-events">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/News-_-Events.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">News & Events</h3>
                          <p class="subTitle">
                            Latest updates and media releases of IDLC
                          </p>
                        </div>
                      </a>
                    </li> -->
                  </div>

                </div>
              </ul>
            </li>


            <!-- test -->
            <!-- <li class="drop_arrow">
              Retail Loans
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_2">
                  <div class="block">
                    <li>

                      <router-link class="menu_link" to="/home-loan">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Home-Loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Home Loan</h3>
                          <p class="subTitle">
                            Live in the Freedom of your own Home
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/car-loan">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Car-Loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Car Loan</h3>
                          <p class="">
                            Fuel your Dreams
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/personal-loan">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Personal-loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Personal Loan</h3>
                          <p class="subTitle">
                            Leave no Desire Unfulfilled
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                  <div class="block blockRed">
                    <h6 class="redBlockHeading">
                      IDLC 38 Years Growing Together
                    </h6>
                    <a :href="menuVideos.link" target="_blank">
                      <img :src="menuVideos.image" alt="image" />
                    </a>
                    <p class="videoSubTitle">
                      Through easy financing, we have spread happiness and
                      prospered together.
                    </p>
                  </div>
                </div>
              </ul>
            </li> -->
            <!-- <li class="drop_arrow">
              Business Loans
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/sme-loan">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/SME-loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">SME</h3>
                          <p class="subTitle">
                            Grow your business. Achieve your dreams
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="menu_link"
                        :to="{
                          name: 'SMELoan',
                          params: { Purnota: 'Purnota' }
                        }"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Purnota.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">
                            Purnota (Women Entrepreneur Loan)
                          </h3>
                          <p class="subTitle">
                            Take the Challenge to Move the World
                          </p>
                        </div>
                      </router-link>
                    </li>

                    <li>
                      <router-link class="menu_link" to="/supply-chain-finance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Supply-chain-finance.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Supply Chain Finance</h3>
                          <p class="subTitle">
                            Caters to front and back end value chain financing
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/corporate-loan">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Corporate-Loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Corporate Loan</h3>
                          <p class="subTitle">
                            Make your Corporate Endevour a Success
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/structured-finance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Structured-finance.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Structured Finance</h3>
                          <p class="subTitle">
                            Accomplish your Unique Needs through our
                            Comprehensive Solutions
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                </div>
              </ul>
            </li> -->
            <!-- <li class="drop_arrow">
              Deposit
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_4">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/term-deposit">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Fixed-deposit.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Term Deposit</h3>
                          <p class="subTitle">
                            Save Today, for a Better Tomorrow
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/priority">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Priority.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Priority</h3>
                          <p class="subTitle">
                            Gain your Access to Privilege
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <a
                        class="online_deposit_click menu_link "
                        target="_blank"
                        href="https://www.idlc.com/depositreq"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/online-deposit-icon.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Online Deposit</h3>
                          <p class="subTitle">
                            Open IDLC Deposit Account Online
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/online-dps">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Online-DPS.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Online DPS</h3>
                          <p class="subTitle">
                            Convenient Savings Online
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>

                </div>
              </ul>
            </li> -->
            <!-- <li class="drop_arrow">
              Capital Market
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_4">
                  <div class="block">
                    <li>
                      <a
                        class="menu_link"
                        href="https://securities.idlc.com/"
                        target="_blank"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Stock-brokerage.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC Securities Limited</h3>
                          <p class="subTitle">
                            Stock Brokerage
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        class="menu_link"
                        href="https://www.idlc.com/investments/public/"
                        target="_blank"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Investment-bank.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC Investments Limited</h3>
                          <p class="subTitle">
                            Investment Bank
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <a
                        class="menu_link"
                        href="https://idlc.com/aml/"
                        target="_blank"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Mutual-funds.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC Asset Management Limited</h3>
                          <p class="subTitle">
                            Mutual Funds and Venture Capital
                          </p>
                        </div>
                      </a>
                    </li>
                  </div>
                </div>
              </ul>
            </li> -->

            <!-- <li class="drop_arrow">
              Investor Relations
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_2">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/financial-reports">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Financial-reports.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Financial Reports</h3>
                          <p class="subTitle">
                            Annual and Quarterly Reports | Financial Highlights
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="menu_link"
                        to="/price-sensitive-information-and-notices"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Price-sensitive-information-_-notices.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">
                            Price-Sensitive Information & Notices
                          </h3>
                          <p class="subTitle">
                            IDLC Stock Updates and Notices for Shareholders
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/corporate-governance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/CORPORATE-GOVERNANCE.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">
                            Corporate Governance
                          </h3>
                          <p class="subTitle">
                            Established a corporate governance system suited for
                            the organization
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                  <div class="block">
                    <li>
                      <router-link
                        class="menu_link"
                        to="/financial-information-for-investors-and-shareholders"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Financial-information-for-investors-and-shareholders.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">
                            Financial Information for Investors/Shareholders
                          </h3>
                          <p class="subTitle">
                            Stock Information | Shareholding Composition |
                            Investment Calculator
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="menu_link"
                        :to="{
                          name: 'RegulatoryDisclosure',
                          params: { id: 'rd' }
                        }"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Regulatory-disclosures.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Other Regulatory Disclosures</h3>
                          <p class="subTitle">
                            Important Information for Regulators
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link
                        class="menu_link"
                        :to="{
                          name: 'Dividend'
                        }"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/DIVIDEND.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Dividend</h3>
                          <p class="subTitle">
                            Focused on the underlying value of dividends and
                            earnings
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                </div>
              </ul>
            </li> -->
            <!-- <li class="drop_arrow">
              Sustainability
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/csr">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/CSR.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">CSR</h3>
                          <p class="subTitle">
                            Sustainable Development by creating Long-term Value
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/green-finance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Green-finance.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Green and Sustainable Finance</h3>
                          <p class="subTitle">
                            Towards a better and sustainable future
                          </p>
                        </div>
                      </router-link>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/our-commitments">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Our-commitments.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Our Commitments</h3>
                          <p class="subTitle">
                            Sustainable practices within the organization
                          </p>
                        </div>
                      </router-link>
                    </li>
                  </div>
                  <div class="block">
                    <li>
                      <a
                        class="menu_link"
                        target="_blank"
                        href="https://idlc.com/sustainability-report/"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/08.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Annual Sustainability Report</h3>
                          <p class="subTitle">
                            We adopt GRI guidelines for sustainability reports
                          </p>
                        </div>
                      </a>
                    </li>
                    <li>
                      <router-link class="menu_link" to="/unep-fi-activities">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/unep.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Unep FI Activities</h3>
                          <p class="subTitle">
                            Towards a better and sustainable future
                          </p>
                        </div>
                      </router-link>
                    </li>

                    <li>
                      <router-link class="menu_link" to="/idlc-financial-literacy-wing">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Our-commitments.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC Financial Literacy Wing</h3>
                        </div>
                      </router-link>
                    </li>
                  </div>
                </div>
              </ul>
            </li> -->
            <!-- <li class="drop_arrow drop_arrow">
              Career
              <ul class="desktop_menu_sub ">
                <div
                  class="desktop_menu_sub_blocks desktop_menu_sub_blocks_4 rigth"
                >
                  <div class="block">
                    <li>
                      <a
                        class="menu_link"
                        href="https://apps.idlc.com/career#/" target="_blank"
                      >
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Explore-jobs-at-IDLC.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Explore Jobs at IDLC</h3>
                          <p class="subTitle">
                            View Latest Vacancies
                          </p>
                        </div>
                      </a>
                    </li>

                  </div>
                </div>
              </ul>
            </li> -->

            <!-- test -->
          </ul>
          <ul>
            <!-- <li style="position: relative;">
              <a
                class="rootLink item-company colorize"
                style="padding: 10px 10px 0 10px; "
                v-b-tooltip.hover.bottom="'Favourites'"
                @click="openModal()"
              >
                <div class="mainmenuIcon calculatorIcon"></div>
              </a>
              <div class="recentlyVisitedPages" v-if="modalShow">
                <a
                  class="recentlyVisitedClose"
                  @click.stop="modalShow = !modalShow"
                  ><strong>X</strong></a
                >
                <ul>
                  <li
                    v-for="(favouriteitem, index) in favouriteData"
                    :key="index"
                    @click.stop="modalShow = !modalShow"
                  >
                    <router-link :to="{ name: favouriteitem.name }">
                      <h6>{{ favouriteitem.title }}</h6>
                      <p>{{ favouriteitem.description }}</p>
                    </router-link>
                  </li>
                </ul>
              </div>
            </li> -->
          </ul>

          <!-- <router-link
            v-b-tooltip.hover.bottom="'Locate Us'"
            class="rootLink item-company colorize"
            style="padding: 10px 10px 0 10px"
            :to="{ name: 'ContactUs', params: { branchId: '0' } }"
          >
            <div class="mainmenuIcon comparisonIcon"></div>
          </router-link> -->
        </li>

        <li class="navSection secondary" style="display: none">
          <a class="rootLink item-support colorize" href="#"> Support </a>
          <a
            class="rootLink item-dashboard colorize"
            data-adroll-segment="submit_two"
            href="#"
          >
            Sign in
          </a>
        </li>
        <li class="navSection navSearch">
          <form action="" v-on:submit.prevent>
            <vue-typed-js
              :strings="[
                'Search...',
                'IDLC Islamic',
                'Shariah Supervisory Committee',
                'Financing Products',
                'Deposit Products',
                'FAQ'
              ]"
              :loop="true"
              :attr="'placeholder'"
            >
              <input
                @keyup="getSearchData()"
                style="color:#000000; text-decoration: none; font-size: 14px;"
                type="text"
                class="typing"
                id="userInput"
                name=""
                v-model="search"
              />
            </vue-typed-js>

            <button type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>
        </li>
      </ul>
    </div>

    <div class="searchData" v-show="search" style="max-width: 100%;">
      <button
        @click="search = ''"
        style="position: absolute; top: 15px; right: 30px; font-size:30px; padding: 5px 10px; line-height: 1; border-radius: 100px; border: 2px solid #00a6b4; color: #00a6b4;"
      >
        <span class="icon-close"></span>
      </button>
      <div class="searchBody" style="max-width: 100%;">
        <div class="container">
          <div
            class="group"
            v-for="(searchItems, index) in searchData.exceptNews"
            :key="index"
          >
            <h5 class="groupTitle">{{ index }}</h5>
            <ul class="seachList">
              <li v-for="(searchItem, index) in searchItems" :key="index">
                <router-link
                  :to="searchItem.page_link"
                  @click.native="search = ''"
                  >{{ searchItem.title }}</router-link
                >
              </li>
            </ul>
          </div>
          <div
            class="group"
            v-for="(searchItems, index) in searchData.allResults"
            :key="index"
          >
            <h5 class="groupTitle">{{ index }}</h5>
            <ul class="seachList">
              <li v-for="(searchItem, index) in searchItems" :key="index">
                <router-link
                  :to="searchItem.page_link"
                  @click.native="search = ''"
                  >{{ searchItem.title }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <!-- <transition-group name="list" tag="ul">
                <li class="singleResult" v-for="data in filteredBySearch" v-if="search" v-bind:key="data">
                  <h4>{{ data.title }}</h4>
                  <p >{{ data.description}}</p>
                </li>
              </transition-group> -->
        <li
          class="warning singleResult text-center"
          v-if="searchData.length <= 0"
        >
          <router-link
            :to="nolink"
            @click.native="search = ''"
            style=" margin: auto; text-align: center; display: block;color: black;"
            ><h4>No results found!</h4></router-link
          >
        </li>
      </div>
    </div>
    <!-- <div class="customPopUp" @click.stop="modalShow = !modalShow" v-if="modalShow" newsData="newsData" >
          <div class="customModalBody" @click.stop="" style="width: 350px;">
            <div class="customModalHeader">
              <button class="closeCustomModal" @click.stop="modalShow = !modalShow"><span class="icon-times"></span></button>
              <h5>Favourite</h5>
            </div>
            <div class="customModalContent">


              <div  class="details" style="border: none; padding: 0">
                <ul id="example-1">
                  <li v-for="(favouriteitem,index) in favouriteData" :key="index" @click.stop="modalShow = !modalShow" style="list-style-type:square">
                    <router-link :to="{ name: favouriteitem.name}"  class="favoritePages " ><strong>{{favouriteitem.title}}</strong></router-link>
                    <router-link :to="{ name: favouriteitem.name}"  class="favoritePages" >{{favouriteitem.description}}</router-link>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div> -->
  </header>
</template>

<script>
import axios from "axios";

export default {
  name: "Header",
  components: {
    // Loader: () => import('./Loader'),
  },

  data() {
    return {
      nolink: "",
      isClicked: false,
      searchData: "",
      search: "",
      modalShow: false,
      favouriteData: "",
      headerData: [],
      menuVideos: ""
    };
  },
  methods: {
    isMobile() {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    },
    //   var mWidth = document.getElementById("mySidenav").style,
    // mWidth="0";
    /* Set the width of the side navigation to 0 */
    closeNav: function() {
      document.getElementById("mySidenav").style.width = "0";
    },

    headerMouse: function() {
      var n = document.getElementsByTagName("BODY")[0],
        t = document.getElementById("circle1").offsetLeft,
        i = document.getElementById("circle1").offsetTop + 370,
        r = document.getElementById("circle2").offsetLeft,
        u = document.getElementById("circle2").offsetTop - 520,
        c3left = document.getElementById("circle3").offsetLeft,
        c3top = document.getElementById("circle3").offsetTop + 650,
        c4left = document.getElementById("circle4").offsetLeft,
        c4top = document.getElementById("circle4").offsetTop + 810;
      n.onmousemove = function(f) {
        var e = (f = f || window.event).clientX - n.offsetLeft,
          o = f.clientY - n.offsetTop;
        this.mouseParallax("circle1", t, i, e, o, 20);
        this.mouseParallax("circle2", r, u, e, o, 20);
        this.mouseParallax("circle3", c3left, c3top, e, o, 20);
        this.mouseParallax("circle4", c4left, c4top, e, o, 20);
      };
    },

    mouseParallax: function(n, t, i, r, u, f) {
      var e = document.getElementById(n),
        o = e.parentNode,
        s = parseInt(o.offsetWidth),
        h = parseInt(o.offsetHeight);
      e.style.left =
        t - ((r - (parseInt(e.offsetWidth) / 2 + t)) / s) * f + "px";
      e.style.top =
        i - ((u - (parseInt(e.offsetHeight) / 2 + i)) / h) * f + "px";
    },
    getSearchData() {
      axios
        .get("get-search", {
          params: {
            search_query: this.search
          }
        })
        .then(response => {
          if (response.status == 200) {
            //console.log(response.data.details);
            this.searchData = response.data.details;
          }
        })
        .catch(error => console.log(error));
    },

    getHeaderData() {
      axios
        .get("get-header-detail")
        .then(response => {
          if (response.status == 200) {
            this.headerData = response.data.details;
            this.menuVideos = response.data.details.menuVideos;
          }
        })
        .catch(error => console.log(error));
    },
    openModal() {
      this.modalShow = true;
      this.favouriteData = this.$store.state.favourite;
      /*
        this.favouriteTitleData = this.$store.state.favouriteRouteTitle;
        this.favouriteTitleData = new Set(this.favouriteTitleData);
        console.log(this.favouriteData);*/
    }
  },
  // async beforeRouteEnter(to, from, next) {
  //   next(vm => {  // <= HERE you execute next
  //     vm.getHeaderData();
  //   });
  // },

  created() {
    this.getHeaderData();
  }
};
</script>

<style lang="" scoped>
.favoritePages {
  top: 100%;
  position: absolute;
  right: 138px;
  /* bottom: 57%; */
  z-index: 1000;
}

.searchData {
  position: fixed;
  right: 0;
  top: 65px;
  /* height: 500px; */
  width: 100%;
  z-index: 1000000;
}

.searchBody {
  width: 100vw;
  height: 100vh;
  background: #fff;
  padding: 100px 0;
  z-index: 1000000;
  overflow-y: scroll;
}
.searchBody .group {
  margin-bottom: 30px;
  text-align: left;
}
.searchBody .group .groupTitle {
  margin-bottom: 15px;
}
.searchBody .group .seachList {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
.searchBody .group .seachList li {
  flex-basis: 31%;
  border-bottom: 1px solid #333;
  margin-bottom: 5px;
}
.searchBody .group .seachList li:last-child {
  justify-self: flex-start;
}
.searchBody .group .seachList li a {
  color: #333;
  font-size: 14px;
}
@media screen and (max-width: 600px) {
  .searchData {
    position: relative;
    right: 0;
    top: 15px;
    height: auto;
    width: 100%;
    z-index: 1000000;
  }
  .searchBody {
    width: 100vw;
    height: 100vh;
    background: #fff;
    padding: 20px 0 100px 0;
    z-index: 1000000;
  }
  .searchBody .group .seachList {
    flex-direction: column;
  }
}
/*.list-move {*/
/*  transition: transform 1s;*/
/*}*/

.list-enter-active {
  transition: all 0.3s;
}

.list-leave-active {
  transition: all 0s;
}

.list-enter {
  opacity: 0;
  transform: translateY(30px);
}

.list-leave-to {
  opacity: 0;
  transform: translateY(1px);
}

ul.desktop_menu {
  font-size: 14px;
  list-style-type: none;
}

ul.desktop_menu li {
  font-weight: 400;
  display: inline-block;
  /* padding: 15px 7px 20px 7px; */
  padding: 15px 7px 15px 7px;
  position: relative;
}

ul.desktop_menu li i {
  margin-left: 5px;
}

ul.desktop_menu li.drop_arrow {
  font-size: 14px;
}

ul.desktop_menu li.drop_arrow::after,
ul.desktop_menu li.drop_arrow_red::after {
  content: "";
  width: 15px;
  height: 15px;
  background: #2d2a29;
  position: absolute;
  left: 50%;
  bottom: -10px;
  -webkit-transform: translateX(-50%) rotate(45deg);
  transform: translateX(-50%) rotate(45deg);
  display: none;
  opacity: 0;
  animation: menuArrowAnimation 0.4s ease-in-out forwards;
}

ul.desktop_menu li.drop_arrow_red::after {
  background: #00a6b4;
}

ul.desktop_menu li ul.desktop_menu_sub {
  display: none;
  -webkit-transition: all 0.3s;
  opacity: 0.3;
  animation: menuAnimation 0.4s ease-in-out forwards;
  transform-origin: top center;
  transition: all 0.3s;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks {
  background: #2d2a29;
  width: 500px;
  display: flex;
  transform: translateX(-25%);
  align-items: center;
  color: #fff;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  padding-left: 15px;
  top: -3px;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks .block {
  padding: 15px;
  flex: 1;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks li {
  padding: 0px 0 0 0;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks li a.menu_link {
  display: flex;
  align-items: center;
  text-decoration: none;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link
  .menuIcon {
  width: 50px;
  border-radius: 100px;
  height: 50px;
  border: 2px solid #fff;
  background: #ccc;
  background-size: 200% 100%;
  background-position: 0 0;
  background-repeat: no-repeat;
  margin-right: 10px;
  padding: 7px;
  transition: all 0.4s;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link
  .menuIcon
  img {
  width: 100%;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link
  .menuContent {
  color: #fff;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link
  .menuContent
  .title {
  color: inherit;
  font-size: 14px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link
  .menuContent
  .subTitle {
  color: inherit;
  font-size: 12px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link:hover
  .menuIcon {
  background-size: 200% 100%;
  background-position: 100% 0;
  border: 2px solid #00a6b4;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  li
  a.menu_link:hover
  .menuContent {
  color: #bfbfc0;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks .blockRed {
  background-color: #00a6b4;
  width: 250px;
  padding: 15px;
  align-self: stretch;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .redBlockHeading {
  font-size: 14px;
  padding-bottom: 7px;
  margin-bottom: 15px;
  border-bottom: 1px solid #fff;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks .blockRed a {
  display: block;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  a
  img {
  width: 100%;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .videoTitle {
  font-size: 14px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .videoSubTitle {
  font-size: 12px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .heighlighting {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .heighlighting
  a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
  text-decoration: none;
  color: #fff;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .heighlighting
  a
  img {
  width: 70px;
  margin-right: 10px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .heighlighting
  a
  p {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: inherit;
  font-size: 12px;
}

ul.desktop_menu
  li
  ul.desktop_menu_sub
  .desktop_menu_sub_blocks
  .blockRed
  .heighlighting
  a:not(:last-child) {
  margin-bottom: 10px;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks.rigth {
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks_2 {
  width: 600px;
}

ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks_3 {
  /*width: 750px;*/
}
ul.desktop_menu li ul.desktop_menu_sub .desktop_menu_sub_blocks_4 {
  width: 350px;
}

ul.desktop_menu li:hover {
  cursor: pointer;
}

ul.desktop_menu li:hover.drop_arrow::after,
ul.desktop_menu li:hover.drop_arrow_red::after {
  display: block;
}

ul.desktop_menu li:hover ul.desktop_menu_sub {
  display: block;
  margin-top: 20px;
  width: 200px;
  left: 0;
  position: absolute;
}

ul.desktop_menu li:hover ul.desktop_menu_sub li {
  display: block;
  color: #fff;
}

@keyframes menuAnimation {
  from {
    opacity: 0.3;
    transform: translateY(0) scale(0.9) skew(5deg, 0);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) skew(0, 0);
  }
}

@keyframes menuArrowAnimation {
  from {
    opacity: 0;
    transform: translateY(2 0px) scale(0.8) rotate(45deg);
  }
  to {
    opacity: 1;
    transform: translateY(0px) scale(1) rotate(45deg);
  }
}
ul {
  list-style: none !important;
}
.favoritePages {
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
}
.favoritePages:hover {
  color: #00a6b4;
}
.navRoot .primary {
  position: relative;
}
.recentlyVisitedPages {
  position: absolute;
  top: 100%;
  left: -110px;
  width: 300px;
  background: #00a6b486;
  border-radius: 5px;
  padding: 10px 0 0 0;
}
.recentlyVisitedPages .recentlyVisitedClose {
  color: #00a6b4;
  background: #fff;
  border-radius: 100px;
  border: 2px solid #00a6b4;
  width: 30px;
  height: 30px;
  position: absolute;
  right: -5px;
  top: -5px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
}
.recentlyVisitedPages .recentlyVisitedClose:hover {
  color: #fff;
  background: #00a6b4;
  border: 2px solid #00a6b4;
}

.recentlyVisitedPages ul li {
  margin: 10px;
}
.recentlyVisitedPages ul li a {
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  padding: 10px;
  background: #fff;
  color: #333;
  border-radius: 5px;
}
.recentlyVisitedPages ul li a h6 {
  flex: 1;
  text-align: left;
  transition: all 0.3s;
}
.recentlyVisitedPages ul li a:hover h6 {
  color: #00a6b4;
}
.recentlyVisitedPages ul li a p {
  flex: 1;
}

@media screen and (max-width: 1300px) {
  .navSection.primary {
    display: none !important;
  }
}
</style>
