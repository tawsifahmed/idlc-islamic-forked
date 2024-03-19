<template>
  <div class="ourManagement">
    <div class="ourManagementImgBg">
      <div class="container-lg">
        <div class="tab">
          <button class="tablinks active" @click="openTab( 'bod', $event)" id="defaultOpen">Shariah Supervisory Committee Member Details
          </button>
          <!-- <button class="tablinks " @click="openTab( 'mc', $event)">Management Committee
          </button>
          <button class="tablinks " @click="openTab( 'ec', $event)">Executive Committee
          </button>
          <button class="tablinks " @click="openTab( 'ac', $event)">Audit Committee
          </button> -->
        </div>
        <div id="bod" class="tabcontent" style="display: block;">
          <div class="managementTabBody">
            <div class="row">
                <div v-for="(data, index) in boardOfDirectors" :class="`${index === 0 ? 'member_two col-12' : 'member_two col-lg-4 col-md-6 col-12'}`">
                  <div class="left">
                    <div class="image">
                      <img v-lazy="data && data.image" alt="Management Team Member">
                    </div>
                  </div>
                  <div class="right">
                    <div class="nameAndDesignation">
                      <h5>{{ data.name}}</h5>
                      <p>{{ data.designation }}</p>
                    </div>
                    <!-- <span v-html="data.description" class="description"></span> -->
                    <button class="tabcontent2Button" @click="viewDetails(data)" >View Details</button>
                  </div>
                </div>
            </div>
          </div>
        </div>

        <div id="mc" class="tabcontent">
          <div class="managementTabBody">
            <div class="member" v-for="data in managementCommittee" >
              <div class="left">
                <div class="image">
                  <img v-lazy="data.image" alt="Management Team Member">
                </div>
              </div>
              <div class="right">
                <div class="nameAndDesignation">
                  <h5>{{ data.name}}</h5>
                  <p>{{ data.designation }}</p>
                </div>
                <span v-html="data.description" class="description"></span>
                <button class="tabcontent2Button"  @click="viewDetails(data)" >View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div id="ec" class="tabcontent">
          <div class="managementTabBody">
            <div class="member" v-for="data in executiveCommittee" >
              <div class="left">
                <div class="image">
                  <img v-lazy="data.image" alt="Management Team Member">
                </div>
              </div>
              <div class="right">
                <div class="nameAndDesignation">
                  <h5>{{ data.name}}</h5>
                  <p>{{ data.designation }}</p>
                </div>
                <span v-html="data.description" class="description"></span>
                <button class="tabcontent2Button" @click="viewDetails(data)">View Details</button>
              </div>
            </div>
          </div>
        </div>

        <div id="ac" class="tabcontent">
          <div class="managementTabBody">
            <div class="member" v-for="(data, index) in auditCommittee" :key="index">
              <div class="left">
                <div class="image">
                  <img v-lazy="data.image" alt="Management Team Member">
                </div>
              </div>
              <div class="right">
                <div class="nameAndDesignation">
                  <h5>{{ data.name}}</h5>
                  <p>{{ data.designation }}</p>
                </div>
                <span v-html="data.description" class="description"></span>
                <button class="tabcontent2Button" @click="viewDetails(data)" >View Details</button>
              </div>
            </div>
          </div>
        </div>


      </div>


    </div>

    <!--    Modal Part-->
    <div>


