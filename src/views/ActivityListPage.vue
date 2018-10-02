<template>
    <div id="activity-list-page">
        <Scroll class="wrapper" :data="activities">
            <div class="content">
                <ActivityListItem v-for="activity in activities" :key="activity.id" :activity="activity"/>
            </div>
        </Scroll>

        <transition name="slide-up">
            <router-view />
        </transition>
    </div>
</template>

<script>
    import ActivityListItem from '../components/Activity/ActivityListItem'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        name: "ActivityList",
        components: {
            ActivityListItem
        },
        data() {
            return {
                scrollY: 0
            }
        },
        methods: {
            getActivities() {
                this.$http.get('/api/activities').then((res) => {
                    this.setActivities(res.data.activities)
                });
            },
            ...mapMutations({
                setActivities: 'activity/setActivities',
                setCurrentActivity: 'activity/setCurrentActivity'
            })
        },
        computed: {
            ...mapGetters({
                activities: 'activity/activities',
                currentActivity: 'activity/currentActivity'
            })
        },
        mounted() {
            // 获取所有activity数据
            this.getActivities();
        }
    }
</script>

<style scoped lang="stylus">
    @import "../assets/stylus/animation.styl"

    #activity-list-page {
        position relative
        left: 0
    }

    .wrapper {
        height: calc(100vh - 110px);
        overflow hidden

        .content {
            padding-top: 20px;
            overflow auto
        }
    }
</style>