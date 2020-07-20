<template>
  <div class="search">
    <div class="padding">
      <input
        type="text"
        placeholder="搜索歌曲、歌手、专辑"
        autocomplete="off"
        v-model="msg"
        @input="link();throttle()"
        @focus="reset();throttle()"
        @keydown.enter="getsearchlist(msg);lose($event)"
      />
      <div class="del" @click="clear" v-show="msg">×</div>
    </div>
  </div>
</template>



<script>
import bus from '../../utils/bus'
import {mapActions} from 'vuex'
export default {
  data() {
    return {
      msg: "",
      sendtime: null
    };
  },
  methods: {
    ...mapActions(['getsearchlist']),
    reset(){
      this.$store.commit('clearslist')
      this.$store.commit('setshowslist',false)
    },
    throttle() {
      if (this.msg) {
        this.$store.commit('setshowsing',true)
        if (!this.sendtime || Date.now() - this.sendtime > 100) {
          this.$store.dispatch("getsearchsuggest",this.msg);
          this.sendtime = Date.now();
        }
      }else{
        this.$store.commit('setshowsing',false)
      }
    },
    link(){
      bus.$emit('recmsg',this.msg)
    },
    clear(){
      this.msg=''
      document.querySelector('.padding input').focus()
    },
    lose(e){
      e.target.blur()
    }
  },
  mounted() {
    bus.$on('setmsg',r=>{
      this.msg = r
    })
  }
};
</script>

<style scoped>
.search {
  padding: 4vw 3vw;
  display: flex;
  height: 16vw;
  box-sizing: border-box;
  border-bottom: 0.2vw solid rgba(0, 0, 0, 0.05);
}
.search input {
  width: 100%;
  border: 0;
  height: 100%;
  background-color: rgba(255, 255, 255, 0);
  line-height: 100%;
  outline: none;
  font-size: 4vw;
}
.padding {
  position: relative;
  flex: 1;
  height: 100%;
  background-color: #ebecec;
  padding: 0 7vw;
  border-radius: 5vw;
  background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNiAyNiI+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsPSIjYzljOWNhIiBkPSJNMjUuMTgxIDIzLjUzNWwtMS40MTQgMS40MTQtNy4zMTUtNy4zMTRBOS45NjYgOS45NjYgMCAwIDEgMTAgMjBDNC40NzcgMjAgMCAxNS41MjMgMCAxMFM0LjQ3NyAwIDEwIDBzMTAgNC40NzcgMTAgMTBjMCAyLjM0Mi0uODExIDQuNDktMi4xNiA2LjE5NWw3LjM0MSA3LjM0ek0xMCAyYTggOCAwIDEgMCAwIDE2IDggOCAwIDAgMCAwLTE2eiIvPjwvc3ZnPg==);
  background-repeat: no-repeat;
  background-size: 4vw 4vw;
  background-position: 2vw 2vw;
  z-index: 99;
}
.del{
  position: absolute;
  padding: 2vw 2vw;
  top: -1vw;
  right:0vw;
  z-index: 999;
}
</style>