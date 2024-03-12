<div id="Annual_Reports" class="tabcontent1 " style="display: block">
  <br>
  <div class="row filterOptions ">
    <div class="col-md-12"  v-for="tabData in annualReportsTabContentData"   :key="tabData.id">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-1 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">{{tabData.year}}</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-1">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-home-loan-1 block>
              <div class="row">
                <div class="col-md-2">
                  <img :src="tabData.image" width="100%" alt="">
                </div>
                <div class="col-md-2 text-btn">
                  <h6 class="annual_report_heading">{{tabData.report_title}}</h6>
                  <a :href="tabData.download_file" class="footer_button2" download>Download</a>
                </div>
                <div class="col-md-8">
                  <ul class="all-report float-right">
                    <li class="" style="">
                      <a :href="tabData.report_one_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_one_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a :href="tabData.report_two_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_two_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a :href="tabData.report_three_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_three_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a :href="tabData.report_four_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_four_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                  </ul>
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
</div>
<div id="Quarterly_Earnings_Presentations" class="tabcontent1 inner_box "   >
  <br>
  <div class="row filterOptions ">
    <div class="col-md-12" v-for="tabData in quarterlyEarningsTabContentData"   :key="tabData.id">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-1 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">{{tabData.year}}</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class=""><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-1">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-home-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <ul class="all-report all-report_q float-right">
                    <li class="" style="">
                      <a :href="tabData.report_one_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_one_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a  :href="tabData.report_two_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_two_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a   :href="tabData.report_three_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_three_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a  :href="tabData.report_four_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_four_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a :href="tabData.report_five_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_five_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a  :href="tabData.report_six_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_six_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a  :href="tabData.report_seven_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_seven_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a :href="tabData.report_eight_file" download>
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>{{tabData.report_eight_title}}</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                  </ul>
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
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-2 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">2018</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-2">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-car-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <ul class="all-report all-report_q float-right">
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-3 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">2017</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-3">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-personal-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <ul class="all-report all-report_q float-right">
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-4 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">2016</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-4">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-sme-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <ul class="all-report all-report_q float-right">
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q1.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q2.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon" style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q3.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                    <li class="" style="">
                      <a href="#">
                        <div class="f_icon">
                          <img src="./../../../assets/img/financial-report/Q4.png" alt="">
                        </div>
                        <div class="title">
                          <h6>Earnings Discloser 2020</h6>
                        </div>
                        <div class="download-icon"  style="padding: 5px 32px;">
                          <div class="d_icon"></div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
  </div>
  <br>

