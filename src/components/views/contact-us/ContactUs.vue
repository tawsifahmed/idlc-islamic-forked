<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <div class="homePageTitleDetails sectionTitle dFTagline">
      <div class="page_heading">
        <h2 style="text-align: center; " class="h2Responsive textUpperCase">
          Contact Us
        </h2>
      </div>
    </div>

    <div class="container">
      <div class="branch-locator">
        <div class="branch-locator-tab-button" v-if="isMobile()">
          <button @click="changeTabToMap">Map</button>
          <button @click="changeTabToList">List</button>
          <br>
        </div>
        <div class="mapAndLocat" style="position: relative;">
          <div id="map" class="" style="" v-show="!tabContentMap">

          </div>

          <div v-if="isMobile()" style="width: 100%; height: 100%;">
            <div class="locations mobileLoacations" v-show="tabContentList">
              <div class="location_entry">
                <form action="">
                  <input type="text" placeholder="Enter a location" v-on:keyup="onChangeSearch($event)">
                  <br> <br>
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC-->
<!--                    <input type="checkbox" value="IDLC" checked="checked" name="category" v-model="category" >-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Securities-->
<!--                    <input type="checkbox" value="IDLC_Securities"  name="category" v-model="category" >-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Investment-->
<!--                    <input type="checkbox" value="IDLC_Investment"  name="category" v-model="category">-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Asset Management-->
<!--                    <input type="checkbox" value="IDLC_Asset_Management"  name="category" v-model="category" >-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->

                </form>
              </div>
              <div class="location-list">
                <ul>

                  <ul>
                    <li v-for="(item, index) in branches" :key="item.id">
                      <a v-on:click="setLocation(item.id)">
                        <h6 class="title">{{item.name}}</h6>
                        <p class="branch-address">
                          {{item.address}}
                        </p>
                        <p>Telephone: {{item.telephone}}</p>
                        <p>Email: {{item.email}}</p>
                      </a>
                    </li>
                  </ul>

                </ul>
              </div>
            </div>

          </div>




          <div v-if="!isMobile()" >
            <div class="locations">
              <div class="location_entry">
                <form action="">
                  <input type="text" class="locationIputFiled" v-on:keyup="onChangeSearch($event)" placeholder="Enter a location">
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC-->
<!--                    <input type="checkbox" value="IDLC" checked v-model="category" >-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Securities-->
<!--                    <input type="checkbox" value="IDLC_Securities" v-model="category">-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Investment-->
<!--                    <input type="checkbox" value="IDLC_Investment" v-model="category">-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
<!--                  <label class="customSelectBox" @change="onChange($event)">IDLC Asset Management-->
<!--                    <input type="checkbox" value="IDLC_Asset_Management" v-model="category">-->
<!--                    <span class="checkmark"></span>-->
<!--                  </label>-->
                </form>
              </div>
              <div class="location-list">
                <ul>
                  <li v-for="(item, index) in branches" :key="item.id">
                    <a v-on:click="setLocation(item.id)">
                      <h6 class="title">{{item.name}}</h6>
                      <p class="branch-address">
                        {{item.address}}
                      </p>
                      <p>Telephone: {{item.telephone}}</p>
                      <p>Email: {{item.email}}</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

<!--        <div class=" text-center" style="margin-top: 30px;">-->
<!--          <h5>CORPORATE HEAD OFFICE</h5>-->
<!--          <p>Address: Bay’s Galleria (1st Floor), 57 Gulshan Avenue, Dhaka 1212 <br> contactcenter@idlc.com Telephone: 16409 +880 (2) 883 4377, 883 5887; <br>National Emergency Service: 999, Health Call Center: 16263 and 333</p>-->
<!--        </div>-->
      </div>

    </div>
    <div >

    </div>

    <div class="container">
      <div class="allBranches ourManagement">
        <div class="tab">
          <button class="tablinks" @click="showBranches( 'idlc', $event)" id="defaultOpen">
            IDLC
          </button>
