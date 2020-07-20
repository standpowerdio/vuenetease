export default {
  ishow: state => state.ishow,
  hotsonglist: state => state.hotsong.tracks,
  hotsongtime: state => {
    if (state.hotsong.updateTime) {
      let time = new Date(state.hotsong.updateTime);
      return (time.getMonth() + 1) + '月' + time.getDate() + '日'
    } else {
      return ''
    }
  },
  hotsearch: state => state.hotsearch,
  searchsuggest: state => state.searchsuggest,
  searchlist: state => state.searchlist,
  searchshow: state => {
    if (state.showslist) return 3
    else if (state.showsing) return 2
    else return 1
  }
}