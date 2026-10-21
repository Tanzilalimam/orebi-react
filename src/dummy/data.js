import BannerImg from '../assets/img/banner.png'
import Product from '../assets/img/goggle.png'
import Cupclock from '../assets/img/cupclock.png'
import Smartwatch from '../assets/img/smartwatch.png'
import Basket from '../assets/img/basket.png'
import Plushy from '../assets/img/plushy.png'

let dummyData = {
menuData: [
    {
        id: 1,
        label: 'home',
        url: '/'
    },
    {
        id: 2,
        label: 'about',
        url: '/about'
    },
    {
        id: 3,
        label: 'shop',
        url: '/shop'
    },
    {
        id: 4,
        label: 'contacts',
        url: '/contact'
    },
    {
        id: 5,
        label: 'journals',
        url: '/journal'
    },
],
cateData: {
    category: [
        {
            id: 1,
            label: 'category-1',
            url: ''
        },
        {
            id: 2,
            label: 'category-2',
            url: ''
        },
        {
            id: 3,
            label: 'category-3',
            url: ''
        },
        {
            id: 4,
            label: 'category-4',
            url: ''
        },
        {
            id: 5,
            label: 'category-5',
            url: ''
        },
  ],

  profile: [
    {
        id: 1,
        label: 'profile',
        url: ''
    },
    {
        id: 2,
        label: 'dashboard',
        url: '/dashboard'
    },
  ]

},

footerData: {
    category: [
    {
        id: 1,
        label: 'category-1',
        url: '/category'
    },
    {
        id: 2,
        label: 'category-2',
        url: '/category'
    },
    {
        id: 3,
        label: 'category-3',
        url: '/category'
    },
    {
        id: 4,
        label: 'category-4',
        url: '/category'
    },
    {
        id: 5,
       label: 'category-5',
        url: '/category'
    },
],

help: [
    {
        id: 1,
        label: 'privacy policy',
        url: '/privacy'
    },
    {
        id: 2,
        label: 'terms & conditions',
        url: '/terms'
    },
    {
        id: 1,
        label: 'special e-shop',
        url: '/eshop'
    },
    {
        id: 1,
        label: 'shipping',
        url: '/shipping'
    },
    {
        id: 1,
        label: 'secure payments',
        url: '/payment'
    },
],
},

dashData: [
    {
        id: 1,
        label: 'dashboard',
        url: '/dashboard'
    },
    {
        id: 2,
        label: 'others',
        url: '/others'
    },
    {
        id: 3,
        label: 'downloads',
        url: '/downloads'
    },
    {
        id: 4,
        label: 'addresses',
        url: '/address'
    },
    {
        id: 5,
        label: 'account details',
        url: '/accntdtls'
    },
    {
        id: 6,
        label: 'logout',
        url: '/logout'
    },
],

 banner: [
    {
        id: 1,
        h1: 'final offer',
        span1: 'up to',
        span2: '50%',
        txt: 'sale for all funtime items',
        title: 'banner 3',
        img: BannerImg
    },
    {
        id: 2,
        h1: 'final offer',
        span1: 'up to',
        span2: '50%',
        txt: 'sale for all funtime items',
        title: 'banner 3',
        img: BannerImg
    },
    {
        id: 3,
        h1: 'final offer',
        span1: 'up to',
        span2: '50%',
        txt: 'sale for all funtime items',
        title: 'banner 3',
        img: BannerImg
    },
 ],

 cartProducts: [
    {
        id: 1,
        img: Product,
        label: 'goggle',
        price: '$44.00',
        quantity: 1,
        total: '$44.00'
    },
],

 newArrivals: [
    {
        id: 1,
        img: Cupclock,
        label: 'basic crew neck tee',
        color: 'black',
        url: '/product'
    },
    {
        id: 2,
        img: Smartwatch,
        label: 'basic crew neck tee',
        color: 'black',
        url: '/product'
    },
    {
        id: 3,
        img: Basket,
        label: 'basic crew neck tee',
        color: 'black',
        url: '/product'
    },
    {
        id: 4,
        img: Plushy,
        label: 'basic crew neck tee',
        color: 'black',
        url: '/product'
    },
 ]

}

export default dummyData