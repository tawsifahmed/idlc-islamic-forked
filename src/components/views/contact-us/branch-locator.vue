<template>
  <div>
    <app-top-curve />
    <app-cover-image />
    <div class="container">
        <div class="branch-locator">
            <div class="branch-locator-tab-button" v-if="isMobile()">
                <button @click="changeTabToMap">Map</button>
                <button @click="changeTabToList">List</button>
                <br>
            </div>
            <div class="mapAndLocat">
                <div id="map" class="" style="position: relative; overflow: hidden; border: 1px solid #bebbbb; border-radius: 7px;" v-show="!tabContentMap">

                </div>

                <div v-if="isMobile()">
                    <div class="locations mobileLoacations" v-show="tabContentList">
                        <div class="location_entry">
                            <form action="">
                                <input type="text" placeholder="Enter a location">
                                <br> <br>
                                <label class="radioLabel">Category
                                    <input type="radio" checked="checked" name="radio">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">Category
                                    <input type="radio" name="radio">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">Category
                                    <input type="radio" name="radio">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">Category
                                    <input type="radio" name="radio">
                                    <span class="checkmark"></span>
                                </label>
                            </form>
                        </div>
                        <div class="location-list">
                            <ul>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <h6 class="title">Hello BD</h6>
                                        <p class="branch-address">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, magni.
                                        </p>
                                        <p>Telephone: 123456</p>
                                        <p>Email: idlc@idlc.com</p>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div v-if="!isMobile()">
                    <div class="locations">
                        <div class="location_entry">
                            <form action="">
                                <input type="text" class="locationIputFiled" placeholder="Enter a location">
                                <label class="radioLabel">IDLC
                                    <input type="radio" @change="onChange($event)" checked="checked" name="radio" value="IDLC">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">IDLC Securities
                                    <input @change="onChange($event)" type="radio" name="radio" value="IDLC_Securities">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">IDLC Investment
                                    <input @change="onChange($event)" type="radio" name="radio" value="IDLC_Investment">
                                    <span class="checkmark"></span>
                                </label>
                                <label class="radioLabel">IDLC Asset Management
                                    <input @change="onChange($event)" type="radio" name="radio" value="IDLC_Asset_Management">
                                    <span class="checkmark"></span>
                                </label>
                            </form>
                        </div>
                        <div class="location-list">
                            <ul>
                                <li v-for="(item, index) in branches" :key="item.id">
                                    <a v-on:click="setLocation(item.latitude,item.longitude,index)">
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
        </div>

    </div>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'branch-locator',
    data () {
        return {
            tabContentMap: false,
            tabContentList: false,
          infoWindow: {},
          infoWindowButton: '', // NEW
            markers: [],
            branches: [],
            latitude: 23.7256553,
            longitude: 90.3948942,
            zoom: 4
        }
    },
    components: {
        AppTopCurve: () => import('../../incudes/TopCurve'),
        AppCoverImage: () => import('../../incudes/CoverImage')
    },
    methods: {
        isMobile() {
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                // this.tabContentList = true;
                // console.log(this.tabContentList);
                return true
            } else {
                return false
            }
        },
        changeTabToMap: function() {
            this.tabContentMap = false;
            this.tabContentList = false;
           // console.log(this.tabContentList);
        },
        changeTabToList: function() {
            this.tabContentMap = true;
            this.tabContentList = true;
           // console.log(this.tabContentList);
        },
      setLocation(lat,lng,markerId){
        this.map.setZoom(16);
        this.map.setCenter(lat,lng);
        google.maps.event.trigger(this.markers[markerId], 'click');
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
        axios.get('get-branch', {
          params: {
            idlc_category: option
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
        for( var i = 0; i < this.markers.length; i++ ){
          this.markers[i].setMap( null );
        }
      },
      onChange(event){
        var option = event.target.value;
        this.fetchCategorizedAPIData(option);
      },
      buildMarkers(){
        this.markers = [];
        for( var i = 1; i < this.branches.length; i++ ){
          var marker = new google.maps.Marker({
            position: { lat: parseFloat( this.branches[i].latitude ), lng: parseFloat( this.branches[i].longitude ) },
            map: this.map,
          });



          var infowindow = new google.maps.InfoWindow();
          var branchesdata = this.branches[i].id+1;
          google.maps.event.addListener(marker, 'click', (function(marker, branchesdata) {
            return function() {
              axios.get('branch-by-id/'+branchesdata)
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
                  }else{
                    alert("Server returned " + response.code + " : " + response.user_message)
                  }
                })
                .catch(error =>  console.log(error)       );
              infowindow.open(map, marker);
            }
          })(marker, i));
          this.markers.push( marker );
        }
      }
    },

    created() {
      this.fetchAPIData();
      this.clearMarkers();
    },
    mounted() {
      this.map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: this.latitude, lng: this.longitude},
        zoom: this.zoom
      });

      // this.$store.state.isLoading =false;

    },
    updated(){

      this.buildMarkers();
    }
}
</script>
<style scoped>


</style>
