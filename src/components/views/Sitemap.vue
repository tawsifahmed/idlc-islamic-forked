<template>
<div>
  <app-header />
  <app-header-mobile />
  <app-side-nav />
    <app-top-curve />
    <div class="container">
        <div class="promotion-header">
            <div class="homePageTitleDetails sectionTitle dFTagline" >
                    <div class="page_heading">
                        <h2 style="text-align: center; " class="h2Responsive textUpperCase">

                            SITEMAP
                        </h2>
                    </div>

                    <!-- <h6>{{ contentData.tagline }}</h6> -->
                    <!-- <p>If you have invested your part in IDLC, it is now our aim to make it easier for you to know the ins and outs of the stock-market updates.</p> -->
            </div>
        </div>
        <!-- <h2 style="text-align: center; text-transform: uppercase; margin: 20px;" class="h2Responsive ">
            SITEMAP
        </h2> -->

        <div class="row">
            <div class="col-md-12 sitemap">
                <ul>
                    <li>
                        <a>Retail Loan</a>
                        <ul>
                            <li>
                                <router-link to="/home-loan">Home Loan</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/home-loan">Apartment Purchase Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Home Equity Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Home Loan Shield</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Construction Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Affordable Home Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">IDLC Semi Paka Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Home Purchase Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/home-loan">Commercial Space Purchase Loan</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/car-loan">Car Loan</router-link>
                            </li>
                            <li>
                                <router-link to="/personal-loan">Personal Loan</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Business Loans</a>
                        <ul>
                             <li>
                                <router-link to="/sme-loan">SME</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/sme-loan">SME Term Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link :to="{ name: 'SMELoan', params: { Purnota : 'Purnota'}}">Purnota (Women Entrepreneur Loan)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">Seasonal Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">Abashan (Commercial Housing Loan)</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">Commercial Vehicle Financing</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">SME Shombhabona</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">ILDC Udbhabon</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/sme-loan">Udbhabon Startup Loan</router-link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <router-link :to="{ name: 'SMELoan', params: { Purnota : 'Purnota'}}">Purnota Women Entrepreneur</router-link>
                            </li>
                             <li>
                                <router-link to="/sme-success-stories">SME Success Stories</router-link>
                            </li>
                             <li>
                                <router-link to="/supply-chain-finance">Supply Chain Finance</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/supply-chain-finance">Factoring</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/supply-chain-finance">Work Order Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/supply-chain-finance">Distributor Finance</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/corporate-loan">Corporate Loan</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/corporate-loan">Term Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/corporate-loan">Project Financing</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/corporate-loan">Working Capital Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/corporate-loan">Lease Financing</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/corporate-loan">Term Loan for Vehicles/Commercial Vehicles</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/corporate-loan">Term Loan for Commercial Space</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/structured-finance">Structured Finance</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/structured-finance">Project Finance and Loan Syndication</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Foreign Currency Loan</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Access to Special Funds</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Agency and Trustee</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Private Placement of Equity</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Merger and Acquisitions</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Project Feasibility</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/structured-finance">Alternative Financial Solutions</router-link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <router-link to="/green-finance">Green Finance</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/green-finance">Tunnel Kiln</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/green-finance">Zigzag Brick Kiln</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/green-finance">Effluent Treatment Plant</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/green-finance">Waste Recycling Plant</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/green-finance">Biogas Plant</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/green-finance">Solar Home System</router-link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Deposit</a>
                        <ul>
                             <li>
                                <router-link to="/term-deposit">Term Deposit</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/term-deposit">Flexible Term Deposit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/term-deposit">Days Term Deposit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/term-deposit">Earner Deposit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/term-deposit">Double Money Deposit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/term-deposit">Triple Money Deposit</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/term-deposit">Interest First Deposit</router-link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <router-link to="/dps">DPS</router-link>
                                <ul>
                                    <li>
                                        <router-link to="/dps">Monthly Fixed DPS</router-link>
                                    </li>
                                    <li>
                                        <router-link to="/dps">Monthly Flexible DPS</router-link>
                                    </li>
                                </ul>
                            </li>
                             <li>
                                <router-link to="/priority">Priority</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Capital Market</a>
                        <ul>
                             <li>
                                <a href="https://securities.idlc.com/">Stock Brokerage (IDLC Securities Limited)</a>
                            </li>
                             <li>
                                <a href="https://www.idlc.com/investments/public/">Investment Bank (IDLC Investments Limited)</a>
                            </li>
                             <li>
                                <a href="https://idlc.com/aml/">Mutual Funds  (IDLC Asset Management)</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>About Us</a>
                        <ul>
                             <li>
                                <router-link to="/world-of-idlc">IDLC Islamic at a Glance</router-link>
                            </li>
                             <li>
                                <router-link to="/our-achievement">Our Achievements</router-link>
                            </li>
                             <li>
                                <router-link to="/our-management">Our Management</router-link>
                            </li>
                             <li>
                                <router-link to="/news-and-events">News & Events</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Investor Relations</a>
                        <ul>
                             <li>
                                <router-link to="/financial-reports">Financial Reports</router-link>
                            </li>
                             <li>
                                <router-link to="/financial-information-for-investors-and-shareholders">Financial Information for Investors and Shareholders</router-link>
                            </li>
                             <li>
                                <router-link to="/price-sensitive-information-and-notices">Price Sensitive Information and Notices</router-link>
                            </li>
                             <li>
                                <router-link :to="{ name: 'RegulatoryDisclosure', params: { id : 'rd'}}">Regulatory Disclosures</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Sustainability</a>
                        <ul>
                             <li>
                                <router-link to="/csr">CSR</router-link>
                            </li>
                             <li>
                                <a href="https://idlc.com/ortherortho/">Orther Ortho</a>
                            </li>
                             <li>
                                <a href="https://idlc.com/khushirkheya/">Khushir Kheya</a>
                            </li>
                             <li>
                                <a href="https://idlc.com/oditiya/public/">Oditiya</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a>Career </a>
                        <ul>
                             <li>
                                <a href="https://apps.idlc.com/career#/" target="_blank">Explore Jobs at IDLC</a>
                                <!-- <router-link to="/explore-career-at-idlc">Explore Jobs at IDLC</router-link> -->
                            </li>
                             <li>
                                <router-link to="/apply-for-jobs">View Latest Vacancies</router-link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <router-link to="/calculators">Calculators</router-link>
                    </li>
                    <li>
                        <router-link :to="{ name: 'ContactUs', params: { branchId : ''}}">Locate Us</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  <app-footer />

</div>

</template>
<script>
export default {
    components: {
      AppHeaderMobile: () => import('../incudes/HeaderMobile'),
      AppHeader: () => import('../incudes/Header'),
      AppSideNav: () => import('../incudes/SideNav'),
      AppTopCurve: () => import('../incudes/SlimTopCurve'),
      AppFooter: () => import('../incudes/Footer'),

    },
}
</script>
<style scoped>
.col-md-12.sitemap ul {
    padding: 0px;
    border-left: 1px solid #cd2f2f;
    margin-bottom: 20px;
}
.col-md-12.sitemap ul {
    padding: 0px;
    border-left: 1px solid #cd2f2f;
    margin-bottom: 20px;
}

.col-md-12.sitemap ul li {
    padding-left: 35px;
    list-style: none;
    background-image: url("~@/assets/img/golla.png");
    background-repeat: no-repeat;
    background-position: left 5px;
    background-size: 30px;
}


.col-md-12.sitemap ul li a {
    color: #4e4e4e;
    text-decoration: none;
    padding: 5px 0px;
    display: inline-block;
    text-transform: uppercase;
    font-size: 14px;;
}
</style>
