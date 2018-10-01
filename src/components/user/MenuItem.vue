<template>
    <div id="menu-item" @click="menuItemClick">
        <div class="icon">
            <slot></slot>
        </div>
        <div class="text">
            {{ text }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "MenuItem",
        props: {
            text: String,
            color: {
                type: String,
                default: 'darkslategray'
            }
        },
        methods: {
            menuItemClick() {
                this.$emit('menu-item-click');
            }
        }
    }
</script>

<style scoped lang="stylus">
    @import "../../assets/stylus/common.styl"

    #menu-item {
        background darkslategray
        color #fff
        width: 300px
        height: 300px
    }
</style>