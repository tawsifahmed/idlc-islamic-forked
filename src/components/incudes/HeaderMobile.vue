<template>
  <header style="
  display: flex;
  align-items: center;
  " class="globalNav noDropdownTransition" v-if="isMobile()" v-bind:style="mHeaderStyle">
    <div class="headerContainer">
      <div class="sideNavOpen" onclick="openNav()">
        <span class="sideNavOpenBar"></span>
        <span class="sideNavOpenBar"></span>
        <span class="sideNavOpenBar"></span>
      </div>
      <ul class="navRoot justify-content-between">
        <li style="display: none;"></li>
        <li class="navSection logo">
          <router-link class="rootLink item-home colorize" to="/"
          ><img
            src="~@/assets/img/logo/IDLC_NEW2.png"
            alt="logo"
          /></router-link>
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
              :strings="['Search...','SME Loan','Home Loan', 'Corporate Loan', 'Deposit','Jobs']"
              :loop="true" :attr="'placeholder'">
              <input @keyup="getSearchData()" style="color:#000000; text-decoration: none; font-size: 14px;" type="text" class="typing"
                     id="userInput" name="" v-model="search"/>
            </vue-typed-js>


            <button type="submit">
              <i class="fa fa-search" aria-hidden="true"></i>
            </button>
          </form>





    </li>


    </ul>

    </div>

      <div class="searchData" v-show="search" style="max-width: 100%;">
        <button @click="search = ''" style="position: absolute; top: 0px; right: 20px; font-size:30px; padding: 5px 10px; line-height: 1; border-radius: 100px; border: 2px solid #00a6b4; color: #00a6b4"><span class="icon-close"></span></button>
            <div class="searchBody" style="max-width: 100%;">
              <div class="container">
                <div class="group" v-for="(searchItems,index) in searchData.exceptNews"  :key="index">
                  <h5 class="groupTitle">{{index}}</h5>
                  <ul class="seachList">
                    <li v-for="(searchItem,index) in searchItems">
                      <router-link :to="searchItem.page_link" @click.native="search = ''">{{searchItem.title}}</router-link>
                    </li>
                  </ul>
                </div>
                <div class="group" v-for="(searchItems,index) in searchData.allResults">
                  <h5 class="groupTitle">{{index}}</h5>
                  <ul class="seachList">
                    <li v-for="(searchItem,index) in searchItems" :key="index">
                      <router-link :to="searchItem.page_link" @click.native="search = ''">{{searchItem.title}}</router-link>
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
              <li class="warning singleResult text-center" v-if="searchData.length<=0">
              <router-link :to="nolink" @click.native="search = ''"  style=" margin: auto; text-align: center; display: block;color: black;"><h4 >No results found!</h4></router-link>

              </li>
            </div>

          </div>
  </header>

</template>


<script>

  import axios from "axios";

  export default {
    name: "Header",

    data() {
      return {
        nolink:'',
        isClicked: false,
        searchData: "",
        search: '',
        mHeaderStyle: {
            background: '#fff',
            position: 'relative',
            height: '70px'
        }
      }
    },
    watch: {
        search: function () {
            if (this.search == '') {
                this.mHeaderStyle.height = '70px';
            }else {
                this.mHeaderStyle.height = 'unset';
            }
        }
    },
    methods: {
      isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                return true
            } else {
                return false
            }
        },
      //   var mWidth = document.getElementById("mySidenav").style,
      // mWidth="0";
      /* Set the width of the side navigation to 0 */
      closeNav: function () {
        document.getElementById("mySidenav").style.width = "0";
      },

      getSearchData(){
        axios.get('get-search', {
          params: {
            search_query: this.search
          }
        }).then((response) => {
          if(response.status == 200){
            this.searchData = response.data.details;
          }
        }).catch(error => console.log(error));
      },

    },
    computed: {

    },
    updated() {
    }
  }
</script>


<style lang="" scoped>

  .searchData {
    position: fixed;
    right: 0;
    top: 70px;
    /* height: 500px; */
    width: 100%;
    z-index: 1000000;

  }


  .searchBody {
    width: 100vw; height: 100vh; background: #fff; padding: 100px 0; z-index: 1000000; overflow-y: scroll;
  }
  .searchBody .group{
    margin-bottom: 30px;
    text-align: left;
  }
  .searchBody .group .groupTitle{
    margin-bottom: 15px;
  }
  .searchBody .group .seachList{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .searchBody .group .seachList li{
    flex-basis: 31%;
    border-bottom: 1px solid #333;
    margin-bottom:5px;
  }
  .searchBody .group .seachList li:last-child{
    justify-self: flex-start;
  }
  .searchBody .group .seachList li a{
    color: #333;
    font-size: 14px;
  }
   @media screen and (max-width: 600px){
    .searchData {
      position: relative;
      right: 0;
      top: 15px;
      height: auto;
      width: 100%;
      z-index: 1000000;

    }
    .searchBody {
      width: 100vw; height: 100vh; background: #fff; padding: 20px 0 100px 0; z-index: 1000000;
    }
    .searchBody .group .seachList{
      flex-direction: column;
    }
  }
  /*.list-move {*/
  /*  transition: transform 1s;*/
  /*}*/

  .list-enter-active {
    transition: all .3s;
  }

  .list-leave-active {
    transition: all .0s;
  }

  .list-enter {
    opacity: 0;
    transform: translateY(30px);
  }

  .list-leave-to {
    opacity: 0;
    transform: translateY(1px);
  }




</style>

