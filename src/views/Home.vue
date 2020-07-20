<template>
  <div class="home">
    <snav msg="推荐歌单"/>
    <songlist/>
    <snav msg="最新音乐"/>
    <div>
      <cell v-for="(item,i) in $store.state.newsong" :title="item.song.name" :artists="item.song.artists" :album="item.song.album.name" :key="i" :sid="item.id"/>
    </div>
    <homefooter/>
  </div>
</template>

<script>
import snav from '@/components/snav/snav.vue'
import songlist from '@/components/songlist/songlist.vue'
import cell from '@/components/cell/cell.vue'
import homefooter from '@/components/homefooter/homefooter.vue'

export default {
  name: 'Home',
  data(){
    return {
      newsongs:[]
    }
  },
  components: {
    snav,
    songlist,
    cell,
    homefooter
  },
  mounted() {
    this.$store.dispatch('getnewsong')
  }
}
</script>



<style scoped>
.home{
  flex: 1;
  overflow: auto;
}
</style>
