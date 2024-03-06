const routes = [
    {
        path: '/',
        name: 'index',
        title: '世界管理',
        component: () => import('@/view/manager/Index.vue'),
        children: []
    },
    {
        path: '/cityManager/:id',
        name: 'cityManager',
        title: '城市管理',
        component: () => import('@/view/manager/CityManager.vue'),
    },
    {
        path: '/sceneManager/:id',
        name: 'sceneManager',
        title: '场景管理',
        component: () => import('@/view/manager/SceneManager.vue'),
    },

]
export default routes
