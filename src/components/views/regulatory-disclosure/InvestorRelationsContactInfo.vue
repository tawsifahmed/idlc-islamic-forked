<template>
  <!--            Investor Relations Contact Info-->
  <div class="investor_relation  homePageTitleDetails sectionTitle text-center" >
    <h2 class="h2Responsive ">{{this.$parent.investorRelationData.title}}</h2>
    <h6>Phone: {{this.$parent.investorRelationData.phone}}, Email: {{this.$parent.investorRelationData.email}}</h6>

    <p v-html="this.$parent.investorRelationData.description"></p>
  </div>

</template>

<script>
    export default {
        name: "InvestorRelationsContactInfo"
    }
</script>

<style scoped>
  .investor_relation  {
    text-align: center;
    padding: 50px 0 0px 0;
  }

  .investor_relation  p{
    text-align: center;
    font-size: 14px;
  }
</style>
