<template>
    <div class="cell">
        <p>{{msg}}</p>
    </div>
</template>

<script>
export default {
    props:{
        msg:{
            type:String,
            required:true
        }
    }
}
</script>


<style scoped>
.cell{
    padding-left: 7vw;
    display: flex;
    background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMCAzMCI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjMDQwMDAwIiBkPSJNMjguMTgxIDI3LjUzNWwtMS40MTQgMS40MTQtNy43NTUtNy43NTRBMTEuNDQ1IDExLjQ0NSAwIDAgMSAxMS41IDI0QzUuMTQ5IDI0IDAgMTguODUyIDAgMTIuNSAwIDYuMTQ5IDUuMTQ5IDEgMTEuNSAxIDE3Ljg1MiAxIDIzIDYuMTQ5IDIzIDEyLjVjMCAyLjc1Ni0uOTczIDUuMjg1LTIuNTg5IDcuMjY2bDcuNzcgNy43Njl6TTExLjUgM2E5LjUgOS41IDAgMSAwIDAgMTkgOS41IDkuNSAwIDAgMCAwLTE5eiIgb3BhY2l0eT0iLjMiLz48L3N2Zz4=) no-repeat 2vw 4.5vw;
    background-size: 4vw;
}
.cell p{
    flex: 1;
    border-bottom: 0.2vw solid rgba(0, 0, 0, 0.05);
    font-size: 4vw;
    line-height: 13vw;
}
</style>