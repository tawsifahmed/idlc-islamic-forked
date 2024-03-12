<template>
  <section>
      <br> <br>
    <div class="productFeatures">
      <div class="categoryDetails ">
        <div v-if="openDpsData.length > 0" class="container-lg">
          <div class="tab">
            <button class="tablinks1 active" @click="openTab( 'content_01', $event)" id="defaultOpenProduct">About the product</button>
            <button class="tablinks1" @click="openTab( 'content_02', $event)" >Key Features</button>
            <button class="tablinks1" @click="openTab( 'content_03', $event)" > Account Opening Process</button>
            <button class="tablinks1" @click="openTab( 'content_04', $event)" >Necessary Information</button>
            <button class="tablinks1" @click="openTab( 'content_05', $event)" >Open Savings Account</button>
          </div>
          <div id="content_01" class="tabcontent1" style="display: block;">
            <div v-html="openDpsData[0].description"></div>
            <!-- <p>You can easily start a Savings scheme for any reason with IDLC from the bKash App's 'Savings' service. Under this savings scheme, the monthly deposit will be automatically deducted from your bKash Account and you will get the total maturity amount (including interest) in your bKash Account at maturity. And you can also Cash Out the matured amount without any cost!</p> -->
          </div>
          <div id="content_02" class="tabcontent1">
            <div v-html="openDpsData[1].description"></div>
            <!-- <ul>
                <li>Deposit Amount: Tk. 500 / 1,000 / 2,000 / 3,000 per month</li>
                <li>Term of Savings Scheme: 2/3/4 years</li>
                <li>The current annual interest rate of the Savings scheme will be determined by IDLC Finance PLC</li>
                <li>As per prevailing laws of the land, AIT and Excise duty will be applied</li>
            </ul> -->
          </div>
          <div id="content_03" class="tabcontent1">
            <div v-html="openDpsData[2].description"></div>
            <!-- <ul>
                <li>Tap on Savings from bKash App home screen</li>
                <li>Tap Open New Savings from the Savings Dashboard</li>
                <li>If you have an e-TIN, please provide its information</li>
                <li>Select Term (2/3/4 yrs.), Deposit Frequency (monthly) and tap Proceed</li>
                <li>Select Deposit Amount (BDT 500/1000/2000/3000) and tap Proceed</li>
                <li>Select a scheme of IDLC and see the total deposit amount</li>
                <li>Enter Nominee-related information and tap Proceed</li>
                <li>Select Savings purpose and tap Confirm</li>
                <li>After reviewing Savings Summary, tap Confirm</li>
                <li>Tap Accept after reviewing Scheme Terms & Conditions</li>
                <li>Enter your PIN on the PIN Screen</li>
                <li>Tap and hold to start Savings</li>
                <li>You will get a confirmation from both IDLC and bKash on the next screen if the request submission is successful</li>
            </ul>
            <p>Now you have successfully opened your savings scheme digitally. Keep a sufficient balance in your bKash Account on the specific date of every month and Cash Out the total amount with profit at maturity without any charge!</p> -->
          </div>
          <div id="content_04" class="tabcontent1">
            <div v-html="openDpsData[3].description"></div>
            <!-- <ul>
                <li>You can open multiple savings schemes at IDLC from your bKash App</li>
                <li>You can change the nominee information if needed</li>
                <li>There is no hidden/additional charge for the Savings scheme from bKash.</li>
                <li>If you provide your eTIN information to the savings scheme, you will be deducted less tax at source on interest earned/to be earned. If you don’t have eTIN, please check the NBR website to register for eTIN: <a href="https://secure.incometax.gov.bd/TINHome" target="_blank">https://secure.incometax.gov.bd/TINHome</a></li>
                <li>Upon completing a savings scheme to maturity and having the savings maturity amount disbursed into the bKash user’s account, if the bKash user fully or partially cashes out the savings maturity amount the corresponding cash out fee borne by the user will be offset by bKash.</li>
                <li>According to Bangladesh Bank regulation, it’s not possible to cancel a savings scheme with IDLC Finance PLC before the completion of 3 months. However, you can request for early encashment any time after completing 3 months</li>
                <li>bKash shall not be responsible if anyone using your PIN, Verification Code and other information fraudulently cancels the savings facility through this platform.</li>
                <li>If you want to close your savings scheme before the maturity date, you may not receive the full interest as per your chosen savings scheme. For more information, related to forgone interest income and other charges (if any) please see bKash/ IDLC’s T&C.   If you want to close your savings scheme before the maturity date, you may not receive the full interest as per your chosen savings scheme. For more information, related to forgone interest income and other charges (if any) please see bKash/ IDLC’s T&C.</li>
                <li>If you do not have sufficient funds in your bKash Account or your account is not in active status at the time of attempted debit transaction, the transaction will fail and bKash will retry to debit your account on the following two consecutive days. If the debit transaction fails due to insufficient balance or account status, you may not be entitled to potential interest earnings from bKash/IDLC for that specific day. If the debit transaction fails at the last attempt it will be considered as a missed installment and you will not be entitled to potential interest earnings from the bKash/IDLC related to the relevant deposit amount.</li>
                <li>The interest rate on the savings shall be determined solely by bKash/IDLC.</li>
                <li>bKash & IDLC reserves the right to change or amend any of the terms & conditions mentioned above at any time without prior notice to bKash Customer.</li>
            </ul> -->
          </div>
          <div id="content_05" class="tabcontent1">
            <div v-html="openDpsData[4].description"></div>
            <!-- <p>To open an online DPS account to start saving, <a href="https://bka.sh/mkt02" target="_blank">click here</a>.</p> -->
          </div>
        </div>
      </div>

    <br> <br>
    </div>
  </section>