<!--          <button class="tablinks" @click="showBranches( 'securities', $event)"  id="idlcSecuritiesTabContent">IDLC Securities-->
<!--          </button>-->
<!--          <button class="tablinks" @click="showBranches( 'investment', $event)"  id="idlcInvestmentTabContent">IDLC Investment-->
<!--          </button>-->
<!--          <button class="tablinks" @click="showBranches( 'aml', $event)"  id="idlcAssetTabContent">IDLC Asset Management-->
<!--          </button>-->
        </div>
        <div class="row" style="padding-bottom: -125px;">
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3"></div>
          <div class="col-md-3">


          </div>
        </div>

        <div id="idlc" class="tabcontent">
          <div class="managementTabBody">
            <div class="row">
              <div class="col-md-8"> </div>
              <div class="col-md-4 ">
                <input type="text" class="form-control search-pdf " placeholder='Search' v-model="search" >
              </div>
            </div>
            <br>

            <div v-for="idlcTabContentItem in filteredList" :key="idlcTabContentItem.id" class="branch" >
              <div class="left redBG">
                <h5>{{idlcTabContentItem.name}}</h5>
                <p>{{idlcTabContentItem.address}}</p>
                <p><strong>Telephone: </strong>{{idlcTabContentItem.telephone}}</p>
                <p v-if="idlcTabContentItem.fax != null"><strong>Facsimile: </strong>{{idlcTabContentItem.fax}}</p>
                <p v-if="idlcTabContentItem.email != null"><strong>E-mail: </strong>{{idlcTabContentItem.email}}</p>
              </div>
              <div class="middle">
                <img :src="idlcTabContentItem.manager_image" :alt="idlcTabContentItem.manager_designation">
              </div>
              <div class="right">
                <div class="nameAndDesignation">
                  <h5>{{idlcTabContentItem.manager_name}}</h5>
                  <p>{{idlcTabContentItem.manager_designation}}</p>
                  <p><strong>{{idlcTabContentItem.manager_email}}</strong></p>
                  <p>{{idlcTabContentItem.manager_phone}}</p>
                </div>
              </div>
            </div>

          </div>
        </div>


      </div>
    </div>
    <!-- <div class="container text-center">
      <router-link to="/get-in-touch-with-us" class="tabcontent2Button">Get in Touch With US</router-link>
    </div> -->
    <br><br>
    <app-footer />

  </div>
</template>


