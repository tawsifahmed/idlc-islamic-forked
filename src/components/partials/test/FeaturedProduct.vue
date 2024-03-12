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
        <a href="#">
          <div class="featuredProduct_box_inner">
            <div class="icon icon_1">
              <!-- <img src="./img/menuIcons/personalLoan/Home-Loan.png" alt="" /> -->
            </div>
            <div class="heading">
              <h1>Home loan</h1>
            </div>
            <div class="short_detail">
              <p>
                IDLC Home Loan gives you the confidence to purchase own space to live in freedom.
              </p>
            </div>
            <button>Learn More</button>
          </div>
        </a>

      </div>
      <div class="featuredProduct_box">
        <a href="#">
          <div class="featuredProduct_box_inner">
            <div class="icon icon_2">
              <!-- <img src="./img/menuIcons/SME/Supplier-Finance.png" alt="" /> -->
            </div>
            <div class="heading">
              <h1>SME Loan</h1>
            </div>
            <div class="short_detail">
              <p>
                IDLC SME Loan features convenient repayment to reduce the burden on your finances.
              </p>
            </div>
            <button>Learn More</button>
          </div>
        </a>

      </div>
      <div class="featuredProduct_box">
        <a href="#">
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
            <button>Learn More</button>
          </div>
        </a>

      </div>
    </div>
  </div>
  <!--Product Feature  Part End-->
</template>

<script>

export default {
  name: "FeaturedProduct",

}
</script>

<style scoped>

</style>
