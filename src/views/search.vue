<template>
    <div class="searchbox">
        <search/>
        <div class="overauto">
        <hotsearch :searchlist="hotsearch" v-show="searchshow === 1" />
        <searching v-show="searchshow === 2"/>
        <div>
            <cell v-for="(item,i) in searchlist" v-if="item.name!=='？'" :title="item.name" :artists="item.artists" :album="item.album.name" :key="i" :sid="item.id"/>
        </div>
        </div>
    </div>
</template>



<script>
import search from '../components/search/search'
import searchcell from '../components/searchcell/searchcell'
import hotsearch from '../components/hotsearch/hotsearch'
import searching from '../components/searching/searching'
import cell from '@/components/cell/cell.vue'
import {mapGetters} from 'vuex'
export default {
    components:{
        search,
        searchcell,
        hotsearch,
        searching,
        cell
    },
    mounted() {
        this.$store.dispatch('gethotsearch')
    },
    computed: {
        ...mapGetters(['hotsearch','searchshow','searchlist'])
    }
}
</script>

<style scoped>
.searchbox{
    flex: 1;
    overflow: auto;
    display: flex;
    flex-direction: column;
}
.overauto{
    flex: 1;
    overflow: auto;
}
</style>