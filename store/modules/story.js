import { getStories } from '~/api/story'
import * as types from '../mutation-types'

const namespaced = true

const state = () => ({
  stories: [],
  title: '',
  body: ''
})

const getters = {
  allStories: (state) => state.stories,
  title: (state) => state.title,
  body: (state) => state.body
}

const actions = {
  async getAllStories({ commit }) {
    const { data: stories } = await getStories()
    commit(types.SET_STORIES, { stories })
  }
}

const mutations = {
  [types.SET_STORIES](state, { stories }) {
    state.stories = stories
  },
  [types.UPDATE_TITLE](state, { title }) {
    state.title = title
  },
  [types.UPDATE_BODY](state, { body }) {
    state.body = body
  }
}

export default {
  namespaced,
  state,
  getters,
  actions,
  mutations
}