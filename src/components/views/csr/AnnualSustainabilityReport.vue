<template>
  <div class="container   ">
      <div class="row filterOptions"  >
        <div class="col-md-12">
          <b-card  class="product-card">
            <a  v-b-toggle="'annualReportcollapse' + 1" block class="d-flex csr-annual-sustainability-report">
              <strong class="question_product csr-annual-sustainability-report" style="color:white; font-size: 1.25rem;">Annual Sustainability Report</strong>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
            </a>
            <b-collapse v-bind:id="'annualReportcollapse' + 1">
              <b-card class="question-card">
                <a  v-b-toggle.collapse-home-loan-1 block>
                  <div class="row" >
                  <div v-for="(reports, index) in this.$parent.reportData" :key="index" class="col-md-3">
                    <div class="reportCard_22">
                      <a :href="reports.report_file" target="_blank" download>
                        <div class="image">
                          <img :src="reports.image" alt="">
                        </div>
                        <div class="downloadIcon">
                          <div class="icon"></div>
                        </div>
                        <div class="text">
                          <p>{{reports.title}}</p>
                        </div>
                      </a>
                    </div>
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
    <br>
    <br>
  </div>
</template>

<script>
    export default {
        name: "AnnualSustainabilityReport",
        data() {
          return {
            isVisible: false
          }
        }
    }
</script>

<style scoped>
  .tabcontent1 .pdf_icon .files{
    height: 175px;
    border: 1px solid #ffe4e4;
    position: relative;
    margin-bottom: 20px;
  }

  .download-item {
    border: 1px solid #ffe7e7;
    position: relative;
    margin-bottom: 20px;
  }

  .download-item:hover {
    border: 1px solid #ffe4e4;
  }
  .download-item p, .download-item h4 {
    padding: 0px 20px;
  }

  p.tag span {
    position: absolute;
    right: 0px;
    background: #ffe4e4;
    line-height: 22px;
    padding: 0px 16px;
    color: #fff;
    border-bottom-left-radius: 6px;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    float: right;
  }


  .down-link {
    padding: 15px;
    position: absolute;
    bottom: 0;
    background: #ffe4e4;
    font-size: 14px;
    font-weight: 100%;
    width: 100%;
    color: #fff;
    text-align: center;
  }

  .download-item h4 {
    padding-top: 30px;
    margin: auto;
  }

  .down-link:hover {
    padding: 15px;
    position: absolute;
    bottom: 0;
    background: #d62e2f;
    font-size: 14px;
    font-weight: 100%;
    width: 100%;
    color: #ffffff;
    text-decoration: none;
  }

  .inner_box h4  {
    text-align: center;
    padding: 20px;
  }

  .inner_box p  {
    text-align: center;
    font-size: 14px;
    padding: 0 40px 20px 40px;
  }

  #Useful_Contact_Info .item{
    padding: 20px;
  }

  #Useful_Contact_Info .item p{
    font-size: 14px;
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
.icon i {
  /* background: #fff; */
  color: #fff;
  font-size: 20px;
}

.fa-placholder {
    font-family: "FontAwesome";
}

ul{
  list-style: none !important;
}

.m_disscussion {
  text-align: center;
}
@media screen and (max-width: 600px){
  .m_disscussion img{
    width: 100%;
  }
}

</style>