</div>
<div id="Financial_Highlights" class="tabcontent1 inner_box">

  <div class="row filterOptions ">


    <div class="col-md-12" v-for="(financialHighlightsItem,index) in financialHighlightsTabContentData" :key="financialHighlightsItem.id">
      <b-card  class="product-card">
        <a  v-b-toggle="'collapse' + index" block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 1.25rem;">{{financialHighlightsItem.title}}</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse :id="'collapse'+index">
          <b-card class="question-card">
            <a  v-b-toggle.collapse-home-loan-1 block>
              <div class="container editables" id="home_6" data-page-id="7" data-edit-field="home_6" data-edit-type="textarea" style="overflow: auto;">

                <span v-html="financialHighlightsItem.description"></span>
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
<div id="Management_Discussion_on_Financials" class="tabcontent1 inner_box">
  <br>
  <div class="row filterOptions ">
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center single-block" style="font-size: 14px;">
          <span v-html="this.managementDiscussionItemTabContentData[0].description"></span>
        </div>
      </div>

    </div>

  </div>
  <br>
  <div class="row filterOptions ">
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-1 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">PROFITABILITY</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-1">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-home-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div><img src="./../../../assets/img/financial-report/d_01.png" alt=""></div>
                    <div>
                      <p>On a standalone basis, IDLC Finance PLC posted a 4% decline over the previous year, reporting an amount of BDT 1,522mn. However, on a consolidated basis, the company posted a 22% decline in NPAT over the previous year, reporting an amount of BDT 1,700mn. Earnings per share stands at BDT 4.51 as against BDT 5.76 at the end of 2018. ROE and ROA have been 12.29% and 1.50% against 16.55% and 2.12% respectively in the equivalent prior period.</p>
                    </div>
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

    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-2 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">INCOME</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-2">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-car-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div><img src="./../../../assets/img/financial-report/d_02.png" alt=""></div>
                    <div>
                      <p>Our Total Income (Interest Income + Non-Interest Income) rose by 10.70% to reach BDT 14.13bn at the end of 2019. Conversely, our Operating Income dropped to BDT 5.62bn accounting for a de-growth of 3.54% compared to the previous year, mainly due to lower Brokerage Fee and Investment Income. Subsequently, our Earnings per Share depleted to BDT 4.51 from BDT 5.76 in the preceding year.</p>
                      <p>While our Interest Income grew by 18.10% over last year, Net Interest Income grew by 10.61% to BDT 4.67bn, consequent to a 22.65% growth in Interest Expense taking it to BDT 8.51bn. Moreover, Investment Income fell to BDT 96.16mn, reflecting a de-growth of 82.81% subsequent to the slump in equity market return following a 17% (approx.) decline in DSE Index in 2019.</p>
                      <p>Fee Income stood at BDT 851mn at the end of the year, registering de-growth of 18.35%. It mainly resulted from declines in Brokerage Fees and Fund Management Fees over the year. There has also been a fall in Processing Fees and Service Charges despite increased disbursement, essentially due to a decline in fee rates across the industry.</p>
                    </div>
                  </div>
                </div>

              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>

    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-3 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">EXPENSES AND PROVISIONS</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-3">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-personal-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div><img src="./../../../assets/img/financial-report/d_03_01.png" alt=""></div>
                    <div>
                      <p><strong>Compensation</strong></p>
                      <p>While we have been able to restrict growth in our compensation in the past year through major process improvements and automations, salary restructuring to match industry benchmarks and a major recruitment drive in the second half of the year for expansion in the root level led to an increment of 10.56% in compensation.</p>
                      <p><strong>Depreciations & Other Operating Expense</strong></p>
                      <p>In 2019, our depreciation has increased by 92.70% owing to reclassification of office rent under IFRS 16: “Leases” (amounted BDT155m). Apart from this, changes in company-wide expenditures behind entertainment, travel and conveyance have been modest.</p>
                      <p><strong>Advertisement & Promotions</strong></p>
                      <p>We recorded an expenditure of BDT 106mn (growth 6.71%) in promotional activities, in our effort to improve our brand recognition and customer recall.</p>
                      <p><strong>Office Maintenance</strong></p>
                      <p>Expenses incurred in office maintenance decreased by 73.92% (BDT 166mn) and stood at BDT 58.43mn for the year 2019. Due to re-classification of rent expenses as per IFRS 16: Leases, BDT 178 mn has fallen year-on-year.</p>
                    </div>
                    <div>
                      <p>Provisions for Loans/Investments</p>
                      <p>Provisions have been maintained for classified loans as per the provisioning policy by the Central Bank. Increase in provision in 2019 exceeded that of 2018 by BDT 26mn. The majority of the increase came from increase in specific provisions in the year. This is the consequence of challenges faced in the market during the year.  The increase from General Provisioning is reflective of the 10.02 % growth in Loan Portfolio.</p>
                      <table style="width: 599px; border-color: #000000;" width="599">
                        <tbody>
                        <tr>
                          <td style="width: 261px; border-style: inset; border-color: #000000;">
                            <p><strong>Details</strong></p>
                          </td>
                          <td style="width: 117px; border-style: inset; border-color: #000000; text-align: center;">
                            <p><strong>2019</strong></p>
                          </td>
                          <td style="width: 112px; border-style: inset; border-color: #000000; text-align: center;">
                            <p><strong>2018</strong></p>
                          </td>
                          <td style="width: 81px; border-style: inset; border-color: #000000; text-align: center;">
                            <p><strong>Change</strong></p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 261px; border-style: inset; border-color: #000000;">
                            <p>Increase in General Provision during the year</p>
                          </td>
                          <td style="width: 117px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>70</p>
                          </td>
                          <td style="width: 112px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>91</p>
                          </td>
                          <td style="width: 81px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>(21)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 261px; border-style: inset; border-color: #000000;">
                            <p>Increase in Specific Provisions during the year</p>
                          </td>
                          <td style="width: 117px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>358</p>
                          </td>
                          <td style="width: 112px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>84</p>
                          </td>
                          <td style="width: 81px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>274</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 261px; border-style: inset; border-color: #000000;">
                            <p>Increase in Provision for diminution in value of investments</p>
                          </td>
                          <td style="width: 117px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>(5)</p>
                          </td>
                          <td style="width: 112px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>222</p>
                          </td>
                          <td style="width: 81px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>(227)</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 261px; border-style: inset; border-color: #000000;">
                            <p>Total</p>
                          </td>
                          <td style="width: 117px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>423</p>
                          </td>
                          <td style="width: 112px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>397</p>
                          </td>
                          <td style="width: 81px; border-style: inset; border-color: #000000; text-align: center;">
                            <p>26</p>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                      <br>
                      <p>Provisions have been maintained for classified loans as per the provisioning policy by the Central Bank. Increase in provision in 2019 exceeded that of 2018 by BDT 26mn. The majority of the increase came from increase in specific provisions in the year. This is the consequence of challenges faced in the market during the year.  The increase from General Provisioning is reflective of the 10.02 % growth in Loan Portfolio.</p>
                    </div>
                    <div><p>Provision for Income Tax</p><img src="./../../../assets/img/financial-report/d_03_02.png" alt=""></div>
                    <div>
                      <p>Our contribution to the government exchequer in the form of income tax increased by 10.97% from 2018, to reach BDT 1,061mn to incorporate regulations of Income Tax Ordinance, 1984.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>

    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-4 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">BALANCE SHEET</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-4">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-sme-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div style="overflow: auto;">
                      <p>Balance Sheet Summary</p>
                      <table style="width: 507px;" width="0">
                        <tbody>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">&nbsp;</td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;">
                            <p><strong>2019</strong></p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;">
                            <p><strong>2018</strong></p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p><strong>&nbsp;Assets: </strong></p>
                          </td>
                          <td style="width: 130px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;</p>
                          </td>
                          <td style="width: 204px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Cash and cash equivalent</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>15,100</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>16,236</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Investment</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>6,935</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>7,300</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Lending portfolio</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>92,346</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>83,934</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Others</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>3,004</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>1,695</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p><strong>&nbsp;Liabilities: </strong></p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>&nbsp;</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>&nbsp;</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Deposit</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>77,906</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>72,713</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Borrowing</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>14,228</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>12,496</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Other liabilities</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>11,234</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>10,319</p>
                          </td>
                        </tr>
                        <tr>
                          <td style="width: 173px; border-style: inset; border-color: #000000;">
                            <p>&nbsp;Equity</p>
                          </td>
                          <td style="width: 130px; text-align: center; border-style: inset; border-color: #000000;" width="285">
                            <p>14,018</p>
                          </td>
                          <td style="width: 204px; text-align: center; border-style: inset; border-color: #000000;" width="186">
                            <p>13,637</p>
                          </td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                    <div><img src="./../../../assets/img/financial-report/d_04.png" alt=""></div>
                    <div>
                      <p>Our lending portfolio grew by 10.02% (Standalone: 10.97%) reaching BDT 92.35bn (Standalone: 91.45bn) in 2019 from BDT 83.93bn (Standalone: 82.41bn) in 2018.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-5 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">FUNDING MIX</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-5">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-sme-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div>
                      <p>Our funding base increased by 8.13% (Standalone 8.70%) in 2019 and moved to BDT 92.13bn (Standalone 93.53bn) from BDT 85.21bn (Standalone 86.04bn) in the previous year, which is well matched with the 10.97% growth in the company’s standalone lending portfolio. The growth was largely driven by Term Deposits – 81.85% of the funding basket - which amounted to BDT 75.42bn (7.34% growth) in 2019, adjusted for intercompany deposits.</p>
                    </div>
                    <div>
                      <p>Our long-term strategy involves enhancing our customer deposit portfolio as a sustainable source of funds. There are 3 sources for our Term Deposits: Corporate, Individuals and Banks. In 2019, deposit growth rates from Institutions (excl. Banks) and Individuals have been 16.28% and 18.48% respectively, while our deposits with other Banks fell by 19.72%.</p>
                    </div>
                    <div>
                      <p>However, comparing the deposits from Banks with our placements in Banks, we had a net deposit from Banks amounting to BDT 1.65bn (standalone). This is only 1.77% of our funding base and 1.44% of our total balance sheet. Having such low level of dependency on bank deposits provides us insulations against any shocks in the money market scenario.</p>
                    </div>
                    <div >
                      <p>Debt to Equity Ratio & CAR</p>
                      <div><img src="./../../../assets/img/financial-report/d_05.png" alt=""></div>
                    </div>
                    <div>
                      <p>In 2017, our paid up share capital rose to BDT 3.77bn following issuance of Rights Share, which brought down the Debt to Equity ratio to 6.6 times and improved the Capital Adequacy Ratio taking it to 15.30% from 13.25% in the previous year. In 2019, our loan book has seen a growth of 10.02%, primarily funded through increased deposits. This resulted in a slightly higher debt to equity ratio, causing our Return on Equity to go through temporary sufferings. Our Capital Adequacy Ratio dropped to 14.82%, well over the regulatory limit of 10%.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
    <div class="col-md-12">
      <b-card  class="product-card">
        <a  v-b-toggle.collapse-6 block class="d-flex">
          <strong class="question_product" style="color:white; font-size: 14px;">CASH FLOW ANALYSIS</strong>
          <!-- replace these with your preferred icons -->
          <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"><span class="icon-caret-up" style="color: #fff; font-size: 18px;"></span></span></strong>
          <strong v-else aria-hidden="true" class="ml-auto"><span class="icon-caret-down" style="color: #fff; font-size: 18px;"></span></strong>
        </a>
        <b-collapse id="collapse-6">

          <b-card class="question-card">
            <a  v-b-toggle.collapse-sme-loan-1 block>
              <div class="row">
                <div class="col-md-12">
                  <div class="m_disscussion">
                    <div style="overflow: auto;"><table style="width: 525px;" width="0">
                      <tbody>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p><strong>Particulars</strong></p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="150">
                          <p><strong>2019</strong></p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="107">
                          <p><strong>2018</strong></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p>A) Net cash flows from/(used in) operating activities</p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p>(3,438)</p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p>4,167</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p>B) Net cash used in investing activities</p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p>286</p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p>583</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p>C) Net cash flow from financing activities</p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p>2,017</p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p>(3,242)</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p><strong>D) Net increase/(decrease) in cash and cash equivalents (A+ B + C) </strong></p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p><strong>(1,136)</strong></p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p><strong>1,508 </strong></p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p>E) Cash and cash equivalents at beginning of the year</p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p>16,236</p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p>14,728</p>
                        </td>
                      </tr>
                      <tr>
                        <td style="width: 230px; border-style: inset; border-color: #050000;" width="355">
                          <p><strong>F) Cash and cash equivalents at end of the year (D+E) </strong></p>
                        </td>
                        <td style="width: 139px; text-align: center; border-style: inset; border-color: #050000;" width="282">
                          <p>15,100</p>
                        </td>
                        <td style="width: 156px; text-align: center; border-style: inset; border-color: #050000;" width="343">
                          <p>16,236</p>
                        </td>
                      </tr>
                      </tbody>
                    </table></div>
                    <div>
                      <p><strong>Cash Flow from Operating Activities</strong></p>
                      <p>Cash flow from operating activities before adjusting the changes in operating assets and liabilities stood at BDT 6.15bn, registering a growth of 5.07% during the year. The growth has been primarily driven by increased inflow of receipts from interest, following growth in loan book. Nonetheless, subsequent to a slower growth in term deposits in lieu to lower bank deposits (non-bank deposits grew by 17.29%), coupled with repayments of previously obtained short term loans, net cash inflow from operating activities saw a decline of BDT (7.60bn), reaching BDT (3.44bn) in 2019.</p>
                      <p><strong>Cash Flow from Investing Activities</strong></p>
                      <p>The cash flow from investing activities was BDT 0.29bn and BDT 0.58bn in 2019 and 2018 respectively, as a result of continuous decline in investments in marketable securities keeping to tackle market volatility.</p>
                      <p><strong>Cash Flow from Financing Activities</strong></p>
                      <p>The group obtained BDT 10.12bn from term loan, while it repaid BDT 6.79bn of its previously obtained loans and also paid a dividend of BDT 1.31bn, which was slightly higher than the amount paid during the previous year.</p>
                      <p><strong>Overall Scenario</strong></p>
                      <p>The cash and cash equivalent balance of the group fell to BDT 15.10bn in 2019 compared to BDT 16.24bn in 2018 - the major driver being the net cash flows from operating activities of BDT (3.44bn). However, the cash balance of the group remains robust, at 14.61% of the total liability and 30.99% of current liability, to tackle any unforeseen liquidity scenario with relative comfort.</p>
                    </div>
                  </div>
                </div>
              </div>
              <!-- replace these with your preferred icons -->
              <strong v-if="isVisible" aria-hidden="true" class="ml-auto"><span class="icon"> </span></strong>
              <strong v-else aria-hidden="true" class="ml-auto"><span class="icon"></span></strong>
            </a>
          </b-card>
        </b-collapse>
      </b-card>
    </div>
  </div>
  <br>
</div>
