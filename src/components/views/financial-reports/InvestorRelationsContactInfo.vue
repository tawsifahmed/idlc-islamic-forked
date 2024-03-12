<template>
  <div class="">
      <div class="row filterOptions investor_relation"  >
        <div class="col-md-12">
          <b-card  class="product-card">
            <a  v-b-toggle="'annualReportcollapse' + 1111" block class="d-flex">
              <strong class="question_product" style="color:white; font-size: 1.25rem;">Investor Relations Contact Person</strong>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
            </a>
            <b-collapse v-bind:id="'annualReportcollapse' + 1111">
              <b-card class="question-card">
                <a  v-b-toggle.collapse-home-loan-1 block>
                  <div class="row" >
                  <div class="col-md-12">
                    <ul style="font-size: 14px;">
<!--                      <li><strong>Phone:</strong> {{investorContactDetail.phone}},</li>-->
<!--                      <li><strong>Email:</strong> {{investorContactDetail.email}},</li>-->
                      <li><span style="font-size: 14px;" v-html="investorContactDetail.description"></span></li>
                    </ul>
                  <!-- <a href="#" class="tabcontent1Button">Apply Now</a> -->
                  <!-- <br> -->
                  <!-- <a href="~@/assets/pdf/IDLC_Code_of_Conduct2019.pdf" class="tabcontent1Button" download>Download</a> -->
                  </div>
                </div>
                  <!-- replace these with your preferred icons -->
                  <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
                  <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
                </a>
              </b-card>
            </b-collapse>
          </b-card>
        </div>
      </div>

    </div>
</template>

<script>
    import axios from "axios";

    export default {
      name: "InvestorRelationsContactInfo",
      data() {
        return {
          active_tab: true,
          investorContactDetail: '',
          isVisible:false
        }
      },
      methods: {
        getInvestorRelation(){
          axios.get('investor-relation-contact',{
            params: {
              shortcode: 'financial_report'
            }
          }).then((response) => {
            if(response.status == 200){
              this.investorContactDetail = response.data.details['0'];
            }
          }).catch(error => console.log(error));
        },
      },
      created() {
        this.getInvestorRelation();
      }
    }
</script>

<style scoped>
  .investor_relation  {
    /* text-align: center; */
    margin-top: 50px !important;
    /* padding: 20px; */
    /* box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15); */
  }

  .investor_relation  p{
    text-align: center;
    font-size: 14px;
  }

  ul {
    list-style: none !important;
  }
  .product-card {
  background: #d62e2f;
  color: #fff;
  margin-bottom: 5px;
}
.product-card .card-body{
  padding: 0rem;
}
.product-card .question-card{
  padding: 10px;
}
.product-card .card-body .d-flex{
  padding: 10px;
}
.text-btn {
  padding-top: 10px;
}

.product-card a {
  text-decoration: none;
  color: #000;
}
</style>
