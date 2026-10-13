import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Rootlayout from './components/layouts/Rootlayout';
import HomeIndex from './pages/home/HomeIndex';
import ProductIndex from './pages/products/ProductsIndex';
import AboutIndex from './pages/about/AboutIndex';
import ContactIndex from './pages/contacts/ContactIndex';
import ErrorPage from './components/common/ErrorPage';
import LoginIndex from './pages/login/LoginIndex';
import RegistrationIndex from './pages/registration/RegistrationIndex';
import DashRootlayout from './components/layouts/dashboard/DashRootlayout';
import DashIndex from './pages/dashboard/DashIndex';
import OthersIndex from './pages/dashboard/OthersIndex';
import DownloadIndex from './pages/dashboard/DownloadIndex';
import AddressesIndex from './pages/dashboard/AddressesIndex';
import AccountDtlsIndex from './pages/dashboard/AccntDtlsIndex';
import LogoutIndex from './pages/dashboard/LogoutIndex';

const routerValue = createBrowserRouter(
createRoutesFromElements(
  <>
    <Route element={<Rootlayout/>}>
      <Route path='/login' element={<LoginIndex/>}></Route>
      <Route path='/registration' element={<RegistrationIndex/>}></Route>
      <Route path='/' element={<HomeIndex/>}></Route>
      <Route path='/about' element={<AboutIndex/>}></Route>
      <Route path='/shop' element={<ProductIndex/>}></Route>
      <Route path='/contact' element={<ContactIndex/>}></Route>
    </Route>
      <Route path='*' element={<ErrorPage/>}></Route>
      <Route element={<DashRootlayout/>}>
        <Route path='/dashboard' element={<DashIndex/>}></Route>
        <Route path='/downloads' element={<DownloadIndex/>}></Route>
        <Route path='/others' element={<OthersIndex/>}></Route>
        <Route path='/address' element={<AddressesIndex/>}></Route>
        <Route path='/accntdtls' element={<AccountDtlsIndex/>}></Route>
        <Route path='/logout' element={<LogoutIndex/>}></Route>
      </Route>
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
