import Mock from 'mockjs'
import avatar from './assets/img/avatar.jpg'

const random = Mock.Random;

let activities = [];

// 虚拟活动数据
for (let i = 0; i < 10; i++) {
    let activity = {
        id: (i+1),
        title: random.ctitle(4, 10),
        status: '报名中',
        startTime: random.date('yyyy-MM-dd'),
        signUpStartTime: random.date('yyyy-MM-dd'),
        personLimit: random.integer(300, 500),
        signUpNumber: random.integer(50, 500),
        description: random.cparagraph(6, 100),
        score: random.integer(1, 10),
        tips: random.cparagraph(10, 100),
        fields: [
            {
                id: 1,
                info: random.ctitle(4, 10),
                signUpNumLimit: random.integer(30, 100),
                tel: 13988888888,
                name: '王老师'
            },
            {
                id: 2,
                info: random.ctitle(4, 10),
                signUpNumLimit: random.integer(30, 100),
                tel: 13988888888,
                name: '王老师'
            }
        ]
    };

    activities.push(activity);
}

const getActivities = function () {
    return {
        activities: activities
    }
};

const getActivity = function () {
    return {
        activity: activities[1]
    }
}

// 虚拟用户数据
const getatny = {
    username: 'getatny',
    realName: '王茂竹',
    tel: '17777777777',
    avatar: avatar,
    role: 0
};

const getUser = function() {
    return {
        user: getatny
    }
}

Mock.mock('/api/activities', 'get', getActivities);
Mock.mock('/api/activity/1', 'get', getActivity);
Mock.mock('/api/user/getatny', 'get', getUser);