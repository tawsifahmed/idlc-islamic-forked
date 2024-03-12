<template>
  <div class="page-wrap d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-12 text-center">
          <span class="display-1 d-block text-4040">404</span>
          <div class="mb-4 lead font-weight-bold">The page you are looking for was not found.</div>
          <router-link to="/"  style="font-size: 14px; text-decoration: none; color: #2a2626;">Back to Home</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "page-not-found",

      components:{
      },
      mounted() {
        // this.$store.state.isLoading =false;
      }

    }
</script>

<style scoped>
  .page-wrap {
    min-height: 45vh;
  }
  .text-4040{
    color: #d62e2f;
  }

</style>
