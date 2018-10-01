<template>
    <div id="app">
        <TopBar :title="title" color="#fff" :user="user"/>
        <transition name="slide-up" mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    import TopBar from './components/common/TopBar'
    import { mapGetters, mapMutations } from 'vuex'

    export default {
        components: {
            TopBar
        },
        methods: {
            getUserInfo() {
                this.$http.get('/api/user/getatny').then((res) => {
                    this.setUser(res.data.user)
                })
            },
            ...mapMutations({
                setUser: 'user/setUser'
            })
        },
        computed: {
            title() {
                return this.$route.meta.title !== undefined ? this.$route.meta.title : '活动详情'
            },
            ...mapGetters({
                user: 'user/user'
            })
        },
        mounted() {
            // 获取用户信息
            this.getUserInfo();
        }
    }
</script>

<style lang="stylus">
    @import "assets/stylus/animation.styl"

    body {
        margin: 0;
        padding: 0;
        font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    }

    #app {
        background #fed351;
        min-height: 100vh
    }
</style>
