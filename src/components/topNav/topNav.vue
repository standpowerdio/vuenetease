<template>
    <div id="top">
        <div class="banner">
            <img src="../../assets/logo.svg">
        </div>
        <div class="nav">
            <router-link class="jump" to="/home" replace>推荐音乐</router-link>
            <router-link class="jump" to="/hot" replace>热歌榜</router-link>
            <router-link class="jump" to="/search" replace>搜索</router-link>
        </div>
    </div>
</template>



<style scoped>
.banner{
    height: 17vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5vw;
    background: #d43c33;
}
.banner img{
    width: 37.9vw;
    height: 6.67vw;
}
.nav{
    height: 11.5vw;
    display: flex;
    justify-content: space-around;
    border-bottom: 0.1vw solid #eee;
}
.jump{
    color: #666;
    font-size: 4vw;
    line-height: 11.5vw;
    flex: 1;
    text-align: center;
}
.router-link-active{
    color: #d43c33;
    border-bottom: 0.5vw solid #d43c33;
}
</style>