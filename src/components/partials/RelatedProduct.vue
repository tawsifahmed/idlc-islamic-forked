<template>
     <div class="similarProductSection">
      <div class="container-lg">
      <div class="heading text-center sectionTitle ">
            <h2 style="text-transform: uppercase; text-align: center; margin-bottom: 10px;" class="h2Responsive">
            Related Products
            </h2>
        </div>
        <div class="similarProduct">
          <div class="right">
            <div class="products">
              <!-- <div v-if="this.$parent.relatedProductData.length > 0"> -->
                <!-- <carousel :autoplay="true" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:true},600:{items: 1,nav:true},1000:{items: 4,nav:true}}"> -->
                  <!-- <div class="owl-carousel owl-theme" id="similarProduct"> -->
                  <!-- <div class="item" v-for="(productItem) in this.$parent.relatedProductData" :key="productItem.id">
                    <div class="product ">
                      <div class="icon ">
                        <img :src="productItem.image" alt="">
                      </div>
                      <h5>{{productItem.name}}</h5>
                      <div class="text">
                        <p v-html="productItem.description"></p>
                      </div>
                    </div>
                  </div> -->
                  
                  
                  <div class="item" v-for="(productItem) in this.$parent.relatedProductData" :key="productItem.id">
                        <router-link :to="productItem.link">
                            <div class="product">
                                <div class="icon">
                                <img :src="productItem.image" alt="">
                                </div>
                                <h5>{{productItem.name}}</h5>
                                <div class="text">
                                     <p v-html="productItem.description"></p>

                                </div>
                            </div>
                        </router-link>
                    </div>
                <!-- </carousel> -->
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>

export default {
  name: "RelatedProducts",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>"
    }
  }

}
</script>
