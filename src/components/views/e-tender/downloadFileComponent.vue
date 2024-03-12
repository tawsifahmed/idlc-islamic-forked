<template>
    <section>
            <!--CATEGORIZED PORDUCT Part Start-->
<br><br>
<!-- <div id="topBreak"></div> -->
<!--CATEGORIZED PORDUCT Part End-->
      <div class="productFeatures">
          <div class="categoryDetails"   id="categoryFeature1">
                <div class="container">

                  <div class="pdfDownloadItem" v-for="item in downloadableFiles" :key="item.id">
                    <p>{{ item.downloadable_title}}</p>
                    <a class="d_button"  @click.prevent="downloadItem(item.downloadable_file, item.id)"  :href="item.downloadable_file">
                      <img src="../../../assets/img/report/Download-PDF.png" alt="">
                      <span>Download</span>
                    </a>
                  </div>

                </div>
            </div>


      </div>
      <br>
    </section>
</template>
<script>
  import axios from "axios";

  export default {
    name: "CategorizedProduct",
    data() {
      return {
        downloadableFiles: [],
        shortcode: 'eTender',
      }
    },

    methods: {
      getDownloadableFiles() {
        axios.get('get-downloadable-file', {
          params: {
            shortcode: this.shortcode
          }
        }).then((response) => {
          if (response.status == 200) {
            this.downloadableFiles = response.data.details;
          } else {
            console.log(response);
          }
        }).catch(error => console.log(error));
      },

      downloadItem(file, id) {
        axios.get(file, { responseType: 'blob' })
          .then(response => {
            console.log(response);
            const blob = new Blob([response.data], { type: 'application/pdf' })
            const link = document.createElement('a')
            link.href = URL.createObjectURL(blob)
            link.download = file
            link.click()
            URL.revokeObjectURL(link.href)
          }).catch(console.error)


      },

    },
    created() {
      this.getDownloadableFiles();

    },

  }
</script>
<style lang="" scoped>

  .multiple-items .row{
    margin-right: 10px;
    margin-left: 10px;
  }

  .productFeatures .tabcontent1 {
    border: none;
  }




.homePageTitleDetails p {
    font-size: 14px;
    padding: 20px 250px 20px 250px;
}
.latest {
    margin: 20px;
}
.logo {
    text-align: center;
}
.single-news {
    padding-bottom: 34px;
    padding-left: 0;
}
#feature {
    display: block;
}



  .tabcontent1 .pdf_icon .files{
    /*padding: 20px;*/
    min-height: 200px;
    /*background-color: red;*/

    border: 1px solid #d62e2f;
    position: relative;
    margin-bottom: 20px;
  }

  .title {
    font-size: 16px;
    padding: 30px 20px;
    height: 110px;
  }
    .date {
      padding: 0px 20px;
      font-size: 14px;
    }

  p.tag span {
     position: absolute;
    right: 0px;
    background: #ffe4e4;
    line-height: 22px;
    padding: 0px 16px;
    color: #fff;
    border-bottom-left-radius: 6px;
    text-align: center;
    display: inline-block;
    font-size: 14px;
    float: right;
  }




  .inner_box h4  {
    text-align: center;
    padding: 20px;
  }



</style>
