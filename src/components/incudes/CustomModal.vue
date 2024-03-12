<template>
    <div class="customPopUp" @click.stop="modalShow = !modalShow" v-if="modalShow">
      <div class="customModalBody" @click.stop="">
        <div class="customModalHeader">
          <button class="closeCustomModal" @click.stop="modalShow = !modalShow"><span class="icon-times"></span></button>
          <h5>Test New Data Available Here</h5>
        </div>
        <div class="customModalContent">
          <div class="image">
            <!-- <img src="./../../../assets/img/report/Financial-Report_Image.jpg" width="100%" alt=""> -->
          </div>
          <div  class="details">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis ut labore maiores aperiam incidunt animi ad rerum suscipit repellat accusantium! Minima quae vel molestiae itaque expedita dolore architecto maiores consectetur ipsum nihil est rem ab, nam corrupti culpa laboriosam commodi. Cupiditate provident architecto, porro eveniet quas nobis sunt? Veniam aut dolorum ipsam quod voluptatibus modi adipisci voluptas corrupti magni aliquam sed mollitia nihil blanditiis quos nam in dolores earum, ex dolore dicta iste. Obcaecati veniam eius quo mollitia! Sed incidunt repellendus id quos voluptatem hic reprehenderit rerum, reiciendis totam iure ratione, doloremque, ipsa nam eum modi commodi? Earum, totam nemo!</p>
          </div>
        </div>
        <div class="customModalFooter">
          <h5>Lorem ipsum dolor sit amet.</h5>
        </div>
      </div>
    </div>
</template>