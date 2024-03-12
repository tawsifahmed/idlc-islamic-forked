<template>
    <div class="container  homePageTitleDetails sectionTitle">
        <!-- <h2 style="text-align: center; text-transform: uppercase;" class="h2Responsive ">
          {{ this.$parent.contentData.second_title }}
        </h2> -->
        <h6 style="margin-top: unset;">{{ this.$parent.contentData.tagline }}</h6>
      <span v-html="this.$parent.contentData.description"></span>
    </div>
</template>
