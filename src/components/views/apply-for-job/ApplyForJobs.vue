<template>
  <div>
    <app-header />
    <app-header-mobile />
    <app-side-nav />
    <app-top-curve />
    <app-tag-line-and-image/>
    <app-jobs/>
    <app-faqs/>
    <div class="container">
      <div class="row">
        <div class="col-md-12 text-center commonSpace">
          <!-- <a href="https://www.linkedin.com/company/idlc-finance-limited" class="tabcontent2Button text-right">View IDLC at LinkedIn</a> -->
        </div>
      </div>
    </div>
  <app-footer />
  </div>
</template>


<script>
  export default {
    name: 'Apply-For-Jobs',
    data() {
      return {
        expandDetails: 0,
        isActive: false,
        isVisible: false,
      }
    },
    components: {
      AppHeaderMobile: () => import('../../incudes/HeaderMobile'),
      AppHeader: () => import('../../incudes/Header'),
      AppSideNav: () => import('../../incudes/SideNav'),
      AppTopCurve: () => import('../../incudes/TopCurve'),
      AppTagLineAndImage: () => import('./TagLineAndImage'),
      AppJobs: () => import('./Jobs'),
      AppFaqs: () => import('./CareerFaq'),
      AppFooter: () => import('../../incudes/Footer'),
    },
  }
</script>
<style scoped>

.job-card h4{
  color:#4D5154;
}

.shareButton:hover i{
  color: #fff;
}
  .tabcontent2Button {

    padding: 2px 16px !important;
  }

  .tabcontent2Button{
    margin-right: 1px !important;
  }
  .tabcontent2Button:hover span i{
    color: #fff;
  }
  .tabcontent2Button:focus span i{
    color: #fff;
  }
  a{
    cursor: pointer;
  }

.card-body .d-flex{
  padding: 20px;
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

  @media only screen and (max-width: 770px) {
    .job-card-header h4{
      font-size: 1.25rem;
      padding-bottom: 20px;
    }
    .job-card-header .list-group-item{
      text-align: center;
      margin: auto;
      padding: 20px;
    }

  }
  @media screen and (max-width: 600px){
  .topShape {
      max-height: 170px;
  }
}
</style>