</template>
<script>
import axios from "axios";
  export default {
    name: "CategorizedProduct",
    data() {
      return {
        prev: "<span class='icon-chevron-left'></span>",
        next: "<span class='icon-chevron-right'></span>",
        shortcode: 'Priority',
        productData: [],
        ProductDetailData: [],
        openDpsData: []

      }
    },
    methods: {
      getOpenDpsData(){
        axios.get('get-online-dps').then((response) => {
          if(response.status == 200){
            this.openDpsData = response.data.details;
            console.log(this.openDpsData)
          }
        }).catch(error => console.log(error));
      },
      openTab(cityName, event) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent1");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks1");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        event.target.className += " active";
      }
    },
    created() {
      this.getOpenDpsData();
      $( "#defaultOpenProduct" ).trigger( "click" );
    }
  }
</script>
<style lang="" scoped>

  .productFeatures .categoryDetails {
    display: none;
  }

  .productFeatures .categoryDetails:first-child {
    display: block;
  }


  .custom-select select {
    display: none;
  }


  .categoriesTagline {
    margin-top: 13px;
    font-size: 1.25rem;
  }

  .categories {
    display: flex;
  }

  .mcategory {
    display: none;
  }



.productFeatures .tab {
    border-bottom:2px solid #333;
}
.productFeatures .tab button.active {
    background-color: #333;
}
.productFeatures .tabcontent1 .tabcontent1Button {
    border: 2px solid #333;
}
.productFeatures .tabcontent1 .tabcontent1Button:hover {
    background: #333;
}
.s_card {
    padding: 20px;
    text-align: center;
    border: 1px solid #5f505083;
    box-shadow: 0 1px 3px 0 rgba(60,64,67,.3),0 4px 8px 3px rgba(60,64,67,.15);
    min-height: 130px;
}
.s_card h2{
    margin-bottom: 15px;
}
.s_card p{
    font-size: 14px;
}
  @media screen and (max-width: 770px) {
    .categories {
      display: none;
    }

    .mcategory {
      display: block;
    }
    .productFeatures .tab .tablinks1{
        border: 1px solid #333;
    }
    .s_card {
      margin-bottom: 20px;
    }
  }
  .priorityCenter {
    text-decoration: none;
    color: inherit;
  }
</style>
