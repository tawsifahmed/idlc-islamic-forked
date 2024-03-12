<template>
  <b-container class="bv-example-row content_grid">
    <h2 class="text-center" style="margin-bottom: 20px; text-transform: uppercase;">
      Our CSR Initiatives
    </h2>

    <div class="row">

      <div class="col-md-4" v-for="(activityDataItem, index) in this.$parent.activityData" :key="index" style="margin-bottom: 15px;">
        <a :href="activityDataItem.url" style="text-decoration: none; color: inherit" target="_blank" :class="'csr-'+ activityDataItem.title.toLowerCase().split(' ').join('-')">
          <div class="card-body" style="border: 1px solid #ddd;" :class="'csr-'+ activityDataItem.title.toLowerCase().split(' ').join('-')">
            <img width="100%" :src="activityDataItem.image" alt="" class="mb-4"  :class="'csr-'+ activityDataItem.title.toLowerCase().split(' ').join('-')">
            <h4 class="mb-3" :class="'csr-'+ activityDataItem.title.toLowerCase().split(' ').join('-')"> {{activityDataItem.title}} </h4>
          </div>
        </a>
      </div>

    </div>
  </b-container>
</template>

<script>
    import VueContentLoading from "vue-content-loading";

    export default {
        name: "CsrContent",
          VueContentLoading,
          
          methods: {
            makeclass(text) {
              return 'csr-' + text.toLowerCase()
            }
          },
          
    }
</script>

<style scoped>
  .card-title {
    font-size: 1.25rem;
    cursor: pointer;
  }
  .card-title:hover {
    font-size: 1.25rem;
    color: #d62e2f ;

  }

  .card-text {
    font-size: 14px;
    text-transform: unset;
  }
  .content_grid{
   padding-top: 10px;

  }
</style>
