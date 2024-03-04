const routes = [
    {
        path: '/',
        name: 'index',
        title: '首页',
        component: () => import('@/view/game/Index.vue'),
    }
]
export default routes
