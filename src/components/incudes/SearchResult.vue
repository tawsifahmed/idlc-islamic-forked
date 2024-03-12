<template>
    <div class="searchData" v-show="search">
        <div class="searchBody">
            <div class="container">
                <div class="group" v-for="(searchItems,index) in searchData">
                    <h5 class="groupTitle">{{index}}</h5>
                    <ul class="seachList">
                        <li v-for="(searchItem,index) in searchItems">
                            <router-link :to="searchItem.page_link" @click.native="search = ''">{{searchItem.title}}</router-link>
                        </li>
                    </ul>
                </div>
            </div>
            <li class="warning singleResult text-center" v-if="searchData.length<=0">
                <router-link :to="nolink" @click.native="search = ''"  style=" margin: auto; text-align: center; display: block;color: black;"><h4 >No results found!</h4></router-link>
            </li>
        </div>
    </div>

</template>
<script>
import axios from "axios";
export default {
    name: "search-result",
    data() {
        return {

        }
    },

    watch: {

    },
    computed: {

    }
}
</script>

<style scoped>


.searchData {
  position: fixed;
  right: 0;
  top: 70px;
  height: 500px;
  width: 100%;
  z-index: 1000000;

}


.searchBody {
  width: 100vw; height: 100vh; background: #fff; padding: 100px 0; z-index: 1000000;
}
.searchBody .group{
  margin-bottom: 30px;
  text-align: left;
}
.searchBody .group .groupTitle{
  margin-bottom: 15px;
}
.searchBody .group .seachList{
  display: flex;
  flex-wrap: wrap;
}
.searchBody .group .seachList li{
  flex-basis: 31%;
  border-bottom: 1px solid #333;
  margin-bottom:5px;
  margin-right: calc(100% - 31*3% - 5%);
}
.searchBody .group .seachList li:last-child{
  justify-self: flex-start;
}
.searchBody .group .seachList li a{
  color: #333;
  font-size: 14px;
}
 @media screen and (max-width: 600px){
  .searchData {
    position: relative;
    right: 0;
    top: 15px;
    height: auto;
    width: 100%;
    z-index: 1000000;

  }
  .searchBody {
    width: 100vw; height: 100vh; background: #fff; padding: 20px 0 100px 0; z-index: 1000000;
  }
  .searchBody .group .seachList{
    flex-direction: column;
  }
  .searchBody .group .seachList li{
    margin-right: unset;
  }
}
</style>
