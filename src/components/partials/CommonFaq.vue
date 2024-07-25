<template>
  <div>
      <ul class="FAQList">
        <pre>{{faqs}}</pre>
        <li v-if="faqs.length > 0" v-for="(item, index) in faqs" :key="index">
          <router-link :to="{ name: 'FAQ', params: { faq : item.id, tabType:item.faq_tab_id, tabName: faqTabName}}">
            {{ item.question }}    <span class="icon-external-link"></span>
          </router-link>
        </li>
      </ul>

    <router-link :to="{ name: 'FAQ', params: {faq : faqData.id, tabType: faqData.faq_tab_id, tabName: faqTabName}}" class="tabcontent1ButtonBase"> View More </router-link>

  </div>
</template>

<script>
    import axios from "axios";
    export default {
      name: "CommonFaq",
      data() {
        return {
          prev: "<span class='icon-chevron-left'></span>",
          next: "<span class='icon-chevron-right'></span>",
          shortcode: this.$parent.shortcode,
          faqTabName: this.$parent.faqTabName,
          faqs:[],
          faqData: '',
        }
      },

      methods: {
        getFaq(){
          // get-faq-question-answer?faq_tab_id=1
          axios.get('get-faq-question-answer',{
            params:{
              shortcode: this.shortcode
            }
          }).then((response) => {
            if (response.status == 200) {
              // console.log('resFAQPRio', response)
              this.faqs = response.data.details;
              this.faqData =   response.data.details[0];
            }else{
              console.log(response);
            }
          }).catch(error => console.log(error));
        },
      },
      created() {
        this.getFaq();
      }

    }
</script>

<style scoped>
  .FAQList {
    list-style: none;
    margin: 0 0 20px 25px;
  }

  .FAQList li {

    background: rgba(255, 255, 255, 0.20);
    margin-bottom: 10px;
    border-radius: 5px;
    transition: all 0.3s;
  }

  .FAQList li:hover {
    background: rgba(255, 255, 255, 0.35);
  }

  .FAQList li a {
    padding: 9px 10px;
    display: block;
    font-size: 14px;
    color: #Fff;
  }

  .FAQList li a span {
    float: right;
  }

  .FAQList li a:hover {
    text-decoration: none;
  }

  @media screen and (max-width: 600px) {
    .FAQList {
      margin: 36px 0 20px 0px;
    }

    .FAQList li a {
      padding: 9px 25px 9px 10px;
      position: relative;
    }

    .FAQList li a i {
      position: absolute;
      right: 5px;
      top: 10px;
    }
  }

</style>
