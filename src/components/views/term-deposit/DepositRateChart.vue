<template>
    <div class="container">
        <br>
        <div class=" homePageTitleDetails sectionTitle">
            <h2 style="text-align: center; text-transform: uppercase" class="h2Responsive ">
                DEPOSIT INTEREST RATE MATRIX
            </h2>
        </div>


        <!---------------------- old dynamic table ---------------------------------------->

        <!-- <div class="row">
            <div class="col-md-12 text-center single-block single-block-button custom_table">
              <table class="table1 table table-hover  border">
                <thead>
                <tr>
                  <th class="tb1-header">Product</th>
                  <th class="tb1-header">Term</th>
                  <th class="tb1-header">Interest Rates for
                    Individual Clients & Other*
                  </th>
                  <th class="tb1-header">Interest Rates for Institutional Clients</th>
                </tr>
                </thead>
                <tbody class="tb1-body">
                <tr v-for=" (item, index) in this.$parent.rateTable" :key="index">
                  <td>
                    {{item.name}}
                  </td>
                  <td class="inner_td"> <tr v-for="subItem in item.deposittermrate" :key="subItem.id" class="inner_tr"><p> {{ subItem.term }} </p></tr> </td>
                  <td class="inner_td">  <tr v-for="subItem in item.deposittermrate" :key="subItem.id" class="inner_tr"><p> {{ subItem.rate_for_individual_client }} </p></tr> </td>
                  <td class="inner_td">  <tr v-for="subItem in item.deposittermrate" :key="subItem.id" class="inner_tr"><p> {{ subItem.rate }} </p></tr> </td>
                </tr>
                </tbody>
              </table>
            </div>
        </div> -->



        <!----------------- testing ------------------------------------------->
        <div class="d-flex flex-nowrap justify-content-center w-100 term-depo-headers border border-right-0  border-light">
            <div class="border-right" style="width: 45%;">
                <div class="p-3  text-center text-white">
                    Product
                </div>
            </div>
            <div class="border-right" style="width: 35%;">
                <div class="p-3  text-center text-white">
                    Term
                </div>
            </div>
            <div class="" style="width: 20%;"> 
                <div class="p-3 interest-rate-header text-center text-white">
                    Interest Rate
                </div>     
            </div>
        </div>
       
        <div v-for="(item, index) in this.$parent.rateTable" :key="index" class="term-depo-div">
            <div v-if="item.deposittermrate[0] && item.deposittermrate[0].term.length > 0" class="d-flex flex-nowrap justify-content-center w-100 border border-top-0 border-grey term-div-tables">
                <div style="width: 45%;">
                    <div class="text-center term-depo-custom-padding">
                        {{item.name}}
                    </div>
                </div>
                <div class=" border-left border-right border-grey" style="width: 35%;">
                    <div v-for="subItem in item.deposittermrate" :key="subItem.id" class="text-center table-sub-items">
                        <div class="text-center term-depo-custom-padding">{{subItem.term}}</div>
                    </div>
                </div>
                <div  class="bg-grey" style="width: 20%;"> 
                    <div v-for="subItem in item.deposittermrate" :key="subItem.id" class="text-center table-sub-items">
                        <div class="text-center term-depo-custom-padding ">{{subItem.rate}}</div>
                    </div>     
                </div>
            </div>
        </div>
        <br>
        
        <div class="col-m d-12">
            <span v-html="this.$parent.footerContentData.description"> 
            </span>
        </div>

        <!-- <br>
        <br> -->



        <!------------------ static table  ----------------------->

        <!-- <div class="row">
          <div class="table-deposit-matrix mt-5">
            <h2 class="mb-5"> DEPOSIT INTEREST RATE MATRIX</h2>
            <table class="table table-bordered">
                <thead class="table-header">
                    <tr>

                        <th scope="col">Product</th>
                        <th scope="col">Term</th>
                        <th scope="col">Interest Rate</th>
                    </tr>
                </thead>
                <tbody class="table-data">
                    <tr>

                        <td rowspan="4">Regular Term Deposit</td>
                        <td>3-5 months</td>
                        <td class="bg-grey">7.25%</td>
                    </tr>
                    <tr>

                        <td>6-11 months</td>
                        <td class="bg-grey">7.50%</td>
                    </tr>
                    <tr>
                        <td>12-23 months</td>
                        <td class="bg-grey">7.75%</td>
                    </tr>
                    <tr>
                        <td>2 years and above</td>
                        <td class="bg-grey">8.00%</td>
                    </tr>
                    <tr>
                        <td>100 Days Term Deposit</td>
                        <td>100 days</td>
                        <td class="bg-grey">7.25%</td>
                    </tr>
                    <tr>
                        <td>500 Days Term Deposit</td>
                        <td>500 days</td>
                        <td class="bg-grey">7.75%</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Monthly Earner Deposit</td>
                        <td>1 year</td>
                        <td class="bg-grey">7.75%</td>
                    </tr>
                    <tr>
                        <td>2 years and above</td>
                        <td class="bg-grey">8.00%</td>
                    </tr>
                    <tr>
                        <td rowspan="2">Quaterly Earner Deposit</td>
                        <td>1 year</td>
                        <td class="bg-grey">7.75%</td>
                    </tr>
                    <tr>

                        <td>2 years and above</td>
                        <td class="bg-grey">8.00%</td>
                    </tr>
                    <tr>
                        <td>Double Money Deposit</td>
                        <td>9 years 8 months</td>
                        <td class="bg-grey">7.50%</td>
                    </tr>
                    <tr>
                        <td>Triple Money Deposit</td>
                        <td>15 years 3 months</td>
                        <td class="bg-grey">7.50%</td>
                    </tr>
                    <tr>
                        <td rowspan="3">Interest First Deposit</td>
                        <td>3 months</td>
                        <td class="bg-grey">6.75%</td>
                    </tr>
                    <tr>
                        <td>6-9 months</td>
                        <td class="bg-grey">7.00%</td>
                    </tr>
                    <tr>
                        <td>12 months</td>
                        <td class="bg-grey">7.25%</td>
                    </tr>
                    <tr>
                        <td>Deposit Pension Scheme (DPS)</td>
                        <td>Any (Minimum 2 years)</td>
                        <td class="bg-grey">7.00%</td>
                    </tr>
                </tbody>
            </table>
            
            <div class="mt-4 mb-5 special_notes">
                <b>Special Notes:</b>
                <div>
                    <li>
                        <i>
                            Rates are the same for both individuals & institutions (except banks and FIs)
                        </i>
                    </li>
                    <li>
                        <i>
                            For individual accounts, female clients (If an account is opened singly) will avail 0.10% higher interest rate on Regular Term Deposits, Regular Earner Products & Interest First Deposits.
                        </i>
                    </li>
                    <li>
                        <i>
                            Senior citizens (Aged 59 and above) will avail 0.10% higher interest rate on Regular Term Deposits, Regular Earner Products & Interest First Deposit.
                        </i>
                    </li>
                </div>
            </div>
          </div>
        </div> -->
    </div>
