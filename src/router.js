import Vue from 'vue'
import Router from 'vue-router'
import ActivityList from './views/ActivityListPage'
import ActivityFull from './views/ActivityFullPage'
import SignUpPage from './views/SignUpPage'
import UserInfo from './views/UserInfoPage'

Vue.use(Router)

export default new Router({
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: ActivityList,
            children: [
                {
                    path: 'activity',
                    name: 'activity',
                    component: ActivityFull,
                    children: [
                        {
                            path: 'sign-up',
                            name: 'signUp',
                            component: SignUpPage
                        }
                    ]
                }
            ],
            meta: {title: '活动大咖'}
        },
        {
            path: '/user',
            name: 'userInfo',
            component: UserInfo,
            meta: {title: '个人信息'}
        }
    ]
})
