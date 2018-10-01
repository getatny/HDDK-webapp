<template>
    <div id="top-bar">
        <transition name="fade">
            <div class="person" :style="{opacity: isUser ? '0' : '1'}" @click="avatarClick">
                <img :src="user.avatar" alt="avatar"/>
            </div>
        </transition>
        <div class="title" :style="{color: color}">{{ title }}</div>
        <transition name="fade">
            <div class="back-arrow" v-show="!isHome" @click="arrowClick">
                <font-icon icon="times-circle" />
            </div>
        </transition>
        <div class="clear"></div>
    </div>
</template>

<script>
    export default {
        name: "TopBar",
        props: {
            title: String,
            color: {
                type: String,
                default: "auto"
            },
            user: {
                type: Object,
                default: null
            }
        },
        data() {
            return {
                isHome: this.$route.name === 'home',
                isUser: this.$route.name === 'userInfo'
            }
        },
        methods: {
            arrowClick() {
                this.$router.replace("/");
            },
            avatarClick() {
                this.$router.push("/user");
            }
        },
        watch: {
            "$route": function(to) {
                this.isHome = to.name === "home";
                this.isUser = to.name === "userInfo";
            }
        },
    }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/common.styl"

    #top-bar {
        height: 100px;
        background transparent;
        padding: 5px 20px;

        .back-arrow, .person {
            width: 110px;
            float right;
            height: 100px
            line-height 100px
            position relative
        }

        .person {
            opacity 1
            transition opacity .35s ease-in-out

            img {
                width: 65px
                height 65px
                border-radius: 20px
                position absolute
                top: 50%
                right: 0
                transform translateY(-50%)
                border: 1px solid #fff
            }
        }

        .back-arrow {
            font-size 45px
            title-font()
        }

        .title {
            text-align center;
            width: calc(100vw - 260px);
            float right;
            line-height 100px
            font-size 35px;
            title-font()
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition opacity .35s ease-in-out
    }

    .fade-enter, .fade-leave-to {
        opacity 0;
    }
</style>