</template>

<style scoped>
.tb1-header{
    background: #d62f2e;
    color: white;
    border: 1px solid white;
}
.table1 .tb1-body tr:first-child{
    background: #f2f2f2;
  color: black;
}
  .table-deposit-matrix {
    text-align: center;
    width: 100%;
}

.table-header>tr {
    border: 1px solid #d62f2e;
    background-color: #d62f2e;
    color: white;
}

.table-data>tr {
    border: 0.5px solid black;
}

.bg-grey {
    background-color: #f2f2f2 !important;
}

.table-header>tr>th> {
    vertical-align: middle;
}

.table-data>tr>td {
    vertical-align: middle;
    vertical-align: middle;
    background: white;
    color: black;
}
.special_notes {
  text-align: start;
}
.special_notes b {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 20px;
}
.special_notes li {
  font-size: 12px;
  line-height: 18px;
  margin-bottom: 4px;
}

@media screen and (max-width: 680px) {
    .special_notes {
      padding: 0px 20px;
    }
}

.term-depo-headers{
    background-color: #d62f2e;
    font-size: 0.875rem;
    margin-top: 40px;
    
}

.term-depo-div{
    font-size: 0.875rem;
}

.term-depo-custom-padding{
    padding: 0.75rem;
}



.table-sub-items:not(:last-child){
    border-bottom: 1px solid #dee2e6;
    
}
.table-sub-items:last-child{
    border-bottom: 0px none !important;
}


@media (min-width: 445px){
    .term-div-tables{
        align-items: center !important;
    }
}
@media (max-width: 445px){
    .term-depo-headers{
        font-size: 0.75rem;
        margin-top: 6px;   
    }    
    .term-depo-div{
        font-size: 0.75rem;
    }

    .interest-rate-header{
        padding: 0.6rem !important;
    }
}


</style>