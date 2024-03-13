<template>
    <div class="container-lg text-center">
      <router-link class="getInTouchButton"  to="/get-in-touch-with-us"> Get in Touch </router-link>
        <div class="margin_bttom_fix"></div>
    </div>
</template>

<style scoped>
    .getInTouchButton {
        outline: none;
        border: 2px solid #00a6b4;
        padding: 10px 30px;
        font-size: 1.25rem;
        border-radius: 100px;
        -webkit-transition: all 0.3s;
        transition: all 0.3s;
        /* margin-right: 20px; */
        text-decoration: none;
        color: inherit;
        display: inline-block;
        margin-top: 30px;
    }
    .getInTouchButton:hover {
        background: #00a6b4;
        color: #fff;
    }
    .margin_bttom_fix {
        margin-bottom: 30px;

    }
</style>