<!--      <b-modal v-if="this.managementProfileDetail" v-model="modalShow" size="lg" hide-backdrop content-class="shadow" class="modal_size" hide-footer>-->
<!--        <div class="member modalMember">-->
<!--          <div class="left ">-->
<!--            <div class="image ">-->
<!--              <img v-lazy="this.managementProfileDetail.image" alt="Management Team Member">-->
<!--            </div>-->
<!--            <div class="nameAndDesignation text">-->
<!--              <h5>{{ this.managementProfileDetail.name }}</h5>-->
<!--              <p>{{ this.managementProfileDetail.designation }}</p>-->
<!--            </div>-->
<!--          </div>-->
<!--          <div class="description_text">-->
<!--            <span v-html="this.managementProfileDetail.description" class="description" style="margin-bottom: 30px;">-->
<!--            </span>-->
<!--          </div>-->
<!--        </div>-->
<!--      </b-modal>-->


      <!-- custom Modal -->
      <div class="customPopUp"  @click.stop="storyModalOpen = !storyModalOpen" v-if="storyModalOpen" newsData="newsData" >
        <div class="customModalBody" @click.stop="">
          <div class="customModalHeader">
            <button class="closeCustomModal" @click.stop="storyModalOpen = !storyModalOpen"><span class="icon-times"></span></button>
            <h5 ></h5>
          </div>
          <div class="customModalContent">

            <div class="image">
              <img v-lazy="this.managementProfileDetail.image"  width="100%" alt="">
            </div>

            <br>
            <div  class="details">
              <h4 class="text-center" style="margin-bottom: 10px;">{{ this.managementProfileDetail.name }} </h4>
              <div class="view-descrip" v-html="this.managementProfileDetail.description"></div>

            </div>
          </div>
          <div class="customModalFooter">
            <a  @click.stop="storyModalOpen = !storyModalOpen" class="cModalBClose">Close</a>
          </div>
        </div>
      </div>
      <!-- custom Modal end -->


    </div>
  </div>

</template>

