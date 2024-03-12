<template>
    <div class="container">
        <div class="iFaq">
            <div class="heading text-center">
                <h2>FAQ</h2>
            </div>
            <div class="body">
                <div class="icon">
                    <img src="~@/assets/img/productWhyChoose/FAQ-02.png" alt="">
                </div>
                <div class="faqs">
                     <div class="row">

                        <div class="col-md-12" v-for="(faq, index) in faqs" :key="index">
                            <b-card>
                                <a  v-b-toggle="'collapse_' + index" block class="d-flex">
                                    <strong >{{faq.question}}</strong>
                                    <!-- replace these with your preferred icons -->
                                    <strong v-if="isVisible" aria-hidden="true" class="ml-auto">-</strong>
                                    <strong v-else aria-hidden="true" class="ml-auto">+</strong>
                                </a>
                                <b-collapse :id="'collapse_'+index" >
                                    <div class="commonFont" v-html="faq.answer"></div>
                                </b-collapse>
                            </b-card>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from "axios";
export default {
    name: 'InvestorFAQ',
    data() {
        return {
            shortcode: this.$parent.shortcode,
            faqTabName: 'Financial Information',
            faqs:[],
            isVisible: false,
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
              this.faqs = response.data.details;
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
    .iFaq {

    }
    .iFaq .heading {
        margin: 30px 0 20px 0;
        text-transform: uppercase;
    }

    .iFaq .body {
        border: 1px solid #aaa;
        /* background: green; */
        padding: 30px;
        display: flex;
        align-items: center;
    }
    .iFaq .body .icon {
        flex-basis: 40%;
        text-align: center;
        padding: 30px;
        border-right: 1px solid #aaa;
    }
    .iFaq .body .icon img{
        width: 150px;
        filter: invert(94%) sepia(100%) saturate(9999%);
    }
    .iFaq .body .faqs{
        padding: 0 20px;
        flex: 1;;
    }

    .card-body{
    background-color: #F2F2F2;
    padding: 0;
  }
  .card-body .d-flex{
    padding: 10px 20px;
  }
  .card-body .commonFont{
    padding: 15px !important;
  }
  .card-body a{
    font-size: 14px;
    color: #000 !important;
    text-decoration: none;
    padding: 2px 6px 9px 7px;
  }
  .card-body p{
    padding: 6px !important;
  }
  .card{
    margin-bottom: 15px !important;
  }
  .commonFont{
    background-color: #ffffff;
  }
  @media screen and (max-width: 600px){
        .iFaq .body {
            flex-direction: column;
            padding: 30px 0;
        }
        .iFaq .body .icon {

            border-right: none;
        }
    }

</style>
