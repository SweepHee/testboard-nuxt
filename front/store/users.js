export const state = () => ({
    me: null,
})


// 동기 작업
export const mutations = {
    setMe(state, payload) {
        state.me = payload;
    }
}

// 비동기 작업 (동기작업해도 괜찮다)
// commit => mutations를 실행한다.
// dispatch => actions를 실행한다.
// state => state를 바꾸거나 가져오거나 할 수 있다
// rootState => store/index.js 의 store를 사용할 수 있다
// rootGetters => store/index.js의 getters(?)
export const actions = {
    signUp({ commit, dispatch, state, rootState, getter, rootGetters }, payload) {
        commit("setMe", payload); // setMe 뮤테이션을 실행하고 payload를 넘긴다.
    },
    logIn({commit}, payload) {
        commit("setMe", payload);
    },
    logOut({ commit }, payload) {
        commit("setMe", null);
    },
}