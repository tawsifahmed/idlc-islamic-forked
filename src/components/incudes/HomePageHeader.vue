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
          <router-link style="display: flex;" class="rootLink item-home colorize" to="/"
          ><img src="~@/assets/img/logo/IDLC_NEW2.png" style="width: 160px;" alt="logo"
        /></router-link>
        </li>

        <li class="navSection primary">
          <ul class="desktop_menu">
            <!-- <li >
              <router-link to="/shariah-supervisory-committee" style="color: black;">
                Shariah Supervisory Committe
              </router-link>

            </li> -->
            <li class="drop_arrow">
              About
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3">
                  <div class="block">
                    <li>
                      <router-link class="menu_link" to="/idlc-islamic-at-a-glance">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/idlc-at-a-glance.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">IDLC Islamic at a Glance</h3>
                          <p class="subTitle">
                            About IDLC Islamic
                          </p>
                        </div>
                      </router-link>
                    </li>

                    <li style="padding-top: 10px">
                      <router-link class="menu_link" to="/news-and-events" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/News-_-Events.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">News & Events</h3>
                          <p class="subTitle">
                            Latest updates of IDLC
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
                          <h3 class="title">Shariah Supervisor Committee (SSC) of IDLC Finance PLC</h3>
                          <!-- <p class="subTitle">
                            See our Shariah Team
                          </p> -->
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
            <!-- <li >
              <router-link to="/islamic-deposits" style="color: black;">
                Islamic Deposits
              </router-link>
            </li> -->
             <li class="drop_arrow">
              Islamic Deposits
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3" style="width: 280px;">
                  <div class="block" style="padding: 11px;">
                    <li>
                      <router-link class="menu_link" to="/islamic-deposits">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Fixed-deposit.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Islamic Deposit Products</h3>
                          <!-- <p class="subTitle">
                            About IDLC Islamic
                          </p> -->
                        </div>
                      </router-link>
                    </li>

                    <li style="padding-top: 4.5px">
                      <router-link class="menu_link" to="/priority" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Priority.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Priority</h3>
                          <!-- <p class="subTitle">
                            Latest updates of IDLC
                          </p> -->
                        </div>
                      </router-link>
                    </li>
                    <li style="padding-top: 9.5px">
                      <router-link class="menu_link" to="/online-mudarabah-deposit" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/online-deposit-icon.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Online Mudarabah Deposit</h3>
                          <!-- <p class="subTitle">
                            Latest updates of IDLC
                          </p> -->
                        </div>
                      </router-link>
                    </li>
                    <li style="padding-top: 9.5px">
                      <router-link class="menu_link" to="/online-mudarabah-dps" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Online-DPS.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Online Mudarabah DPS</h3>
                          <!-- <p class="subTitle">
                            Latest updates of IDLC
                          </p> -->
                        </div>
                      </router-link>
                    </li>

                  </div>

                </div>
              </ul>
            </li>
            <li >
              <router-link to="/islamic-retail" style="color: black;">
                Islamic Retail
              </router-link>
            </li>
            <li >
              <router-link to="/islamic-sme" style="color: black;">
                Islamic SME
              </router-link>
            </li>
            <li >
              <router-link to="/islamic-corporate" style="color: black;">
                Islamic Corporate
              </router-link>
            </li>
            <!-- <li class="drop_arrow">
              Financing Products
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3" style="width: 250px;">
                  <div class="block" style="padding: 11px;">
                    <li>
                      <router-link class="menu_link" to="/islamic-sme">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/Personal-loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Islamic SME</h3>
                          <p class="subTitle">
                            About IDLC Islamic
                          </p>
                        </div>
                      </router-link>
                    </li>

                    <li style="padding-top: 4.5px">
                      <router-link class="menu_link" to="/islamic-corporate" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/SME-loan.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Islamic Corporate</h3>
                          <p class="subTitle">
                            Latest updates of IDLC
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

                  </div>

                </div>
              </ul>
            </li> -->
            <li class="drop_arrow">
              Content Repository
              <ul class="desktop_menu_sub">
                <div class="desktop_menu_sub_blocks desktop_menu_sub_blocks_3" style="width: 250px;">
                  <div class="block" style="padding: 11px;">
                    <li>
                      <router-link class="menu_link" to="/content-repository/documents">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/icons8-document-50.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Product Brochures</h3>
                          <!-- <p class="subTitle">
                            About IDLC Islamic
                          </p> -->
                        </div>
                      </router-link>
                    </li>

                    <li style="padding-top: 4.5px">
                      <router-link class="menu_link" to="/content-repository/videos" style="margin-bottom: 0px;">
                        <div class="menuIcon">
                          <img
                            src="~@/assets/img/menu_icon/Menubar/icons8-video-48.png"
                            alt=""
                          />
                        </div>
                        <div class="menuContent">
                          <h3 class="title">Educative Contents</h3>
                          <!-- <p class="subTitle">
                            Latest updates of IDLC
                          </p> -->
                        </div>
                      </router-link>
                    </li>

                  </div>
                  <!-- <div class="block">
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

                  </div> -->

                </div>
              </ul>
            </li>
            <li >
              <router-link to="/faq" style="color: black;">
                FAQ
              </router-link>
            </li>

            <!--  -->

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

          <router-link
            v-b-tooltip.hover.bottom="'Locate Us'"
            class="rootLink item-company colorize"
            style="padding: 10px 10px 0 10px"
            :to="{ name: 'ContactUs', params: { branchId: '0' } }"
          >
            <div class="mainmenuIcon comparisonIcon"></div>
          </router-link>
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
                'Shariah Supervisor Committee (SSC) of IDLC Finance PLC',
                'Financing Products',
                'Islamic Deposits',
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

    <div class="searchData" v-show="search">
      <button
        @click="search = ''"
        style="position: absolute; top: 15px; right: 30px; font-size:30px; padding: 5px 10px; line-height: 1; border-radius: 100px; border: 2px solid #00a6b4; color: #00a6b4;"
      >
        <span class="icon-close"></span>
      </button>
      <div class="searchBody">
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

    // getHeaderData(){
    //   axios.get('get-header-detail').then((response) => {
    //     if(response.status == 200){
    //       this.headerData = response.data.details;
    //       this.menuVideos = response.data.details.menuVideos;
    //     }
    //   }).catch(error => console.log(error));
    // },
    openModal() {
      this.modalShow = true;
      this.favouriteData = this.$store.state.favourite;
      /*
                this.favouriteTitleData = this.$store.state.favouriteRouteTitle;
                this.favouriteTitleData = new Set(this.favouriteTitleData);
                console.log(this.favouriteData);*/
    }
  }
  // async beforeRouteEnter(to, from, next) {
  //   next(vm => {  // <= HERE you execute next
  //     vm.getHeaderData();
  //   });
  // },

  // created() {
  //   this.getHeaderData();
  // }
};
</script>

<style scoped>
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
  align-items: start;
  color: #fff;
  position: relative;
  border-radius: 7px;
  overflow: hidden;
  padding-left: 15px;
  top: -5px;
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
  /*align-items: flex-start;*/
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
  .menuIcon
  img {
    -webkit-filter: invert(38%) sepia(36%) saturate(5978%) hue-rotate(170deg) brightness(90%) contrast(93%);
    filter: invert(38%) sepia(36%) saturate(5978%) hue-rotate(170deg) brightness(90%) contrast(93%);

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
