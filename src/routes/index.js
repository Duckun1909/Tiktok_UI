import Home from '~/page/Home';
import Following from '~/page/Following';
import Profile from '~/page/Profile';
import Upload from '~/page/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';


// Public Routes
const publicRoutes = [
    {
        path: '/',
        component: <Home />
    },
    {
        path: '/following',
        component: <Following />
    },
    {
        path: '/profile',
        component: <Profile />
    },
    {
        path: '/upload',
        component: <Upload />,
        layout: HeaderOnly
    },

]

const privateRoutes = [

]

export {publicRoutes, privateRoutes}