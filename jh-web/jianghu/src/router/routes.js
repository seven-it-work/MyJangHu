const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        children: []
    },
    {
        path: '/game',
        name: 'game',
        title: '管理',
        component: () => import('@/view/game/Game.vue'),
        children: []
    },
    {
        path: '/manager',
        name: 'manager',
        title: '管理',
        redirect: {name: 'worldManager'},
        children: [
            {
                path: 'worldManager',
                name: 'worldManager',
                title: '世界管理',
                component: () => import('@/view/manager/WorldManager.vue'),
            },
            {
                path: 'cityManager/:id',
                name: 'cityManager',
                title: '城市管理',
                component: () => import('@/view/manager/CityManager.vue'),
            },
            {
                path: 'sceneManager/:id',
                name: 'sceneManager',
                title: '场景管理',
                component: () => import('@/view/manager/SceneManager.vue'),
            },
        ]
    },

]
export default routes
