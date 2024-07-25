<template>
  <section>
      <br> <br>
    <div class="productFeatures">
      <div class="categoryDetails ">
        <div class="container-lg">
          <div class="tab">
            <button v-for="(priority, index) in priorityData" :key="`tab_${index}`" :class="`tablinks1 ${ activeTab === index && 'active' }`" @click="handleClickTab(priority, index)" id="defaultOpenProduct">
              {{priority.tab_name}}
            </button>
          </div>
          <div class="tabcontent1" style="display: block;">
              <span v-html="content"></span>
          </div>
        </div>
      </div>
    </div>
    <br>
    <br>
    <div class="container">
      <div class="homePageTitleDetails sectionTitle" style="padding:10px 0 20px 0">
          <h2 style="text-align: center; text-transform: uppercase;" class="h2Responsive ">
              IDLC Priority Center Locations
          </h2>
      </div>
        <div class="row">
            <div class="col-md-6">
                <router-link :to="{ name: 'ContactUs', params: { branchId : '14'}}" class="priorityCenter">
                  <div class="s_card">
                    <h5>Gulshan Priority Center</h5>
                    <br>
                    <p>Level 04, Bay"s Galleria, 57, Gulshan Avenue, Dhaka-1212 <br>
                      Hotline: +8801713071424</p>
                </div>
                </router-link>
            </div>
            <div class="col-md-6">
              <router-link :to="{ name: 'ContactUs', params: { branchId : '22'}}" class="priorityCenter">
                <div class="s_card">
                    <h5>Dhanmondi Priority Center</h5><br>
                    <p>House No. 39A, Road No. 14A (3rd Floor), Dhanmondi, Dhaka-1209 <br>
                      Hotline: +8801713071425
                    </p>
                </div>
              </router-link>
            </div>
        </div>
    </div>
    <br>
  </section>
</template>
<script>
  import axios from 'axios'
  export default {
    name: "CategorizedProduct",
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        shortcode: 'Priority',
        productData: [],
        ProductDetailData: [],
        priorityData: [],
        content: null,
        activeTab: 0,
      }
    },
    methods: {
      handleClickTab(priority, index) {
        this.priorityData.filter(item => {
          if(item.tab_name == priority.tab_name) {
            this.content = item.content;
          }
        })
        this.activeTab = index;
      },
      openTab(cityName, event) {
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
        event.target.className += " active";
      },

      getPriorityData() {
        axios.get('get-priority')
          .then((response) => {
            this.priorityData = response.data.data;  
            this.content = this.priorityData[0].content;
            this.activeTab = 0;
          })
          .catch((error) => {
            console.log(error);
          })
      },

    },
    created() {
      $( "#defaultOpenProduct" ).trigger( "click" );
      this.getPriorityData();
    }
    
  }
</script>
<style lang="" scoped>

  .productFeatures .categoryDetails {
    display: none;
  }

  .productFeatures .categoryDetails:first-child {
    display: block;
  }


  .custom-select select {
    display: none;
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



.productFeatures .tab {
    border-bottom:2px solid #333;
}
.productFeatures .tab button.active {
    background-color: #333;
}
.productFeatures .tabcontent1 .tabcontent1Button {
    border: 2px solid #333;
}
.productFeatures .tabcontent1 .tabcontent1Button:hover {
    background: #333;
}
.s_card {
    padding: 20px;
    text-align: center;
    border: 1px solid #5f505083;
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    min-height: 130px;
}
.s_card h2{
    margin-bottom: 15px;
}
.s_card p{
    font-size: 14px;
}
  @media screen and (max-width: 770px) {
    .categories {
      display: none;
    }

    .mcategory {
      display: block;
    }
    .productFeatures .tab .tablinks1{
        border: 1px solid #333;
    }
    .s_card {
      margin-bottom: 20px;
    }
  }
  .priorityCenter {
    text-decoration: none;
    color: inherit;
  }

  
</style>
