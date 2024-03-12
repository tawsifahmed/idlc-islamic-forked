
<template>
  <div>
    <div class="topShape" style="height: 445.4px">
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

<!--<script>-->
<!--  export default {-->
<!--    name: "BlackTopCurve",-->
<!--    components: {-->
<!--      Loader: () => import('./Loader'),-->
<!--    }-->
<!--  }-->
<!--</script>-->

<style scoped>
  .topShape {
    background: #333;
    position: absolute;
    width: 100%;
    overflow: hidden;
    z-index: -1;
    max-height: 40rem;
    margin-top: -75px;
  }

  .topShape .circle {
    position: absolute;
    background: #292929;
  }

  .topShape #circle1 {
    border-radius: 40rem/20rem;
    bottom: -25rem;
    height: 40rem;
    -webkit-transform: rotate(56deg);
    -moz-transform: rotate(56deg);
    -ms-transform: rotate(56deg);
    -o-transform: rotate(56deg);
    transform: rotate(56deg);
    left: -22rem;
    width: 80rem;
    z-index: 0;
  }

  .topShape #circle2 {
    border-radius: 40rem/60rem;
    height: 80rem;
    left: 50%;
    top: -131%;
    transform: rotate(-286deg);
    width: 80rem;
    z-index: 1;
  }

  .topShape #circle3 {
    background: #333;
    border-radius: 80rem/40rem;
    height: 80rem;
    -webkit-transform: rotate(-19deg);
    -moz-transform: rotate(-19deg);
    -ms-transform: rotate(-19deg);
    -o-transform: rotate(-19deg);
    transform: rotate(-19deg);
    left: 10%;
    width: 160rem;
    bottom: -66%;
    opacity: 0.4;
  }

  .topShape #circle4 {
    background: #464141;
    border-radius: 125rem/110rem;
    height: 78rem;
    -webkit-transform: rotate(25deg);
    -moz-transform: rotate(25deg);
    -ms-transform: rotate(25deg);
    -o-transform: rotate(25deg);
    transform: rotate(25deg);
    left: 47%;
    width: 95rem;
    bottom: -104%;
    opacity: 0.6;
  }
  @media screen and (max-width: 770px) {
    .topShape {
      max-height: 18rem;
    }
    .topShape .circle {
      position: absolute;
      background: #292929;
    }

    .topShape #circle1 {
      border-radius: 18rem/9rem;
      bottom: -6rem;
      height: 18rem;
      -webkit-transform: rotate(56deg);
      -moz-transform: rotate(56deg);
      -ms-transform: rotate(56deg);
      -o-transform: rotate(56deg);
      transform: rotate(56deg);
      left: -22rem;
      width: 36rem;
      z-index: 0;
    }

    .topShape #circle2 {
      border-radius: 18rem/27rem;
      height: 36rem;
      width: 38rem;
    }

    .topShape #circle3 {
      border-radius: 36rem/18rem;
      height: 36rem;
      width: 72rem;
    }

    .topShape #circle4 {
      border-radius: 64rem/51rem;
      height: 17rem;
      left: 47%;
      width: 95rem;
    }
  }
</style>

