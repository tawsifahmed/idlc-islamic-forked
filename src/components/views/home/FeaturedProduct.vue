<template>
  <!--Product Feature  Part Start-->
  <div class="container-lg">
      <h2 class="featuredProductHeading h2Responsive "
          style="
          text-align: center;
          margin-top: 30px;
          color: #2d2a29;
          text-transform: uppercase;
        "
      >
        Featured Products
      </h2>
      <div class="featuredProduct">
        <div class="featuredProduct_box">

          <router-link to="/home-loan">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_1">
              </div>
              <div class="heading">
                <h1>Home  Loan</h1>
              </div>
              <div class="short_detail">
                <p>
                  IDLC Home Loan gives you the confidence to purchase own space to live in freedom.
                </p>
              </div>
              <button>
                <router-link to="/home-loan">Learn More</router-link>
              </button>
            </div>
          </router-link>
        </div>
        <div class="featuredProduct_box">

          <router-link to="/sme-loan">

            <div class="featuredProduct_box_inner">
              <div class="icon icon_2">
              </div>
              <div class="heading">
                <h1>SME Loan</h1>
              </div>
              <div class="short_detail">
                <p>
                  IDLC SME Loan features convenient repayment to reduce the burden on your finances.
                </p>
              </div>
              <button>
                <router-link to="/sme-loan">Learn More</router-link>
              </button>
            </div>

          </router-link>


        </div>
        <div class="featuredProduct_box">

          <router-link to="/term-deposit">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_3">
                <!-- <img src="./img/menuIcons/deposit/Deposits-Icon.png" alt="" /> -->
              </div>
              <div class="heading">
                <h1>Deposits</h1>
              </div>
              <div class="short_detail">
                <p>
                  Choose IDLC, and enjoy a life free of worry, the life that you and your family deserve!
                </p>
              </div>
              <button>
                <router-link to="/term-deposit">Learn More</router-link>
              </button>
            </div>
          </router-link>


        </div>
        <div class="featuredProduct_box">

          <router-link to="/corporate-loan">
            <div class="featuredProduct_box_inner">
              <div class="icon icon_4">
                <!-- <img src="./img/menuIcons/deposit/Deposits-Icon.png" alt="" /> -->
              </div>
              <div class="heading">
                <h1>Corporate Loan</h1>
              </div>
              <div class="short_detail">
                <p>
                  Make your corporate endeavor a success with our innovative and comprehensive solutions
                </p>
              </div>
              <button>
                <router-link to="/term-deposit">Learn More</router-link>
              </button>
            </div>
          </router-link>


        </div>
      </div>
    </div>
  <!--Product Feature  Part End-->
</template>

<script type="text/javascript">

  export default {
  name: "FeaturedProduct",
    data() {
      return {
        
      }
    }
}
</script>

<style scoped>
.featuredProduct {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  padding: 20px 0 15px 0;
}

.featuredProduct_box {
  -ms-flex-preferred-size: 32%;
      flex-basis: 32%;
  padding: 3px;
  position: relative;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box a {
  color: inherit;
}

.featuredProduct_box a:hover {
  text-decoration: none;
}

.featuredProduct_box::after, .featuredProduct_box::before {
  content: "";
  height: 0%;
  width: 0%;
  background: #00a6b4;
  position: absolute;
  z-index: -1;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box::before {
  top: 0;
  right: 0;
}

.featuredProduct_box::after {
  bottom: 0;
  left: 0;
}

.featuredProduct_box:hover::before, .featuredProduct_box:hover::after {
  height: 100%;
  width: 100%;
}

.featuredProduct_box_inner {
  width: 100%;
  height: 100%;
  background: #fff;
  padding: 30px 30px 50px 30px;
  text-align: center;
  position: relative;
}

.featuredProduct_box_inner .icon {
  width: 100px;
  height: 100px;
  margin: 0 auto 10px auto;
  -webkit-transition: all 0.4s;
  transition: all 0.4s;
}

.featuredProduct_box_inner .icon img {
  width: 100%;
}

.featuredProduct_box_inner .icon_1 {
  background-image: url("~@/assets/img/menuIcons/personalLoan/Home-Loan.png");
}

.featuredProduct_box_inner .icon_2 {
  background-image: url("~@/assets/img/menuIcons/SME/Small-Business.png");
}

.featuredProduct_box_inner .icon_3 {
  background-image: url("~@/assets/img/menuIcons/deposit/Deposits-Icon.png");
}
.featuredProduct_box_inner .icon_4 {
  background-image: url("~@/assets/img/menuIcons/deposit/Corporate-Loan-01.png");
  background-size: 100% 100%;
}

.featuredProduct_box_inner .heading {
  margin-bottom: 10px;
}

.featuredProduct_box_inner .heading h1 {
  font-size: 1.25rem;
}

.featuredProduct_box_inner .short_detail p {
  font-size: 14px;
}

.featuredProduct_box_inner button {
  width: 100%;
  border: 2px solid #00a6b4 !important;
  color: #fff;
  background: #00a6b4;
  border: none;
  font-size: 15px;
  cursor: pointer;
  padding: 7px;
  margin-top: 15px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  visibility: hidden;
  opacity: 0.5;
  -webkit-transition: all 0.4s;
  transition: all 0.3s;
}



.featuredProduct_box:hover .featuredProduct_box_inner > button {
  visibility: visible;
  opacity: 1;
}

.featuredProduct_box:hover .featuredProduct_box_inner > .icon_1 {
  background-image: url("~@/assets/img/menuIcons/personalLoan/Home-Loan-02.png");
}

.featuredProduct_box:hover .featuredProduct_box_inner > .icon_2 {
  background-image: url("~@/assets/img/menuIcons/SME/Small-Business-02.png");
}

.featuredProduct_box:hover .featuredProduct_box_inner > .icon_3 {
  background-image: url("~@/assets/img/menuIcons/deposit/Deposits-Icon-02.png");
}
.featuredProduct_box:hover .featuredProduct_box_inner > .icon_4 {
  background-image: url("~@/assets/img/menuIcons/deposit/Corporate-Loan-02.png");
}

@media screen and (max-width: 600px) {
  .featuredProductHeading {
    font-size: 25px;
  }
  .featuredProduct {
    margin-top: 15px;;
    padding: 0px 0 35px 0;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
        -ms-flex-direction: column;
            flex-direction: column;
  }
  .featuredProduct_box {
    -ms-flex-preferred-size: 100%;
        flex-basis: 100%;
    /* z-index: -1; */

  }
  .featuredProduct_box_inner {
    padding: 20px;
    padding: 15px 30px 50px 30px;
  }
  .featuredProduct_box_inner .heading {
    margin-bottom: 10px;
  }
  .featuredProduct_box_inner .heading h1 {
    font-size: 1.4rem;
  }
  .featuredProduct_box_inner button {
    visibility: visible;
    opacity: 1;
    -webkit-transform: translateY(0);
          transform: translateY(0);
  }
}

</style>