<script>

  import axios from "axios";

  export default {
    name: 'contact-us',
    data () {
      return {
        tabContentMap: false,
        tabContentList: false,
        search: '',
        idlcTabContent: [],
        markers: [],
        branches: [],
        checkedCategory:[],
        latitude: 23.7256553,
        longitude: 90.3948942,
        zoom: 7,
        category: ["IDLC"],
        reload: 0

      }
    },
    components: {
      AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
      AppHeader: () => import('../../incudes/Header'),
      AppSideNav: () => import('../../incudes/SideNav'),
      AppTopCurve: () => import('../../incudes/SlimTopCurve'),
      AppCoverImage: () => import('../../incudes/CoverImage'),
      AppFooter: () => import('../../incudes/Footer'),

    },
    methods: {
      isMobile() {
        if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
          return true
        } else {
          return false
        }
      },
      changeTabToMap: function() {
        this.tabContentMap = false;
        this.tabContentList = false;
      },
      changeTabToList: function() {
        this.tabContentMap = true;
        this.tabContentList = true;
      },
      showBranches: function (tabName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(tabName).style.display = "block";
        var newElement = document.getElementById(tabName);
        event.target.className += " active";
      },
      setLocation(branchId){
        for (var i = 0; i < this.markers.length; i++) {
          if (this.markers[i].metadata.branchId == branchId) {
            /*             console.log(this.markers);
                          console.log(this.markers[i]);
                          console.log(this.markers[i].position);*/
            this.map.setZoom(12);
            this.map.setCenter(this.markers[i].position);
            google.maps.event.trigger(this.markers[i], 'click');
          }
        }

        this.changeTabToMap();


      },
      fetchAPIData( ) {
        axios.get('get-branch')
          .then((response) => {
            if(response.status == 200){
              this.branches = response.data.details;
            }else{
              alert("Server returned " + response.code + " : " + response.user_message)
            }
          })
          .catch(error =>  console.log(error));
      },

      fetchCategorizedAPIData(option) {
        // return
        axios.get('get-branch', {
          params: {
            query_parameter: option
          }
        })
          .then((response) => {
            if(response.status == 200){
              this.branches = [];
              this.branches = response.data.details;
              this.clearMarkers();

              this.buildMarkers();
            }else{
              alert("Server returned " + response.code + " : " + response.user_message)
            }
          })
          .catch(error =>  console.log(error));
      },
      fetchSearchAPIData(option) {
        axios.get('get-branch', {
          params: {
            query_parameter: option
          }
        })
          .then((response) => {
            if(response.status == 200){
              this.branches = [];
              this.branches = response.data.details;
              this.clearMarkers();
              this.buildMarkers();
            }else{
              alert("Server returned " + response.code + " : " + response.user_message)
            }
          })
          .catch(error =>  console.log(error));
      },
      clearMarkers(){
        this.markers.forEach(function(marker) {
          marker.setMap(null);
        });

      },
      onChange(event){

        // var option = this.getAllCheckbox();
        var option = this.category;
        option = option.toString()

        this.fetchCategorizedAPIData(option);
      },
      onChangeSearch(event){
        var option = event.target.value;
        if (option != ''){
          this.fetchSearchAPIData(option);
        }
      },
      buildMarkers(){
        this.markers = [];
        var infowindow  = new google.maps.InfoWindow({
          content: "<i class='fa fa-spinner fa-spin fa-lg' style='color: #FFA46B;' title='Loading...'></i> Loading..."
        });
        for( var i = 0; i <= this.branches.length; i++ ){
          var marker = new google.maps.Marker({
            position: { lat: parseFloat( this.branches[i].latitude ), lng: parseFloat( this.branches[i].longitude ) },
            map: this.map,
          });
          marker.metadata = {branchId:this.branches[i].id};
          this.markers.push( marker );

          google.maps.event.addListener(marker, 'click', (function(marker, infowindow,i) {
            return function() {
              if(infowindow) {
                infowindow.close();
              }
              infowindow.open(map, marker);
              axios.get('branch-by-id/'+(marker.metadata.branchId))
                .then((response) => {
                  if(response.status == 200){
                    const contentString =
                      '<div id="content">' +
                      '<h6 class="title">'+response.data.details.name+'</h6>'+
                      '<p class="branch-address">'+response.data.details.address+'</p>'+
                      '<p>Telephone: '+response.data.details.telephone+'</p>'+
                      '<p>Email: '+response.data.details.email+'</p>'+
                      '</div>';
                    infowindow.setContent(contentString);
                    infowindow.open(map, marker);
                  }else{
                    alert("Server returned " + response.code + " : " + response.user_message)
                  }
                })
                .catch(error =>  console.log(error)       );

            }})(marker,infowindow, i));



          this.markers.push( marker );
        }
      },
      getIdlcTabContentData(){

        axios.get('get-branch',{
          params: {
            idlc_category: 'idlc'
          }
        }).then((response) => {
          if(response.status == 200){
            this.idlcTabContent = response.data.details;
            this.$store.state.isLoading = false;
            // console.log(this.idlcTabContent);
          }
        }).catch(error => console.log(error));
      },
      getAllCheckbox(){
        let checkedArray = [];

        $("input:checkbox[name=category]:checked").each(function(){
          checkedArray.push($(this).val());
          return checkedArray.join(", ");
        });
      },
       refresh() {
         this.reload = 1;
        setTimeout(function () {
          location.reload();

        }, 100);
      }
    },
    computed: {
      filteredList() {

        if (this.search == '') {
          return this.idlcTabContent;
        } else {
          return this.idlcTabContent.filter(data => {
            return data.name.toLowerCase().match(this.search.toLowerCase())
              || data.address.toLowerCase().match(this.search.toLowerCase());
          })
        }
      }

    },
    created() {
      // this.clearMarkers();
    },
    mounted() {
      this.$store.state.isLoading;
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: this.zoom
      });
      this.getIdlcTabContentData();
      this.onChange();
      if (localStorage.getItem('reloaded')) {
        // The page was just reloaded. Clear the value from local storage
        // so that it will reload the next time this page is visited.
        localStorage.removeItem('reloaded');
      } else {
        // Set a flag so that we know not to reload the page twice.
        localStorage.setItem('reloaded', '1');
        location.reload();
      }
    },
    updated(){
      $( "#defaultOpen" ).trigger( "click" );
      if(this.$route.params.branchId == 14 || this.$route.params.branchId == 22){
        this.setLocation(this.$route.params.branchId);
      }


    },



  }
