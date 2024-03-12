<template>
    <div v-if="isVisible" class="loader-overlay">
        <div class="loader"></div>
        <span class="text" v-html="text"></span>
    </div>
</template>

<script>
    export default {
        name: "Loader",
        props: {
            isVisible: {type: Boolean, required: true},
            text: {type: String, required: false, default: ""},
        },
}
</script>

<style>
.loader-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 999;
  cursor: pointer;
}
.loader-overlay span.text {
  display: inline-block;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
}
.loader-overlay .loader {

 position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 100%;
  z-index: 9999;
  background: url('../../assets/img/Loading_idlc.gif')
              50% 50% no-repeat rgb(249,249,249);
}

</style>
