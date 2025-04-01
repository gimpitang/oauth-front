import GoogleRedirect from "@/components/GoogleRedirect.vue";
import MemberCreate from "@/components/MemberCreate.vue";
import MemberLogin from "@/components/MemberLogin.vue";
import NaverRedirect from "@/components/NaverRedirect.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/member/create',
        component: MemberCreate
    },
    {
        path: '/member/login',
        component: MemberLogin
    },
    {
        path: "/member/google/redirect",
        component: GoogleRedirect
    },
    {
        path: "/member/naver/redirect",
        component: NaverRedirect
    }
]
const router = createRouter(
    {
        history: createWebHistory(),
        routes
    }
)

export default router;