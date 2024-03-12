<template>
    <div>
           <!-- <div class="text-center" style="padding: 100px 30px">
        <h1>Green Finance Page</h1>
            </div> -->
            <div class="homePageTitleDetails sectionTitle textToUperCase container" >
                <!-- <h2 style="text-align: center; " class="h2Responsive text-uppercase">
                {{ this.contentData.page_name }}
                </h2> -->
                <!-- <h6>{{ contentData.tagline }}</h6> -->
            <span v-html="this.$parent.contentData.description"></span>
            </div>

<!--            <div class="homePageTitleDetails sectionTitle">-->
<!--            <b-container class="bv-example-row">-->
<!--                <b-row class="text-center">-->
<!--                <b-col md="12" offset-md="">-->
<!--                    <b-embed-->
<!--                        type="iframe"-->
<!--                        aspect="16by9"-->
<!--                        :src="this.$parent.contentData.video_link"-->
<!--                        allowfullscreen>-->
<!--                    </b-embed>-->

<!--                </b-col>-->

<!--                </b-row>-->

<!--            </b-container>-->
<!--            </div>-->
            <br>
    </div>
</template>
