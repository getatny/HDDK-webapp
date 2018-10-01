const state = {
    username: String,
    avatar: String,
    role: Number,
    realName: String,
    tel: String
};

const getters = {
    user (state) {
        return {
            username: state.username,
            avatar: state.avatar,
            role: state.role,
            realName: state.realName,
            tel: state.tel
        }
    }
};

const mutations = {
    setUser (state, user) {
        state.username = user.username
        state.avatar = user.avatar
        state.role = user.role
        state.tel = user.tel
        state.realName = user.realName
    },
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}