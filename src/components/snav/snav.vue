<template>
  <div class="reclist">
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
.reclist {
  display: flex;
  font-size: 4.5vw;
  height: 13vw;
  align-items: center;
}
.reclist p{
    padding-left: 2vw;
    border-left: 0.7vw solid #d43c33;
}
</style>