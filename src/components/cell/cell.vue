<template>
  <div class="bigcell" @click="jump">
    <p class="num" :style="{color:numcolor}" v-if="num">{{num | showid}}</p>
    <div class="cell">
      <div class="title">
        <div>
          <p>{{title}}</p>
          <span>
            <i></i>
            {{singer}}
            - {{album}}
          </span>
        </div>
      </div>
      <div class="play"></div>
    </div>
  </div>
</template>


<script>
export default {
  filters: {
    zero(val) {
      if (!val) return "";
    }
  },
  props: {
    num: {
      type: Number
    },
    title: {
      type: String,
      required: true
    },
    artists: {
      type: Array,
      required: true
    },
    album: {
      type: String,
      required: true
    },
    clink:{
      type: String
    },
    sid:{
      type:Number,
      required:true
    }
  },
  computed: {
    singer() {
      let str = this.artists[0].name;
      for (let i = 1; i < this.artists.length; i++) {
        str += " / " + this.artists[i].name;
      }
      return str;
    },
    numcolor(){
      if(this.num === 1 || this.num === 2 || this.num === 3) return "red"
      else return "#888"
    }
  },
  filters:{
    showid(val) {
      if (!val) return "";
      return val.toString().padStart(2, "0");
    }
  },
  methods: {
    jump(){
      this.$router.push({name:'detail',query:{id:this.sid}})
    }
  }
};
</script>


<style scoped>
.bigcell {
  display: flex;
  align-items: center;
}
.num {
  padding-left: 2vw;
}
.cell {
  border-bottom: 0.3vw solid #ddd;
  margin-left: 2.5vw;
  padding-right:  2.5vw ;
  padding-top:  2vw ;
  display: flex;
  align-items: center;
  line-height: 6vw;
  width: 100%;
}
.cell p,
.cell span {
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  width: 100%;
}
.cell p {
  font-size: 4.5vw;
}
.cell span {
  display: inline-block;
  font-size: 3.5vw;
  color: #888;
}
.cell span i {
  display: inline-block;
  width: 3.2vw;
  height: 2.15vw;
  margin-bottom: 0.3vw;
  margin-right: 1vw;
  background: url(../../assets/hot_icon.png) 0 0 no-repeat;
  background-size: 43vw;
}
.play {
  width: 5.9vw;
  height: 5.9vw;
  background: url(../../assets/hot_icon.png) -6.2vw 0 no-repeat;
  background-size: 43vw;
}
.title {
  flex: 1;
  width: 0;
}
</style>