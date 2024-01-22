import { createRouter, createWebHistory } from 'vue-router';

import Home from '../views/Home.vue';
import Blog from '../views/Blog.vue';
import SingleBlogPage from '../views/SingleBlogPage.vue';
import blogSlider from '../components/blogSlider.vue'
import Portfolio from '../views/Portfolio.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/Blog',
        name: 'Blog',
        component: Blog,
    },
    {
        path: '/blog/:id',
        name: 'SingleBlog',
        components: { default: SingleBlogPage, slider: blogSlider },
        props: true,
    },
    {
        path: '/Contact',
        name: 'Portfolio',
        component: Portfolio,
        props: true,
    },

];

const router = createRouter({
    history: createWebHistory(),
    linkActiveClass: 'active',
    routes,
});

export default router;


