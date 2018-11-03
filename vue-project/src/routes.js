import VueRouter from 'vue-router'
import Home from './pages/Home'
import Cars from './pages/Cars'
import Car from './pages/Car'
import ErrorCmp from './pages/Error'
import CarFull from './pages/CarFull'

export default new VueRouter({
    routes: [
        {
            path: '', //localhost:8080
            component: Home
        },
        {
            path: '/cars',
            component: Cars,
            name: 'cars'
        },
        {
            path: '/car/:id',
            component: Car,
            children: [
                {
                    path: 'full', //localhost:8080/car/10/full
                    component: CarFull,
                    name: 'carFull',
                    beforeEnter(to, from, next){
                        console.log('beforeEnter');
                        next();
                    }
                }
            ]
        },
        {
            path: '/none',
            redirect: {
                name: 'cars'
            }
        },
        //404
        {
            path: '*',
            component: ErrorCmp
        }
    ],
    mode: 'history', //убирает #
    //to, from - роуты куда и откуда
    scrollBehavior(to, from, savedPosition){
        if(savedPosition){
            return savedPosition
        }

        if(to.hash){
            return {
                selector: to.hash
            }
        }

        return {
            x: 0,
            y: 0
        }
    }
})