import api from '../api'

const state = {
  videos: [],
  video: {}
}

const actions = {
  getAllVideos: ({ commit }, apiUrl) => {
    return api.getAllVideos(apiUrl).then(videos => commit('updateVideos', videos))
  },
  getSingleVideo: ({ commit }, apiParams) => {
    return api.getSingleVideo(apiParams).then(video => commit('updateSingleVideo', video))
  }
}

const mutations = {
  updateVideos (state, videos) {
    state.videos = videos.data
  },
  updateSingleVideo (state, video) {
    state.video = video
  }
}

const getters = {
  videos: state => {
    return state.videos
  },
  video: state => {
    return state.video
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
}
