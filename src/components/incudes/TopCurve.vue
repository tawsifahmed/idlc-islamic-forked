<template>
  <div>
    <div class="topShape" style="">
      <div
        class="circle"
        id="circle1"
        style="left: -220.281px; top: 216.45px"
      ></div>
      <div
        class="circle"
        id="circle2"
        style="left: 770.742px; top: -550.55px"
      ></div>
      <div
        class="circle"
        id="circle3"
        style="left: 160.403px; top: -162.05px"
      ></div>
      <div
        class="circle"
        id="circle4"
        style="left: 725.069px; top: 26.45px"
      ></div>
      <div class="headerSvg">
        <img
          src="~@/assets/img/home-reverse.svg"
          height="auto"
          width="auto"
        />
      </div>
    </div>
<!--    <loader :is-visible="this.$store.state.isLoading"></loader>-->
  </div>

</template>
<script>
  export default {
    name: 'TopCurve',
    data() {
      return {
        shortcode: this.$parent.shortcode,
        relatedProductData: [],
      }
    },
    // components: { Loader: () => import('./Loader'),}
  }
</script>

<style scoped>
  .topShape {height: 445.4px;}
  @media (max-width: 1030px) { .topShape {height: 350.4px;} }
  @media (max-width: 600px) { .topShape { height: 250.4px} }
</style>
