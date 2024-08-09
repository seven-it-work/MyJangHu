const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        children: [
            {
                path: '/',
                name: 'index',
                title: '首页',
            },
            {
                path: '/game',
                name: 'game',
                title: '游戏',
                component: () => import('@/view/game/index.vue'),
                children: [
                    {
                        path: 'login',
                        name: 'login',
                        title: '登录',
                        component: () => import('@/view/game/Login.vue'),
                    },
                    {
                        path: 'gameWorld',
                        name: 'gameWorld',
                        title: '世界页',
                        component: () => import('@/view/game/Game.vue'),
                    },
                    {
                        path: '/gameCity/:worldId',
                        name: 'gameCity',
                        title: '城市页',
                        component: () => import('@/view/game/GameCity.vue'),
                    },
                    {
                        path: '/gameScene/:worldId/:cityId',
                        name: 'gameScene',
                        title: '场景页',
                        component: () => import('@/view/game/GameScene.vue'),
                    },
                ]
            },
            {
                path: '/game2',
                name: 'game2',
                title: '游戏',
                component: () => import('@/view/game2/index.vue'),
                children: []
            },
            {
                path: '/manager',
                name: 'manager',
                title: '管理',
                component: () => import('@/view/manager/index.vue'),
                children: [
                    {
                        path: 'worldManager',
                        name: 'worldManager',
                        title: '世界管理',
                        component: () => import('@/view/manager/WorldManager.vue'),
                    },
                    {
                        path: 'cityManager/:worldId',
                        name: 'cityManager',
                        title: '城市管理',
                        component: () => import('@/view/manager/CityManager.vue'),
                    },
                    {
                        path: 'sceneManager/:worldId/:cityId',
                        name: 'sceneManager',
                        title: '场景管理',
                        component: () => import('@/view/manager/SceneManager.vue'),
                    },
                    {
                        path: 'peopleManager/:worldId/:cityId/:sceneId',
                        name: 'peopleManager',
                        title: '人员管理',
                        component: () => import('@/view/manager/PeopleManager.vue'),
                    },
                    {
                        path: 'peopleDetail/:peopleId',
                        name: 'peopleDetail',
                        title: '人员详情',
                        component: () => import('@/view/manager/PeopleDetail.vue'),
                    },
                ]
            },
        ]
    },
]
export default routes
