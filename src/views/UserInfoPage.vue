<template>
    <div id="user-info-page">
        <div class="mask">
            <div class="mask-1"></div>
            <div class="mask-2"></div>
        </div>

        <div class="info">
            <div class="avatar">
                <img :src="user.avatar" alt="avatar" />
            </div>
            <div class="name">
                <div class="real-name">{{ user.realName }}</div>
                <div class="username">{{ user.username }} | {{ getRole }}</div>
            </div>
        </div>

        <div class="menu">

        </div>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import MenuItem from '../components/user/MenuItem'

    export default {
        name: "UserInfoPage",
        components: {
            MenuItem
        },
        computed: {
            getRole() {
                return this.role === 1 ? '学生' : '教师'
            },
            ...mapGetters({
                user: 'user/user'
            })
        }
    }
</script>

<style scoped lang="stylus">
    @import "../assets/stylus/common.styl"

    #user-info-page {
        background #fff
        height: calc(100vh - 110px);
        overflow hidden
        position relative
        left: 0

        .mask {

            .mask-1 {
                width: 100vw
                height: 200px
                position relative
                background #fed351
            }

            .mask-2 {
                width: 130%
                height: 100px
                border-radius 50%
                position relative
                left: 50%;
                transform translate(-50%, -50%)
                background #fed351
            }
        }

        .info {
            text-align center

            .avatar {
                width: 200px
                height: 200px
                border-radius 30px
                border: 10px solid #fff
                overflow hidden
                position relative
                left 50%
                transform translateX(-50%)
                margin-top -150px
                box-shadow 0 10px 20px -5px #bbb

                img {
                    width: 200px
                    height: 200px
                }
            }

            .name {
                margin-top: 30px

                .real-name {
                    font-size 40px
                    title-font()
                }

                .username {
                    margin-top 10px
                    font-size 25px
                    tip-font()
                }
            }
        }

        .menu {
            margin-top: 30px
        }
    }
</style>