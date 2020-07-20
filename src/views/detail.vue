<template>
  <div
    class="detail"
    :style="{backgroundImage:song.name?('url(https://music.163.com/api/img/blur/'+song.al.pic_str+')'):''}"
  >
    <player :song="song" :songurl="songurl" />
  </div>
</template>




<script>
import player from "../components/player/player";
export default {
  data() {
    return {
      song: {},
      songurl: {}
    };
  },
  components: {
    player
  },
  mounted() {
    this.$axios
      .get("/api/song/detail", {
        params: {
          ids: this.$route.query.id
        }
      })
      .then(r => {
        if (r.data.code === 200) this.song = r.data.songs[0];
      });
    this.$axios
      .get("/api/song/url", {
        params: {
          id: this.$route.query.id,
          br: 128000
        }
      })
      .then(r => {
        if (r.data.code === 200) {
          if (r.data.code === 200) this.songurl = r.data.data[0];
        }
      });
  },
  activated() {
    this.$axios
      .get("/api/song/detail", {
        params: {
          ids: this.$route.query.id
        }
      })
      .then(r => {
        if (r.data.code === 200) this.song = r.data.songs[0];
      });
    this.$axios
      .get("/api/song/url", {
        params: {
          id: this.$route.query.id,
          br: 128000
        }
      })
      .then(r => {
        if (r.data.code === 200) {
          if (r.data.code === 200) this.songurl = r.data.data[0];
        }
      });
  },
  deactivated() {
    this.song = {}
    this.songurl = {}
  }
};
</script>


<style scoped>
.detail {
  flex: 1;
  overflow: auto;
  background: url(https://music.163.com/api/img/blur/109951165122422841);
  background-size: auto 100%;
  background-repeat: no-repeat;
  background-position: 50%;
}
.detail::after {
  content: " ";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>