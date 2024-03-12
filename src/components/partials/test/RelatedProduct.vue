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
                <carousel :autoplay="true" :nav="true" :items="3" :dots="false" :navText="[prev,next]" :responsive="{0:{items: 1,nav:false},600:{items: 1,nav:true},1000:{items: 4,nav:true}}">
                <!-- <div class="owl-carousel owl-theme" id="similarProduct"> -->
                    <div class="item">
                        <div class="product ">
                            <div class="icon icon_1">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="product">
                            <div class="icon icon_2">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="product">
                            <div class="icon icon_3">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="product">
                            <div class="icon icon_3">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="product">
                            <div class="icon icon_3">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>

                    <div class="item">
                        <div class="product">
                            <div class="icon icon_3">

                            </div>
                            <h5>Sample Product</h5>
                            <div class="text">
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque, aliquam!</p>

                            </div>
                        </div>
                    </div>


                </carousel>

                </div>
              
            </div>
          </div>
        </div>
      </div>
</template>

<script>

export default {
  name: "LatestNewsSlide",
  data() {
    return {
      prev: "<span class='icon-chevron-left'></span>",
      next: "<span class='icon-chevron-right'></span>"
    }
  }

}
</script>