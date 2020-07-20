export default {
  setnewsong:(state,payload)=> state.newsong=payload,
  setalbum:(state,payload)=> state.album=payload,
  setishow:(state,payload)=> state.ishow=payload,
  sethotsong:(state,payload)=> state.hotsong=payload,
  sethotsearch:(state,payload)=> state.hotsearch=payload,
  setshowsing:(state,payload)=> state.showsing=payload,
  setsearchsuggest:(state,payload)=> state.searchsuggest=payload,
  setsearchlist:(state,payload)=> state.searchlist=payload,
  clearslist:state=> state.searchlist=[],
  setshowslist:(state,payload)=> state.showslist=payload
}