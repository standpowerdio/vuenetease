<template>
    <div class="hot">
        <div class="banner">
            <div class="banner1">
                <div></div>
                <p>更新日期: {{hotsongtime}}</p>
            </div>
        </div>
        <div>
            <cell v-for="(item,i) in this.hotsonglist" v-if="i<20" :num="i+1" :title="item.name" :artists="item.ar" :album="item.al.name" :key="i" :sid="item.id"/>
        </div>
    </div>
</template>


<script>
import {mapGetters} from 'vuex'
import cell from '../components/cell/cell'
export default {
    computed: {
        ...mapGetters(['hotsonglist','hotsongtime']),
    },
    mounted() {
        this.$store.dispatch('gethotsong')
    },
    components:{
        cell
    }
}
</script>

<style scoped>
.hot{
    flex: 1;
    overflow: auto;
    padding-bottom: 20vw;
}
.banner{
    height: 39vw;
    background: url(../assets/hot_bg.f01a2523.jpg) no-repeat;
    background-size: contain;
}
.banner1{
    width: 100%;
    height: 100%;
    display: flex;
    background-color: rgba(0, 0, 0, 0.2);
    padding-left: 5.3vw;
    box-sizing: border-box;
    flex-direction: column;
    justify-content: center;
}
.banner1 div{
    width: 37.87vw;
    height: 17.88vw;
    background: url(../assets/hot_icon.png) 0 0 no-repeat;
    background-size: 44.27vw;
    background-position: -6.4vw -8vw ;
}
.banner1 p{
    font-size: 2.9vw;
    color: #ddd;
    margin-top: 3vw;
}
</style>