</script>
<style scoped>
  .allBranches {
    position: relative;
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 30px;
  }

  .allBranches .allBranchesImgBg {
    padding: 30px 100px 30px 100px;
  }

  .allBranches .tab {
    overflow: hidden;
    border-bottom: 2px solid #00a6b4;
    background: rgba(255, 255, 255, 0.15);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }

  .allBranches .tab .tablinks {
    flex: 1;
    color: #333;
    float: left;
    border: none;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 14px;
    margin-right: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
  }

  .allBranches .tab .tablinks img {
    width: 30px;
  }

  .allBranches .tab button:hover {
    background-color: #ddd;
  }

  .allBranches .tab button.active {
    background-color: #00a6b4;
    color: #fff;
  }

  .allBranches .tabcontent {
    display: none;
    border-top: none;
    animation: fadebottomToTop 0.5s ease-in-out forwards;
  }

  .allBranches .tabcontent .managementTabBody {
    margin: 10px 0 0px 0;
    text-align: center;
    background: #f2f2f2;
    padding: 30px;
    text-align: justify;
  }

  .allBranches .tabcontent .managementTabBody .branch {
    /* padding: 20px; */
    background: #ffff;
    display: flex;
    border-radius: 7px;
    margin-bottom: 15px;
    position: relative;
  }
  .allBranches .tabcontent .managementTabBody .branch p{
    margin-bottom: 0;
  }
  .allBranches .tabcontent .managementTabBody .branch .left{
    flex-basis: 50%;
    padding: 20px;
  }
  .allBranches .tabcontent .managementTabBody .branch .left.redBG{
    background: #00a6b4;
    color: #fff;
  }
  .allBranches .tabcontent .managementTabBody .branch .middle{
    flex-basis: 20%;
    padding: 0 20px;
  }
  .allBranches .tabcontent .managementTabBody .branch .middle img{
    width: 100%;
  }
  .allBranches .tabcontent .managementTabBody .branch .right{
    flex-basis: 30%;
    padding: 20px;
  }

  .allBranches p{
    font-size: 14px;
    margin-bottom: 15px;
  }


  @media screen and (max-width: 770px) {
    .allBranches {
      margin-bottom: 0px;
    }
    .allBranches .allBranchesImgBg {
      padding: 30px 0px 30px 0px;
      height: unset;
    }
    .allBranches .tab .tablinks {
      padding: 10px 7px;
      font-size: 12px;
    }
    .allBranches .tab .tablinks img {
      width: 30px;

    }

    .allBranches .tabcontent {
      padding: 0;
    }

    .allBranches .tabcontent .managementTabBody {
      margin: 25px 0 50px 0;
      background: #f2f2f2;
      padding: 10px;
      text-align: justify;
    }

    .allBranches .tabcontent .managementTabBody .branch {
      padding: 10px;
      flex-direction: column;
    }
    .allBranches .tabcontent .managementTabBody .branch .middle{
      padding: 10px 30px;
      text-align: center;
    }
    .allBranches .tabcontent .managementTabBody .branch .middle img{
      width: 60%;
    }

  }
  .search-pdf {
    margin-top: 10px;
    border-radius: 40px;
    border: 1px solid #00a6b4;
  }

  ul {
    list-style: none !important;
  }
</style>
