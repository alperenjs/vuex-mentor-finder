import { createrRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', redirect: '/coaches'},
        { path: '/coaches', component: null},
        { path: '/coaches/:id', component: null, children: [
            { path: 'contact', component:null }, // /coaches/c1/contact > nested route
        ]},
        { path: '/register', component: null},
        { path: '/contact', component: null},
        { path: '/:notFound(.*)', component: null},
    ]
});

export default router;