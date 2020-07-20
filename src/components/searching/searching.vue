<template>
    <div class="searching">
        <p class="top" @click="postmsg(msg);getsearchlist(msg)">搜索“{{msg}}”</p>
        <searchcell v-for="(item,i) in searchsuggest" :msg="item.keyword" :key="i" @click.native="postmsg(item.keyword);getsearchlist(item.keyword)"/>
    </div>
</template>

<script>
import bus from '../../utils/bus'
import {mapGetters,mapActions} from 'vuex'
import searchcell from '../searchcell/searchcell'
export default {
    data(){
        return {
            msg:''
        }
    },
    computed: {
        ...mapGetters(['searchsuggest'])
    },
    components:{
        searchcell
    },
    methods: {
        ...mapActions(['getsearchlist']),
        postmsg(msg){
            bus.$emit('setmsg',msg)
        }
    },
    mounted() {
        bus.$on('recmsg',r=>{
            this.msg = r
        }),
        bus.$on('setmsg',r=>{
            this.msg = r
        })
    }
}
</script>

<style scoped>
.top{
    font-size: 4vw;
    line-height: 13vw;
    margin-left: 3vw;
    border-bottom: 0.2vw solid rgba(0, 0, 0, 0.05);
    color: #507daf;
}
</style>