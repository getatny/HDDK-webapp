const state = {
    activities: [],
    currentActivity: {}
};

const getters = {
    activities (state) {
        return state.activities
    },
    currentActivity (state) {
        return state.currentActivity
    }
};

const mutations = {
    setActivities (state, activityList) {
        state.activities = activityList
    },
    setCurrentActivity (state, activity) {
        state.currentActivity = activity
    }
};

export default {
    namespaced: true,
    state,
    getters,
    mutations
}