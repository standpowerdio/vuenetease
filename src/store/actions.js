import { getdata } from './services'




export default {
    getnewsong: ({ commit, state }) => {
        getdata({
            url: '/api/personalized/newsong',
            params: {
                limit: 10
            }
        }).then(r => {
            if (r.data.code === 200) commit('setnewsong', r.data.result)
        })
    },
    getalbum: ({ commit, state }) => {
        getdata({
            url: '/api/personalized',
            params: {
                limit: 6
            }
        }).then(r => {
            if (r.data.code === 200) commit('setalbum', r.data.result)
        })
    },
    gethotsong:({ commit, state }) => {
        getdata({
            url: '/api/playlist/detail',
            params: {
                id: 3778678
            }
        }).then(r => {
            if (r.data.code === 200) commit('sethotsong', r.data.playlist)
        })
    },
    gethotsearch:({ commit, state }) => {
        getdata({
            url: '/api/search/hot'
        }).then(r => {
            if (r.data.code === 200) commit('sethotsearch', r.data.result.hots)
        })
    },
    getsearchsuggest:({ commit, state },keywords) => {
        getdata({
            url: '/api/search/suggest',
            params:{
                keywords,
                type:'mobile'
            }
        }).then(r => {
            if (r.data.code === 200) commit('setsearchsuggest', r.data.result.allMatch)
        })
    },
    getsearchlist:({ commit, state },keywords) => {
        commit('setshowslist',true)
        getdata({
            url: '/api/search',
            params:{
                keywords
            }
        }).then(r => {
            if (r.data.code === 200){ 
                commit('setsearchlist', r.data.result.songs)
            }
        })
    }
}