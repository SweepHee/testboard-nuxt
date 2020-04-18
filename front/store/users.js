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

        console.log("스토어 들어옴");

        this.$axios.post("http://localhost:3085/user", {
            email: payload.id,
            nickname: payload.name,
            password: payload.password
        })
        .then((response) => {
            console.log(response)
        })
    },
    logIn({commit}, payload) {
        commit("setMe", payload);
    },
    logOut({ commit }, payload) {
        commit("setMe", null);
    },
}