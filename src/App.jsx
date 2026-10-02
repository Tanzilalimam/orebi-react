import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './components/layouts/Rootlayout';
import HomeIndex from './pages/home/HomeIndex';
import ProductIndex from './pages/products/ProductsIndex';
import AboutIndex from './pages/about/AboutIndex';
import ContactIndex from './pages/contacts/ContactIndex';
import ErrorPage from './components/common/ErrorPage';
import LoginIndex from './pages/login/LoginIndex';

const routerValue = createBrowserRouter(
createRoutesFromElements(
  <>
    <Route element={<Rootlayout/>}>
      <Route path='/login' element={<LoginIndex/>}></Route>
      <Route path='/' element={<HomeIndex/>}></Route>
      <Route path='/about' element={<AboutIndex/>}></Route>
      <Route path='/shop' element={<ProductIndex/>}></Route>
      <Route path='/contact' element={<ContactIndex/>}></Route>
    </Route>
      <Route path='*' element={<ErrorPage/>}></Route>
  </>
)
);

function App() {

  return (
    <>
    <RouterProvider router={routerValue} />
    </>
  )
}

export default App
