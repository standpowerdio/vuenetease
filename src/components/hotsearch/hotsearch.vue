<template>
    <div class="hot">
        <p>热门搜索</p>
        <div class="list">
            <p v-for="(item,i) in searchlist" :key="i" @click="postmsg(item.first);getsearchlist(item.first)">{{item.first}}</p>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
import bus from '../../utils/bus'
export default {
    props:{
        searchlist:{
            type:Array,
            default:()=> []
        }
    },
    methods: {
        ...mapActions(['getsearchlist']),
        postmsg(msg){
            bus.$emit('setmsg',msg)
        }
    }
}
</script>


<style scoped>
.hot{
    padding:5vw 2vw;
}
.hot p{
    font-size: 3.2vw;
    color: #666;
    padding-bottom: 3vw;
}
.list{
    display: flex;
    flex-wrap: wrap;
}
.list p{
    padding: 2vw 3vw;
    font-size: 3.5vw;
    border: 0.2vw solid rgba(0, 0, 0, 0.05);
    border-radius: 5vw;
    margin-right: 2vw;
    margin-bottom: 2vw;
}
</style>