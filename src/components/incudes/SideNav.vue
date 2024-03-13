<template>
  <div class="mobileMenuShow">
    <div
      id="mySidenav"
      ref="mySidenav"
      class="sidenav"
      :style="{ width: '100%', 'z-index': 1000, top: topPosMenu }"
    >
      <!-- <h3 style="color: #818181; position: absolute; top: 18px; left: 30px">Explore Happiness!</h3> -->
      <div
        class="navSection navSearch sideNavSearch"
        :style="{
          width: '100%',
          background: '#fff',
          'z-index': 1,
          display: displayStatus,
          bottom: bottomPos,
          transition: 'all .9s'
        }"
      >
        <form action="" v-on:submit.prevent>
          <!-- <div  class="typewrite" data-period="2000" data-type='[ "Search...", "Home Loan", "Car Loan", "Personal Loan" , "SME Term Loan", "Working Capital Loan" ]'>
                  <input style="color:#000000; text-decoration: none; font-size: 14px;" type="text"  id="userInput" name="" />
              </div> -->
          <vue-typed-js
            :strings="[
              'Search...',
              'Home Loan',
              'Car Loan',
              'Personal Loan',
              'SME Term Loan',
              'Working Capital Loan'
            ]"
            :loop="true"
            :attr="'placeholder'"
          >
            <input
              @keyup="getSearchData()"
              style="color:#000000; text-decoration: none; font-size: 14px; width: 80%; text-align: center; margin: 10px 30px;"
              type="text"
              class="typing"
              id="userInput"
              name=""
              v-model="searchM"
            />
          </vue-typed-js>

          <button type="submit">
            <i class="fa fa-search" aria-hidden="true"></i>
          </button>
        </form>
      </div>
      <a
        href="javascript:void(0)"
        class="closebtn"
        @click="closeNav"
        :style="{ 'z-index': 100, bottom: crossbuttonPos }"
        >&times;</a
      >
      <div class="searchData" v-show="searchM" style="max-width: 100%;">
        <button
          @click="CloseSearchM()"
          style="position: absolute; top: 5px; right: 10px; font-size:30px; padding: 5px 10px; line-height: 1; border-radius: 100px; border: 2px solid #00a6b4; color: #00a6b4"
        >
          <span class="icon-close"></span>
        </button>
        <div class="searchBody" style="max-width: 100%;">
          <div class="container">
            <div
              class="group"
              v-for="(searchItems, index) in searchDataM.exceptNews"
              :key="index"
            >
              <h5 class="groupTitle">{{ index }}</h5>
              <ul class="seachList">
                <li
                  v-for="(searchItem, index) in searchItems"
                  @click="closeNav"
                >
                  <router-link
                    :to="searchItem.page_link"
                    @click.native="searchM = ''"
                    >{{ searchItem.title }}</router-link
                  >
                </li>
              </ul>
            </div>
            <div
              class="group"
              v-for="(searchItems, index) in searchDataM.allResults"
            >
              <h5 class="groupTitle">{{ index }}</h5>
              <ul class="seachList">
                <li
                  v-for="(searchItem, index) in searchItems"
                  :key="index"
                  @click="closeNav"
                >
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
            v-if="searchDataM.length <= 0"
            @click="closeNav"
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
      <ul class="sideNavUl" v-show="isSearchResult">
        <li class="sidenavLinks" @click="closeNav">
          <router-link to="/"
            >
            <!-- <img
              src="~@/assets/img/mobile_menu/H.png"
              alt=""
              style="filter: invert(6%) sepia(100%) saturate(9999%);"
            /> -->
            Home</router-link
          >
        </li>
        <li class="sidenavLinks" @click="closeNav">
          <router-link to="/shariah-supervisory-committee"
            >Shariah Supervisory Committee</router-link
          >
        </li>
        <li class="sidenavLinks" @click="closeNav">
          <router-link to="/deposit-products"
            >Deposit Products</router-link
          >
        </li>
        <li class="sidenavLinks" @click="closeNav">
          <router-link to="/financing-products"
            >Financing Products</router-link
          >
        </li>
        <li class="sidenavLinks" @click="closeNav">
          <router-link to="/faq"
            >FAQ</router-link
          >
        </li>
        <li class="sidenavLinks">
          <a
            >
            <!-- <img src="~@/assets/img/mobile_menu/About-Us.png" alt="" /> -->
            About Us
          </a>
          <ul styl="margin-left:25px" id="collapseAbout1">
            <li class="sidenavLinkssub" @click="closeNav">
              <router-link to="/idlc-at-a-glance">IDLC at a Glance</router-link>
            </li>
            <li class="sidenavLinkssub" @click="closeNav">
              <router-link to="/our-management">Our Management</router-link>
            </li>
            <li class="sidenavLinkssub" @click="closeNav">
              <router-link to="/our-achievement">Our Achievements</router-link>
            </li>
            <li class="sidenavLinkssub" @click="closeNav">
              <router-link to="/news-and-events">News & Events</router-link>
            </li>
          </ul>
        </li>
        <li class="sidenavLinks quick" @click="closeNav">
          <router-link to="/get-in-touch-with-us"
            ><img src="~@/assets/img/favoriteIcon/Get in touch.png" alt="" />Get
            in Touch
          </router-link>
        </li>
        <li class="sidenavLinks quick" @click="closeNav">
          <router-link :to="{ name: 'ContactUs', params: { branchId: 0 } }"
            ><img
              src="~@/assets/img/favoriteIcon/Locate-us-01.png"
              alt=""
            />Locate Us</router-link
          >
        </li>
      </ul>
    </div>
    <div
      class="customPopUp"
      @click.stop="modalShow = !modalShow"
      v-if="modalShow"
      newsData="newsData"
    >
      <div class="customModalBody" @click.stop="" style="width: 350px;">
        <div class="customModalHeader">
          <button class="closeCustomModal" @click.stop="modalShow = !modalShow">
            <span class="icon-times"></span>
          </button>
          <h5>Favourites</h5>
        </div>
        <div class="customModalContent">
          <div class="details" style="border: none; padding: 0">
            <ul id="example-1">
              <li
                v-for="(favouriteitem, index) in favouriteData"
                :key="index"
                @click.stop="modalShow = !modalShow"
                style="list-style-type:square"
              >
                <router-link
                  :to="{ name: favouriteitem.name }"
                  class="favoritePages "
                  ><strong>{{ favouriteitem.title }}</strong></router-link
                >
                <br />
                <router-link
                  :to="{ name: favouriteitem.name }"
                  class="favoritePages"
                  >{{ favouriteitem.description }}</router-link
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="mobile_menu_bar">
      <router-link to="/apply-for-loan">
        <img src="~@/assets/img/menu_icon/Loan.png" alt="" />
      </router-link>
      <!-- <button class="footer_serch"><i class="fa fa-search"></i></button> -->
      <a class="footer_menu" @click="openNav">
        <img
          src="~@/assets/img/Menubar-Icon.png"
          alt=""
          style="width: 100%; filter: invert(1);"
        />
      </a>
      <a href="https://idlc.com/login/login.php">
        <img src="~@/assets/img/menu_icon/Log-IN.png" alt="" />
      </a>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SideNav",
  data: function() {
    return {
      mNavWidth: 0,
      displayStatus: "none",
      bottomPos: "-100px",
      topPosMenu: "100vh",
      crossbuttonPos: "-200px",
      mWidth: "document.getElementById('mySidenav')S",
      mNavWidthIsOpen: false,
      nolink: "",
      isClicked: false,
      searchDataM: "",
      searchM: "",
      modalShow: false,
      favouriteData: "",
      menuData: "",
      isSearchResult: true
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

    CloseSearchM() {
      this.searchM = "";
      this.searchDataM = [];
      this.isSearchResult = true;
    },
    openNav: function() {
      if (this.mNavWidthIsOpen === false) {
        this.mNavWidth = 100;
        this.topPosMenu = "0px";
        this.displayStatus = "block";
        this.bottomPos = "50px";
        this.mNavWidthIsOpen = true;
        this.crossbuttonPos = "50px";
      } else if (this.mNavWidthIsOpen === true) {
        this.mNavWidth = 0;
        this.topPosMenu = "100vh";
        this.displayStatus = "none";
        this.bottomPos = "-100px";
        this.crossbuttonPos = "-200px";
        this.mNavWidthIsOpen = false;
      }
    },
    closeNav: function(event) {
      this.searchDataM = [];
      this.isSearchResult = true;
      this.mNavWidth = 0;
      this.topPosMenu = "100vh";
      this.displayStatus = "none";
      this.bottomPos = "-100px";
      this.crossbuttonPos = "-200px";
      this.mNavWidthIsOpen = false;
    },
    getSearchData() {
      axios
        .get("get-search", {
          params: {
            search_query: this.searchM
          }
        })
        .then(response => {
          if (response.status == 200) {
            //console.log(response.data.details);
            this.searchDataM = response.data.details;
            if (this.searchDataM != []) {
              this.isSearchResult = false;
            } else {
              this.isSearchResult = true;
            }
          }
        })
        .catch(error => {
          this.isSearchResult = true;
          console.log(error);
        });
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

  computed: {}
};
</script>
<style scoped>
@media screen and (min-width: 1300px) {
  .mobileMenuShow {
    display: none;
  }
}
.mobile_menu_bar {
  position: fixed;
  bottom: 0;
  width: 100vw;
  height: 50px;
  background: #00a6b4;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
}
.mobile_menu_bar a img {
  width: 30px;
}
.mobile_menu_bar a:first-child {
  margin-right: 40px;
}
.mobile_menu_bar a:last-child {
  margin-left: 40px;
}
.mobile_menu_bar button {
  color: #fff;
  border: none;
  outline: none;
  font-size: 25px;
  background: transparent;
}
.mobile_menu_bar a.footer_menu {
  display: flex;
  flex-direction: column;
  width: 40px;
  height: 34px;
  /* border-radius: 50%; */
  align-items: center;
  justify-content: space-around;
  /* border: 2px solid #fff; */
}
.mobile_menu_bar a.footer_menu span {
  width: 100%;
  height: 2px;
  /* border-radius: 50%; */
  background: #fff;
}

/* The side navigation menu */
.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  left: 0;
  background-color: rgba(255, 255, 255, 1);
  overflow-x: hidden;
  padding-top: 30px;
  -webkit-transition: 0.5s;
  transition: 0.5s;
}

/* The navigation menu links */
.sidenav a {
  padding: 8px 8px 8px 8px;
  text-decoration: none;
  font-size: 15px;
  font-family: "Helvetica";
  color: #818181;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}

.sideNavUl .sidenavLinks {
  margin-bottom: 1px;
  font-size: 1.4rem;
  text-align: center;
  padding-bottom: 0px;
  position: relative;
}

.sideNavUl .sidenavLinks:hover {
  margin-bottom: 1px;
}

.sideNavUl .sidenavLinks ul li {
  text-align: center;
  line-height: 1;
}

.sideNavUl .sidenavLinks a {
  font-size: 16px;
  color: #00a6b4 !important;
  padding: 0;
  margin: 0 10px;
  display: block;
  padding-top: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ccc;
}
.sideNavUl .sidenavLinks a img {
  width: 20px;
  margin-right: 5px;
}
.sideNavUl .sidenavLinks ul li a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: inline-block;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  font-weight: thin;
  color: #333 !important;
  font-size: 14px;
  display: block;
  padding: 10px 0px 10px 0px;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover,
.offcanvas a:focus {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: fixed;

  right: 10px;
  font-size: 40px;
  padding: 0;
  color: #00a6b4;
  font-weight: bold;
}
.sideNavSearch {
  position: fixed;
  bottom: 50px;
  left: 0;
  font-size: 36px;
  padding: 0;
  color: #00a6b4;
  font-weight: bold;
}

.sidenav a {
  font-size: 18px;
}
.sidenavLinks.quick {
  background-color: #000;
  border: none;
  margin-bottom: 0px;
}
.sidenavLinks.quick:first-child {
  padding-top: 10px;
}
.sidenavLinks.quick:last-child {
  margin-bottom: 105px;
}
.sidenavLinks.quick a {
  color: #dcd4d4 !important;
  border: none;
  font-size: 12px;
  padding-top: 10px;
}
.sidenavLinks.quick a img {
  filter: grayscale(100%) invert(100%);
}

ul {
  list-style: none;
}
.favoritePages {
  color: #333;
  font-size: 14px;
  transition: all 0.3s;
}
.favoritePages:hover {
  color: #00a6b4;
}
</style>
