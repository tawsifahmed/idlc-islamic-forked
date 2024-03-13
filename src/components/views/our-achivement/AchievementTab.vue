<template>
  <div class="ourManagement">
    <div class="ourManagementImgBg">
      <div class="container-lg">
        <div class="tab">
          <button class="tablinks " @click="achievementTab(yearData, $event)"  v-for="yearData in years" :key="yearData.id">
            {{ yearData }}
          </button>
        </div>

        <div :id="this.year" class="tabcontent" >
          <div class="awardContent">
              <loader :is-visible="this.$store.state.isLoading"></loader>
            <b-card-group deck >
              <b-col v-for="data in achievementData" md="6" :key="data.id">
                <b-card   no-body class="overflow-hidden" style="max-width: 540px;" >
                  <b-row no-gutters>
                    <b-col md="5">
                      <b-card-img :src="data.image" @load="onImageLoad" alt="Image" class="rounded-0"></b-card-img>
                    </b-col>
                    <b-col md="7">
                      <b-card-body  :title="data.title">
                        <b-card-text>
                          <span v-html="data.description"></span>
                        </b-card-text>
                      </b-card-body>
                    </b-col>
                  </b-row>
                </b-card>
              </b-col>
              <div class="col-md-12 text-center" v-if="achievementData.length < 1">
                  <h5>Please Explore Other Tabs</h5>
                </div>

            </b-card-group>
          </div>
        </div>




      </div>
    </div>
  </div>

</template>

<script>
  import lineChartData from "../../../assets/js/chart-data";
  import axios from "axios";

  export default {

    data() {
      return {
        year: '2020',
        years: '',
        achievementData: '',

      }

    },
    methods: {
      achievementTab: function (tabName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        event.target.className += " active";
        this.getAchievementData(tabName);
        // document.getElementById(tabName).style.display = "block";
        // var newElement = document.getElementById(tabName);
      },

      getAchievementData(tabName){
        this.$store.state.isLoading =true;
        this.year = tabName;
        axios.get('our-achievemnt', {
          params: {
            year: this.year
          }
        }).then((response) => {
          if (response.status == 200) {
            this.achievementData = response.data.details;
            document.getElementById(tabName).style.display = "block";
            if (response.data.details == ""){
              // this.$store.state.isLoading =false;
            }
          }else{
            console.log(response);
          }
        }).catch(error => console.log(error));
      },

      getYears(){
        axios.get('our-achievemnt-tab-year').then((response) => {
          if (response.status == 200) {
            this.years = response.data.details;
          }else{
            console.log(response);
          }
        }).catch(error => console.log(error));
      },

      onImageLoad () {
        // this.$store.state.isLoading =false;
      },
    },

    created() {
      this.getAchievementData(2020);
      this.getYears();
    },
    mounted() {
      this.$store.state.isLoading =true;
    },

    updated() {
      if (this.year == '2020'){
        $(".tab button:first").addClass("active");
      }

    }
  }
</script>
<style scoped>

  .card {
      border: 1px solid rgba(0, 0, 0, 0.125) !important;
  }
  .ourManagement {
    position: relative;
    /* background-image: url("~@/assets/img/whyChoose.jpg"); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 30px;
  }

  .ourManagement .ourManagementImgBg {
    /* background: #00a6b4; */
    padding: 30px 100px 30px 100px;
  }


 .ourManagement .tab {
    overflow: hidden;
    border-bottom: 2px solid #00a6b4;
    background: rgba(255, 255, 255, 0.15);
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-bottom: 10px;
  }

  .ourManagement .tab .tablinks {
    flex: 1;
    color: #333;
    float: left;
    outline: none;
    cursor: pointer;
    padding: 14px 16px;
    transition: 0.3s;
    font-size: 14px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #f2f2f2;
    border: none;
    outline: none;
    /* border-bottom: 2px solid #00a6b4; */
  }
  .ourManagement .tab .tablinks:not(:last-child) {
    border-right: 1px solid #ccc;
  }
  @media screen and (max-width: 600px){
    .ourManagement .tab {
     flex-wrap: wrap;
    }
     .ourManagement .tab .tablinks {
        border-bottom: 1px solid #ccc;
      }
  }

  .ourManagement .tab .tablinks img {
    width: 30px;
  }

  .ourManagement .tab button:hover {
    background-color: #ddd;
  }

  .ourManagement .tab button.active {
    background-color: #00a6b4;
    color: #ffffff;
  }



  @media screen and (max-width: 770px) {
    .ourManagement {
      margin-bottom: 0px;
      /* Style the tab */
      /* Style the tab content */
    }

    .ourManagement .ourManagementImgBg {
      padding: 30px 0px 30px 0px;
      height: unset;
    }

    .ourManagement .tab .tablinks {
      padding: 10px 7px;
      font-size: 12px;
    }

    .ourManagement .tab .tablinks img {
      width: 30px;

    }

  }
.awardContent{
  padding-top: 20px;
  padding-bottom: 20px;
}
  .card-text{
    font-size: 14px !important;
  }
  .card-deck .card {
    margin-bottom: 15px !important;

  }
  .card-deck .card:hover {
    border-color: transparent;
    -webkit-box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
  }
</style>
