import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () =>
    import ('../components/Home')
const LoginPage = () =>
    import ('../components/LoginPage')
const FindPass = () =>
    import ('../components/FindPass')
const BusinessIndex = () =>
    import ('../components/BusinessIndex')
const OneStore = () =>
    import ('../components/OneStore')
const MultiStore = () =>
    import ('../components/MultiStore')
const EquipmentState = () =>
    import ('../components/EquipmentState')
const HomeIndex = () =>
    import ('../components/HomeIndex')
const UserHome = () =>
    import ('../components/UserCenter/UserHome')
const UserDasbord = () =>
    import ('../components/UserCenter/UserDasbord')
const ChangeMsg = () =>
    import ('../components/UserCenter/ChangeMsg')
const Recharge = () =>
    import ('../components/UserCenter/Recharge')
const OneStoreChart = () =>
    import ('../components/OneStoreChart')
const MachineState = () =>
    import ('../components/MachineState')
const FrontTerminal = () =>
    import ('../components/FrontTerminal')
const VideoCamera = () =>
    import ('../components/VideoCamera')
const HardwareMsg = () =>
    import ('../components/HardwareMsg')
Vue.use(VueRouter)

export default new VueRouter({
    routes: [{
        path: '/',
        redirect: {
            name: 'LoginPage'
        }
    }, {
        path: '/LoginPage',
        name: 'LoginPage',
        component: LoginPage
    }, {
        path: '/FindPass',
        name: 'FindPass',
        component: FindPass
    }, {
        path: '/UserHome',
        name: 'UserHome',
        component: UserHome,
        redirect: {
            name: 'UserDasbord'
        },
        children: [{
            path: '/UserDasbord',
            name: 'UserDasbord',
            component: UserDasbord,
            meta: {
                label: '个人中心',
            }

        }, {
            path: '/ChangeMsg',
            name: 'ChangeMsg',
            component: ChangeMsg,
            meta: {
                label: '基本资料',
            }

        }, {
            path: '/Recharge',
            name: 'Recharge',
            component: Recharge,
            meta: {
                label: '安全设置',
            }

        }]
    }, {
        path: '/Home',
        name: 'Home',
        component: Home,
        redirect: {
            name: 'HomeIndex'
        },
        children: [{
            path: '/BusinessIndex',
            name: 'BusinessIndex',
            component: BusinessIndex,

            redirect: {
                name: 'MultiStore'
            },
            children: [{
                path: '/MultiStore',
                name: 'MultiStore',
                component: MultiStore,
                meta: {
                    label: '多店铺分析',
                },

            }, {
                path: '/OneStore',
                name: 'OneStore',
                component: OneStore,
                meta: {
                    label: '单店铺分析',
                },

            }, {
                path: '/OneStoreChart',
                name: 'OneStoreChart',
                component: OneStoreChart,
            }]
        }, {
            path: '/HomeIndex',
            name: 'HomeIndex',
            component: HomeIndex,
            meta: {
                label: '首页',
            },
        }, {
            path: '/MachineState',
            name: 'MachineState',
            component: MachineState,
            redirect: {
                name: 'VideoCamera'
            },
            children: [{
                path: '/VideoCamera',
                name: 'VideoCamera',
                component: VideoCamera,
                meta: {
                    label: '摄像机监控',
                },

            }, {
                path: '/FrontTerminal',
                name: 'FrontTerminal',
                component: FrontTerminal,
                meta: {
                    label: '前端机监控',
                },

            }, {
                path: '/HardwareMsg',
                name: 'HardwareMsg',
                component: HardwareMsg,
                meta: {
                    label: '摄像机硬件信息',
                },

            }]
        }]
    }]
})