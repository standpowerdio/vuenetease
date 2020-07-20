<template>
  <div id="app">
    <topNav v-show="ishow" />
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>



<script>
import topNav from "./components/topNav/topNav";
import {mapGetters,mapMutations} from 'vuex'
export default {
  components: {
    topNav
  },
  computed: {
        ...mapGetters(['ishow'])
  },
  methods: {
    ...mapMutations(['setishow'])
  },
  watch: {
    $route: {
      handler(to) {
        if (to.name === "404" || to.name === "detail") {
          this.setishow(false);
        } else {
          this.setishow(true);
        }
      },
      immediate: true
    }
  }
};
</script>


<style>
@import "assets/reset1.css";
html {
  font-size: 5vw;
  line-height: 1;
  height: 100%;
  width: 100%;
}
body {
  height: 100%;
  width: 100%;
}
#app {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}
</style>