<script>
  import axios from "axios";

  export default {

    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        modalShow: false,
        boardOfDirectors: "",
        managementCommittee: "",
        executiveCommittee: "",
        auditCommittee: "",
        managementProfileDetail: '',
        perPage: 3,
        currentPage: 1,
        storyModalOpen: false,
        teams: [],


      }
    },

    methods: {
      openTab(tabName, event) {
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

      getBoardOfDirectors() {
        axios.get('get-team', {
          params: {
            department: 'ShariahSupervisoryCommittee'
          }
        }).then((response) => {
          if (response.status == 200) {
            this.boardOfDirectors = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      getManagementCommittee() {
        axios.get('get-team', {
          params: {
            department: 'ManagementCommittee'
          }
        }).then((response) => {
          if (response.status == 200) {
            this.managementCommittee = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      getExecutiveCommittee() {
        axios.get('get-team', {
          params: {
            department: 'ExicutiveCommittee'
          }
        }).then((response) => {
          if (response.status == 200) {
            this.executiveCommittee = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      getAuditCommittee() {
        axios.get('get-team', {
          params: {
            department: 'AuditCommittee '
          }
        }).then((response) => {
          if (response.status == 200) {
            this.auditCommittee = response.data.details;
          }
        }).catch(error => console.log(error));
      },

      viewDetails(data){
        this.storyModalOpen = true;
        this.managementProfileDetail = data;
      }


    },
    created() {
      this.getBoardOfDirectors();
      this.getManagementCommittee();
      this.getExecutiveCommittee();
      this.getAuditCommittee();

    }
  }
</script>
<style scoped>
  .ourManagement {
    position: relative;
    /* background-image: url("~@/assets/img/whyChoose.jpg"); */
    background-attachment: fixed;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    margin-bottom: 30px;
    margin-top: 50px;
  }

  .ourManagement .ourManagementImgBg {
    /* background: #00a6b4; */
    padding: 30px 100px 30px 100px;
  }


  .ourManagement .tab {
    overflow: hidden;
    border-bottom: 2px solid #00a6b4;
    background: rgba(255, 255, 255, 0.15);
    display: flex;
  }

  .ourManagement .tab .tablinks {
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
    border: none;
    border-right: 1px solid #ddd;
  }

  .ourManagement .tab .tablinks img {
    width: 30px;
  }

  .ourManagement .tab button:hover {
    background-color: #ddd;
  }

  .ourManagement .tab button.active {
    background-color: #00a6b4;
    color: #fff;
  }

  .ourManagement .tabcontent {
    display: none;
    /*padding: 6px 12px;*/
    border-top: none;
    -webkit-animation: fadebottomToTop 0.5s ease-in-out forwards;
    animation: fadebottomToTop 0.5s ease-in-out forwards;
  }

  .ourManagement .tabcontent .managementTabBody {
    margin: 25px 0 0px 0;
    text-align: center;
    background: #f2f2f2;
    padding: 30px;
    text-align: justify;
  }

  .ourManagement .tabcontent .managementTabBody .member {
    padding: 20px;
    background: #ffff;
    display: flex;
    border-radius: 7px;
    margin-bottom: 15px;;
  }

  .ourManagement .tabcontent .managementTabBody .member_two {
    padding: 20px;
    background: #ffff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
    text-align: center;
    gap: 20px;
  }

  .ourManagement .tabcontent .managementTabBody .member .left {
    margin-right: 20px;
  }

  .ourManagement .tabcontent .managementTabBody .member .left .image {
    width: 200px;

  }

  .ourManagement .tabcontent .managementTabBody .member .left .image img {

    width: 100%;
    border-radius: 50%;
    border: 2px solid #ddd;
  }

  .ourManagement .tabcontent .managementTabBody .member .left .nameAndDesignation {

  }

  .ourManagement .tabcontent .managementTabBody .member .left .nameAndDesignation h5 {
    font-size: 1.25rem;
  }

  .ourManagement .tabcontent .managementTabBody .member .left .nameAndDesignation p {
    font-size: 14px;
  }

  .ourManagement .tabcontent .managementTabBody .member .right {

  }

  .ourManagement .tabcontent .managementTabBody .member .right .heighlightedText {
    font-size: 1.25rem;
    margin-bottom: 15px;
  }

  .ourManagement .tabcontent .managementTabBody .member .right .description {
    font-size: 14px;
    margin-bottom: 15px;
    overflow: hidden;
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }

  .ourManagement .tabcontent .managementTabBody .member .right p {
    font-size: 14px;
    margin-bottom: 15px;
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }


  .member {
    position: relative;
  }

  .member .right {
    flex: 1;
    margin-left: 20px;
  }

  .nameAndDesignation p {
    font-size: 14px;
    margin-bottom: 15px;
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
    .ourManagement .tab{
      flex-wrap: wrap;
    }

    .ourManagement .tab .tablinks img {
      width: 30px;

    }

    .ourManagement .tabcontent {
      padding: 0;
    }

    .ourManagement .tabcontent .managementTabBody {
      margin: 25px 0 50px 0;
      background: #f2f2f2;
      padding: 10px;
      text-align: justify;
    }

    .ourManagement .tabcontent .managementTabBody .member {
      padding: 10px;
      flex-direction: column;
    }

    .ourManagement .tabcontent .managementTabBody .member .left {
      display: flex;
      align-items: flex-end;
      margin-bottom: 10px;
    }

    .ourManagement .tabcontent .managementTabBody .member .left .image {
      margin: 0 10px 0px 0;
      width: 100px;
    }

    .ourManagement .tabcontent .managementTabBody .member .left .image img {
      width: 100%;
    }

    .ourManagement .tabcontent .managementTabBody .member .left .nameAndDesignation {
      text-align: left;
    }

    .ourManagement .tabcontent .managementTabBody .member .left .nameAndDesignation h5 {
      font-size: 1rem;
    }

    .ourManagement .tabcontent .managementTabBody .member .right .heighlightedText {
      margin-bottom: 10px;
      font-size: 1rem;
    }

    .member .right {
      margin: 0;
      position: static;
      transform: translate(0, 0);
      width: 100%;
    }


  }

  .teamMember img {
    cursor: pointer;
    height: 100%;
  }


  .teamMember .text {
    text-align: center;
    padding: 0px 20px 20px 20px;
  }

  .teamMember .text h5 {
    padding: 20px 5px;
    cursor: pointer;
  }

  .teamMember .text p {
    font-size: 14px;
    padding-bottom: 10px;
  }


  .teamMember {
    border: 1px solid red;
    /*background: #f2f2f2;*/
    background: #ffffff !important;
    margin: 0 30px;
  }




  .modal-enter {
    /*transform: rotateY(0deg);*/
  }

  .modal-enter-active {
    animation: modal-in  0.5s ease-in forwards;
  }

  .modal-leave {
    /*transform: rotateY(0deg);*/
  }

  .modal-leave-active {
    animation: modal-out 0.5s ease-out forwards;
  }

  .view-descrip{
    font-size: 14px;
  }

  @keyframes modal-in {
    from {
      transform: rotateY(90deg);
    }
    to {
      transform: rotateY(0deg);
    }
  }

  @keyframes modal-out {
    from {
      transform: rotateY(0deg);
    }
    to {
      transform: rotateY(90deg);
    }
  }




</style>
