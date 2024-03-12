<template>
  
</template>

<script type="text/javascript">

// import axios from "axios";
export default {
  name: "LatestNewsSlide",
  components: {

  },
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>",
      shareBase: this.$store.state.shareBaseUrl,
    }
  }
};

</script>

<style scoped type="text/css">
.news_box_gutter {
  padding: 0 10px;
}
@media screen and (max-width: 600px){
  .news_box_gutter {
  padding: 0 0px;
  margin-bottom: 2px;
}
}
  .news_box {
  width: 100%;
  border: 1px solid #ccc;
  padding: 0;
  overflow: hidden;
  position: relative;
  margin: 0 0px;
}
.news_box:focus {
  box-shadow: none;
  outline: none;
}
.news_box .news_box_image{
  width: 100%;
  overflow: hidden;
}
.news_box .news_box_image img{
  width: 100%;
  transition: all 0.4s;
}
.news_box:hover .news_box_image img{
  transform: scale(1.2);
}
.news_box .news_box_header {
  width: 100%;
  padding: 15px 20px 10px 20px;;
}
.news_box .news_box_header h2,
.news_box .news_box_body p{
  text-align: left;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}
.news_box .news_box_header h2{
  font-size: 1.25rem;
  -webkit-line-clamp: 3;
  height: 74px;
}

.news_box .news_box_body {
  padding: 0 20px 20px 20px;
  display: none;
}
.news_box .news_box_body p{
  font-size: 14px;
  -webkit-line-clamp: 3;
}
.news_box .news_box_footer {
  padding: 0 20px 20px 20px;
}
.news_box .news_box_footer .news_box_learnMore_btn{
  display: inline-block;
  border: 1px solid #d62e2f;
  color: #d62e2f;
  padding: 5px 10px;
  font-size: 12px;
  border-radius: 100px;
  transition: all 0.4s;
}
.news_box .news_box_footer .news_box_learnMore_btn:hover{
  color: #fff;
  background: #d62e2f;
  text-decoration: none;
}
.news_box .news_box_share{
  background: #d62e2f;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 130px;
  padding: 5px 10px;
  transform: rotate(-90deg) translateX(32%);
  transform-origin: right bottom;
  position: absolute;
  top: 0;
  right: -100px;
  transition: all 0.4s;
}
.news_box .news_box_share span,
.news_box .news_box_share a i{
  color: #fff;
  font-size: 20px;
}
.news_box .news_box_share a{
  color: #fff;
  font-size: 20px;
  transition: all 0.3s;
  transform: rotate(90deg) scale(1);
}
.news_box .news_box_share a:hover{
  transform: rotate(90deg) scale(1.2);
}
.news_box:hover .news_box_share{
  right: 0;
}

</style>
