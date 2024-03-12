<template>
  <section class="commitments_section">
    <div class="container">
      <div v-for="(item, index) in commitments" :key="index">
        <div class="commitments_heading text-center">
          <img class="commitments_heading-icon" :src="item.image" alt="Icon" />
          <h2 class="h2Responsive" style="text-transform: uppercase;">
            {{ item.title }}
          </h2>
          <p>{{ item.short_description }}</p>
        </div>
        <div class="commitment_cards">
          <div
            class="commitment_card"
            v-for="(cardItem, index) in item.commitment"
            :key="index"
          >
            <div class="short_description">
              <p>
                <strong>{{ cardItem.title }}</strong>
              </p>
            </div>
            <div class="achievment_status">
              <h6>{{ cardItem.status }}</h6>
            </div>
            <button class="read_more-btn" @click="viewDetails(cardItem)">
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- custom Modal -->
    <div
      v-if="storyModalOpen"
      @click.stop="storyModalOpen = !storyModalOpen"
      newsData="newsData"
      class="customPopUp"
    >
      <div class="customModalBody commitmentModalBody" @click.stop="">
        <button
          @click.stop="storyModalOpen = !storyModalOpen"
          class="closeCommitmentModal"
        >
          &times;
        </button>
        <div class="commitmentCoverImage">
          <img v-lazy="this.commitmentsDetail.image" alt="">
          <!-- <img src="~@/assets/img/modalCover.jpg" alt="" /> -->
        </div>
        <div class="commitmentModalContent">
          <div class="title">
            <h6>
              {{this.commitmentsDetail.title}}
            </h6>
          </div>

          <div class="details">
            <div
              style="margin-bottom: 10px;"
              v-html="this.commitmentsDetail.description"
            ></div>
            <div class="achievment_status">
              <h6>{{ this.commitmentsDetail.status }}</h6>
            </div>
            <!-- <div v-html="this.managementProfileDetail.description"></div> -->
          </div>
        </div>
      </div>
    </div>
    <!-- custom Modal end -->
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      modalShow: false,
      perPage: 3,
      currentPage: 1,
      storyModalOpen: false,
      commitments: "",
      commitmentsDetail: ""
    };
  },

  methods: {
    getCommitment() {
      axios
        .get("get-commitment", {})
        .then(response => {
          if (response.status == 200) {
            this.commitments = response.data.details;
            console.log(this.commitments);
          }
        })
        .catch(error => console.log(error));
    },

    viewDetails(data) {
      this.storyModalOpen = true;
      this.commitmentsDetail = data;
    }
  },
  created() {
    this.getCommitment();
  }
};
</script>
<style scoped>
.commitments_section {
  background: #f2f2f2;
  padding: 2rem 0;
}
.commitments_section .commitments_heading {
  padding: 1rem 0 3rem 0;
}
.commitments_section .commitments_heading h2 {
  margin-bottom: 1rem;
}
.commitments_section .commitments_heading-icon {
  width: 100px;
  margin-bottom: 1rem;
  display: inline-block;
}

.commitment_cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  margin-bottom: 2.5rem;
}
.commitment_card {
  background: #d62e2f;
  color: #f1f1f1;
  flex-basis: calc(33.33% - 20px);
  padding: 1.5rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  transition: all 300ms;
}
.commitment_card:hover {
  background: hsl(0, 0%, 35%);
}
.commitment_card .short_description {
  margin-bottom: 1rem;
}
.achievment_status {
  margin-bottom: 3rem;
}
.achievment_status h6 {
  position: relative;
  display: inline-block;
}
.achievment_status h6::after {
  content: "✔️";
  font-size: 12px;
  border-radius: 100px;
  background-color: #f1f1f1;
  width: 18px;
  height: 18px;
  line-height: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: -25px;
  top: 0;
  color: green;
}
.commitment_card .read_more-btn {
  border: none;
  background: none;
  color: inherit;
  font-size: 14px;
  text-transform: uppercase;
  transition: transform 200ms;
}
.commitment_card .read_more-btn:hover {
  transform: scale(1.03) translateY(-2px);
}
.commitment_card .read_more-btn:focus,
.commitment_card .read_more-btn:active {
  border: none;
  outline: none;
}
.commitment_card .read_more-btn::after {
  content: " \279C";
  font-size: 18px;
}
@media screen and (max-width: 768px) {
  .commitment_cards {
    flex-direction: column;
    gap: 20px;
  }
}

.customPopUp .commitmentModalBody {
  flex-direction: row;
  position: relative;
  border: 1px solid #d62e2f;
}
.customPopUp .commitmentModalBody .closeCommitmentModal {
  position: absolute;
  top: 15px;
  right: 15px;
  color: #fff;
  border-radius: 100px;
  background: #ccc;
  font-size: 2em;
  line-height: 1;
  padding: 0 5px 2px 5px;
  border: none;
  outline: none;
}
.customPopUp .commitmentModalBody .closeCommitmentModal:hover {
  background: #aaa;
}

.customPopUp .commitmentModalBody .commitmentCoverImage {
  flex-basis: 40%;
}
.customPopUp .commitmentModalBody .commitmentCoverImage img {
  width: 100%;
  aspect-ratio: 9/16;
  -o-object-fit: cover;
  object-fit: cover;
}
.customPopUp .commitmentModalBody .commitmentModalContent {
  flex: 1;
  padding: 60px 0 50px 30px;
}
.customPopUp .commitmentModalBody .commitmentModalContent .title {
  position: relative;
  background: #d62e2f;
  padding: 7px 5px;
}
.customPopUp .commitmentModalBody .commitmentModalContent .title::before {
  content: "";
  position: absolute;
  left: -30px;
  top: 0;
  height: 100%;
  width: 7px;
  background: #d62e2f;
}
.customPopUp .commitmentModalBody .commitmentModalContent .title h6 {
  color: #fff;
}
.customPopUp .commitmentModalBody .commitmentModalContent .details {
  padding: 10px 10px 0 0;
  font-size: 13px;
}

.customPopUp .commitmentModalBody .commitmentModalContent .details .achievment_status {
  padding-top: 30px;
  margin-bottom: 0;
}

.modal-enter-active {
  animation: modal-in 0.5s ease-in forwards;
}

.modal-leave-active {
  animation: modal-out 0.5s ease-out forwards;
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
